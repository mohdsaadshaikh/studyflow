import { notFound } from "next/navigation";
import { currentSemesterId, findSemester } from "@/content";
import { ExamHub } from "@/features/exam-hub";

export default function Home() {
  const semester = findSemester(currentSemesterId);
  if (!semester) notFound();
  return <ExamHub semester={semester} />;
}
