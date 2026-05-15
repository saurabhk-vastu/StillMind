import {
  createFileRoute,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import { DashboardSidebar } from "../components/dashboard/DashboardSidebars";
import { DashboardTopbar } from "../components/dashboard/DashboardTopbar";
import { DashboardAmbientSound } from "../components/dashboard/DashboardAmbientSound";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ location }) => {

    // ONLY redirect exact /dashboard
    if (location.pathname === "/dashboard") {

      throw redirect({
        to: "/dashboard/home",
      });

    }
  },

  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#091B44] text-white flex overflow-hidden">

      {/* AMBIENT SOUND */}
      <DashboardAmbientSound />

      {/* SIDEBAR */}
      <DashboardSidebar />

      {/* MAIN */}
      <main
        className="flex-1 overflow-y-auto relative"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(9, 38, 82, 0.45) 0%,
              rgba(15, 36, 92, 0.52) 35%,
              rgba(28, 32, 86, 0.68) 100%
            ),
            url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#081B44]/30 z-0" />

        {/* SOFT BLUR */}
        <div className="absolute inset-0 backdrop-blur-[1.5px] z-0" />

        {/* TOPBAR */}
        <DashboardTopbar />

        {/* PAGE CONTENT */}
        <div className="relative z-10 px-10 pb-20">
          <Outlet />
        </div>

      </main>
    </div>
  );
}