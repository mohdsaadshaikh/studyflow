import type { Metadata } from "next";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/system/page-skeleton";
import { notFound } from "next/navigation";
import { findSubject, semesters } from "@/content";
import { MockTestRunner } from "@/features/study";

type Props = PageProps<"/[subjectId]/mock-test">;

// Per-subject overrides; everything else gets the default length.
const MOCK_TEST_CONFIG: Record<string, { count: number; minutes: number }> = {
  fe: { count: 50, minutes: 45 },
};
const DEFAULT_CONFIG = { count: 30, minutes: 30 };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subject = findSubject((await params).subjectId);
  return { title: subject ? `${subject.name} Mock Test — StudyFlow` : "StudyFlow" };
}

export default function MockTestPage({ params }: Props) {
  return (
    <Suspense fallback={<PageSkeleton variant="test" />}>
      <MockTest params={params} />
    </Suspense>
  );
}

async function MockTest({ params }: Pick<Props, "params">) {
  const subject = findSubject((await params).subjectId);
  if (!subject) notFound();
  const { count, minutes } = MOCK_TEST_CONFIG[subject.id] ?? DEFAULT_CONFIG;
  const semester = semesters.find((s) => s.id === subject.semester);
  // Only what the runner needs, not every topic's full study content.
  const mockSubject = { id: subject.id, short: subject.short, topics: subject.topics.map((t) => ({ id: t.id, title: t.title, mcqs: t.mcqs })) };

  return (
    <div className="space-y-8 p-4 sm:p-6 md:p-8 lg:p-12">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl">{subject.name} mock test</h1>
        <p className="ink-label text-muted-foreground">
          {semester ? `${semester.label} ${semester.exam} · ` : ""}
          {count} questions · {minutes} minutes · drawn from all {subject.topics.length} topics
        </p>
      </header>
      <MockTestRunner subject={mockSubject} count={count} minutes={minutes} />
    </div>
  );
}
