"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { toast } from "sonner";
import { getSupabase } from "@/lib/supabase/client";
import { useAuth } from "../components/AuthProvider";

export type BookmarkRow = { question_id: string; subject_id: string; topic_id: string; created_at: string };

// One shared store so every bookmark button on the page agrees without refetching.
let rows: BookmarkRow[] = [];
let loadedFor: string | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
const getSnapshot = () => rows;
const EMPTY: BookmarkRow[] = [];

export function useBookmarks() {
  const { user } = useAuth();
  const list = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);

  useEffect(() => {
    const supabase = getSupabase();
    if (!user) {
      if (loadedFor) {
        loadedFor = null;
        rows = [];
        emit();
      }
      return;
    }
    if (!supabase || loadedFor === user.id) return;
    loadedFor = user.id;
    supabase
      .from("bookmarks")
      .select("question_id, subject_id, topic_id, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1000)
      .then(({ data }) => {
        rows = data ?? [];
        emit();
      });
  }, [user]);

  const isSaved = useCallback((questionId: string) => list.some((r) => r.question_id === questionId), [list]);

  const toggle = useCallback(
    async (questionId: string, subjectId: string, topicId: string): Promise<boolean> => {
      const supabase = getSupabase();
      if (!supabase || !user) return false;
      const saved = rows.some((r) => r.question_id === questionId);
      const prev = rows;
      // Optimistic: flip immediately, roll back if the write fails.
      rows = saved
        ? rows.filter((r) => r.question_id !== questionId)
        : [{ question_id: questionId, subject_id: subjectId, topic_id: topicId, created_at: new Date().toISOString() }, ...rows];
      emit();
      const { error } = saved
        ? await supabase.from("bookmarks").delete().eq("user_id", user.id).eq("question_id", questionId)
        : await supabase.from("bookmarks").insert({ user_id: user.id, question_id: questionId, subject_id: subjectId, topic_id: topicId });
      if (error) {
        rows = prev;
        emit();
        toast.error("Couldn't update your saved questions.");
        return saved;
      }
      return !saved;
    },
    [user],
  );

  return { list, isSaved, toggle };
}
