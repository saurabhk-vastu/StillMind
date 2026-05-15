import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { ImmersiveCTA } from "@/components/site/ImmersiveCTA";
import hero from "@/assets/hero-home.jpg";
import sleep from "@/assets/card-sleep.jpg";
import stress from "@/assets/card-stress.jpg";
import mind from "@/assets/card-mindfulness.jpg";
import focus from "@/assets/card-focus.jpg";
import emo from "@/assets/card-emotional.jpg";
import med from "@/assets/card-meditation.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stillwave — Calm your mind. Sleep deeper. Live mindfully." },
      { name: "description", content: "A premium wellness app for sleep, stress relief, mindfulness and emotional balance." },
      { property: "og:title", content: "Stillwave — Modern emotional wellness" },
      { property: "og:description", content: "Sleep deeper. Stress less. Live mindfully." },
    ],
  }),
  component: Home,
});

const sections = [
  { tag: "Better Sleep", title: "Drift into deeper, softer sleep.", body: "Sleep stories, gentle soundscapes and bedtime meditations to help you fall asleep — and stay there.", img: sleep, to: "/sleep" },
  { tag: "Stress Reduction", title: "Find calm in the middle of your day.", body: "Short, soothing sessions for the moments your shoulders forget to drop.", img: stress, to: "/stress" },
  { tag: "Daily Mindfulness", title: "Small rituals. Big inner shifts.", body: "Build a quiet, kind practice that actually fits inside your real life.", img: mind, to: "/mindfulness" },
  { tag: "Guided Meditation", title: "A teacher in your pocket.", body: "Hundreds of guided sessions led by world-class teachers — for every mood and moment.", img: med, to: "/mindfulness" },
  { tag: "Focus Improvement", title: "Clear the noise. Find your flow.", body: "Music, breathwork and grounding exercises designed to bring you back to centre.", img: focus, to: "/mindfulness" },
  { tag: "Emotional Wellness", title: "Soft tools for tender days.", body: "Companions for grief, change, anxiety, and everything human in between.", img: emo, to: "/stress" },
];

function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      {/* HERO */}
      <section className="pt-[120px] pb-24">
        <div className="container-wellness grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--sage)] mb-6">A gentler kind of wellness</p>
            <h1 className="heading-hero">Build a calmer mind, one breath at a time.</h1>
            <p className="text-paragraph mt-8 max-w-xl">
              Stillwave helps you sleep deeper, soften anxiety, and bring more presence into ordinary days — with sessions that feel like the slow exhale your nervous system has been waiting for.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 items-center">
              <Link to="/onboarding" className="btn-cta">Start your free week</Link>
              <Link to="/sleep" className="text-[16px] font-semibold text-[var(--deep-green)] hover:underline underline-offset-4">Explore sleep →</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#7FA38D]/30 to-[#3B82F6]/20 blur-3xl" />
              <img src={hero} alt="Person meditating peacefully in a misty forest at sunrise" width={1280} height={1280} className="relative rounded-[40px] w-full h-[560px] object-cover shadow-[0_30px_80px_rgba(31,79,62,0.18)]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 bg-[var(--background-alt)]">
        <div className="container-wellness">
          <Reveal>
            <p className="text-center text-[15px] uppercase tracking-[0.2em] text-[#6B7280]">Trusted by 100M+ minds in 190 countries</p>
          </Reveal>
        </div>
      </section>

      {/* FEATURE SECTIONS */}
      <section className="py-32">
        <div className="container-wellness">
          <Reveal>
            <div className="max-w-3xl mb-24">
              <h2 className="heading-section">We're here to help you feel a little better, today.</h2>
              <p className="text-paragraph mt-6">Six gentle pathways into your wellbeing. Take the one that calls you.</p>
            </div>
          </Reveal>
          <div className="space-y-32">
            {sections.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={s.tag} delay={50}>
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>:first-child]:order-2" : ""}`}>
                    <div className="card-wellness !p-3 overflow-hidden">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[420px] object-cover rounded-[28px] transition-transform duration-700 hover:scale-[1.03]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--sage)] mb-5">{s.tag}</p>
                      <h3 className="heading-section">{s.title}</h3>
                      <p className="text-paragraph mt-6 max-w-lg">{s.body}</p>
                      <Link to={s.to} className="inline-block mt-8 text-[17px] font-semibold text-[var(--deep-green)] hover:underline underline-offset-4">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[var(--background-alt)]">
        <div className="container-wellness">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-section">Over 2 million 5-star moments.</h2>
              <p className="text-paragraph mt-6">Real reflections from people who let themselves slow down.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Testimonials items={[
              { quote: "When I cannot fall asleep, I open Stillwave and I'm out within five minutes. It's been life-changing.", name: "Brandy", location: "Houston" },
              { quote: "I have a very busy brain. A daily practice here is wonderfully healing for me.", name: "John", location: "Chicago" },
              { quote: "Stillwave has changed my life in immeasurable ways. I feel more resilient and connected to myself.", name: "Allison", location: "San Jose" },
              { quote: "Finally an app that doesn't shout at me to optimise. It just lets me be.", name: "Jasmine", location: "London" },
            ]} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container-wellness">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-section">Quiet answers to common questions.</h2>
            </div>
          </Reveal>
          <FAQ items={[
            { q: "What is Stillwave?", a: "Stillwave is a modern wellness companion offering sleep stories, guided meditation, breathwork and gentle programs for stress, anxiety and emotional wellbeing." },
            { q: "How do I cancel?", a: "You can cancel anytime from your account settings. We'll never make it harder than a few taps." },
            { q: "Is there a free trial?", a: "Yes — a 14-day free trial of Stillwave Premium with full access to every session." },
            { q: "Does it really work?", a: "Studies on mindfulness consistently show reductions in stress and improvements in sleep quality. We've designed Stillwave around what the research suggests, then made it feel beautiful." },
            { q: "Can I share my account?", a: "Premium families can share Stillwave with up to six loved ones — because calm is better together." },
          ]} />
        </div>
      </section>

      <ImmersiveCTA
        title="Begin your journey to a calmer mind tonight."
        subtitle="Two weeks free. No noise. Just space to breathe."
      />
      <Footer />
    </div>
  );
}
