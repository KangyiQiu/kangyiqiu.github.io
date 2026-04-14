"use client";

import {
  layoutWithLines,
  materializeLineRange,
  prepareWithSegments,
  layoutNextLineRange,
} from "@chenglou/pretext";
import { useEffect, useRef } from "react";
import { centerText } from "./CenterText";

type Orb = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  visualR: number;
  layoutR: number;
  color: string;
  alpha: number;
};

type Interval = { start: number; end: number };
type DragState = {
  orbIndex: number;
  offsetX: number;
  offsetY: number;
  lastX: number;
  lastY: number;
  lastTs: number;
};

const textFont = "400 15px Inter, ui-sans-serif, system-ui, -apple-system";
const textColor = "rgba(203,213,225,0.88)";
const lineHeight = 26;
const maxTextWidth = 520;
const minLineWidth = 42;
const textSidePadding = 48;
const textVerticalPadding = 40;

const ORB_COUNT = 8;
const ORB_RADIUS_MIN = 28;
const ORB_RADIUS_RANGE = 20;
const ORB_SPEED = 0.9;
const ORB_ALPHA_MIN = 0.2;
const ORB_ALPHA_RANGE = 0.16;
const ORB_LAYOUT_RADIUS_RATIO = 1;
const ORB_LAYOUT_PADDING = 4;

function subtractBlockedIntervals(base: Interval[], blocked: Interval): Interval[] {
  const next: Interval[] = [];

  for (const interval of base) {
    if (blocked.end <= interval.start || blocked.start >= interval.end) {
      next.push(interval);
      continue;
    }

    if (blocked.start > interval.start) {
      next.push({ start: interval.start, end: blocked.start });
    }
    if (blocked.end < interval.end) {
      next.push({ start: blocked.end, end: interval.end });
    }
  }

  return next;
}

