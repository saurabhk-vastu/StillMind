import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/subscription")({
  component: DashboardSubscriptionPage,
});

function DashboardSubscriptionPage() {

  return (

    <div className="pt-5 pb-5 px-1 md:px-2">

      {/* TOP TABS */}
      <div className="flex items-center gap-3 flex-wrap">

        <DashboardTab
          to="/dashboard/my-stats"
          label="My Stats"
        />

        <DashboardTab
          active
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

        <DashboardTab
          to="/dashboard/language"
          label="Language"
        />

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
        px-8
        py-10
      "
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16386D]/10 via-[#10295B]/30 to-[#0A1E45]/70" />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* TITLE */}
          <h1
            className="
            text-[30px]
            md:text-[38px]
            leading-none
            font-[300]
            text-white
          "
          >
            You are not subscribed
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
            text-[15px]
            md:text-[17px]
            text-white/85
            mt-6
            leading-[1.8]
            max-w-[900px]
            font-[300]
          "
          >
            You have a free Stillwave account.
            Upgrade to Stillwave Premium to unlock guided sleep,
            mindfulness journeys, calming music, focus sessions
            and our complete wellness library.
          </p>

          {/* BUTTON */}
          <button
            className="
            mt-10
            h-[52px]
            px-10
            rounded-full
            bg-white/20
            backdrop-blur-xl
            text-white
            text-[17px]
            font-[400]
            hover:bg-white/30
            transition-all
          "
          >
            Get Stillwave Premium
          </button>

        </div>

      </div>

      {/* FOOTER OUTSIDE CARD */}
      <div
        className="
        mt-10
        flex
        items-center
        justify-center
        gap-5
        text-white/80
        text-[15px]
      "
      >

        <button className="hover:text-white transition-colors">
          FAQ
        </button>

        <span>|</span>

        <button className="hover:text-white transition-colors">
          Support
        </button>

        <span>|</span>

        <button className="hover:text-white transition-colors">
          Terms
        </button>

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