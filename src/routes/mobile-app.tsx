import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mobile-app")({
  component: MobileAppPage,
});

function MobileAppPage() {
  return (
    <div
      className="min-h-screen text-white flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(9, 38, 82, 0.65) 0%,
            rgba(15, 36, 92, 0.82) 35%,
            rgba(28, 32, 86, 0.92) 100%
          ),
          url("https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* GLOW */}
      <div className="absolute h-[600px] w-[600px] rounded-full bg-[#6CA6FF]/20 blur-[140px]" />

      <div className="relative z-10 max-w-[980px] text-center">

        <p className="text-[22px] tracking-[0.4em] uppercase text-white/60">
          Stillwave Mobile Experience
        </p>

        <h1 className="mt-8 text-[110px] leading-[0.95] tracking-[-0.08em] font-[300]">
          Coming Soon
        </h1>

        <p className="mt-10 text-[30px] text-white/75 leading-relaxed max-w-[900px] mx-auto">
          We’re crafting a deeply immersive mobile experience
          designed to help you sleep better, feel calmer,
          reduce anxiety and reconnect with mindfulness
          wherever you go.
        </p>

        <div className="mt-16 flex items-center justify-center gap-6">

          <button className="h-[74px] px-14 rounded-full bg-white text-[#123B72] text-[24px] font-[600] hover:scale-[1.02] transition-all duration-300">
            Notify Me
          </button>

          <Link
            to="/dashboard"
            className="h-[74px] px-14 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-white text-[24px] font-[500] flex items-center justify-center hover:bg-white/15 transition-all duration-300"
          >
            Back to Dashboard
          </Link>

        </div>
      </div>
    </div>
  );
}