function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace("#", "");
  const bigint = Number.parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export default function EditorialTextFlow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let orbs: Orb[] = [];
    let measuredTextWidth = 0;
    let measuredTextHeight = 0;
    let dragState: DragState | null = null;

    const pointerPos = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const findHitOrbIndex = (x: number, y: number): number => {
      for (let i = orbs.length - 1; i >= 0; i--) {
        const orb = orbs[i];
        const dx = x - orb.x;
        const dy = y - orb.y;
        if (dx * dx + dy * dy <= orb.visualR * orb.visualR) return i;
      }
      return -1;
    };

    const prepared = prepareWithSegments(centerText, textFont, { whiteSpace: "pre-wrap" });

    const seedOrbs = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (w <= 0 || h <= 0) return;

      const palette = ["#67e8f9", "#38bdf8", "#22d3ee", "#7dd3fc"];

      orbs = Array.from({ length: ORB_COUNT }, (_, i) => {
        const visualR = ORB_RADIUS_MIN + Math.random() * ORB_RADIUS_RANGE;
        return {
        x: Math.random() * (w - 120) + 60,
        y: Math.random() * (h - 220) + 130,
        vx: (Math.random() - 0.5) * ORB_SPEED,
        vy: (Math.random() - 0.5) * ORB_SPEED,
        visualR,
        layoutR: visualR * ORB_LAYOUT_RADIUS_RATIO + ORB_LAYOUT_PADDING,
        color: palette[i % palette.length],
        alpha: ORB_ALPHA_MIN + Math.random() * ORB_ALPHA_RANGE,
      };
      });
    };

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w <= 0 || h <= 0) return;
      canvas.width = w;
      canvas.height = h;
      seedOrbs();
    };

    const onPointerDown = (event: PointerEvent) => {
      const { x, y } = pointerPos(event);
      const hitIndex = findHitOrbIndex(x, y);
      if (hitIndex < 0) return;

      const orb = orbs[hitIndex];
      dragState = {
        orbIndex: hitIndex,
        offsetX: x - orb.x,
        offsetY: y - orb.y,
        lastX: x,
        lastY: y,
        lastTs: performance.now(),
      };
      orb.vx = 0;
      orb.vy = 0;
      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      const { x, y } = pointerPos(event);

      if (dragState) {
        const orb = orbs[dragState.orbIndex];
        if (orb) {
          const now = performance.now();
          const dt = Math.max(8, now - dragState.lastTs);
          const releaseVx = ((x - dragState.lastX) / dt) * 16;
          const releaseVy = ((y - dragState.lastY) / dt) * 16;

          const nextX = x - dragState.offsetX;
          const nextY = y - dragState.offsetY;
          orb.x = clamp(nextX, orb.visualR, canvas.width - orb.visualR);
          orb.y = clamp(nextY, orb.visualR, canvas.height - orb.visualR);
          orb.vx = clamp(releaseVx, -ORB_SPEED * 2.5, ORB_SPEED * 2.5);
          orb.vy = clamp(releaseVy, -ORB_SPEED * 2.5, ORB_SPEED * 2.5);

          dragState.lastX = x;
          dragState.lastY = y;
          dragState.lastTs = now;
        }
      } else {
        canvas.style.cursor = findHitOrbIndex(x, y) >= 0 ? "grab" : "default";
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragState) return;
      const orb = orbs[dragState.orbIndex];
      if (orb && Math.abs(orb.vx) + Math.abs(orb.vy) < 0.05) {
        orb.vx = (Math.random() - 0.5) * ORB_SPEED;
        orb.vy = (Math.random() - 0.5) * ORB_SPEED;
      }
      dragState = null;
      canvas.style.cursor = "default";
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (canvas.width <= 0 || canvas.height <= 0) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      const availableWidth = Math.max(260, canvas.width - textSidePadding * 2);
      const textWidth = Math.min(maxTextWidth, availableWidth);
      if (textWidth !== measuredTextWidth) {
        measuredTextWidth = textWidth;
        measuredTextHeight = layoutWithLines(prepared, textWidth, lineHeight).height;
      }
      const boxX = (canvas.width - textWidth) / 2;
      const boxY = Math.max(textVerticalPadding, (canvas.height - measuredTextHeight) / 2);
      const boxBottom = canvas.height - textVerticalPadding;

      for (const [index, orb] of orbs.entries()) {
        if (dragState?.orbIndex === index) continue;

        orb.x += orb.vx;
        orb.y += orb.vy;
        const bounceR = orb.visualR + ORB_LAYOUT_PADDING;
        if (orb.x < bounceR || orb.x > canvas.width - bounceR) orb.vx *= -1;
        if (orb.y < bounceR || orb.y > canvas.height - bounceR) orb.vy *= -1;
      }

      ctx.font = textFont;
      ctx.fillStyle = textColor;
      ctx.textBaseline = "top";

      let y = boxY;
      let cursor = { segmentIndex: 0, graphemeIndex: 0 };
      let done = false;

      while (y < boxBottom && !done) {
        let intervals: Interval[] = [{ start: boxX, end: boxX + textWidth }];

        for (const orb of orbs) {
          const dy = Math.abs(y + lineHeight / 2 - orb.y);
          if (dy >= orb.layoutR) continue;

          const dx = Math.sqrt(orb.layoutR * orb.layoutR - dy * dy);
          const blocked = { start: orb.x - dx, end: orb.x + dx };
          intervals = subtractBlockedIntervals(intervals, blocked);
          if (intervals.length === 0) break;
        }

        const usableIntervals = intervals
          .map((interval) => ({
            start: Math.max(interval.start, boxX),
            end: Math.min(interval.end, boxX + textWidth),
          }))
          .filter((interval) => interval.end - interval.start >= minLineWidth)
          .sort((a, b) => a.start - b.start);

        if (usableIntervals.length === 0) {
          y += lineHeight;
          continue;
        }

        for (const interval of usableIntervals) {
          const range = layoutNextLineRange(prepared, cursor, interval.end - interval.start);
          if (!range) {
            done = true;
            break;
          }

          const line = materializeLineRange(prepared, range);
          if (line.text.length > 0) {
            ctx.fillText(line.text, interval.start, y);
          }
          cursor = { ...line.end };
        }
        y += lineHeight;
      }

      for (const orb of orbs) {
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.visualR);
        gradient.addColorStop(0, hexToRgba(orb.color, orb.alpha));
        gradient.addColorStop(0.82, hexToRgba(orb.color, orb.alpha * 0.95));
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.visualR, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 h-full w-full touch-none" />;
}
