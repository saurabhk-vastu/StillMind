import { Link } from "@tanstack/react-router";

export function DashboardTopbar() {

  return (
    <div className="relative z-20 w-full h-[120px]  backdrop-blur-md px-10 flex items-center justify-end">

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-6">

        {/* USE MOBILE APP */}
        <Link
          to="/mobile-app"
          className="
            h-[58px]
            px-10
            rounded-full
            bg-white/10
            backdrop-blur-xl
            text-white
            text-[18px]
            font-[500]
            flex
            items-center
            justify-center
            hover:bg-white/15
            transition-all
            duration-300
          "
        >
          Use Mobile App
        </Link>

        {/* TRY STILLWAVE FREE */}
        <Link
          to="/pricing"
          className="
            h-[58px]
            px-10
            rounded-full
            bg-white
            text-[#123B72]
            text-[18px]
            font-[600]
            flex
            items-center
            justify-center
            hover:scale-[1.02]
            transition-all
            duration-300
          "
        >
          Try Stillwave For Free
        </Link>

      </div>
    </div>
  );
}