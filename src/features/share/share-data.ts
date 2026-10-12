import { subjects } from "@/content";

export type ShareMode = "mcq" | "fill" | "tf" | "mock";
const MODES: ShareMode[] = ["mcq", "fill", "tf", "mock"];
export const SHARE_MODE_NAMES: Record<ShareMode, string> = {
  mcq: "MCQs",
  fill: "Fill blanks",
  tf: "True / False",
  mock: "Mock test",
};

export type ShareData = {
  subjectId: string;
  subjectName: string;
  subjectShort: string;
  topicTitle: string | null;
  mode: ShareMode;
  score: number;
  total: number;
};

type Params = Record<string, string | string[] | undefined>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

/**
 * Turns share-link query params into trusted data. Every value is checked against real
 * content, so a crafted link can't put arbitrary text on a page or image from this site.
 */
export function parseShare(params: Params): ShareData | null {
  const subject = subjects.find((s) => s.id === one(params.s));
  const mode = one(params.m) as ShareMode | undefined;
  const score = Number(one(params.sc));
  const total = Number(one(params.t));
  if (!subject || !mode || !MODES.includes(mode)) return null;
  if (!Number.isInteger(score) || !Number.isInteger(total) || total < 1 || total > 200 || score < 0 || score > total) return null;
  const topicId = one(params.tp);
  const topic = topicId ? subject.topics.find((t) => t.id === topicId) : undefined;
  if (topicId && !topic) return null;
  return {
    subjectId: subject.id,
    subjectName: subject.name,
    subjectShort: subject.short,
    topicTitle: topic?.title ?? null,
    mode,
    score,
    total,
  };
}

export function shareQuery(d: { subjectId: string; mode: ShareMode; score: number; total: number; topicId?: string }): string {
  const q = new URLSearchParams({ s: d.subjectId, m: d.mode, sc: String(d.score), t: String(d.total) });
  if (d.topicId) q.set("tp", d.topicId);
  return q.toString();
}
