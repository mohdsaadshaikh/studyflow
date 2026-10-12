import type { ExampleGroup } from "@/content/types";
import { renderEmphasisInline } from "@/features/study/lib/inline";

export function ExamplesView({ groups }: { groups: ExampleGroup[] }) {
  return (
    <div className="max-w-4xl space-y-5">
      {groups.map((g, i) => (
        <section key={i} className="ink-block overflow-hidden">
          <header className="border-b-2 border-edge px-5 py-4 sm:px-6">
            <p className="ink-label text-primary">Example set {String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-1 text-2xl sm:text-3xl">{g.title}</h3>
          </header>
          <ol className="divide-y divide-edge/15 bg-background">
            {g.items.map((it, j) => (
              <li key={j} className="flex gap-4 px-5 py-3 text-[15px] leading-relaxed text-foreground/90 sm:px-6">
                <span className="mt-0.5 shrink-0 font-heading text-xs tabular-nums text-primary">{String(j + 1).padStart(2, "0")}</span>
                <span>{renderEmphasisInline(it)}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
