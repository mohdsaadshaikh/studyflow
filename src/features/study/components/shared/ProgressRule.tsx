import { cn } from "@/lib/utils";

/** Thin forest-green rule that fills with progress. Used by the hub, chapters, sidebar and results. */
export function ProgressRule({
  done,
  total,
  size = "md",
  label,
  reveal = false,
  className,
}: {
  done: number;
  total: number;
  size?: "sm" | "md" | "lg";
  /** Accessible name, e.g. "Chapter 1 progress". */
  label: string;
  /** Fill from empty on mount; for rare moments like a result screen. */
  reveal?: boolean;
  className?: string;
}) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      aria-valuetext={`${done} of ${total} done`}
      className={cn(
        "w-full overflow-hidden rounded-full bg-foreground/10",
        size === "sm" && "h-1",
        size === "md" && "h-1.5",
        size === "lg" && "h-2.5",
        className,
      )}
    >
      <div
        className="progress-fill h-full w-full rounded-full bg-primary"
        data-reveal={reveal ? "" : undefined}
        style={{ transform: `translateX(${pct - 100}%)` }}
      />
    </div>
  );
}
