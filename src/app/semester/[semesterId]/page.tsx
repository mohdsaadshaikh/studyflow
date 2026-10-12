import type { Metadata } from "next";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/system/page-skeleton";
import { notFound, redirect } from "next/navigation";
import { currentSemesterId, findSemester, semesterName, semesters } from "@/content";
import { ExamHub } from "@/features/exam-hub";

type Props = PageProps<"/semester/[semesterId]">;

export function generateStaticParams() {
  return semesters.map((s) => ({ semesterId: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const semester = findSemester((await params).semesterId);
  return { title: semester ? `${semesterName(semester)} outline — StudyFlow` : "StudyFlow" };
}

export default function SemesterPage({ params }: Props) {
  return (
    <Suspense fallback={<PageSkeleton variant="hub" />}>
      <Semester params={params} />
    </Suspense>
  );
}

async function Semester({ params }: Pick<Props, "params">) {
  const { semesterId } = await params;
  if (semesterId === currentSemesterId) redirect("/");
  const semester = findSemester(semesterId);
  if (!semester) notFound();
  return <ExamHub semester={semester} />;
}
