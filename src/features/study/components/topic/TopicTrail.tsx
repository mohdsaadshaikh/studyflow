import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ActionBlock } from "@/components/system/action-block";
import { lessonHref } from "@/features/study/lib/modes";

export type TrailLink = { href: string; label: string };
export type Neighbour = { id: string; title: string } | null;

/** Where this topic sits: exam outline, subject, chapter. */
export function TopicBreadcrumb({ items }: { items: TrailLink[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="ink-label flex flex-wrap items-center gap-1 text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.href + i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
            {i === items.length - 1 ? (
              <span className="text-primary">{item.label}</span>
            ) : (
              <Link href={item.href} className="underline-offset-4 hover:text-foreground hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Previous / next topic in outline order. */
export function TopicPager({ subjectId, prev, next }: { subjectId: string; prev: Neighbour; next: Neighbour }) {
  if (!prev && !next) return null;
  return (
    <nav aria-label="Topic navigation" className="grid max-w-4xl gap-3 pt-4 sm:grid-cols-2">
      {prev ? (
        <ActionBlock href={lessonHref(subjectId, prev.id)} transitionTypes={["nav-back"]} tone="paper" arrow="left" label="Previous topic" title={prev.title} className="w-full" />
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <ActionBlock href={lessonHref(subjectId, next.id)} transitionTypes={["nav-forward"]} tone="accent" align="end" label="Next topic" title={next.title} className="w-full" />
      )}
    </nav>
  );
}
