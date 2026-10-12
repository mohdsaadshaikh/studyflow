import Link from "next/link";
import { Logo } from "@/components/system/logo";
import { AccountButton } from "@/features/account";
import { Hint } from "@/components/system/hint";
import type { Semester } from "@/content/types";

export function semesterHref(semesterId: string, currentSemesterId: string): string {
  return semesterId === currentSemesterId ? "/" : `/semester/${semesterId}`;
}

/** Top bar of the hub: brand on the left, one tab per semester exam on the right. */
export function SemesterTabs({
  semesters,
  activeId,
  currentId,
}: {
  semesters: Semester[];
  activeId: string;
  currentId: string;
}) {
  // Current exam first, then the rest in reverse order (most recent archive first).
  const ordered = [
    ...semesters.filter((s) => s.id === currentId),
    ...semesters.filter((s) => s.id !== currentId).reverse(),
  ];
  return (
    <header className="border-b-2 border-edge">
      {/* Phone: logo and account share the first row, the exam switcher spans the second.
          From sm up: logo left, switcher and account right. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
        <div className="mr-auto">
          <Logo />
        </div>
        <nav aria-label="Exams" className="ink-segmented order-3 w-full *:flex-1 *:text-center sm:order-none sm:w-auto sm:*:flex-none">
          {ordered.map((s) => {
            const active = s.id === activeId;
            return (
              <Hint key={s.id} side="bottom" label={s.id === currentId ? "The exam you are preparing for now" : "Whole course, mids and finals together"}>
                <Link href={semesterHref(s.id, currentId)} aria-current={active ? "page" : undefined} className="ink-segment">
                  {s.label.replace("Semester", "Sem")} · {s.exam}
                </Link>
              </Hint>
            );
          })}
        </nav>
        {/* Same height as the exam switcher beside it */}
        <AccountButton className="h-[2.875rem]" />
      </div>
    </header>
  );
}
