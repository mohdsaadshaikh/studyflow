import type { Metadata } from "next";
import { Suspense, ViewTransition } from "react";
import { PageSkeleton } from "@/components/system/page-skeleton";
import { notFound, redirect } from "next/navigation";
import { currentSemesterId, findSemester, findSubject, firstLessonHref } from "@/content";
import { TopicView, isMode, lessonHref } from "@/features/study";
import { availableModes } from "@/features/study/lib/modes";
import { chapterAnchor, chapterIndex } from "@/features/study/lib/chapters";

type Props = PageProps<"/[subjectId]/lesson/[topicId]/[[...mode]]">;

// Prerender every topic in every mode it has content for.
export function generateStaticParams({ params }: { params: { subjectId: string } }) {
  const subject = findSubject(params.subjectId);
  if (!subject) return [];
  return subject.topics.flatMap((t) =>
    availableModes(t).map((m) => ({ topicId: t.id, mode: m === "read" ? [] : [m] })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subjectId, topicId } = await params;
  const subject = findSubject(subjectId);
  const topic = subject?.topics.find((t) => t.id === topicId);
  return { title: subject && topic ? `${topic.title} · ${subject.name} — StudyFlow` : "StudyFlow" };
}

// URL params are read inside <Suspense> so client navigations stay instant.
export default function LessonPage({ params }: Props) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Lesson params={params} />
    </Suspense>
  );
}

async function Lesson({ params }: Pick<Props, "params">) {
  const { subjectId, topicId, mode } = await params;
  const subject = findSubject(subjectId);
  if (!subject) notFound();
  const topic = subject.topics.find((t) => t.id === topicId);
  if (!topic) redirect(firstLessonHref(subject));

  const requested = mode?.[0];
  const valid = !mode || (mode.length === 1 && isMode(requested) && availableModes(topic).includes(requested));
  if (!valid) redirect(lessonHref(subject.id, topic.id));

  const semester = findSemester(subject.semester);
  const outlineHref = subject.semester === currentSemesterId ? "/" : `/semester/${subject.semester}`;
  const trail = [
    ...(semester ? [{ href: outlineHref, label: `${semester.label.replace("Semester", "Sem")} ${semester.exam}` }] : []),
    { href: firstLessonHref(subject), label: subject.short },
    ...(topic.chapter
      ? [{ href: `${outlineHref}#${chapterAnchor(subject.id, topic.chapter, chapterIndex(subject.topics, topic.chapter))}`, label: topic.chapter }]
      : []),
    { href: lessonHref(subject.id, topic.id), label: `Topic ${String(topic.number).padStart(2, "0")}` },
  ];
  const index = subject.topics.findIndex((t) => t.id === topic.id);
  const neighbour = (i: number) => {
    const t = subject.topics[i];
    return t ? { id: t.id, title: t.title } : null;
  };

  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      default="none"
    >
      <TopicView
      subject={{ id: subject.id, short: subject.short }}
      topic={topic}
      mode={isMode(requested) ? requested : "read"}
      trail={trail}
      prev={neighbour(index - 1)}
      next={neighbour(index + 1)}
      />
    </ViewTransition>
  );
}
