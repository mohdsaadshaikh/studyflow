"use client";

import { DropdownMenu } from "radix-ui";
import { Cloud, LoaderCircle, LogOut } from "lucide-react";
import { Hint } from "@/components/system/hint";
import { cn } from "@/lib/utils";
import { useAuth } from "./AuthProvider";

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-4 shrink-0", className)}>
      <path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8Z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8Z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z" />
    </svg>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

/** Header control: "Sign in" for guests, avatar menu with sync status when signed in. */
export function AccountButton({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { status, user, syncing, signInWithGoogle, signOut } = useAuth();

  if (status === "unavailable") return null;

  if (status === "loading") {
    return <span className={cn("ink-block block h-10 w-24 animate-pulse", className)} aria-hidden="true" />;
  }

  if (status === "guest" || !user) {
    return (
      <Hint label={compact ? "Sign in to keep your progress on every device" : "Keep your progress on every device"} side="bottom">
        <button
          type="button"
          onClick={() => void signInWithGoogle()}
          aria-label={compact ? "Sign in with Google" : undefined}
          className={cn(
            "ink-interactive ink-paper inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap font-heading text-sm font-semibold",
            compact ? "w-10 justify-center" : "px-3",
            className,
          )}
        >
          <GoogleMark />
          {!compact && "Sign in"}
        </button>
      </Hint>
    );
  }

  const meta = user.user_metadata as { full_name?: string; name?: string; avatar_url?: string; picture?: string };
  const name = meta.full_name ?? meta.name ?? user.email ?? "Student";
  const avatar = meta.avatar_url ?? meta.picture;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label={`Account: ${name}`}
          className={cn("ink-interactive ink-paper inline-flex h-10 items-center gap-2 pl-1 pr-3", className)}
        >
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote Google avatar, tiny and already sized
            <img src={avatar} alt="" referrerPolicy="no-referrer" className="size-7 rounded-sm border-2 border-edge object-cover" />
          ) : (
            <span className="flex size-7 items-center justify-center rounded-sm bg-primary font-heading text-xs font-bold text-primary-foreground">
              {initials(name)}
            </span>
          )}
          <span className="relative flex size-4 items-center justify-center" aria-hidden="true">
            {syncing ? (
              <LoaderCircle className="size-4 animate-spin text-primary" />
            ) : (
              <Cloud className="motion-pop size-4 text-primary" />
            )}
          </span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={8} className="ink-menu w-64">
          <div className="border-b-2 border-edge px-3 py-3">
            <p className="truncate font-heading text-sm font-semibold">{name}</p>
            {user.email && <p className="truncate text-xs text-muted-foreground">{user.email}</p>}
            <p className="ink-label mt-2 inline-flex items-center gap-1.5 text-primary">
              {syncing ? <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" /> : <Cloud className="size-3.5" aria-hidden="true" />}
              {syncing ? "Syncing…" : "Progress synced"}
            </p>
          </div>
          <DropdownMenu.Item
            onSelect={() => void signOut()}
            className="ink-menu-item flex items-center gap-2 px-3 py-2.5 font-heading text-sm font-semibold"
          >
            <LogOut className="size-4" aria-hidden="true" />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
