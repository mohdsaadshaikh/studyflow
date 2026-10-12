"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type OptionState = "idle" | "selected" | "correct" | "wrong" | "muted";

/** One answer choice: an ink block with a mono key (A, B, True...) and the option text. */
export function OptionBlock({
  marker,
  index = 0,
  state,
  disabled,
  onClick,
  children,
}: {
  marker: string;
  /** Position in the list, for the entrance stagger. */
  index?: number;
  state: OptionState;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={state === "selected" || undefined}
      style={{ "--i": index } as React.CSSProperties}
      className={cn(
        "ink-interactive ink-locked flex w-full items-center gap-3 px-3 py-3 text-left sm:px-4",
        state === "idle" && "ink-paper",
        state === "selected" && "bg-foreground text-background",
        state === "correct" && "ink-forest",
        state === "wrong" && "ink-danger motion-shake",
        state === "muted" && "ink-paper text-muted-foreground",
      )}
    >
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-sm border-2 font-heading text-xs font-semibold",
          state === "idle" || state === "muted" ? "border-edge" : "border-current",
        )}
        aria-hidden="true"
      >
        {state === "correct" ? (
          <Check className="motion-draw size-4" strokeWidth={3} />
        ) : state === "wrong" ? (
          <X className="motion-pop size-4" strokeWidth={3} />
        ) : (
          marker
        )}
      </span>
      <span className="text-[15px] leading-snug">{children}</span>
      {state === "correct" && <span className="sr-only">(correct answer)</span>}
      {state === "wrong" && <span className="sr-only">(your answer, incorrect)</span>}
    </button>
  );
}

/** Explanation shown after answering. */
export function AnswerNote({ correct, children }: { correct: boolean; children?: React.ReactNode }) {
  return (
    <div aria-live="polite" className="motion-enter border-t-2 border-edge pt-4">
      <p className={cn("ink-label", correct ? "text-primary" : "text-destructive")}>{correct ? "Correct" : "Not quite"}</p>
      {children && <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/85">{children}</p>}
    </div>
  );
}
