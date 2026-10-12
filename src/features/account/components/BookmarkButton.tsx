"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import { Hint } from "@/components/system/hint";
import { cn } from "@/lib/utils";
import { useBookmarks } from "../hooks/use-bookmarks";
import { inviteToSignIn } from "../lib/invite";
import { useAuth } from "./AuthProvider";

/** Save-for-later toggle on a question. Guests get a sign-in invite instead. */
export function BookmarkButton({ questionId, subjectId, topicId }: { questionId: string; subjectId: string; topicId: string }) {
  const { status, signInWithGoogle } = useAuth();
  const { isSaved, toggle } = useBookmarks();
  const [bumps, setBumps] = useState(0);
  if (status === "unavailable") return null;
  const saved = isSaved(questionId);

  return (
    <Hint label={saved ? "Saved to your review list" : "Save this question"}>
      <button
        type="button"
        aria-pressed={saved}
        aria-label={saved ? "Remove from saved questions" : "Save this question"}
        onClick={async () => {
          if (status !== "signed-in") {
            inviteToSignIn("Sign in to save tricky questions", () => void signInWithGoogle());
            return;
          }
          setBumps((n) => n + 1);
          await toggle(questionId, subjectId, topicId);
        }}
        className={cn("ink-chip size-9 shrink-0", saved && "ink-chip-on")}
      >
        <Bookmark key={bumps} className={cn("size-4", bumps > 0 && "motion-tick")} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
      </button>
    </Hint>
  );
}
