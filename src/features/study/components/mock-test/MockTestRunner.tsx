"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRecordAttempt } from "@/features/account/hooks/use-study-data";
import { questionId } from "@/features/account/lib/questions";
import { Hint } from "@/components/system/hint";
import { Send, Timer } from "lucide-react";
import type { MCQ } from "@/content/types";
import { ActionBlockButton, ActionTag } from "@/components/system/action-block";
import { ProgressRule } from "@/features/study/components/shared/ProgressRule";
import { lessonHref } from "@/features/study/lib/modes";
import { cn } from "@/lib/utils";
import { OptionBlock } from "../practice/OptionBlock";
import { ResultCard } from "../practice/ResultCard";

type Q = { topicId: string; qid: string; q: string; options: string[]; answer: number };

export type MockSubject = { id: string; short: string; topics: { id: string; title: string; mcqs: MCQ[] }[] };

function buildQuestions(subject: MockSubject, count: number): Q[] {
  const pool: Q[] = [];
  subject.topics.forEach((t) => t.mcqs.forEach((m, mi) => pool.push({ topicId: t.id, qid: questionId(t.id, "mcq", mi), ...m })));
  // Fisher–Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

export function MockTestRunner({ subject, count = 30, minutes = 30 }: { subject: MockSubject; count?: number; minutes?: number }) {
  // Questions are drawn when the user starts (client-side, so no hydration mismatch),
  // and the timer only runs from that moment.
  const [attempt, setAttempt] = useState<{ id: number; questions: Q[] } | null>(null);
  const start = () => setAttempt((a) => ({ id: (a?.id ?? 0) + 1, questions: buildQuestions(subject, count) }));

  if (!attempt) {
    return (
      <div className="ink-block max-w-3xl space-y-5 p-6 sm:p-8">
        <ul className="grid gap-3 text-[15px] sm:grid-cols-3">
          <li className="border-l-2 border-edge pl-3">
            <span className="ink-label block text-muted-foreground">Questions</span>
            <span className="font-heading text-2xl font-semibold tabular-nums">{count}</span>
          </li>
          <li className="border-l-2 border-edge pl-3">
            <span className="ink-label block text-muted-foreground">Time</span>
            <span className="font-heading text-2xl font-semibold tabular-nums">{minutes} min</span>
          </li>
          <li className="border-l-2 border-edge pl-3">
            <span className="ink-label block text-muted-foreground">Feedback</span>
            <span className="font-heading text-2xl font-semibold">At the end</span>
          </li>
        </ul>
        <p className="text-[15px] text-foreground/80">
          The timer starts when you press start. You can jump between questions and change answers until you submit.
        </p>
        <ActionBlockButton
          onClick={start}
          tone="accent"
          size="lg"
          label="Timer starts now"
          title="Start mock test"
          icon={<Timer className="size-5" aria-hidden="true" />}
          arrow="right"
        />
      </div>
    );
  }
  return <MockTest key={attempt.id} subject={subject} questions={attempt.questions} minutes={minutes} onRetry={start} />;
}

function MockTest({
  subject,
  questions,
  minutes,
  onRetry,
}: {
  subject: MockSubject;
  questions: Q[];
  minutes: number;
  onRetry: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(questions.length).fill(null));
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setDone(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [done]);

  // Per-question results, saved once when the test ends (submit or timer).
  const results = useMemo(
    () => questions.map((q, i) => ({ questionId: q.qid, topicId: q.topicId, correct: answers[i] === q.answer })),
    [questions, answers],
  );
  const topicTitles = useMemo(() => Object.fromEntries(subject.topics.map((t) => [t.id, t.title])), [subject]);
  const record = useRecordAttempt();
  const [saved, setSaved] = useState(false);
  const recordedRef = useRef(false);
  useEffect(() => {
    if (!done || recordedRef.current) return;
    recordedRef.current = true;
    void record({ subjectId: subject.id, topicId: null, mode: "mock", results }).then((r) => setSaved(r.saved));
  }, [done, record, results, subject.id]);

  const score = answers.reduce((acc: number, a, i) => acc + (a === questions[i].answer ? 1 : 0), 0);
  const answered = answers.filter((a) => a !== null).length;

  if (done) {
    const byTopic = questions.reduce<Record<string, { ok: number; total: number }>>((m, q, i) => {
      m[q.topicId] = m[q.topicId] || { ok: 0, total: 0 };
      m[q.topicId].total++;
      if (answers[i] === q.answer) m[q.topicId].ok++;
      return m;
    }, {});
    // Weakest topics first: that's where the next study session should go.
    const rows = Object.entries(byTopic).sort(([, a], [, b]) => a.ok / a.total - b.ok / b.total);
    return (
      <div className="space-y-6">
        <ResultCard
          score={score}
          total={questions.length}
          onRetry={onRetry}
          mode="mock"
          subject={{ id: subject.id, short: subject.short }}
          results={results}
          saved={saved}
          topicTitles={topicTitles}
        />
        <section className="ink-block max-w-3xl overflow-hidden">
          <header className="border-b-2 border-edge px-4 py-3 sm:px-6">
            <p className="ink-label text-muted-foreground">By topic · weakest first</p>
          </header>
          <ul className="divide-y divide-edge/15 bg-background">
            {rows.map(([tid, s]) => {
              const t = subject.topics.find((x) => x.id === tid);
              const perfect = s.ok === s.total;
              return (
                <li key={tid} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 px-4 py-3 sm:grid-cols-[1fr_11rem_auto] sm:px-6">
                  <span className="truncate text-[15px]">{t?.title ?? tid}</span>
                  <span className="font-heading text-xs tabular-nums sm:order-last">
                    {s.ok}/{s.total}
                  </span>
                  <span className="col-span-2 flex items-center gap-3 sm:col-span-1">
                    <ProgressRule done={s.ok} total={s.total} size="sm" label={`${t?.title ?? tid} score`} />
                    {!perfect && t && (
                      <ActionTag href={lessonHref(subject.id, t.id)}>Review</ActionTag>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }

  const q = questions[idx];
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const urgent = secondsLeft < 60;
  const last = idx + 1 >= questions.length;

  return (
    <div className="max-w-3xl space-y-5">
      <div className="flex items-center justify-between gap-3">
        <p className="ink-label tabular-nums text-muted-foreground">
          Question {String(idx + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")} · {answered} answered
        </p>
        <p
          role="timer"
          aria-label={`${mins} minutes ${secs} seconds left`}
          className={cn(
            "ink-block inline-flex items-center gap-1.5 px-3 py-1.5 font-heading text-sm tabular-nums",
            urgent && "ink-danger motion-urgent",
          )}
        >
          <Timer className="size-4" aria-hidden="true" />
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </p>
      </div>
      <ProgressRule done={answered} total={questions.length} size="sm" label="Questions answered" />

      <div key={idx} className="ink-block motion-enter space-y-5 p-4 sm:p-7">
        <p className="font-heading text-xl font-semibold leading-snug sm:text-2xl">{q.q}</p>
        <div className="motion-options space-y-2.5">
          {q.options.map((opt, i) => (
            <OptionBlock
              key={i}
              index={i}
              marker={String.fromCharCode(65 + i)}
              state={answers[idx] === i ? "selected" : "idle"}
              onClick={() => {
                const next = [...answers];
                next[idx] = i;
                setAnswers(next);
              }}
            >
              {opt}
            </OptionBlock>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {idx > 0 ? (
          <ActionBlockButton
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            tone="paper"
            size="sm"
            label={`Question ${idx}`}
            title="Previous"
            arrow="left"
            className="w-full"
          />
        ) : (
          <span aria-hidden="true" />
        )}
        {!last ? (
          <ActionBlockButton
            onClick={() => setIdx((i) => i + 1)}
            tone="forest"
            size="sm"
            label={`Question ${idx + 2}`}
            title="Next"
            align="end"
            className="w-full"
          />
        ) : (
          <ActionBlockButton
            onClick={() => setDone(true)}
            tone="accent"
            size="sm"
            label={`${answered} of ${questions.length} answered`}
            title="Submit test"
            icon={<Send className="size-4" aria-hidden="true" />}
            align="end"
            className="w-full"
          />
        )}
      </div>

      <section aria-label="All questions" className="ink-block space-y-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="ink-label text-muted-foreground">
            Jump to a question · {answered} of {questions.length} answered
          </p>
          <div className="ink-label flex items-center gap-3 text-muted-foreground" aria-hidden="true">
            <span className="inline-flex items-center gap-1.5"><span className="ink-chip-key ink-chip-key-answered" />Answered</span>
            <span className="inline-flex items-center gap-1.5"><span className="ink-chip-key ink-chip-key-current" />Current</span>
          </div>
        </div>
        <nav aria-label="Jump to question" className="flex flex-wrap gap-2">
          {questions.map((_, i) => (
            <Hint key={i} label={`Question ${i + 1} · ${answers[i] !== null ? "answered" : "not answered"}`}>
              <button
                type="button"
                onClick={() => setIdx(i)}
                aria-current={i === idx ? "step" : undefined}
                data-answered={answers[i] !== null}
                aria-label={`Question ${i + 1}${answers[i] !== null ? ", answered" : ""}`}
                className="ink-chip size-10"
              >
                {i + 1}
              </button>
            </Hint>
          ))}
        </nav>
        {!last && (
          <div className="flex justify-end border-t-2 border-edge pt-4">
            <ActionBlockButton
              onClick={() => setDone(true)}
              tone="accent"
              size="sm"
              label="Done before the timer?"
              title="Submit early"
              icon={<Send className="size-4" aria-hidden="true" />}
            />
          </div>
        )}
      </section>
    </div>
  );
}
