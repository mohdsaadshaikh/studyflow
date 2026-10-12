import { parseNotes } from "@/features/study/lib/markdown";
import { renderNoteInline as inline } from "@/features/study/lib/inline";

export function StudyContent({ markdown }: { markdown: string }) {
  const blocks = parseNotes(markdown);
  return (
    <article className="ink-block max-w-4xl space-y-5 p-5 text-[15px] leading-relaxed text-foreground/90 sm:p-8 [&>h2:first-child]:mt-0">
      {blocks.map((b, idx) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={idx} className="mt-10 border-b-2 border-edge pb-3 text-3xl text-foreground sm:text-4xl">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="ink-label mt-7 font-semibold text-primary">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={idx} className="text-foreground/85">
                {inline(b.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={idx} className="space-y-1.5 list-none pl-0">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-[0.6em] size-1.5 shrink-0 rounded-[1px] bg-primary" aria-hidden="true" />
                    <span>{inline(it)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="space-y-1.5 list-none pl-0 counter-reset">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-0.5 w-5 shrink-0 font-heading text-xs font-semibold tabular-nums text-primary">{String(j + 1).padStart(2, "0")}</span>
                    <span>{inline(it)}</span>
                  </li>
                ))}
              </ol>
            );
          case "code":
            return (
              <pre key={idx} tabIndex={0} className="overflow-x-auto rounded-md border-2 border-edge bg-background p-4 font-mono text-[13px] leading-relaxed text-foreground">
                {b.text}
              </pre>
            );
          case "table":
            return (
              <div key={idx} tabIndex={0} className="overflow-x-auto rounded-md border-2 border-edge bg-background">
                <table className="w-full text-sm tabular-nums">
                  <thead>
                    <tr className="bg-secondary">
                      {b.rows[0].map((c, j) => (
                        <th key={j} className="ink-label border-b-2 border-edge px-3 py-2.5 text-left">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.slice(1).map((row, j) => (
                      <tr key={j} className="border-b border-edge/15 last:border-0">
                        {row.map((c, k) => (
                          <td key={k} className="px-3 py-2 align-top">
                            {inline(c)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </article>
  );
}