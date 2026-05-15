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

import { Link } from "@tanstack/react-router";

const items = [
{
label: "Home",
href: "/dashboard/home",
icon: Home,
gradient: "from-[#7EF7C7] to-[#7AC7FF]",
},

{
label: "Meditate",
href: "/dashboard/meditate",
icon: Circle,
gradient: "from-[#7EE7FF] to-[#7C8BFF]",
},

{
label: "Sleep",
href: "/dashboard/sleep",
icon: Moon,
gradient: "from-[#7AA8FF] to-[#D57CFF]",
},

{
label: "Music",
href: "/dashboard/music",
icon: Music2,
gradient: "from-[#B88CFF] to-[#FF7AD9]",
},

{
label: "For Work",
href: "/dashboard/work",
icon: Coffee,
gradient: "from-[#C58CFF] to-[#FF7AB6]",
},

{
label: "Wisdom",
href: "/dashboard/wisdom",
icon: Lightbulb,
gradient: "from-[#FF8D8D] to-[#FFB77A]",
},

{
label: "Calm Kids",
href: "/dashboard/kids",
icon: Flag,
gradient: "from-[#FFC37A] to-[#FFE27A]",
},

{
label: "Movement",
href: "/dashboard/movement",
icon: Accessibility,
gradient: "from-[#FFD05C] to-[#FF9F43]",
},
];


export function DashboardSidebar() {
return (
<aside className="w-[270px] min-h-screen backdrop-blur-xl bg-gradient-to-b from-[#133B73] via-[#18356B] to-[#23245E] px-8 py-10 hidden lg:flex flex-col border-r border-white/10">

{/* LOGO */}
<Link
  to="/"
  className="mb-8 inline-block group"
>
  <h1
    className="
      text-[46px]
      leading-none
      font-[300]
      tracking-[-0.08em]
      text-white
      italic
      opacity-95
      transition-all
      duration-300
      group-hover:opacity-100
    "
    style={{
  fontFamily: '"Cormorant Garamond", serif',
}}
  >
    Stillwave
  </h1>
</Link>

{/* SIDEBAR ITEMS */}
<div className="flex flex-col gap-5 ">
{items.map((item) => {
const Icon = item.icon;

return (
<Link
to={item.href}
key={item.label}
className="flex items-center gap-4 group transition-all duration-300 hover:translate-x-1"
>
<div
className={`h-[48px] w-[48px] rounded-full bg-gradient-to-br ${item.gradient} p-[2px]`}
>
<div className="h-full w-full rounded-full bg-[#182B61] flex items-center justify-center">
<Icon
size={21}
strokeWidth={1.8}
className="text-white"
/>
</div>
</div>

<span className="text-[18px] font-[300] tracking-[-0.02em] text-white/95 group-hover:text-white">
{item.label}
</span>
</Link>
);
})}
</div>
</aside>
);
}
