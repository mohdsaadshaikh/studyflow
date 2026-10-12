"use client";

import { useState } from "react";
import type { FillBlank } from "@/content/types";
import { ActionBlockButton } from "@/components/system/action-block";
import { cn } from "@/lib/utils";
import { AnswerNote } from "./OptionBlock";
import { ProgressLine } from "./ProgressLine";
import { ResultCard } from "./ResultCard";
import { useRound, type PracticeContext } from "./use-round";
import { BookmarkButton } from "@/features/account/components/BookmarkButton";
import { questionId } from "@/features/account/lib/questions";

function isCorrect(q: FillBlank, value: string): boolean {
  const v = value.trim().toLowerCase();
  return v === q.answer.toLowerCase() || (q.alt ?? []).some((a) => a.toLowerCase() === v);
}

/** Renders the prompt with each "___" drawn as a blank line. */
function Prompt({ text }: { text: string }) {
  const parts = text.split("___");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="mx-1 inline-block w-16 translate-y-1 border-b-2 border-edge align-baseline"><span className="sr-only">blank</span></span>
          )}
        </span>
      ))}
    </>
  );
}

export function FillBlankRunner({ items, practice }: { items: FillBlank[]; practice?: PracticeContext }) {
  const round = useRound("fill", practice);
  const [idx, setIdx] = useState(0);
  const [val, setVal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = items[idx];
  const last = idx + 1 >= items.length;

  const check = () => {
    if (!val.trim()) return;
    const ok = isCorrect(q, val);
    if (ok) setScore((s) => s + 1);
    round.answer(idx, ok);
    setSubmitted(true);
  };

  const next = () => {
    if (last) {
      round.finish(round.results);
      return setDone(true);
    }
    setIdx(idx + 1);
    setVal("");
    setSubmitted(false);
  };

  if (done)
    return (
      <ResultCard
        score={score}
        total={items.length}
        practice={practice}
        mode="fill"
        results={round.results}
        saved={round.saved}
        onRetry={() => {
          round.reset();
          setIdx(0);
          setVal("");
          setSubmitted(false);
          setScore(0);
          setDone(false);
        }}
      />
    );

  const correct = submitted && isCorrect(q, val);

  return (
    <div className="max-w-3xl space-y-5">
      <ProgressLine current={idx + 1} total={items.length} score={score} />
      <div key={idx} className="ink-block motion-enter space-y-5 p-4 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <p className="font-heading text-xl font-semibold leading-relaxed sm:text-2xl">
            <Prompt text={q.q} />
          </p>
          {practice && <BookmarkButton questionId={questionId(practice.topicId, "fill", idx)} subjectId={practice.subjectId} topicId={practice.topicId} />}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (submitted) next();
            else check();
          }}
          className="space-y-4"
        >
          <label className="block">
            <span className="ink-label text-muted-foreground">Your answer</span>
            <input
              autoFocus
              value={val}
              onChange={(e) => setVal(e.target.value)}
              readOnly={submitted}
              placeholder="Type it in…"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              className={cn(
                "ink-input mt-1.5 font-heading text-base",
                submitted && correct && "border-[var(--primary-edge)] bg-primary/10",
                submitted && !correct && "motion-shake border-destructive bg-destructive/10",
              )}
            />
          </label>
          {submitted && (
            <AnswerNote correct={correct}>
              {correct ? q.explain : (
                <>
                  Answer: <span className="font-heading font-semibold">{q.answer}</span>
                  {q.explain && <> · {q.explain}</>}
                </>
              )}
            </AnswerNote>
          )}
          <div className="flex justify-end">
            {!submitted ? (
              <ActionBlockButton type="submit" tone="accent" size="sm" label="Enter" title="Check" disabled={!val.trim()} />
            ) : (
              <ActionBlockButton
                type="submit"
                tone="forest"
                size="sm"
                label={last ? "Done" : `Question ${idx + 2}`}
                title={last ? "See result" : "Next"}
                arrow="right"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
