"use client";

import LogoQ from "./LogoQ";

export default function LogoBadge() {
  return (
    <a
      href="#home"
      className="group inline-flex items-center"
      aria-label="Go to home"
    >
      <div className="shrink-0">
        <LogoQ />
      </div>

      <div
        className="
          ml-0 overflow-hidden whitespace-nowrap
          max-w-0 opacity-0
          transition-all duration-300 ease-out
          group-hover:ml-3 group-hover:max-w-[220px] group-hover:opacity-100
        "
      >
        <span
          className="
            inline-block text-[18px] font-semibold uppercase
            tracking-[0.18em] text-white/95
          "
        >
          Qiu Kangyi
        </span>
      </div>
    </a>
  );
}