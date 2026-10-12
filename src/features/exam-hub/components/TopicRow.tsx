"use client";

import { useState, ViewTransition } from "react";
import { Hint } from "@/components/system/hint";
import Link from "next/link";
import { BookOpen, Check, ListChecks } from "lucide-react";
import type { NavTopic } from "@/content";
import { lessonHref } from "@/features/study/lib/modes";
import { cn } from "@/lib/utils";

export function TopicRow({
  subjectId,
  topic,
  done,
  index = 0,
  onToggle,
}: {
  subjectId: string;
  topic: NavTopic;
  done: boolean;
  /** Position in its list, for the entrance stagger. */
  index?: number;
  onToggle: () => void;
}) {
  // Bumps on each user tick so the feedback animations replay (not on load).
  const [ticks, setTicks] = useState(0);
  const justTicked = ticks > 0 && done;
  return (
    <li
      key={justTicked ? `t${ticks}` : "idle"}
      style={{ "--i": index } as React.CSSProperties}
      className={cn(justTicked ? "motion-flash" : "motion-row", "group grid grid-cols-[auto_1.75rem_1fr_auto] items-center gap-x-3 border-b border-edge/15 px-3 py-2 last:border-b-0 sm:px-4")}
    >
      <button
        type="button"
        onClick={() => {
          setTicks((n) => n + 1);
          onToggle();
        }}
        aria-pressed={done}
        aria-label={done ? `Untick ${topic.title}` : `Tick ${topic.title} as done`}
        className={cn("ink-tick size-6 hover:bg-secondary aria-pressed:hover:bg-primary", justTicked && "motion-tick")}
      >
        {done && <Check className="motion-draw size-4" strokeWidth={3} aria-hidden="true" />}
      </button>
      <span
        className={cn(
          "font-heading text-xs tabular-nums",
          done ? "text-primary" : "text-muted-foreground",
        )}
      >
        {String(topic.number).padStart(2, "0")}
      </span>
      <Link
        href={lessonHref(subjectId, topic.id)}
        transitionTypes={["nav-forward"]}
        className={cn(
          "rounded-sm py-1 text-[15px] leading-snug underline-offset-4 hover:underline",
          done ? "text-foreground/60" : "text-foreground",
        )}
      >
        <ViewTransition name={`topic-title-${subjectId}-${topic.id}`} share="morph" default="none">
          <span>{topic.title}</span>
        </ViewTransition>
      </Link>
      <div className="flex gap-1 transition-opacity duration-150 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100">
        <Hint label="Read the notes">
        <Link
          href={lessonHref(subjectId, topic.id)}
          aria-label={`Read ${topic.title}`}
          className="ink-label flex items-center gap-1.5 rounded-sm px-2 py-1.5 hover:bg-secondary"
        >
          <BookOpen className="size-3.5" aria-hidden="true" />
          <span className="max-sm:sr-only">Read</span>
        </Link>
        </Hint>
        <Hint label="Practice MCQs">
        <Link
          href={lessonHref(subjectId, topic.id, "mcq")}
          aria-label={`MCQs for ${topic.title}`}
          className="ink-label flex items-center gap-1.5 rounded-sm px-2 py-1.5 hover:bg-secondary"
        >
          <ListChecks className="size-3.5" aria-hidden="true" />
          <span className="max-sm:sr-only">MCQs</span>
        </Link>
        </Hint>
      </div>
    </li>
  );
}
