export type ChapterGroup<T> = { chapter?: string; topics: T[] };

/** Splits topics into consecutive runs that share a chapter, keeping their order. */
export function groupByChapter<T extends { chapter?: string }>(topics: T[]): ChapterGroup<T>[] {
  const groups: ChapterGroup<T>[] = [];
  for (const t of topics) {
    const last = groups[groups.length - 1];
    if (last && last.chapter === t.chapter) last.topics.push(t);
    else groups.push({ chapter: t.chapter, topics: [t] });
  }
  return groups;
}

/** Index of a chapter among the subject's chapter groups (matches chapterAnchor on the hub). */
export function chapterIndex(topics: { chapter?: string }[], chapter: string): number {
  return groupByChapter(topics).findIndex((g) => g.chapter === chapter);
}

export function chapterAnchor(subjectId: string, chapter: string | undefined, index: number): string {
  const slug = (chapter ?? `part-${index + 1}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${subjectId}-${slug}`;
}
