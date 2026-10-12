import { subjects } from "@/content";
import { parseQuestionId, questionId, type QuestionMode } from "./questions";

export type BankQuestion = {
  id: string;
  subjectId: string;
  subjectShort: string;
  topicId: string;
  topicTitle: string;
  mode: QuestionMode;
  q: string;
  options?: string[];
  /** mcq: option index; tf: boolean; fill: accepted text */
  answer: number | boolean | string;
  alt?: string[];
  explain?: string;
};

/** Resolves question ids back to their content (server side; content is static). */
export function lookupQuestions(ids: string[]): BankQuestion[] {
  const out: BankQuestion[] = [];
  for (const id of ids) {
    const parsed = parseQuestionId(id);
    if (!parsed) continue;
    for (const s of subjects) {
      const topic = s.topics.find((t) => t.id === parsed.topicId);
      if (!topic) continue;
      const base = { id: questionId(topic.id, parsed.mode, parsed.index), subjectId: s.id, subjectShort: s.short, topicId: topic.id, topicTitle: topic.title, mode: parsed.mode };
      if (parsed.mode === "mcq") {
        const m = topic.mcqs[parsed.index];
        if (m) out.push({ ...base, q: m.q, options: m.options, answer: m.answer, explain: m.explain });
      } else if (parsed.mode === "tf") {
        const t = topic.trueFalse[parsed.index];
        if (t) out.push({ ...base, q: t.q, answer: t.answer, explain: t.explain });
      } else {
        const f = topic.fillBlanks[parsed.index];
        if (f) out.push({ ...base, q: f.q, answer: f.answer, alt: f.alt, explain: f.explain });
      }
      break;
    }
  }
  return out;
}
