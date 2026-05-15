import { createFileRoute, Link } from "@tanstack/react-router";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import {
  Flame,
  Waves,
  Clock3,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/dashboard/my-stats")({
  component: DashboardMyStatsPage,
});

function DashboardMyStatsPage() {

  const stats = [
    {
      icon: Flame,
      title: "LONGEST STREAK",
      value: "0",
    },
    {
      icon: Waves,
      title: "TOTAL SESSIONS",
      value: "0",
    },
    {
      icon: Clock3,
      title: "MINDFUL MINUTES",
      value: "0",
    },
  ];

  return (
    <div className="pt-5 pb-5 px-1 md:px-2">

      {/* TOP NAVIGATION */}
      <div className="flex flex-wrap items-center gap-3">

        <DashboardTab
          active
          to="/dashboard/my-stats"
          label="My Stats"
        />

        <DashboardTab
          to="/dashboard/subscription"
          label="Manage Subscription"
        />

        <DashboardTab
          to="/dashboard/account-settings"
          label="Account Details"
        />

        <DashboardTab
          to="/dashboard/change-password"
          label="Change Password"
        />

        <button
  onClick={async () => {
    await signOut(auth);
    window.location.href = "/signin";
  }}
  className="
    h-[42px]
    px-6
    rounded-full
    flex
    items-center
    justify-center
    text-[15px]
    font-[400]
    transition-all
    duration-300
    border
    backdrop-blur-md
    bg-[#16386D]/90
    text-white
    border-[#254D89]
    hover:bg-[#1B437E]
  "
>
  Log Out
</button>

      </div>

      {/* MAIN CARD */}
      <div
        className="
        relative
        overflow-hidden
        mt-6
        rounded-[26px]
        border
        border-white/10
        bg-[#0D2453]/55
        backdrop-blur-2xl
        shadow-[0_10px_60px_rgba(0,0,0,0.35)]
        min-h-[300px]
        flex
        flex-col
        items-center
        justify-center
        px-5
        py-8
      "
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16386D]/10 via-[#10295B]/30 to-[#0A1E45]/70" />

        {/* GLOW */}
        <div className="absolute top-[-90px] h-[180px] w-[180px] rounded-full bg-[#FF8F7A]/10 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center w-full">

          {/* BADGE */}
          <div className="relative flex flex-col items-center">

            <div className="absolute inset-0 rounded-full bg-[#FF8F7A]/10 blur-2xl scale-125" />

            <div
              className="
              relative
              h-[88px]
              w-[88px]
              rounded-full
              border-[3px]
              border-[#FF8F7A]
              flex
              items-center
              justify-center
              bg-white/[0.03]
              backdrop-blur-md
            "
            >

              <div className="absolute inset-[7px] rounded-full border border-[#FFB5A8]/30" />

              <h1 className="text-[38px] leading-none font-[300] text-white">
                0
              </h1>

            </div>

            {/* LABEL */}
            <div
              className="
              relative
              mt-[-10px]
              flex
              items-center
              gap-2
              border
              border-[#FF8F7A]
              bg-[#17305E]/90
              px-4
              py-1.5
              rounded-full
            "
            >

              <Trophy
                size={13}
                className="text-[#FFB5A8]"
              />

              <p className="text-[#FFB5A8] text-[13px] tracking-wide font-[400]">
                Mindful Days
              </p>

            </div>

          </div>

          {/* STATS */}
          <div
            className="
            mt-9
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            w-full
            max-w-4xl
          "
          >

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-[20px]
                  border
                  border-white/5
                  bg-white/[0.02]
                  min-h-[135px]
                  py-4
                  px-4
                  transition-all
                  duration-300
                  hover:bg-white/[0.04]
                "
                >

                  {/* ICON */}
                  <div
                    className="
                    flex
                    h-[46px]
                    w-[46px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    mb-3
                  "
                  >

                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-white/90"
                    />

                  </div>

                  {/* TITLE */}
                  <p
                    className="
                    text-white
                    text-center
                    text-[12px]
                    tracking-[1px]
                    font-[300]
                  "
                  >
                    {item.title}
                  </p>

                  {/* VALUE */}
                  <span
                    className="
                    text-white
                    text-[24px]
                    leading-none
                    mt-2
                    font-[300]
                  "
                  >
                    {item.value}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}


interface DashboardTabProps {
  to: string;
  label: string;
  active?: boolean;
}

function DashboardTab({
  to,
  label,
  active,
}: DashboardTabProps) {

  return (
    <Link
      to={to}
      className={`
        h-[42px]
        px-6
        rounded-full
        flex
        items-center
        justify-center
        text-[15px]
        font-[400]
        transition-all
        duration-300
        border
        backdrop-blur-md
        ${
          active
            ? "bg-white text-[#16386D] border-white shadow-lg"
            : "bg-[#16386D]/90 text-white border-[#254D89] hover:bg-[#1B437E]"
        }
      `}
    >
      {label}
    </Link>
  );
}