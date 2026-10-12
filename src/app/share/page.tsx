import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ActionBlock } from "@/components/system/action-block";
import { Logo } from "@/components/system/logo";
import { findSubject, firstLessonHref } from "@/content";
import { parseShare, shareQuery, SHARE_MODE_NAMES } from "@/features/share/share-data";
import { ProgressRule } from "@/features/study/components/shared/ProgressRule";

type Props = PageProps<"/share">;

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const data = parseShare(await searchParams);
  if (!data) return { title: "StudyFlow" };
  const title = `${data.score}/${data.total} on ${data.subjectShort} · StudyFlow`;
  const description = `A classmate scored ${data.score}/${data.total} on ${data.subjectName} ${SHARE_MODE_NAMES[data.mode]}. Practice the same course outline free.`;
  const image = `/share/og?${shareQuery({ ...data, topicId: undefined, ...topicParam(await searchParams) })}`;
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

function topicParam(params: Record<string, string | string[] | undefined>) {
  const tp = Array.isArray(params.tp) ? params.tp[0] : params.tp;
  return tp ? { topicId: tp } : {};
}

export default function SharePage({ searchParams }: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6">
      <Suspense fallback={<div className="ink-block h-96 w-full max-w-xl animate-pulse" aria-hidden="true" />}>
        <ShareCard searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function ShareCard({ searchParams }: Pick<Props, "searchParams">) {
  const data = parseShare(await searchParams);
  if (!data) notFound();
  const subject = findSubject(data.subjectId);
  const pct = Math.round((data.score / data.total) * 100);

  return (
    <div className="ink-block motion-stagger w-full max-w-xl space-y-6 p-6 sm:p-8">
      <div style={{ "--i": 0 } as React.CSSProperties}>
        <Logo />
      </div>
      <div className="space-y-2" style={{ "--i": 1 } as React.CSSProperties}>
        <p className="ink-label text-primary">
          {data.subjectName} · {SHARE_MODE_NAMES[data.mode]}
        </p>
        {data.topicTitle && <p className="font-heading text-lg font-semibold">{data.topicTitle}</p>}
        <p className="font-heading text-7xl font-semibold tabular-nums leading-none">
          {data.score}
          <span className="text-3xl text-muted-foreground"> / {data.total}</span>
        </p>
      </div>
      <div className="space-y-2" style={{ "--i": 2 } as React.CSSProperties}>
        <ProgressRule done={data.score} total={data.total} size="lg" reveal label="Score" />
        <p className="text-lg">
          <span className="font-semibold tabular-nums">{pct}%</span> correct. Think you can beat it?
        </p>
      </div>
      {subject && (
        <div style={{ "--i": 3 } as React.CSSProperties}>
          <ActionBlock
            href={data.mode === "mock" ? `/${subject.id}/mock-test` : firstLessonHref(subject)}
            tone={data.mode === "mock" ? "forest" : "accent"}
            size="lg"
            label="Free · no sign-up needed"
            title={data.mode === "mock" ? `Take the ${subject.short} mock test` : `Practice ${subject.short}`}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
