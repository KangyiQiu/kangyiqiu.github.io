"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

/**
 * 根据滚动位置高亮侧边导航：取「区块顶边已越过视口参考线」的最后一个 section，
 * 与常见文档站 scroll-spy 行为一致。
 */
function getActiveSectionId(): string {
  const markerY = window.innerHeight * 0.38;
  let active = navItems[0]?.id ?? "home";

  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top <= markerY) {
      active = item.id;
    }
  }

  return active;
}

export default function SidebarNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const update = () => {
      setActiveId(getActiveSectionId());
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="absolute left-8 top-1/2 z-20 -translate-y-1/2">
      <ul className="space-y-5">
        {navItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
                aria-current={isActive ? "location" : undefined}
                title={item.label}
              >
                <span
                  className={[
                    "block shrink-0 rounded-full transition-all duration-300",
                    isActive
                      ? "h-14 w-[2px] bg-white opacity-80 shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                      : "h-10 w-[1px] bg-white/25",
                  ].join(" ")}
                  aria-hidden
                />
                <span
                  className={[
                    "text-sm tracking-wide whitespace-nowrap transition-all duration-300 ease-out",
                    isActive
                      ? "max-w-[8rem] overflow-visible font-semibold text-white opacity-80"
                      : "max-w-0 overflow-hidden font-normal text-white/90 opacity-0 group-hover:max-w-[12rem] group-hover:opacity-100 group-focus-visible:max-w-[12rem] group-focus-visible:opacity-100",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
