"use client";

import { useEffect, useMemo, useState } from "react";
import { Bookmark, CheckCheck, LockOpen, Repeat2, Trash2 } from "lucide-react";
import { ActionBlock, ActionBlockButton, ActionTag } from "@/components/system/action-block";
import { Hint } from "@/components/system/hint";
import { getSupabase } from "@/lib/supabase/client";
import { lessonHref } from "@/features/study/lib/modes";
import { AnswerNote, OptionBlock, type OptionState } from "@/features/study/components/practice/OptionBlock";
import { ProgressLine } from "@/features/study/components/practice/ProgressLine";
import { cn } from "@/lib/utils";
import { useAuth } from "./AuthProvider";
import { useStudyStats, notifyStudyDataChanged } from "../hooks/use-study-data";
import { useBookmarks } from "../hooks/use-bookmarks";
import { updateReviewQueue } from "../lib/attempts";
import type { BankQuestion } from "../lib/question-bank";

async function loadQuestions(ids: string[]): Promise<BankQuestion[]> {
  if (ids.length === 0) return [];
  const res = await fetch(`/review/questions?ids=${encodeURIComponent(ids.join(","))}`);
  if (!res.ok) return [];
  return ((await res.json()) as { questions: BankQuestion[] }).questions;
}

function useQuestions(ids: string[]) {
  const key = ids.join(",");
  const [state, setState] = useState<{ key: string; questions: BankQuestion[] } | null>(null);
  useEffect(() => {
    let cancelled = false;
    loadQuestions(key ? key.split(",") : []).then((questions) => {
      if (!cancelled) setState({ key, questions });
    });
    return () => {
      cancelled = true;
    };
  }, [key]);
  return state?.key === key ? state.questions : null;
}

