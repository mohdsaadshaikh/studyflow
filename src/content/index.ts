import type { Semester, Subject } from "./types";
import { semester1Subjects } from "./semester-1";
import { semester2Subjects } from "./semester-2";

export type * from "./types";

export const semesters: Semester[] = [
  // Semester 1 content covers the whole course (mid-term and final material together).
  { id: "sem-1", label: "Semester 1", exam: "Mids + Finals" },
  { id: "sem-2", label: "Semester 2", exam: "Mids" },
];

export const subjects: Subject[] = [...semester1Subjects, ...semester2Subjects];

/** The exam currently being prepared for; "/" shows this semester's outline. */
export const currentSemesterId = "sem-2";

export function findSemester(id: string): Semester | undefined {
  return semesters.find((s) => s.id === id);
}

export function semesterName(semester: Semester): string {
  return `${semester.label} ${semester.exam}`;
}

export function subjectsIn(semesterId: string): Subject[] {
  return subjects.filter((s) => s.semester === semesterId);
}

export function findSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export function getDefaultSubject(): Subject {
  return subjectsIn(currentSemesterId)[0] ?? subjects[0];
}

export function firstLessonHref(subject: Subject): string {
  return `/${subject.id}/lesson/${subject.topics[0].id}`;
}

// Lightweight subject/topic index for client navigation, so the sidebar
// doesn't pull every topic's full content into the browser bundle.
export type NavTopic = { id: string; number: number; title: string; chapter?: string };
export type NavSubject = { id: string; name: string; short: string; semester: string; topics: NavTopic[] };

export function getNav(semesterId?: string): NavSubject[] {
  return (semesterId ? subjectsIn(semesterId) : subjects).map((s) => ({
    id: s.id,
    name: s.name,
    short: s.short,
    semester: s.semester,
    topics: s.topics.map((t) => ({ id: t.id, number: t.number, title: t.title, chapter: t.chapter })),
  }));
}
