import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <div
      className="min-h-screen text-white flex items-center justify-center px-6"
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(9, 38, 82, 0.75) 0%,
            rgba(15, 36, 92, 0.88) 35%,
            rgba(28, 32, 86, 0.96) 100%
          ),
          url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[900px] w-full rounded-[40px] bg-[#10295B]/40 backdrop-blur-2xl border border-white/10 p-16 text-center">

        <h1 className="text-[72px] font-[300] tracking-[-0.06em]">
          Stillwave Premium
        </h1>

        <p className="mt-8 text-[26px] text-white/80 leading-relaxed">
          Unlock sleep stories, calming soundscapes,
          guided meditation journeys, focus music,
          breathing sessions and premium wellness experiences.
        </p>

        <div className="mt-14">

          <h2 className="text-[90px] font-[300]">
            ₹299
            <span className="text-[28px] text-white/60 ml-2">
              / month
            </span>
          </h2>

        </div>

        <button className="mt-14 h-[78px] px-16 rounded-full bg-white text-[#123B72] text-[28px] font-[600] hover:scale-[1.02] transition-all duration-300">
          Continue to Payment
        </button>

      </div>
    </div>
  );
}