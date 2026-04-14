"use client";

export const centerText = `As machines begin to generate answers faster than we can question them, the role of humans is quietly changing. Instead of focusing on creating knowledge, we spend more time selecting from it, and instead of producing outputs, we are trying to make sense of what those outputs mean.

The real risk of intelligent systems is not that they will replace human thinking, but that they may slowly reshape it. When responses become immediate and systems appear reliable, it becomes easy to accept results without fully understanding them, and the habit of questioning can fade without us noticing.

In this kind of environment, the challenge is no longer just to build systems that work, but to learn how to think alongside them. That means understanding how they produce answers, questioning their assumptions, and knowing when not to rely on them. The real danger is not that machines begin to think, but that humans gradually stop trying to.`;

export default function CenterText() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
      <div className="max-w-[420px] text-center">
        <p className="text-[17px] leading-relaxed text-slate-300/90">{centerText}</p>
      </div>
    </div>
  );
}