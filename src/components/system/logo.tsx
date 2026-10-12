import Link from "next/link";
import { cn } from "@/lib/utils";

/** Study Flow mark: an outlined square holding three bars (the original mark). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn("size-9 shrink-0", className)}>
      <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="6" fill="var(--background)" stroke="var(--edge)" strokeWidth="2.5" />
      <rect className="logo-bar logo-bar-1" x="10" y="12" width="3" height="8" rx="1.5" fill="var(--foreground)" />
      <rect className="logo-bar logo-bar-2" x="14.5" y="9" width="3" height="14" rx="1.5" fill="var(--foreground)" />
      <rect className="logo-bar logo-bar-3" x="19" y="10.5" width="3" height="11" rx="1.5" fill="var(--foreground)" />
    </svg>
  );
}

/** Mark + wordmark, linking home. The bars bounce on hover. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="StudyFlow home" className={cn("logo inline-flex items-center gap-2.5 rounded-md", className)}>
      <LogoMark />
      <span className="font-heading text-[22px] font-bold leading-none tracking-tight">StudyFlow</span>
    </Link>
  );
}
