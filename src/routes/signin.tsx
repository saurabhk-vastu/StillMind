import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Welcome back — Stillwave" }] }),
  component: SignIn,
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-5 py-10 bg-[var(--background)]">
      {/* Soft glow background */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full blur-[130px] opacity-50 animate-[float_14s_ease-in-out_infinite]" style={{ background: "radial-gradient(circle, #7FA38D, transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full blur-[130px] opacity-40 animate-[float_18s_ease-in-out_infinite]" style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative w-full max-w-[460px] animate-[fade-in_0.7s_ease-out]">
        <div className="text-center mb-7">
          <Link to="/" className="text-[22px] font-bold inline-block tracking-tight" style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Stillwave
          </Link>
        </div>
        <div className="glass-card rounded-[28px] p-9 md:p-10">
          <h1 className="text-[26px] md:text-[30px] font-semibold leading-[1.2] tracking-tight" style={{ color: "#2C2C2C" }}>Welcome back.</h1>
          <p className="mt-2 text-[15px] text-[#5B5B5B]">Continue your wellness journey.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[13.5px] font-medium text-[#6B6B6B] mb-1.5 block">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@calm.com" className="w-full h-[54px] rounded-[16px] border-[1.5px] border-[#E2E2DD] bg-white/80 px-5 text-[16px] text-[#2C2C2C] placeholder:text-[#A8A8A2] focus:outline-none focus:border-[#7FA38D] focus:bg-white focus:ring-4 focus:ring-[rgba(127,163,141,0.12)] transition-all duration-300" />
            </div>
            <div>
              <label className="text-[13.5px] font-medium text-[#6B6B6B] mb-1.5 block">Password</label>
              <input value={pw} onChange={(e) => setPw(e.target.value)} type="password" placeholder="••••••••" className="w-full h-[54px] rounded-[16px] border-[1.5px] border-[#E2E2DD] bg-white/80 px-5 text-[16px] text-[#2C2C2C] placeholder:text-[#A8A8A2] focus:outline-none focus:border-[#7FA38D] focus:bg-white focus:ring-4 focus:ring-[rgba(127,163,141,0.12)] transition-all duration-300" />
            </div>
            <button type="submit" className="btn-cta btn-cta-glow w-full !h-[54px] !py-0 !text-[16px] mt-2">Sign in</button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D7D7D2] to-transparent" />
            <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#9A9A94]">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D7D7D2] to-transparent" />
          </div>

          <button className="w-full h-[54px] rounded-[16px] border-[1.5px] border-[#E2E2DD] bg-white/70 hover:bg-white flex items-center justify-center gap-3 text-[15.5px] font-semibold text-[#2C2C2C] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <GoogleIcon /> Continue with Google
          </button>

          <div className="mt-7 flex items-center justify-between text-[14px]">
            <Link to="/" className="text-[#2F7D57] hover:underline underline-offset-4">Forgot password?</Link>
            <span className="text-[#6B7280]">New here? <Link to="/onboarding" className="text-[#2F7D57] font-semibold hover:underline underline-offset-4">Sign up</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.5 26.7 36 24 36c-5.3 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.9 35.5 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
  );
}
