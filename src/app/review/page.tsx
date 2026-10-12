import type { Metadata } from "next";
import { currentSemesterId, semesters } from "@/content";
import { ReviewHub } from "@/features/account/components/ReviewHub";
import { SemesterTabs } from "@/features/exam-hub/components/SemesterTabs";

export const metadata: Metadata = { title: "Revise — StudyFlow" };

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <SemesterTabs semesters={semesters} activeId="" currentId={currentSemesterId} />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
        <ReviewHub />
      </main>
    </div>
  );
}
