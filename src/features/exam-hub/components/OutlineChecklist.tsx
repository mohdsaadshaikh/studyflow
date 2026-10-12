"use client";

import { useId, useState } from "react";
import { Hint } from "@/components/system/hint";
import Link from "next/link";
import { ArrowRight, Check, ListFilter, Timer } from "lucide-react";
import type { NavSubject, NavTopic } from "@/content";
import type { Semester } from "@/content/types";
import { Switch } from "@/components/ui/switch";
import { ActionBlock, ActionTag } from "@/components/system/action-block";
import { progressKey, useCompletedTopics } from "@/features/study/hooks/use-completed-topics";
import { chapterAnchor, groupByChapter } from "@/features/study/lib/chapters";
import { lessonHref } from "@/features/study/lib/modes";
import { ProgressRule } from "@/features/study/components/shared/ProgressRule";
import { cn } from "@/lib/utils";
import { TopicRow } from "./TopicRow";
import { StudyPanel } from "@/features/account/components/StudyPanel";

export type ArchiveEntry = { semester: Semester; href: string; subjects: NavSubject[] };

type Completed = Record<string, boolean>;

function countDone(subject: NavSubject, topics: NavTopic[], completed: Completed): number {
  return topics.filter((t) => completed[progressKey(subject.id, t.id)]).length;
}

