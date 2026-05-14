import { Link } from "@tanstack/react-router";
import forest from "@/assets/cta-forest.jpg";

export function ImmersiveCTA({
  title,
  subtitle,
  cta = "Begin your journey",
  to = "/onboarding",
  overlay = "linear-gradient(135deg, rgba(31,79,62,0.92), rgba(59,130,246,0.7))",
  bgImage,
}: {
  title: string;
  subtitle: string;
  cta?: string;
  to?: string;
  overlay?: string;
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={bgImage ?? forest}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover scale-[1.04] animate-[float_18s_ease-in-out_infinite]"
      />
      <div className="absolute inset-0" style={{ background: overlay, backgroundSize: "200% 200%", animation: "gradient-pan 18s ease-in-out infinite" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)" }} />
      <div className="relative container-wellness py-28 md:py-40 text-center text-white">
        <h2 className="heading-section max-w-3xl mx-auto" style={{ color: "#fff" }}>
          {title}
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-[17px] md:text-[19px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.9)" }}>
          {subtitle}
        </p>
        <Link to={to} className="btn-cta btn-cta-glow mt-12 inline-flex" style={{ boxShadow: "0 0 70px rgba(110,231,231,0.35), 0 14px 40px rgba(59,130,246,0.45)" }}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
