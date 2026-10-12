import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import { PageSkeleton } from "@/components/system/page-skeleton";
import { findSubject, firstLessonHref } from "@/content";

type Props = PageProps<"/[subjectId]">;

// Sends /<subject> to its first lesson; the param read sits inside <Suspense>.
export default function SubjectPage({ params }: Props) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <GoToFirstLesson params={params} />
    </Suspense>
  );
}

async function GoToFirstLesson({ params }: Pick<Props, "params">): Promise<never> {
  const subject = findSubject((await params).subjectId);
  if (!subject) notFound();
  redirect(firstLessonHref(subject));
}
