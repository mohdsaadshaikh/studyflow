"use client";

import Link from "next/link";
import { Cloud, LockOpen, RotateCcw, Share2 } from "lucide-react";
import { ActionBlockButton } from "@/components/system/action-block";
import { ProgressRule } from "@/features/study/components/shared/ProgressRule";
import { useCountUp } from "@/hooks/use-count-up";
import { useAuth } from "@/features/account";
import type { AnswerResult, AttemptMode } from "@/features/account/lib/attempts";
import { lessonHref } from "@/features/study/lib/modes";
import { shareResult } from "@/features/share/share-result";
import type { PracticeContext } from "./use-round";

function verdict(pct: number): string {
  if (pct >= 90) return "Exam ready on this one.";
  if (pct >= 70) return "Solid. Review the ones you missed.";
  if (pct >= 50) return "Getting there. Read the notes again, then retry.";
  return "Go back to the notes before another round.";
}

const MODE_NAMES: Record<AttemptMode, string> = { mcq: "MCQs", fill: "Fill blanks", tf: "True / False", mock: "Mock test" };

type WeakTopic = { topicId: string; title: string; correct: number; total: number };

/** Topics answered below 60% in this round, worst first. */
function weakTopics(results: AnswerResult[], titles: Record<string, string>): WeakTopic[] {
  const by = new Map<string, { correct: number; total: number }>();
  for (const r of results) {
    const m = by.get(r.topicId) ?? { correct: 0, total: 0 };
    m.total++;
    if (r.correct) m.correct++;
    by.set(r.topicId, m);
  }
  return [...by.entries()]
    .filter(([, m]) => m.correct / m.total < 0.6)
    .map(([topicId, m]) => ({ topicId, title: titles[topicId] ?? topicId, ...m }))
    .sort((a, b) => a.correct / a.total - b.correct / b.total)
    .slice(0, 4);
}

export function ResultCard({
  score,
  total,
  onRetry,
  mode,
  practice,
  subject,
  results = [],
  saved = false,
  topicTitles,
}: {
  score: number;
  total: number;
  onRetry: () => void;
  mode?: AttemptMode;
  /** Topic practice round (MCQ / fill / T-F) */
  practice?: PracticeContext;
  /** Subject-wide round (mock test) */
  subject?: { id: string; short: string };
  results?: AnswerResult[];
  saved?: boolean;
  topicTitles?: Record<string, string>;
}) {
  const { status, signInWithGoogle } = useAuth();
  const pct = total === 0 ? 0 : Math.round((score / total) * 100);
  const shown = useCountUp(score);
  const subjectId = practice?.subjectId ?? subject?.id;
  const subjectShort = practice?.subjectShort ?? subject?.short;
  const titles = { ...(topicTitles ?? {}), ...(practice ? { [practice.topicId]: practice.topicTitle } : {}) };
  const weak = subjectId ? weakTopics(results, titles) : [];
  const accountOn = status !== "unavailable";

  return (
    <section aria-live="polite" className="ink-block motion-stagger max-w-3xl overflow-hidden">
      <div className="space-y-6 p-6 sm:p-8">
        <p className="ink-label text-muted-foreground" style={{ "--i": 0 } as React.CSSProperties}>
          {mode ? `${MODE_NAMES[mode]} result` : "Result"}
          {practice && ` · ${practice.topicTitle}`}
        </p>
        <p className="font-heading text-7xl font-semibold tabular-nums leading-none" style={{ "--i": 1 } as React.CSSProperties}>
          <span aria-hidden="true">{shown}</span>
          <span className="sr-only">{score}</span>
          <span className="text-3xl text-muted-foreground"> / {total}</span>
        </p>
        <div className="space-y-2" style={{ "--i": 2 } as React.CSSProperties}>
          <ProgressRule done={score} total={total} size="lg" reveal label="Score" />
          <p className="text-lg">
            <span className="font-semibold tabular-nums">{pct}%</span> · {verdict(pct)}
          </p>
        </div>

        {weak.length > 0 && subjectId && (
          <div className="space-y-2" style={{ "--i": 3 } as React.CSSProperties}>
            <p className="ink-label text-destructive">Revise these</p>
            <ul className="space-y-2">
              {weak.map((w) => (
                <li key={w.topicId}>
                  <Link
                    href={lessonHref(subjectId, w.topicId)}
                    className="ink-interactive ink-paper flex items-center justify-between gap-3 px-3 py-2.5"
                  >
                    <span className="truncate font-heading text-sm font-semibold">{w.title}</span>
                    <span className="ink-label shrink-0 text-destructive">
                      {w.correct}/{w.total} right
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-3" style={{ "--i": 4 } as React.CSSProperties}>
          <ActionBlockButton
            onClick={onRetry}
            tone="accent"
            label="Same set, new attempt"
            title="Try again"
            icon={<RotateCcw className="size-5" aria-hidden="true" />}
          />
          {subjectShort && subjectId && mode && (
            <ActionBlockButton
              onClick={() =>
                void shareResult({ subjectId: subjectId!, subjectShort, score, total, mode, topicId: practice?.topicId })
              }
              tone="paper"
              label="Show your class"
              title="Share result"
              icon={<Share2 className="size-5" aria-hidden="true" />}
            />
          )}
        </div>
      </div>

      {accountOn && subjectId && (
        <div className="border-t-2 border-edge" style={{ "--i": 5 } as React.CSSProperties}>
          {status === "signed-in" ? (
            <p className="ink-label flex items-center gap-2 bg-background px-6 py-3 text-primary sm:px-8">
              <Cloud className={saved ? "motion-pop size-4" : "size-4 animate-pulse"} aria-hidden="true" />
              {saved
                ? results.some((r) => !r.correct)
                  ? "Saved to your history · missed questions added to your revision queue"
                  : "Saved to your history"
                : "Saving to your history…"}
            </p>
          ) : (
            <div className="invite-strip flex flex-wrap items-center justify-between gap-4 bg-background px-6 py-4 sm:px-8">
              <div className="flex min-w-0 items-start gap-3">
                <span className="invite-lock mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-sm border-2 border-edge bg-accent" aria-hidden="true">
                  <LockOpen className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-base font-semibold">Keep this score</p>
                  <p className="text-sm text-muted-foreground">
                    Sign in to save every result, see your weak topics over time, and get missed questions back to revise.
                  </p>
                </div>
              </div>
              <ActionBlockButton onClick={() => void signInWithGoogle()} tone="forest" size="sm" label="Free with Google" title="Sign in" arrow="right" />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
