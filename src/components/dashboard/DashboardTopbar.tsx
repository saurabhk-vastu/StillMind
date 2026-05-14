import { Search, Bell } from "lucide-react";

export function DashboardTopbar() {
  return (
    <div className="w-full flex items-center justify-end px-10 py-7">
      <div className="flex items-center gap-5">
        <button className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all">
          <Search className="text-white" size={22} />
        </button>

        <button className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all">
          <Bell className="text-white" size={22} />
        </button>

        <div className="h-10 w-[1px] bg-white/20 mx-2" />

        <button className="px-8 h-14 rounded-full bg-white/10 text-white text-lg font-medium backdrop-blur-xl hover:bg-white/20 transition-all">
          Use Mobile App
        </button>

        <button className="px-8 h-14 rounded-full bg-white text-[#091B44] text-lg font-semibold hover:scale-[1.02] transition-all">
          Try Stillwave Free
        </button>
      </div>
    </div>
  );
}