"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { AccountButton } from "@/features/account";
import { Logo } from "@/components/system/logo";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavSubject } from "@/content";
import type { Semester } from "@/content/types";
import { useCompletedTopics } from "@/features/study/hooks/use-completed-topics";
import { Sidebar, SidebarFallback } from "./Sidebar";

// Reads the URL, so it lives in its own Suspense boundary (required by Cache Components).
function CloseOnNavigate({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  useEffect(() => {
    onNavigate();
  }, [pathname, onNavigate]);
  return null;
}

export function StudyShell({
  nav,
  semesters,
  currentSemesterId,
  children,
}: {
  nav: NavSubject[];
  semesters: Semester[];
  currentSemesterId: string;
  children: React.ReactNode;
}) {
  const { completed, toggle } = useCompletedTopics();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Escape closes the mobile drawer, like any other overlay.
  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeSidebar();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sidebarOpen, closeSidebar]);

  const sidebar = (
    <Suspense fallback={<SidebarFallback />}>
      <Sidebar nav={nav} semesters={semesters} currentSemesterId={currentSemesterId} completed={completed} onToggle={toggle} />
    </Suspense>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Suspense fallback={null}>
        <CloseOnNavigate onNavigate={closeSidebar} />
      </Suspense>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar: hidden on mobile, shown on md and up */}
        <div className="hidden md:flex md:flex-col md:w-72 md:shrink-0">{sidebar}</div>

        {/* Mobile drawer: overlay fades, panel slides on the iOS drawer curve */}
        {sidebarOpen && (
          <div className="motion-fade fixed inset-0 z-30 bg-foreground/40 md:hidden" onClick={closeSidebar} aria-hidden="true" />
        )}
        <div
          className={cn(
            "fixed left-0 top-0 z-40 h-dvh w-[19rem] transition-transform duration-300 ease-[var(--ease-drawer)] motion-reduce:transition-none md:hidden",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
          inert={!sidebarOpen}
        >
          {sidebar}
        </div>

        {/* Main content */}
        <main className="flex w-full min-w-0 flex-1 flex-col md:w-auto">
          {/* Mobile header with menu button */}
          <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b-2 border-edge bg-background px-4 py-3 md:hidden">
            <Logo />
            <div className="flex items-center gap-2">
            <AccountButton compact />
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="ink-interactive ink-paper ink-label inline-flex h-10 items-center gap-2 px-3"
              aria-label={sidebarOpen ? "Close topics" : "Open topics"}
              aria-expanded={sidebarOpen}
            >
              {sidebarOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
              Topics
            </button>
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 overflow-y-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
