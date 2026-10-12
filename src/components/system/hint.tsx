"use client";

import type { ReactNode } from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";

/**
 * Small forest tooltip in the block language. Scales and fades out of its trigger on the
 * first hover; moving between hints shows them instantly (Radix "instant-open").
 * Wrap a single focusable element.
 */
export function Hint({
  label,
  side = "top",
  children,
}: {
  label: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  children: ReactNode;
}) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content side={side} sideOffset={8} collisionPadding={12} className="ink-tooltip">
          {label}
          <TooltipPrimitive.Arrow className="ink-tooltip-arrow" width={12} height={6} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
