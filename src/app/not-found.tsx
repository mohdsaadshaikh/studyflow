import { ActionBlock } from "@/components/system/action-block";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="ink-block motion-stagger w-full max-w-md space-y-5 p-6 sm:p-8">
        <p className="ink-label text-muted-foreground" style={{ "--i": 0 } as React.CSSProperties}>
          Error 404
        </p>
        <h1 className="text-4xl" style={{ "--i": 1 } as React.CSSProperties}>
          This page isn&apos;t in the outline
        </h1>
        <p className="text-foreground/80" style={{ "--i": 2 } as React.CSSProperties}>
          The link may be old or mistyped. Your progress is safe.
        </p>
        <div style={{ "--i": 3 } as React.CSSProperties}>
          <ActionBlock href="/" tone="accent" label="Back to" title="Current exam outline" />
        </div>
      </div>
    </main>
  );
}
