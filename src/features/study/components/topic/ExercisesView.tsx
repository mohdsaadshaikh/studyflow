"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { Exercise } from "@/content/types";
import { renderEmphasisInline } from "@/features/study/lib/inline";
import { cn } from "@/lib/utils";

export function ExercisesView({ items }: { items: Exercise[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <ol className="max-w-4xl space-y-4">
      {items.map((ex, i) => {
        const isOpen = !!open[i];
        const solutionId = `solution-${i}`;
        return (
          <li key={i} className="ink-block overflow-hidden">
            <div className="space-y-4 p-5 sm:p-6">
              <p className="ink-label text-primary">Problem {String(i + 1).padStart(2, "0")}</p>
              <p className="font-heading text-lg font-semibold leading-snug sm:text-xl">{renderEmphasisInline(ex.problem)}</p>
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [i]: !isOpen }))}
                aria-expanded={isOpen}
                aria-controls={solutionId}
                className={cn("ink-interactive ink-label inline-flex items-center gap-2 px-3 py-2", isOpen ? "ink-forest" : "ink-accent")}
              >
                {isOpen ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
                {isOpen ? "Hide solution" : "Try it, then reveal"}
              </button>
            </div>
            {isOpen && (
              <pre
                id={solutionId}
                className="motion-enter overflow-x-auto whitespace-pre-wrap border-t-2 border-edge bg-background p-5 font-mono text-[13px] leading-relaxed text-foreground sm:p-6"
              >
                {ex.solution}
              </pre>
            )}
          </li>
        );
      })}
    </ol>
  );
}
