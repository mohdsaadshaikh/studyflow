// Stable question ids. Content is static TypeScript, so a question is identified by
// where it lives: topic, practice mode and position. Reordering a topic's questions
// changes ids, so append new questions rather than inserting in the middle.

export type QuestionMode = "mcq" | "fill" | "tf";

export function questionId(topicId: string, mode: QuestionMode, index: number): string {
  return `${topicId}:${mode}:${index}`;
}

export function parseQuestionId(id: string): { topicId: string; mode: QuestionMode; index: number } | null {
  const m = /^(.+):(mcq|fill|tf):(\d+)$/.exec(id);
  if (!m) return null;
  return { topicId: m[1], mode: m[2] as QuestionMode, index: Number(m[3]) };
}
