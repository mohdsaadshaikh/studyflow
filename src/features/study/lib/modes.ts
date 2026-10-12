import type { Topic } from "@/content/types";

export const MODES = ["read", "examples", "exercises", "flash", "mcq", "fill", "tf"] as const;

export type Mode = (typeof MODES)[number];

export const MODE_LABELS: Record<Mode, string> = {
  read: "Read",
  examples: "Examples",
  exercises: "Exercises",
  flash: "Flashcards",
  mcq: "MCQs",
  fill: "Fill Blanks",
  tf: "True / False",
};

export function isMode(value: string | undefined): value is Mode {
  return !!value && (MODES as readonly string[]).includes(value);
}

/** Modes a topic actually has content for; examples/exercises are optional. */
export function availableModes(topic: Pick<Topic, "examples" | "exercises">): Mode[] {
  return MODES.filter((m) => {
    if (m === "examples") return !!topic.examples?.length;
    if (m === "exercises") return !!topic.exercises?.length;
    return true;
  });
}

export function lessonHref(subjectId: string, topicId: string, mode: Mode = "read"): string {
  const base = `/${subjectId}/lesson/${topicId}`;
  return mode === "read" ? base : `${base}/${mode}`;
}
