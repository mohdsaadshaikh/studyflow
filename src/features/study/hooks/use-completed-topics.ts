"use client";

import { useCallback } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useAuth } from "@/features/account";
import { PROGRESS_STORAGE_KEY } from "@/features/account/lib/progress-sync";
import { inviteToSignIn } from "@/features/account/lib/invite";

const INVITED_KEY = "studyflow-tick-invite-shown";

/** After a guest's third tick, invite them once to keep progress on every device. */
function maybeInviteAfterTicks(count: number, signIn: () => void) {
  if (count < 3) return;
  try {
    if (localStorage.getItem(INVITED_KEY)) return;
    localStorage.setItem(INVITED_KEY, "1");
  } catch {
    return;
  }
  inviteToSignIn(`Nice, ${count} topics down`, signIn);
}

export function progressKey(subjectId: string, topicId: string): string {
  return `${subjectId}:${topicId}`;
}

/**
 * Per-topic "done" checkmarks. Always stored on this device (so guests keep everything);
 * when signed in, each change is also saved to the account.
 */
export function useCompletedTopics() {
  const [completed, setCompleted] = useLocalStorage<Record<string, boolean>>(PROGRESS_STORAGE_KEY, {});
  const { recordTick, status, signInWithGoogle } = useAuth();
  const toggle = useCallback(
    (key: string) => {
      const next = !completed[key];
      setCompleted((prev) => ({ ...prev, [key]: next }));
      recordTick(key, next);
      if (next && status === "guest") {
        const count = Object.values({ ...completed, [key]: true }).filter(Boolean).length;
        maybeInviteAfterTicks(count, () => void signInWithGoogle());
      }
    },
    [completed, setCompleted, recordTick, status, signInWithGoogle],
  );
  return { completed, toggle };
}
