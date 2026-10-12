/**
 * Placeholder shown while a page reads its URL params (rarely seen: every route is
 * prerendered). Shaped like the real layout so nothing jumps when content arrives.
 */
export function PageSkeleton({ variant = "lesson" }: { variant?: "lesson" | "hub" | "test" }) {
  return (
    <div className="space-y-7 p-4 sm:p-6 md:p-8 lg:p-12" aria-busy="true" aria-label="Loading">
      <div className="max-w-4xl space-y-4">
        <div className="h-3 w-48 animate-pulse rounded-sm bg-edge/10" />
        <div className="h-12 w-3/4 animate-pulse rounded-sm bg-edge/10 sm:h-16" />
        <div className="h-5 w-1/2 animate-pulse rounded-sm bg-edge/10" />
      </div>
      {variant !== "hub" && <div className="ink-block h-12 w-full max-w-xl animate-pulse sm:w-[36rem]" />}
      <div className="ink-block h-72 max-w-4xl animate-pulse" />
    </div>
  );
}
