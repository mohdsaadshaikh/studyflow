"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { progressKey, useCompletedTopics } from "@/features/study/hooks/use-completed-topics";
import { cn } from "@/lib/utils";

export function TopicDoneToggle({ subjectId, topicId }: { subjectId: string; topicId: string }) {
  const { completed, toggle } = useCompletedTopics();
  const key = progressKey(subjectId, topicId);
  const done = !!completed[key];
  const [ticks, setTicks] = useState(0);
  const justTicked = ticks > 0 && done;
  return (
    <button
      type="button"
      onClick={() => {
        setTicks((n) => n + 1);
        toggle(key);
      }}
      aria-pressed={done}
      className={cn("ink-interactive inline-flex items-center gap-3 px-3 py-2", done ? "ink-forest" : "ink-paper")}
    >
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded-sm border-2",
          justTicked && "motion-tick",
          done ? "border-primary-foreground" : "border-edge",
        )}
        aria-hidden="true"
      >
        {done && <Check key={ticks} className="motion-draw size-3.5" strokeWidth={3} />}
      </span>
      <span className="flex flex-col text-left">
        <span className="ink-label opacity-75">{done ? "In your outline" : "Finished reading?"}</span>
        <span className="font-heading text-sm font-semibold">{done ? "Ticked as done" : "Tick as done"}</span>
      </span>
    </button>
  );
}
