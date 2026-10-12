"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { getSupabase } from "@/lib/supabase/client";
import { useAuth } from "../components/AuthProvider";
import {
  fetchDueReviews,
  fetchRecentAttempts,
  fetchTopicAccuracy,
  saveAttempt,
  type AttemptInput,
  type AttemptRow,
  type TopicAccuracy,
} from "../lib/attempts";

// Fired after anything is saved, so every panel showing account data refreshes.
const CHANGED = "studyflow-data-changed";
export function notifyStudyDataChanged() {
  window.dispatchEvent(new Event(CHANGED));
}

/** Returns a function that saves a finished round for signed-in students (no-op for guests). */
export function useRecordAttempt() {
  const { user } = useAuth();
  return useCallback(
    async (input: AttemptInput): Promise<{ saved: boolean }> => {
      const supabase = getSupabase();
      if (!supabase || !user || input.results.length === 0) return { saved: false };
      try {
        await saveAttempt(supabase, user.id, input);
        notifyStudyDataChanged();
        return { saved: true };
      } catch {
        toast.error("Couldn't save this score to your account.");
        return { saved: false };
      }
    },
    [user],
  );
}

export type DueReview = Awaited<ReturnType<typeof fetchDueReviews>>[number];

export type StudyStats = {
  ready: boolean;
  attempts: AttemptRow[];
  accuracy: TopicAccuracy[];
  due: DueReview[];
};

const EMPTY: StudyStats = { ready: false, attempts: [], accuracy: [], due: [] };

/** The signed-in student's scores, topic accuracy and due reviews. Empty for guests. */
export function useStudyStats(): StudyStats & { refresh: () => void } {
  const { user } = useAuth();
  const [stats, setStats] = useState<StudyStats>(EMPTY);
  const [version, setVersion] = useState(0);
  const refresh = useCallback(() => setVersion((v) => v + 1), []);

  useEffect(() => {
    const onChange = () => refresh();
    window.addEventListener(CHANGED, onChange);
    return () => window.removeEventListener(CHANGED, onChange);
  }, [refresh]);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase || !user) return;
    let cancelled = false;
    Promise.all([
      fetchRecentAttempts(supabase, user.id),
      fetchTopicAccuracy(supabase, user.id),
      fetchDueReviews(supabase, user.id),
    ])
      .then(([attempts, accuracy, due]) => {
        if (!cancelled) setStats({ ready: true, attempts, accuracy, due });
      })
      .catch(() => {
        if (!cancelled) setStats((s) => ({ ...s, ready: true }));
      });
    return () => {
      cancelled = true;
    };
  }, [user, version]);

  return { ...(user ? stats : EMPTY), refresh };
}