export function OutlineChecklist({
  semester,
  subjects,
  archive,
}: {
  semester: Semester;
  subjects: NavSubject[];
  archive: ArchiveEntry[];
}) {
  const { completed, toggle } = useCompletedTopics();
  const [onlyUnticked, setOnlyUnticked] = useState(false);
  const filterId = useId();

  const single = subjects.length === 1 ? subjects[0] : null;
  const title = single ? single.name : `${semester.label} ${semester.exam}`;

  const all = subjects.flatMap((s) => s.topics.map((t) => ({ subject: s, topic: t })));
  const isDone = (s: NavSubject, t: NavTopic) => !!completed[progressKey(s.id, t.id)];
  const total = all.length;
  const done = all.filter(({ subject, topic }) => isDone(subject, topic)).length;
  const next = all.find(({ subject, topic }) => !isDone(subject, topic));
  const continueHref = next ? lessonHref(next.subject.id, next.topic.id) : null;
  const continueLabel = `${done === 0 ? "Start with" : "Continue"}${!single && next ? ` · ${next.subject.short}` : ""}`;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-32 sm:px-6 lg:pb-16">
      {/* Summary: what this exam covers and where you are in it */}
      <section
        aria-labelledby="outline-title"
        className="motion-stagger pb-10 pt-10 sm:pt-14"
      >
        <div className="min-w-0">
        <h1 id="outline-title" style={{ "--i": 0 } as React.CSSProperties} className="max-w-4xl text-balance text-5xl sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p style={{ "--i": 1 } as React.CSSProperties} className="ink-label mt-4 tabular-nums text-muted-foreground">
          {semester.label} · {semester.exam}
          {!single && ` · ${subjects.length} subjects`} · {done} of {total} topics ticked
        </p>
        <div style={{ "--i": 2 } as React.CSSProperties}>
          <ProgressRule done={done} total={total} size="lg" reveal label={`${title} progress`} className="mt-5" />
        </div>
        <div style={{ "--i": 3 } as React.CSSProperties} className="mt-7 grid gap-3 sm:grid-cols-[minmax(0,auto)_auto] sm:justify-start [&>*]:h-full">
          {next && continueHref ? (
            <ActionBlock href={continueHref} tone="accent" size="lg" label={continueLabel} title={next.topic.title} className="motion-nudge" />
          ) : (
            <div className="ink-block ink-forest px-5 py-4">
              <p className="ink-label opacity-80">All {total} topics ticked</p>
              <p className="font-heading text-lg font-semibold">Time for a full mock test.</p>
            </div>
          )}
          {single && (
            <ActionBlock
              href={`/${single.id}/mock-test`}
              tone="forest"
              size="lg"
              label="Timed practice"
              title="Mock test"
              icon={<Timer className="size-5" aria-hidden="true" />}
              className="sm:min-w-56"
            />
          )}
        </div>
        </div>
      </section>

      <div className="mb-10">
        <StudyPanel subjects={subjects} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        {/* The outline */}
        <div className="min-w-0 space-y-10">
          {subjects.map((subject, si) => (
            <SubjectOutline
              key={subject.id}
              subject={subject}
              showHeading={!single}
              defaultOpen={single !== null || si === 0}
              completed={completed}
              onlyUnticked={onlyUnticked}
              onToggle={toggle}
            />
          ))}
        </div>

        {/* Desktop rail */}
        <aside className="hidden lg:block" aria-label="Outline tools">
          <div className="ink-block sticky top-6 divide-y-2 divide-edge">
            <div className="flex items-center justify-between gap-3 p-4">
              <label htmlFor={filterId} className="font-heading text-sm font-semibold">
                Only unticked
              </label>
              <Switch id={filterId} checked={onlyUnticked} onCheckedChange={setOnlyUnticked} className="ink-switch" />
            </div>
            <nav aria-label="Jump to" className="space-y-4 p-4">
              {subjects.map((subject) => (
                <div key={subject.id} className="space-y-1">
                  <p className="ink-label flex justify-between gap-3 pb-1 text-muted-foreground">
                    <span>{single ? "Chapters" : subject.name}</span>
                    {!single && <span>{countDone(subject, subject.topics, completed)}/{subject.topics.length}</span>}
                  </p>
                  {groupByChapter(subject.topics).filter((g) => g.chapter).map((g, gi) => {
                    const d = countDone(subject, g.topics, completed);
                    return (
                      <a
                        key={gi}
                        href={`#${chapterAnchor(subject.id, g.chapter, gi)}`}
                        className="-mx-2 flex items-baseline justify-between gap-3 rounded-sm px-2 py-1.5 text-sm hover:bg-secondary"
                      >
                        <span className="truncate">{g.chapter ?? "All topics"}</span>
                        <span className="ink-label shrink-0 text-muted-foreground">
                          {d}/{g.topics.length}
                        </span>
                      </a>
                    );
                  })}
                  {!single && (
                    <ActionTag
                      href={`/${subject.id}/mock-test`}
                      tone="forest"
                      icon={<Timer className="size-3.5" aria-hidden="true" />}
                      className="mt-1"
                    >
                      Mock test
                    </ActionTag>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      {archive.length > 0 && <Archive entries={archive} completed={completed} />}

      {/* Phone action bar: the rail's job, within thumb reach */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t-2 border-edge bg-background px-3 py-3 lg:hidden">
        <div className="mx-auto flex max-w-6xl items-stretch gap-2">
          {continueHref && next ? (
            <ActionBlock
              href={continueHref}
              tone="accent"
              size="sm"
              label={continueLabel}
              title={<span className="block truncate">{next.topic.title}</span>}
              className="min-w-0 flex-1"
            />
          ) : (
            <p className="ink-block ink-forest flex flex-1 items-center px-3 text-sm font-semibold">All ticked</p>
          )}
          <Hint label={onlyUnticked ? "Show all topics" : "Only unticked topics"}>
          <button
            type="button"
            onClick={() => setOnlyUnticked((v) => !v)}
            aria-pressed={onlyUnticked}
            aria-label="Only unticked topics"
            className={cn(
              "ink-interactive flex w-12 items-center justify-center",
              onlyUnticked ? "bg-foreground text-background" : "ink-paper",
            )}
          >
            <ListFilter className="size-4" aria-hidden="true" />
          </button>
          </Hint>
          {single && (
            <Hint label="Timed mock test">
            <Link
              href={`/${single.id}/mock-test`}
              aria-label="Mock test"
              className="ink-interactive ink-forest flex w-12 items-center justify-center"
            >
              <Timer className="size-4" aria-hidden="true" />
            </Link>
            </Hint>
          )}
        </div>
      </div>
    </div>
  );
}

function SubjectOutline({
  subject,
  showHeading,
  defaultOpen,
  completed,
  onlyUnticked,
  onToggle,
}: {
  subject: NavSubject;
  showHeading: boolean;
  defaultOpen: boolean;
  completed: Completed;
  onlyUnticked: boolean;
  onToggle: (key: string) => void;
}) {
  const done = countDone(subject, subject.topics, completed);
  const chapters = (
    <div className="space-y-6">
      {groupByChapter(subject.topics).map((g, gi) => {
        const d = countDone(subject, g.topics, completed);
        const visible = onlyUnticked ? g.topics.filter((t) => !completed[progressKey(subject.id, t.id)]) : g.topics;
        const anchor = chapterAnchor(subject.id, g.chapter, gi);
        const complete = d === g.topics.length;
        return (
          <section
            key={gi}
            id={anchor}
            aria-labelledby={`${anchor}-title`}
            className="ink-block reveal-on-scroll scroll-mt-6 overflow-hidden"
          >
            {g.chapter && (
            <header
              key={complete ? "complete" : "open"}
              className={cn("flex items-end justify-between gap-4 border-b-2 border-edge bg-card px-4 py-3", complete && "motion-sweep")}
            >
              <div className="min-w-0">
                <p className="ink-label text-muted-foreground">
                  {subject.short} · {g.topics.length} topics
                </p>
                <h3 id={`${anchor}-title`} className="mt-1 text-xl sm:text-2xl">
                  {g.chapter ?? "Topics"}
                </h3>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5 pb-1">
                {complete ? (
                  <span className="ink-label motion-pop inline-flex items-center gap-1 rounded-sm bg-primary px-2 py-1 text-primary-foreground">
                    <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    Done
                  </span>
                ) : (
                  <span className="font-heading text-sm tabular-nums">
                    {d}/{g.topics.length}
                  </span>
                )}
                <ProgressRule done={d} total={g.topics.length} size="sm" reveal label={`${g.chapter ?? subject.name} progress`} className="w-24" />
              </div>
            </header>
            )}
            {visible.length > 0 ? (
              <ol className="bg-background">
                {visible.map((t, ti) => {
                  const key = progressKey(subject.id, t.id);
                  return (
                    <TopicRow
                      key={t.id}
                      index={ti}
                      subjectId={subject.id}
                      topic={t}
                      done={!!completed[key]}
                      onToggle={() => onToggle(key)}
                    />
                  );
                })}
              </ol>
            ) : (
              <p className="bg-background px-4 py-5 text-sm text-muted-foreground">Everything in this chapter is ticked.</p>
            )}
          </section>
        );
      })}
    </div>
  );

  if (!showHeading) return chapters;

  return (
    <details open={defaultOpen} className="group/subject">
      <summary className="ink-interactive ink-card flex list-none items-center justify-between gap-4 px-4 py-3 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0">
          <span className="ink-label block text-muted-foreground">{subject.short}</span>
          <span className="block truncate font-heading text-2xl font-semibold sm:text-3xl">{subject.name}</span>
        </span>
        <span className="flex shrink-0 items-center gap-3">
          <span className="font-heading text-sm tabular-nums">
            {done}/{subject.topics.length}
          </span>
          <ArrowRight className="size-5 transition-transform duration-200 group-open/subject:rotate-90" aria-hidden="true" />
        </span>
      </summary>
      <div className="details-body pt-4">{chapters}</div>
    </details>
  );
}

function Archive({ entries, completed }: { entries: ArchiveEntry[]; completed: Completed }) {
  return (
    <section aria-labelledby="archive-title" className="mt-16">
      <h2 id="archive-title" className="text-2xl sm:text-3xl">
        Other exams
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {entries.map(({ semester, href, subjects }) => {
          const total = subjects.reduce((n, s) => n + s.topics.length, 0);
          const done = subjects.reduce((n, s) => n + countDone(s, s.topics, completed), 0);
          return (
            <li key={semester.id}>
              <Link href={href} className="ink-interactive ink-card reveal-on-scroll group/block flex h-full flex-col gap-3 p-4">
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0">
                    <span className="ink-label block text-muted-foreground">{subjects.map((s) => s.short).join(" · ")}</span>
                    <span className="mt-1 block font-heading text-xl font-semibold">
                      {semester.label} {semester.exam}
                    </span>
                  </span>
                  <ArrowRight className="mt-1 size-5 shrink-0 transition-transform group-hover/block:translate-x-0.5" aria-hidden="true" />
                </span>
                <div className="mt-auto space-y-1.5">
                  <p className="font-heading text-xs tabular-nums text-muted-foreground">
                    {done} of {total} ticked
                  </p>
                  <ProgressRule done={done} total={total} size="sm" label={`${semester.label} ${semester.exam} progress`} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
