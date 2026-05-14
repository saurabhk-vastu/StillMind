import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/sleep", label: "Sleep" },
  { to: "/stress", label: "Stress & Anxiety" },
  { to: "/mindfulness", label: "Mindfulness" },
  { to: "/screening", label: "Screening" },
];

export function Navbar({ accent = "var(--deep-green)" }: { accent?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav border-b border-[var(--divider)]" : "bg-transparent"
      }`}
      style={{ height: scrolled ? 72 : 84 }}
    >
      <div className="container-wellness h-full flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Stillwave
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-[15.5px] font-semibold transition-colors duration-300 hover:opacity-80"
                style={{ color: active ? accent : "#2C2C2C" }}
              >
                {l.label}
                <span
                  className="absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    width: active ? "100%" : "0%",
                    background: accent,
                    opacity: active ? 1 : 0,
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/signin" className="hidden sm:inline text-[15px] font-semibold text-[#4B4B4B] hover:text-[var(--deep-green)] transition-colors">
            Sign in
          </Link>
          <Link to="/onboarding" className="btn-cta" style={{ padding: "14px 30px", fontSize: 16 }}>
            Try Free
          </Link>
        </div>
      </div>
    </header>
  );
}
