import { Suspense } from "react";
import { currentSemesterId, getNav, semesters, subjects } from "@/content";
import { StudyShell } from "@/features/study";

export function generateStaticParams() {
  return subjects.map((s) => ({ subjectId: s.id }));
}

// The shell needs no URL data, so it stays in the static shell. Each page checks its own
// params (inside <Suspense>) and calls notFound() for an unknown subject.
export default function SubjectLayout({ children }: LayoutProps<"/[subjectId]">) {
  return (
    <StudyShell nav={getNav()} semesters={semesters} currentSemesterId={currentSemesterId}>
      <Suspense fallback={null}>{children}</Suspense>
    </StudyShell>
  );
}
