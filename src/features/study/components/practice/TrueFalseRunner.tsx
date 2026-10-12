"use client";

import { useState } from "react";
import type { TF } from "@/content/types";
import { ActionBlockButton } from "@/components/system/action-block";
import { AnswerNote, OptionBlock, type OptionState } from "./OptionBlock";
import { ProgressLine } from "./ProgressLine";
import { ResultCard } from "./ResultCard";
import { useRound, type PracticeContext } from "./use-round";
import { BookmarkButton } from "@/features/account/components/BookmarkButton";
import { questionId } from "@/features/account/lib/questions";

export function TrueFalseRunner({ items, practice }: { items: TF[]; practice?: PracticeContext }) {
  const round = useRound("tf", practice);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = items[idx];
  const last = idx + 1 >= items.length;

  const choose = (v: boolean) => {
    if (picked !== null) return;
    setPicked(v);
    if (v === q.answer) setScore((s) => s + 1);
    round.answer(idx, v === q.answer);
  };
  const next = () => {
    if (last) {
      round.finish(round.results);
      return setDone(true);
    }
    setIdx(idx + 1);
    setPicked(null);
  };

  if (done)
    return (
      <ResultCard
        score={score}
        total={items.length}
        practice={practice}
        mode="tf"
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

  const stateOf = (v: boolean): OptionState => {
    if (picked === null) return "idle";
    if (v === q.answer) return "correct";
    if (v === picked) return "wrong";
    return "muted";
  };

  return (
    <div className="max-w-3xl space-y-5">
      <ProgressLine current={idx + 1} total={items.length} score={score} />
      <div key={idx} className="ink-block motion-enter space-y-5 p-4 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <p className="font-heading text-xl font-semibold leading-snug sm:text-2xl">{q.q}</p>
          {practice && <BookmarkButton questionId={questionId(practice.topicId, "tf", idx)} subjectId={practice.subjectId} topicId={practice.topicId} />}
        </div>
        <div className="motion-options grid grid-cols-2 gap-3">
          {[true, false].map((v, i) => (
            <OptionBlock
              key={String(v)}
              index={i}
              marker={v ? "T" : "F"}
              state={stateOf(v)}
              disabled={picked !== null}
              onClick={() => choose(v)}
            >
              <span className="font-heading font-semibold">{v ? "True" : "False"}</span>
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
              label={last ? "Done" : `Statement ${idx + 2}`}
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
