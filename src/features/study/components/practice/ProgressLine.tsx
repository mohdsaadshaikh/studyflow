import { ProgressRule } from "@/features/study/components/shared/ProgressRule";

export function ProgressLine({ current, total, score }: { current: number; total: number; score?: number }) {
  return (
    <div className="space-y-2">
      <div className="ink-label flex items-center justify-between tabular-nums text-muted-foreground">
        <span>
          Question {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        {score !== undefined && <span>Score {score}</span>}
      </div>
      <ProgressRule done={current - 1} total={total} size="sm" label="Questions answered" />
    </div>
  );
}