export function ReviewHub() {
  const { status, signInWithGoogle } = useAuth();
  const [tab, setTab] = useState<"due" | "saved">("due");
  const stats = useStudyStats();
  const { list: saved } = useBookmarks();

  if (status === "loading") return <div className="ink-block h-64 animate-pulse" aria-hidden="true" />;

  if (status !== "signed-in") {
    return (
      <section className="ink-block motion-enter max-w-3xl space-y-5 p-6 sm:p-8">
        <span className="invite-lock flex size-11 items-center justify-center rounded-sm border-2 border-edge bg-accent" aria-hidden="true">
          <LockOpen className="size-5" />
        </span>
        <h1 className="text-4xl">Your revision queue</h1>
        <p className="max-w-xl text-foreground/80">
          Every question you miss comes back here after 1, 3, 7, 14 and 30 days until it sticks, alongside the questions you
          saved. Sign in so StudyFlow can remember them for you.
        </p>
        {status !== "unavailable" && (
          <ActionBlockButton onClick={() => void signInWithGoogle()} tone="forest" label="Free with Google" title="Sign in to start" arrow="right" />
        )}
      </section>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl sm:text-5xl">Revise</h1>
        <div className="ink-segmented w-fit" role="tablist" aria-label="Revision lists">
          <button type="button" role="tab" aria-selected={tab === "due"} className="ink-segment" onClick={() => setTab("due")}>
            Due now · {stats.ready ? stats.due.length : "…"}
          </button>
          <button type="button" role="tab" aria-selected={tab === "saved"} className="ink-segment" onClick={() => setTab("saved")}>
            Saved · {saved.length}
          </button>
        </div>
      </header>
      {tab === "due" ? (
        stats.ready ? <DueRound key={stats.due.map((d) => d.question_id).join(",")} ids={stats.due.map((d) => d.question_id)} /> : <div className="ink-block h-48 animate-pulse" aria-hidden="true" />
      ) : (
        <SavedList />
      )}
    </div>
  );
}

function DueRound({ ids }: { ids: string[] }) {
  const { user } = useAuth();
  const questions = useQuestions(ids);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | boolean | string | null>(null);
  const [typed, setTyped] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions === null) return <div className="ink-block h-48 animate-pulse" aria-hidden="true" />;

  if (questions.length === 0 || finished) {
    return (
      <section className="ink-block motion-enter space-y-4 p-6 sm:p-8">
        <span className="flex size-11 items-center justify-center rounded-sm border-2 border-[var(--primary-edge)] bg-primary text-primary-foreground" aria-hidden="true">
          <CheckCheck className="motion-pop size-5" />
        </span>
        <h2 className="text-3xl">{finished ? `Done: ${correctCount} of ${questions.length} right` : "Nothing due right now"}</h2>
        <p className="text-foreground/80">
          {finished
            ? "Right answers move further out; misses come back tomorrow."
            : "Missed questions land here a day later. Do a few MCQ rounds and come back."}
        </p>
        <ActionBlock href="/" tone="accent" label="Back to" title="Your outline" />
      </section>
    );
  }

  const q = questions[idx];
  const answered = picked !== null;
  const isRight =
    q.mode === "fill"
      ? typeof picked === "string" &&
        [String(q.answer), ...(q.alt ?? [])].some((a) => a.toLowerCase() === String(picked).trim().toLowerCase())
      : picked === q.answer;

  const submit = (value: number | boolean | string) => {
    if (answered) return;
    setPicked(value);
    const right =
      q.mode === "fill"
        ? [String(q.answer), ...(q.alt ?? [])].some((a) => a.toLowerCase() === String(value).trim().toLowerCase())
        : value === q.answer;
    if (right) setCorrectCount((n) => n + 1);
    const supabase = getSupabase();
    if (supabase && user) {
      void updateReviewQueue(supabase, user.id, q.subjectId, [{ questionId: q.id, topicId: q.topicId, correct: right }]);
    }
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      setFinished(true);
      notifyStudyDataChanged();
      return;
    }
    setIdx(idx + 1);
    setPicked(null);
    setTyped("");
  };

  const stateOf = (value: number | boolean): OptionState => {
    if (!answered) return "idle";
    if (value === q.answer) return "correct";
    if (value === picked) return "wrong";
    return "muted";
  };

  return (
    <div className="space-y-5">
      <ProgressLine current={idx + 1} total={questions.length} score={correctCount} />
      <div key={q.id} className="ink-block motion-enter space-y-5 p-4 sm:p-7">
        <p className="ink-label text-primary">
          {q.subjectShort} · {q.topicTitle}
        </p>
        <p className="font-heading text-xl font-semibold leading-snug sm:text-2xl">{q.q.replace(/___/g, "_____")}</p>
        {q.mode === "mcq" && q.options && (
          <div className="motion-options space-y-2.5">
            {q.options.map((opt, i) => (
              <OptionBlock key={i} index={i} marker={String.fromCharCode(65 + i)} state={stateOf(i)} disabled={answered} onClick={() => submit(i)}>
                {opt}
              </OptionBlock>
            ))}
          </div>
        )}
        {q.mode === "tf" && (
          <div className="motion-options grid grid-cols-2 gap-3">
            {[true, false].map((v, i) => (
              <OptionBlock key={String(v)} index={i} marker={v ? "T" : "F"} state={stateOf(v)} disabled={answered} onClick={() => submit(v)}>
                <span className="font-heading font-semibold">{v ? "True" : "False"}</span>
              </OptionBlock>
            ))}
          </div>
        )}
        {q.mode === "fill" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!answered && typed.trim()) submit(typed);
            }}
          >
            <label className="block">
              <span className="ink-label text-muted-foreground">Your answer</span>
              <input
                autoFocus
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                readOnly={answered}
                autoComplete="off"
                spellCheck={false}
                className={cn(
                  "ink-input mt-1.5 font-heading text-base",
                  answered && isRight && "border-[var(--primary-edge)] bg-primary/10",
                  answered && !isRight && "motion-shake border-destructive bg-destructive/10",
                )}
              />
            </label>
            {!answered && (
              <div className="mt-4 flex justify-end">
                <ActionBlockButton type="submit" tone="accent" size="sm" label="Enter" title="Check" disabled={!typed.trim()} />
              </div>
            )}
          </form>
        )}
        {answered && (
          <AnswerNote correct={isRight}>
            {!isRight && q.mode === "fill" && (
              <>
                Answer: <span className="font-heading font-semibold">{String(q.answer)}</span>
                {q.explain && <> · </>}
              </>
            )}
            {q.explain}
          </AnswerNote>
        )}
        {answered && (
          <div className="flex justify-end">
            <ActionBlockButton
              onClick={next}
              tone="forest"
              size="sm"
              label={isRight ? "Pushed further out" : "Back tomorrow"}
              title={idx + 1 >= questions.length ? "Finish" : "Next"}
              arrow="right"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}

function SavedList() {
  const { list, toggle } = useBookmarks();
  const ids = useMemo(() => list.map((b) => b.question_id), [list]);
  const questions = useQuestions(ids);

  if (list.length === 0) {
    return (
      <section className="ink-block motion-enter space-y-3 p-6 sm:p-8">
        <span className="flex size-11 items-center justify-center rounded-sm border-2 border-edge bg-accent" aria-hidden="true">
          <Bookmark className="size-5" />
        </span>
        <h2 className="text-3xl">No saved questions yet</h2>
        <p className="text-foreground/80">Tap the bookmark on any MCQ, blank or true/false question to keep it here.</p>
      </section>
    );
  }
  if (questions === null) return <div className="ink-block h-48 animate-pulse" aria-hidden="true" />;

  return (
    <ul className="space-y-3">
      {questions.map((q, i) => (
        <li key={q.id} className="ink-block motion-row space-y-3 p-4 sm:p-5" style={{ "--i": i } as React.CSSProperties}>
          <div className="flex items-start justify-between gap-3">
            <p className="ink-label text-primary">
              {q.subjectShort} · {q.topicTitle} · {q.mode === "mcq" ? "MCQ" : q.mode === "tf" ? "True / False" : "Fill blank"}
            </p>
            <Hint label="Remove from saved">
              <button type="button" aria-label="Remove from saved" onClick={() => void toggle(q.id, q.subjectId, q.topicId)} className="ink-chip size-8 shrink-0">
                <Trash2 className="size-3.5" aria-hidden="true" />
              </button>
            </Hint>
          </div>
          <p className="font-heading text-lg font-semibold leading-snug">{q.q}</p>
          <p className="text-sm text-foreground/80">
            <span className="ink-label mr-2 text-muted-foreground">Answer</span>
            {q.mode === "mcq" && q.options ? q.options[q.answer as number] : q.mode === "tf" ? (q.answer ? "True" : "False") : String(q.answer)}
          </p>
          <ActionTag href={lessonHref(q.subjectId, q.topicId)} icon={<Repeat2 className="size-3.5" aria-hidden="true" />}>
            Re-read the topic
          </ActionTag>
        </li>
      ))}
    </ul>
  );
}
