"use client";

import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";

type Client = SupabaseClient<Database>;
type Completed = Record<string, boolean>;

// Same key the guest progress hook uses, so the account and the browser share one store.
export const PROGRESS_STORAGE_KEY = "aict-completed";
// Which account this browser's ticks have already been merged into.
const MERGED_FOR_KEY = "studyflow-progress-merged-for";
// Same-tab change event used by useLocalStorage.
const LOCAL_EVENT = "local-storage-change";

function splitKey(key: string): { subject_id: string; topic_id: string } | null {
  const i = key.indexOf(":");
  if (i <= 0) return null;
  return { subject_id: key.slice(0, i), topic_id: key.slice(i + 1) };
}

function readLocal(): Completed {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}") as Completed;
  } catch {
    return {};
  }
}

function writeLocal(next: Completed) {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage blocked: the account still holds the data */
  }
  window.dispatchEvent(new Event(LOCAL_EVENT));
}

/**
 * Brings this browser and the account into agreement after sign-in.
 * First sign-in on this browser: guest ticks are added to the account (nothing is lost).
 * Later sign-ins: the account wins, so unticks made on another device stick.
 * Returns how many guest ticks were uploaded.
 */
export async function syncProgressOnSignIn(supabase: Client, userId: string): Promise<number> {
  const local = readLocal();
  let uploaded = 0;

  let mergedFor: string | null = null;
  try {
    mergedFor = localStorage.getItem(MERGED_FOR_KEY);
  } catch {
    /* ignore */
  }

  if (mergedFor !== userId) {
    const rows = Object.entries(local)
      .filter(([, done]) => done)
      .map(([key]) => splitKey(key))
      .filter((r): r is { subject_id: string; topic_id: string } => r !== null)
      .map((r) => ({ ...r, user_id: userId, done: true }));
    if (rows.length > 0) {
      const { error } = await supabase.from("progress").upsert(rows, { onConflict: "user_id,subject_id,topic_id" });
      if (error) throw error;
      uploaded = rows.length;
    }
    try {
      localStorage.setItem(MERGED_FOR_KEY, userId);
    } catch {
      /* ignore */
    }
  }

  const { data, error } = await supabase.from("progress").select("subject_id, topic_id, done").eq("user_id", userId);
  if (error) throw error;
  const remote: Completed = {};
  for (const row of data ?? []) {
    if (row.done) remote[`${row.subject_id}:${row.topic_id}`] = true;
  }
  writeLocal(remote);
  return uploaded;
}

/** Saves one tick/untick to the account. */
export async function saveTick(supabase: Client, userId: string, key: string, done: boolean): Promise<void> {
  const parts = splitKey(key);
  if (!parts) return;
  const { error } = await supabase
    .from("progress")
    .upsert({ ...parts, user_id: userId, done, updated_at: new Date().toISOString() }, { onConflict: "user_id,subject_id,topic_id" });
  if (error) throw error;
}

/** On sign-out the browser goes back to being a clean guest. */
export function clearLocalAccountState() {
  try {
    localStorage.removeItem(MERGED_FOR_KEY);
  } catch {
    /* ignore */
  }
  writeLocal({});
}
