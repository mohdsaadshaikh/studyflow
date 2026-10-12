import { ViewTransition } from "react";
import { currentSemesterId, getNav, semesters } from "@/content";
import type { Semester } from "@/content/types";
import { OutlineChecklist, type ArchiveEntry } from "./OutlineChecklist";
import { SemesterTabs, semesterHref } from "./SemesterTabs";

/** A semester exam's outline as a checklist, with the other exams listed underneath. */
export function ExamHub({ semester }: { semester: Semester }) {
  const archive: ArchiveEntry[] = semesters
    .filter((s) => s.id !== semester.id)
    .reverse()
    .map((s) => ({ semester: s, href: semesterHref(s.id, currentSemesterId), subjects: getNav(s.id) }))
    .filter((entry) => entry.subjects.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <SemesterTabs semesters={semesters} activeId={semester.id} currentId={currentSemesterId} />
      <main>
        <ViewTransition
          enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
          exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
          default="none"
        >
          <OutlineChecklist semester={semester} subjects={getNav(semester.id)} archive={archive} />
        </ViewTransition>
      </main>
    </div>
  );
}
