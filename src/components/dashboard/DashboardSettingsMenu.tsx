import {
  BarChart3,
  CreditCard,
  Settings,
  Lock,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";

const menuItems = [
  {
    title: "My Stats",
    href: "/dashboard/my-stats",
    icon: BarChart3,
    gradient: "from-[#7EF7C7] to-[#7AC7FF]",
  },

  {
    title: "Manage Subscription",
    href: "/dashboard/subscription",
    icon: CreditCard,
    gradient: "from-[#7EE7FF] to-[#7C8BFF]",
  },

  {
    title: "Account Details",
    href: "/dashboard/account-settings",
    icon: Settings,
    gradient: "from-[#B88CFF] to-[#FF7AD9]",
  },

  {
    title: "Change Password",
    href: "/dashboard/change-password",
    icon: Lock,
    gradient: "from-[#D38CFF] to-[#FF7AD9]",
  },

  {
    title: "Log out",
    href: "/signin",
    icon: LogOut,
    gradient: "from-[#FF8BCF] to-[#FF77AA]",
  },
];

export function DashboardSettingsMenu({
  userEmail,
}: {
  userEmail: string;
}) {

  async function handleLogout() {
    try {

      await signOut(auth);

      window.location.href = "/signin";

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full max-w-[560px] mx-auto mt-20">

      {/* MENU ITEMS */}
      <div className="flex flex-col gap-3">

        {menuItems.map((item) => {

          const Icon = item.icon;

          // LOGOUT BUTTON
          if (item.title === "Log out") {

            return (

              <button
                key={item.title}
                onClick={handleLogout}
                className="
                  group
                  w-full
                  rounded-[40px]
                  bg-[#10295B]/45
                  backdrop-blur-2xl
                  border
                  border-white/10
                  px-3
                  py-2
                  flex
                  items-center
                  justify-between
                  hover:bg-[#17346D]/55
                  transition-all
                  duration-300
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`h-[40px] w-[40px] rounded-full bg-gradient-to-br ${item.gradient} p-[1px]`}
                  >
                    <div className="h-full w-full rounded-full bg-[#132D61] flex items-center justify-center">

                      <Icon
                        size={20}
                        strokeWidth={1}
                        className="text-white"
                      />

                    </div>
                  </div>

                  <span className="text-[18px] tracking-[-0.03em] font-[300] text-white text-left">
                    {item.title}
                  </span>

                </div>

                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-white/60 group-hover:text-white transition-colors"
                />

              </button>
            );
          }

          // NORMAL ROUTE ITEMS
          return (

            <Link
              to={item.href}
              key={item.title}
              className="
                group
                w-full
                rounded-[40px]
                bg-[#10295B]/45
                backdrop-blur-2xl
                border
                border-white/10
                px-3
                py-2
                flex
                items-center
                justify-between
                hover:bg-[#17346D]/55
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className={`h-[40px] w-[40px] rounded-full bg-gradient-to-br ${item.gradient} p-[1px]`}
                >
                  <div className="h-full w-full rounded-full bg-[#132D61] flex items-center justify-center">

                    <Icon
                      size={20}
                      strokeWidth={1}
                      className="text-white"
                    />

                  </div>
                </div>

                <span className="text-[18px] tracking-[-0.03em] font-[300] text-white text-left">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={20}
                strokeWidth={1.5}
                className="text-white/60 group-hover:text-white transition-colors"
              />

            </Link>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-10 text-center">

        <p className="text-white/70 text-lg">
          Logged in as: {userEmail}
        </p>

        <div className="mt-6 flex items-center justify-center gap-6 text-white/80 text-lg">

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
    </div>
  );
}