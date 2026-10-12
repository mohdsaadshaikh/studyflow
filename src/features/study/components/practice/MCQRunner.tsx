"use client";

import { useState } from "react";
import type { MCQ } from "@/content/types";
import { ActionBlockButton } from "@/components/system/action-block";
import { AnswerNote, OptionBlock, type OptionState } from "./OptionBlock";
import { ProgressLine } from "./ProgressLine";
import { ResultCard } from "./ResultCard";
import { useRound, type PracticeContext } from "./use-round";
import { BookmarkButton } from "@/features/account/components/BookmarkButton";
import { questionId } from "@/features/account/lib/questions";

export function MCQRunner({ items, practice }: { items: MCQ[]; practice?: PracticeContext }) {
  const round = useRound("mcq", practice);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = items[idx];
  const last = idx + 1 >= items.length;

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
    round.answer(idx, i === q.answer);
  };

  const next = () => {
    if (last) {
      round.finish(round.results);
      return setDone(true);
    }
    setIdx(idx + 1);
    setPicked(null);
  };

  if (done) {
    return (
      <ResultCard
        score={score}
        total={items.length}
        practice={practice}
        mode="mcq"
        results={round.results}
        saved={round.saved}
        onRetry={() => {
          round.reset();
          setIdx(0);
          setPicked(null);
          setScore(0);
          setDone(false);
        }}
      />
    );
  }

  const stateOf = (i: number): OptionState => {
    if (picked === null) return "idle";
    if (i === q.answer) return "correct";
    if (i === picked) return "wrong";
    return "muted";
  };

  return (
    <div className="max-w-3xl space-y-5">
      <ProgressLine current={idx + 1} total={items.length} score={score} />
      <div key={idx} className="ink-block motion-enter space-y-5 p-4 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <p className="font-heading text-xl font-semibold leading-snug sm:text-2xl">{q.q}</p>
          {practice && <BookmarkButton questionId={questionId(practice.topicId, "mcq", idx)} subjectId={practice.subjectId} topicId={practice.topicId} />}
        </div>
        <div className="motion-options space-y-2.5">
          {q.options.map((opt, i) => (
            <OptionBlock
              key={i}
              index={i}
              marker={String.fromCharCode(65 + i)}
              state={stateOf(i)}
              disabled={picked !== null}
              onClick={() => choose(i)}
            >
              {opt}
            </OptionBlock>
          ))}
        </div>
        {picked !== null && <AnswerNote correct={picked === q.answer}>{q.explain}</AnswerNote>}
        {picked !== null && (
          <div className="flex justify-end">
            <ActionBlockButton
              onClick={next}
              tone="forest"
              size="sm"
              label={last ? "Done" : `Question ${idx + 2}`}
              title={last ? "See result" : "Next"}
              arrow="right"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}
