"use client";

import Link from "next/link";
import { AccountButton } from "@/features/account";
import { Hint } from "@/components/system/hint";
import { Logo } from "@/components/system/logo";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Check, Timer } from "lucide-react";
import type { NavSubject } from "@/content";
import type { Semester } from "@/content/types";
import { progressKey } from "@/features/study/hooks/use-completed-topics";
import { groupByChapter } from "@/features/study/lib/chapters";
import { lessonHref } from "@/features/study/lib/modes";
import { ProgressRule } from "@/features/study/components/shared/ProgressRule";
import { cn } from "@/lib/utils";

const ASIDE_CLASS =
  "ink-block m-3 flex h-[calc(100dvh-1.5rem)] w-[17.5rem] shrink-0 flex-col overflow-hidden md:sticky md:top-3";

// Same footprint as the real sidebar, shown while URL data streams in.
export function SidebarFallback() {
  return <aside className={ASIDE_CLASS} aria-hidden="true" />;
}

export function Sidebar({
  nav,
  semesters,
  currentSemesterId,
  completed,
  onToggle,
}: {
  nav: NavSubject[];
  semesters: Semester[];
  currentSemesterId: string;
  completed: Record<string, boolean>;
  onToggle: (key: string) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { subjectId } = useParams<{ subjectId?: string }>();
  const subject = nav.find((s) => s.id === subjectId) ?? nav[0];
  const semester = semesters.find((s) => s.id === subject.semester);
  const semesterSubjects = nav.filter((s) => s.semester === subject.semester);
  const outlineHref = subject.semester === currentSemesterId ? "/" : `/semester/${subject.semester}`;

  const total = subject.topics.length;
  const done = subject.topics.filter((t) => completed[progressKey(subject.id, t.id)]).length;

  const activeId = pathname.match(/\/lesson\/([^\/]+)/)?.[1] || subject.topics[0].id;
  const activeIndex = subject.topics.findIndex((t) => t.id === activeId);
  // Slide direction for topic-to-topic navigation: earlier topics come in from the left.
  const direction = (topicId: string) =>
    subject.topics.findIndex((t) => t.id === topicId) < activeIndex ? "nav-back" : "nav-forward";
  const isMockTest = pathname.endsWith("/mock-test");

  return (
    <aside className={ASIDE_CLASS} style={{ viewTransitionName: "study-sidebar" }}>
      <div className="space-y-3 border-b-2 border-edge p-4">
        <div className="flex items-center justify-between gap-2">
          <Logo />
          <AccountButton compact />
        </div>
        {semester && (
          <Link
            href={outlineHref}
            className="ink-label flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            {semester.label.replace("Semester", "Sem")} {semester.exam} outline
          </Link>
        )}
      </div>

      {/* Subject switcher (this exam's subjects only) */}
      {semesterSubjects.length > 1 && (
        <div className="border-b-2 border-edge p-3">
          <nav aria-label="Subjects" className="ink-segmented">
            {semesterSubjects.map((s) => (
              <Hint key={s.id} label={s.name} side="bottom">
                <Link
                  href={lessonHref(s.id, s.topics[0].id)}
                  aria-current={s.id === subject.id ? "page" : undefined}
                  className="ink-segment min-w-[2.75rem] flex-1 px-2 text-center"
                >
                  {s.short}
                </Link>
              </Hint>
            ))}
          </nav>
        </div>
      )}

      <div className="border-b-2 border-edge p-4">
        <p className="font-heading text-base font-semibold leading-tight">{subject.name}</p>
        <p className="ink-label mt-1 text-muted-foreground">
          {done} of {total} topics ticked
        </p>
        <ProgressRule done={done} total={total} label={`${subject.name} progress`} className="mt-2.5" />
      </div>

      <nav aria-label="Topics" className="flex-1 overflow-y-auto p-2">
        {groupByChapter(subject.topics).map((group, gi) => (
          <div key={gi} className="[&+&]:mt-4">
            {group.chapter && (
              <p className="ink-label px-2.5 pb-1 pt-1 text-primary">{group.chapter}</p>
            )}
            <ul className="space-y-0.5">
              {group.topics.map((t, ti) => {
                const isActive = !isMockTest && t.id === activeId;
                const key = progressKey(subject.id, t.id);
                const isDone = !!completed[key];
                return (
                  <li
                    key={t.id}
                    style={{ "--i": ti } as React.CSSProperties}
                    className={cn(
                      "motion-row flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-secondary",
                      isActive && "bg-secondary font-semibold text-foreground",
                    )}
                    onClick={() => router.push(lessonHref(subject.id, t.id), { transitionTypes: [direction(t.id)] })}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggle(key);
                      }}
                      aria-pressed={isDone}
                      aria-label={isDone ? `Untick ${t.title}` : `Tick ${t.title} as done`}
                      className="ink-tick size-[18px]"
                    >
                      {isDone && <Check className="motion-draw size-3" strokeWidth={3} aria-hidden="true" />}
                    </button>
                    <span className={cn("ink-label w-6 shrink-0", isActive ? "text-foreground" : "text-muted-foreground")}>
                      {String(t.number).padStart(2, "0")}
                    </span>
                    <Link
                      href={lessonHref(subject.id, t.id)}
                      aria-current={isActive ? "page" : undefined}
                      transitionTypes={[direction(t.id)]}
                      onClick={(e) => e.stopPropagation()}
                      title={t.title}
                      className="min-w-0 truncate"
                    >
                      {t.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="border-t-2 border-edge p-3">
        <Link
          href={`/${subject.id}/mock-test`}
          aria-current={isMockTest ? "page" : undefined}
          className="ink-interactive ink-forest ink-label flex w-full items-center justify-center gap-2 px-4 py-3"
        >
          <Timer className="size-4" aria-hidden="true" />
          Mock test
        </Link>
      </div>
    </aside>
  );
}
