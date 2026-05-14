import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Begin your journey — Stillwave" }] }),
  component: Onboarding,
});

const steps = [
  { q: "What brings you here today?", sub: "There's no wrong answer. We'll shape your journey around it.",
    options: ["I want to sleep better", "I'm feeling stressed or anxious", "I want to build a mindfulness habit", "I'm just curious"] },
  { q: "How would you describe your sleep?", sub: "Be gentle and honest with yourself.",
    options: ["I sleep deeply most nights", "I take a while to fall asleep", "I wake up often", "I rarely feel rested"] },
  { q: "How stressed do you feel during the week?", sub: "We'll match the right tools to where you are now.",
    options: ["Pretty steady", "Some hard moments", "Often overwhelmed", "I'm running on empty"] },
  { q: "How would you like to feel every day?", sub: "Pick the one that calls to you most.",
    options: ["Calmer and quieter", "More present", "Lighter emotionally", "Rested and clear"] },
  { q: "How often would you like to practice?", sub: "Small consistent steps work beautifully.",
    options: ["A few minutes daily", "A few times a week", "Whenever I need it", "I'll figure it out"] },
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(steps.length).fill(null));
  const [done, setDone] = useState(false);

  const total = steps.length;
  const progress = done ? 100 : ((step + (answers[step] !== null ? 1 : 0)) / total) * 100;

  const select = (i: number) => {
    const next = [...answers]; next[step] = i; setAnswers(next);
  };
  const advance = () => {
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  };
  const back = () => { if (step > 0) setStep(step - 1); };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done) return;
      if (e.key === "Enter" && answers[step] !== null) { e.preventDefault(); advance(); }
      if (e.key === "Backspace" && (e.metaKey || e.altKey)) { e.preventDefault(); back(); }
      const n = parseInt(e.key, 10);
      if (!isNaN(n) && n >= 1 && n <= steps[step].options.length) select(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, answers, done]);

  if (done) {
    const recs = [
      { title: "Sleep Stories", sub: "Drift off to gentle voices and slow soundscapes.", grad: "linear-gradient(135deg, #1B2B34, #3B82F6)" },
      { title: "Guided Breathwork", sub: "Five-minute resets for stress and anxious moments.", grad: "linear-gradient(135deg, #2F7D6A, #4F7CFF)" },
      { title: "Daily Mindfulness", sub: "A calming pause woven into your everyday rhythm.", grad: "linear-gradient(135deg, #2F6B52, #7FA38D)" },
    ];
    return (
      <div className="min-h-screen bg-[var(--background)] flex flex-col">
        <TopBar progress={100} onBack={() => setDone(false)} />
        <div className="flex-1 flex items-center">
          <div className="max-w-[820px] w-full mx-auto px-6 py-16 text-center animate-step-in">
            <div className="w-28 h-28 mx-auto rounded-full mb-8 animate-[breathe_6s_ease-in-out_infinite]" style={{ background: "var(--gradient-primary)", boxShadow: "0 30px 80px rgba(59,130,246,0.3), 0 0 0 10px rgba(127,163,141,0.08)" }} />
            <h1 className="text-[30px] md:text-[40px] font-semibold leading-[1.18] tracking-tight" style={{ color: "#2C2C2C" }}>
              Your gentle path is ready.
            </h1>
            <p className="mt-5 max-w-lg mx-auto text-[16px] md:text-[17px] leading-[1.7] text-[#5B5B5B]">
              Based on what you shared, we've shaped a personalised wellness journey just for you.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
              {recs.map((r, i) => (
                <div key={r.title} className="card-hover rounded-[22px] p-6 text-white relative overflow-hidden" style={{ background: r.grad, animation: `step-in 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s both` }}>
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 60%)" }} />
                  <div className="relative">
                    <div className="text-[15px] font-semibold mb-1.5">{r.title}</div>
                    <p className="text-[13px] leading-[1.55] text-white/80">{r.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => navigate({ to: "/signin" })} className="btn-cta btn-cta-glow mt-12">Begin your journey</button>
            <div className="mt-5">
              <button onClick={() => navigate({ to: "/" })} className="text-[#6B7280] text-[14px] hover:text-[var(--deep-green)] transition-colors underline-offset-4 hover:underline">Maybe later</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const s = steps[step];
  const selected = answers[step];

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <TopBar progress={progress} onBack={back} canBack={step > 0} />
      <div className="flex-1 flex items-start md:items-center">
        <div key={step} className="max-w-[680px] w-full mx-auto px-6 py-10 md:py-12 animate-step-in">
          <p className="text-[12.5px] tracking-[0.18em] uppercase font-semibold text-[#7FA38D]">Question {step + 1} of {total}</p>
          <h1 className="mt-4 text-[28px] md:text-[36px] font-semibold leading-[1.2] tracking-tight" style={{ color: "#2C2C2C" }}>
            {s.q}
          </h1>
          <p className="mt-3 text-[15.5px] md:text-[16.5px] leading-[1.6] text-[#5B5B5B] max-w-lg">{s.sub}</p>

          <div className="mt-8 md:mt-10 space-y-3" role="radiogroup" aria-label={s.q}>
            {s.options.map((o, i) => {
              const active = selected === i;
              return (
                <button
                  key={o}
                  onClick={() => select(i)}
                  role="radio"
                  aria-checked={active}
                  className="group relative w-full text-left rounded-[18px] transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none hover:-translate-y-[2px]"
                  style={{
                    background: "#FFFFFF",
                    border: active ? "1.5px solid transparent" : "1.5px solid #E8E8E2",
                    backgroundImage: active
                      ? "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(120deg, #7FA38D 0%, #9CC4D9 60%, #B8A88A 100%)"
                      : undefined,
                    backgroundOrigin: active ? "border-box" : undefined,
                    backgroundClip: active ? "padding-box, border-box" : undefined,
                    boxShadow: active
                      ? "0 18px 44px -14px rgba(127,163,141,0.45), 0 4px 12px rgba(59,130,246,0.08), 0 0 0 6px rgba(127,163,141,0.06)"
                      : "0 1px 2px rgba(0,0,0,0.02)",
                    transform: active ? "translateY(-2px)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between rounded-[16px] px-6 py-5 text-[17px] md:text-[18px] font-medium" style={{ color: "#2C2C2C" }}>
                    <span>{o}</span>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        border: active ? "none" : "1.5px solid #D7D7D7",
                        background: active ? "linear-gradient(135deg, #2F7D57, #3B82F6)" : "transparent",
                      }}
                    >
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4">
            <button
              onClick={advance}
              disabled={selected === null}
              className="btn-cta disabled:!bg-[#D9D9D9] disabled:!shadow-none disabled:cursor-not-allowed disabled:hover:!translate-y-0 disabled:hover:!filter-none"
              style={selected === null ? { background: "#D9D9D9", boxShadow: "none" } : undefined}
            >
              {step === total - 1 ? "Finish" : "Continue"}
            </button>
            <button onClick={advance} className="text-[#4B4B4B] text-sm hover:text-[var(--deep-green)] transition-colors">
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopBar({ progress, onBack, canBack = true }: { progress: number; onBack: () => void; canBack?: boolean }) {
  return (
    <div className="px-6 pt-8 max-w-[760px] w-full mx-auto">
      <div className="flex items-center gap-4">
        <button onClick={onBack} disabled={!canBack} className="w-10 h-10 rounded-full flex items-center justify-center text-[#4B4B4B] hover:bg-[#ECECEC] transition disabled:opacity-30">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 h-[6px] rounded-full bg-[#DADADA] overflow-hidden">
          <div className="h-full transition-all duration-700 ease-out" style={{ width: `${progress}%`, background: "var(--gradient-progress)" }} />
        </div>
        <span className="text-sm font-semibold text-[#6B7280]">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
