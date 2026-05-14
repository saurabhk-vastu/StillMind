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
    return (
      <div className="min-h-screen bg-[var(--background)] flex flex-col">
        <TopBar progress={100} onBack={() => setDone(false)} />
        <div className="flex-1 flex items-center">
          <div className="max-w-[760px] w-full mx-auto px-6 py-20 text-center">
            <div className="w-32 h-32 mx-auto rounded-full mb-10 animate-[breathe_6s_ease-in-out_infinite]" style={{ background: "var(--gradient-primary)", boxShadow: "0 30px 80px rgba(59,130,246,0.3)" }} />
            <h1 className="text-[44px] md:text-[58px] font-bold leading-[1.15] tracking-tight" style={{ color: "#2C2C2C" }}>
              Your gentle path is ready.
            </h1>
            <p className="text-paragraph mt-6 max-w-xl mx-auto">
              Based on what you shared, we've shaped a personalised wellness journey — sleep stories, breathwork, and mindfulness sessions tuned to you.
            </p>
            <button onClick={() => navigate({ to: "/signin" })} className="btn-cta mt-12">Continue to your plan</button>
            <div className="mt-6">
              <button onClick={() => navigate({ to: "/" })} className="text-[#4B4B4B] text-sm hover:text-[var(--deep-green)] transition-colors">Maybe later</button>
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
      <div className="flex-1 flex items-center">
        <div className="max-w-[760px] w-full mx-auto px-6 py-16 animate-[fade-in_0.6s_ease-out]">
          <p className="text-[15px] font-medium text-[#6B7280]">Question {step + 1} of {total}</p>
          <h1 className="mt-6 text-[40px] md:text-[58px] font-bold leading-[1.15] tracking-tight" style={{ color: "#2C2C2C" }}>
            {s.q}
          </h1>
          <p className="text-paragraph mt-5 max-w-xl">{s.sub}</p>

          <div className="mt-12 space-y-4">
            {s.options.map((o, i) => {
              const active = selected === i;
              return (
                <button
                  key={o}
                  onClick={() => select(i)}
                  className="relative w-full text-left rounded-[18px] p-[1.5px] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: active ? "var(--gradient-select-border)" : "transparent",
                  }}
                >
                  <div
                    className="rounded-[16px] px-6 py-5 text-[19px] font-semibold transition-all duration-300"
                    style={{
                      background: active ? "linear-gradient(90deg, #2C7A5C 0%, #3B82F6 100%)" : "#fff",
                      color: active ? "#fff" : "#2C2C2C",
                      border: active ? "none" : "1.5px solid #D7D7D7",
                      boxShadow: active ? "0 10px 30px rgba(59,130,246,0.18)" : "none",
                    }}
                  >
                    {o}
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
