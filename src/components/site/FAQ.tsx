import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b transition-colors" style={{ borderColor: "rgba(212, 212, 207, 0.6)" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-7 text-left group"
            >
              <span className="text-[20px] md:text-[24px] font-semibold transition-colors group-hover:text-[var(--deep-green)]" style={{ color: "#2C2C2C" }}>
                {it.q}
              </span>
              <ChevronDown
                className="shrink-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] text-[var(--deep-green)]"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                size={24}
              />
            </button>
            <div
              className="grid transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
            >
              <div className="overflow-hidden">
                <p className="text-[17px] md:text-[18px] leading-[1.85] text-[#5B5B5B] pb-8 pr-12 max-w-3xl">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
