"use client";

import { useEffect, useState } from "react";

/** Counts from 0 to `target` on mount (ease-out), or jumps straight there under reduced motion. */
export function useCountUp(target: number, durationMs = 700, delayMs = 150): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    const timer = window.setTimeout(() => {
      if (reduce) setValue(target);
      else frame = requestAnimationFrame(tick);
    }, reduce ? 0 : delayMs);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [target, durationMs, delayMs]);

  return value;
}
