"use client";

import ParticleBackground from "./ParticleBackground";
import LogoBadge from "./LogoBadge";
import EditorialTextFlow from "../left/EditorialTextFlow";

export default function LeftVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-950 text-white">
      {/* 星空 */}
      <ParticleBackground />

      {/* 左上角 Logo */}
      <div className="absolute left-8 top-8 z-30">
        <LogoBadge />
      </div>

      {/* 中间文字 + 光晕挤压重排 */}
      <EditorialTextFlow />
    </div>
  );
}