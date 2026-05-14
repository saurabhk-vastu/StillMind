import { createFileRoute } from "@tanstack/react-router";

import { DashboardSidebar } from "../components/dashboard/DashboardSidebars";
import { DashboardTopbar } from "../components/dashboard/DashboardTopbar";
import { DashboardCard } from "../components/dashboard/DashboardCard";

import { featuredCards } from "../components/dashboard/mockData";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() { 
  return (
    <div className="min-h-screen bg-[#091B44] text-white flex overflow-hidden">
      <DashboardSidebar />
      // This is the main content area with a fixed background image and an overlay for better readability of the content on top.
      <main
      
        className="flex-1 overflow-y-auto relative"
        style={{
  backgroundImage: `
    linear-gradient(
      180deg,
      rgba(9, 38, 82, 0.78) 0%,
      rgba(15, 36, 92, 0.88) 35%,
      rgba(28, 32, 86, 0.96) 100%
    ),
    url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop")
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
}}
      >
          <div className="absolute inset-0 bg-[#1E5AA8]/20 pointer-events-none" />
        <DashboardTopbar />

        <div className="px-10 py-10">
          <div className="rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300 to-indigo-400" />

              <p className="text-[18px] text-white/90 font-medium">
                Relax your mind with premium calm experiences.
              </p>
            </div>

            <button className="text-white/70 text-2xl">
              →
            </button>
          </div>

          <div className="mt-14">
            <h1 className="text-5xl font-semibold tracking-tight">
              Good Evening, Saurabh
            </h1>

            <p className="mt-4 text-white/70 text-lg max-w-2xl">
              Continue your wellness journey with calming music,
              mindfulness and sleep experiences.
            </p>
          </div>

          <div className="mt-16 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">
              Featured
            </h2>

            <button className="text-white/80 text-lg hover:text-white transition-colors">
              See All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10 pb-20">
            {featuredCards.map((card) => (
              <DashboardCard
                key={card.title}
                {...card}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}