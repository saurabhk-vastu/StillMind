import {
  Home,
  Circle,
  Moon,
  Music2,
  Coffee,
  Lightbulb,
  Flag,
  Accessibility,
} from "lucide-react";

const items = [
  {
    label: "Home",
    icon: Home,
    gradient: "from-[#7EF7C7] to-[#7AC7FF]",
  },

  {
    label: "Meditate",
    icon: Circle,
    gradient: "from-[#7EE7FF] to-[#7C8BFF]",
  },

  {
    label: "Sleep",
    icon: Moon,
    gradient: "from-[#7AA8FF] to-[#D57CFF]",
  },

  {
    label: "Music",
    icon: Music2,
    gradient: "from-[#B88CFF] to-[#FF7AD9]",
  },

  {
    label: "For Work",
    icon: Coffee,
    gradient: "from-[#C58CFF] to-[#FF7AB6]",
  },

  {
    label: "Wisdom",
    icon: Lightbulb,
    gradient: "from-[#FF8D8D] to-[#FFB77A]",
  },

  {
    label: "Calm Kids",
    icon: Flag,
    gradient: "from-[#FFC37A] to-[#FFE27A]",
  },

  {
    label: "Movement",
    icon: Accessibility,
    gradient: "from-[#FFD05C] to-[#FF9F43]",
  },
];

export function DashboardSidebar() {
  return (
    <aside className="w-[300px] min-h-screen backdrop-blur-xl bg-gradient-to-b from-[#133B73] via-[#18356B] to-[#23245E] px-8 py-10 hidden lg:flex flex-col">
      <div className="flex flex-col gap-6 mt-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex items-center gap-4 group transition-all duration-300"
            >
              <div
                className={`h-[50px] w-[50px] rounded-full bg-gradient-to-br ${item.gradient} p-[3px]`}
              >
                <div className="h-full w-full rounded-full bg-[#182B61] flex items-center justify-center">
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                </div>
              </div>

              <span className="text-[20px] font-[400] tracking-[-0.02em] text-white/95">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}