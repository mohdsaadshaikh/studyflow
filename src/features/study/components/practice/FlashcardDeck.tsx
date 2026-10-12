"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import type { Flashcard } from "@/content/types";
import { ProgressRule } from "@/features/study/components/shared/ProgressRule";

export function FlashcardDeck({ items }: { items: Flashcard[] }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = items[idx];

  const go = (delta: number) => {
    setFlipped(false);
    setIdx((i) => (i + delta + items.length) % items.length);
  };

  return (
    <div className="max-w-3xl space-y-4">
      <div className="space-y-2">
        <p className="ink-label tabular-nums text-muted-foreground">
          Card {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <ProgressRule done={idx + 1} total={items.length} size="sm" label="Cards seen" />
      </div>

      <div className="flip-scene">
        <button
          type="button"
          key={idx}
          onClick={() => setFlipped((f) => !f)}
          aria-label={flipped ? "Show term" : "Reveal definition"}
          data-flipped={flipped}
          className="flip-card motion-enter grid min-h-[300px] w-full text-left"
        >
          <span className="flip-face flip-face-front ink-block flex flex-col justify-between gap-6 p-6 sm:p-8">
            <span className="ink-label text-muted-foreground">Term</span>
            <span className="font-heading text-3xl font-semibold leading-snug sm:text-4xl">{card.front}</span>
            <span className="ink-label inline-flex items-center gap-1.5 text-primary">
              <RefreshCw className="size-3.5" aria-hidden="true" />
              Tap to flip
            </span>
          </span>
          <span className="flip-face flip-face-back ink-block ink-forest flex flex-col justify-between gap-6 p-6 sm:p-8" aria-hidden={!flipped}>
            <span className="ink-label opacity-80">Definition</span>
            <span className="text-xl font-medium leading-relaxed sm:text-2xl">{card.back}</span>
            <span className="ink-label opacity-80">{card.front}</span>
          </span>
        </button>
      </div>

      <div className="grid grid-cols-[1fr_1.4fr_1fr] gap-2">
        <button type="button" onClick={() => go(-1)} className="ink-interactive ink-paper inline-flex items-center justify-center gap-1.5 px-3 py-3 ink-label">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Prev
        </button>
        <button type="button" onClick={() => setFlipped((f) => !f)} className="ink-interactive ink-accent inline-flex items-center justify-center gap-1.5 px-3 py-3 ink-label">
          <RefreshCw className="size-4" aria-hidden="true" />
          Flip
        </button>
        <button type="button" onClick={() => go(1)} className="ink-interactive ink-paper inline-flex items-center justify-center gap-1.5 px-3 py-3 ink-label">
          Next
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
