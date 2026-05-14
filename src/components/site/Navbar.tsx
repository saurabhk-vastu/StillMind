import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/sleep", label: "Sleep" },
  { to: "/stress", label: "Stress & Anxiety" },
  { to: "/mindfulness", label: "Mindfulness" },
];

export function Navbar({ accent = "var(--deep-green)" }: { accent?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled
          ? "shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
          : ""
      }`}
      style={{
        height: scrolled ? 72 : 84,
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div className="container-wellness h-full flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="text-2xl font-bold tracking-tight"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Stillwave
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const active = location.pathname === l.to;

            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-[15.5px] font-medium transition-colors duration-300 hover:opacity-80"
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
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hidden sm:inline text-[14.5px] font-semibold text-[#4B4B4B] hover:text-[var(--deep-green)] transition-colors"
              >
                Dashboard
              </Link>

              <button
                onClick={() => signOut(auth)}
                className="btn-cta btn-cta-glow"
                style={{ padding: "12px 26px", fontSize: 15 }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="hidden sm:inline text-[14.5px] font-semibold text-[#4B4B4B] hover:text-[var(--deep-green)] transition-colors"
              >
                Sign in
              </Link>

              <Link
                to="/onboarding"
                className="btn-cta btn-cta-glow"
                style={{ padding: "12px 26px", fontSize: 15 }}
              >
                Try Free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}