"use client";

import { useEffect, useRef } from "react";

/**
 * Fine dot grid behind the hero. A soft spotlight follows the pointer and
 * reveals the grid; at rest it settles top-right. Pointer-only, rAF-throttled,
 * and static when the user prefers reduced motion.
 */
export default function HeroGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    const onLeave = () => {
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, hsl(var(--foreground) / 0.22) 1px, transparent 1.2px)",
        backgroundSize: "24px 24px",
        WebkitMaskImage:
          "radial-gradient(520px circle at var(--mx, 78%) var(--my, 30%), #000 0%, transparent 70%)",
        maskImage:
          "radial-gradient(520px circle at var(--mx, 78%) var(--my, 30%), #000 0%, transparent 70%)",
        transition: "-webkit-mask-position 0.2s",
      }}
    />
  );
}
