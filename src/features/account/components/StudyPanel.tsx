"use client";

import Link from "next/link";
import { ArrowRight, Bookmark, Brain, LockOpen, Repeat2, TrendingUp } from "lucide-react";
import type { NavSubject } from "@/content";
import { ActionBlockButton, ActionTag } from "@/components/system/action-block";
import { lessonHref } from "@/features/study/lib/modes";
import { cn } from "@/lib/utils";
import { useStudyStats } from "../hooks/use-study-data";
import { useBookmarks } from "../hooks/use-bookmarks";
import { useAuth } from "./AuthProvider";

const MODE_SHORT: Record<string, string> = { mcq: "MCQ", fill: "Fill", tf: "T/F", mock: "Mock" };

/**
 * "Your study" strip on the hub: reviews due, score trend, weakest topics.
 * Guests see what it would show, with a sign-in invite (nothing is blocked).
 */
export function StudyPanel({ subjects }: { subjects: NavSubject[] }) {
  const { status, signInWithGoogle } = useAuth();
  const stats = useStudyStats();
  const { list: saved } = useBookmarks();

  if (status === "unavailable" || status === "loading") return null;

  const subjectIds = new Set(subjects.map((s) => s.id));
  const titleOf = new Map(subjects.flatMap((s) => s.topics.map((t) => [t.id, { title: t.title, subjectId: s.id }] as const)));

  if (status !== "signed-in") {
    return (
      <section aria-labelledby="study-panel-title" className="ink-block reveal-on-scroll overflow-hidden">
        <div className="grid gap-px bg-edge/15 sm:grid-cols-3" aria-hidden="true">
          {[
            { icon: Repeat2, label: "Revision queue", value: "Missed questions come back", hint: "1 · 3 · 7 · 14 · 30 days" },
            { icon: TrendingUp, label: "Score history", value: "Every result, trended", hint: "MCQs, blanks, T/F, mocks" },
            { icon: Brain, label: "Weak topics", value: "Know what to revise", hint: "Ranked by your accuracy" },
          ].map((tile) => (
            <div key={tile.label} className="space-y-2 bg-card p-5">
              <p className="ink-label flex items-center gap-1.5 text-muted-foreground">
                <tile.icon className="size-3.5" aria-hidden="true" />
                {tile.label}
              </p>
              <p className="font-heading text-lg font-semibold leading-snug">{tile.value}</p>
              <p className="ink-label text-primary">{tile.hint}</p>
            </div>
          ))}
        </div>
        <div className="invite-strip flex flex-wrap items-center justify-between gap-4 border-t-2 border-edge bg-background px-5 py-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="invite-lock mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-sm border-2 border-edge bg-accent" aria-hidden="true">
              <LockOpen className="size-4" />
            </span>
            <div className="min-w-0">
              <h2 id="study-panel-title" className="font-heading text-base font-semibold">
                Unlock your study tracker
              </h2>
              <p className="text-sm text-muted-foreground">Free with Google. Your ticks so far come with you.</p>
            </div>
          </div>
          <ActionBlockButton onClick={() => void signInWithGoogle()} tone="forest" size="sm" label="Takes 5 seconds" title="Sign in" arrow="right" />
        </div>
      </section>
    );
  }

  const attempts = stats.attempts.filter((a) => subjectIds.has(a.subject_id));
  const recent = attempts.slice(0, 12).reverse();
  const avg = attempts.length ? Math.round((attempts.reduce((n, a) => n + a.score / a.total, 0) / attempts.length) * 100) : null;
  const due = stats.due.filter((d) => subjectIds.has(d.subject_id));
  const weak = stats.accuracy
    .filter((a) => titleOf.has(a.topicId) && a.total >= 3 && a.pct < 70)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 3);

  return (
    <section aria-labelledby="study-panel-title" className="ink-block reveal-on-scroll overflow-hidden">
      <header className="flex items-center justify-between gap-3 border-b-2 border-edge px-5 py-3">
        <h2 id="study-panel-title" className="font-heading text-lg font-semibold">
          Your study
        </h2>
        <ActionTag href="/review" icon={<Bookmark className="size-3.5" aria-hidden="true" />}>
          {saved.length} saved
        </ActionTag>
      </header>
      <div className="grid gap-px bg-edge/15 sm:grid-cols-3">
        {/* Revision queue */}
        <Link href="/review" className="group/tile flex flex-col justify-between gap-3 bg-card p-5 transition-colors hover:bg-secondary">
          <p className="ink-label flex items-center gap-1.5 text-muted-foreground">
            <Repeat2 className="size-3.5" aria-hidden="true" />
            Revision queue
          </p>
          <p className="font-heading text-4xl font-semibold tabular-nums leading-none">
            {stats.ready ? due.length : "–"}
            <span className="ml-2 text-base font-medium text-muted-foreground">due now</span>
          </p>
          <p className="ink-label inline-flex items-center gap-1.5 text-primary">
            {due.length > 0 ? "Review them" : "Nothing due. Nice."}
            {due.length > 0 && <ArrowRight className="size-3.5 transition-transform group-hover/tile:translate-x-1" aria-hidden="true" />}
          </p>
        </Link>

        {/* Score history */}
        <div className="flex flex-col justify-between gap-3 bg-card p-5">
          <p className="ink-label flex items-center justify-between gap-2 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="size-3.5" aria-hidden="true" />
              Score history
            </span>
            {avg !== null && <span>avg {avg}%</span>}
          </p>
          {recent.length > 0 ? (
            <div className="flex h-16 items-end gap-1" role="img" aria-label={`Last ${recent.length} scores, average ${avg}%`}>
              {recent.map((a, i) => {
                const pct = Math.round((a.score / a.total) * 100);
                return (
                  <span
                    key={a.id}
                    title={`${MODE_SHORT[a.mode] ?? a.mode} · ${a.score}/${a.total}`}
                    className={cn(
                      "score-bar flex-1 rounded-t-sm border-2 border-b-0",
                      pct >= 70 ? "border-[var(--primary-edge)] bg-primary" : pct >= 50 ? "border-edge bg-accent" : "border-destructive bg-destructive/20",
                    )}
                    style={{ height: `${Math.max(8, pct)}%`, "--i": i } as React.CSSProperties}
                  />
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Finish an MCQ round or mock test to start your history.</p>
          )}
          <p className="ink-label text-muted-foreground">{attempts.length} rounds saved</p>
        </div>

        {/* Weak topics */}
        <div className="flex flex-col gap-3 bg-card p-5">
          <p className="ink-label flex items-center gap-1.5 text-muted-foreground">
            <Brain className="size-3.5" aria-hidden="true" />
            Weak topics
          </p>
          {weak.length > 0 ? (
            <ul className="space-y-1.5">
              {weak.map((w) => {
                const t = titleOf.get(w.topicId)!;
                return (
                  <li key={w.topicId}>
                    <Link
                      href={lessonHref(t.subjectId, w.topicId)}
                      className="flex items-baseline justify-between gap-3 rounded-sm text-sm hover:underline"
                    >
                      <span className="truncate">{t.title}</span>
                      <span className="ink-label shrink-0 text-destructive">{w.pct}%</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              {stats.accuracy.length === 0 ? "Answer a few questions and your weakest topics show up here." : "No weak spots yet. Keep it up."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
