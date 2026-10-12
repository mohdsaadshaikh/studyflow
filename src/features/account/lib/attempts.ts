"use client";

import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database, Tables } from "@/lib/supabase/database.types";

type Client = SupabaseClient<Database>;

export type AttemptMode = "mcq" | "fill" | "tf" | "mock";

export type AnswerResult = { questionId: string; topicId: string; correct: boolean };

export type AttemptInput = {
  subjectId: string;
  /** null for a mock test that spans the whole subject */
  topicId: string | null;
  mode: AttemptMode;
  results: AnswerResult[];
};

// Spaced repetition: a missed question comes back after 1 day; each correct review
// pushes it further out. After the last step it graduates and leaves the queue.
const STEPS_DAYS = [1, 3, 7, 14, 30];
const DAY_MS = 24 * 60 * 60 * 1000;

function dueIn(days: number): string {
  return new Date(Date.now() + days * DAY_MS).toISOString();
}

/** Applies answers to the review queue: wrong answers enter or restart, right ones advance. */
export async function updateReviewQueue(
  supabase: Client,
  userId: string,
  subjectId: string,
  results: AnswerResult[],
): Promise<void> {
  if (results.length === 0) return;
  const ids = [...new Set(results.map((r) => r.questionId))];
  const { data: existing, error } = await supabase
    .from("review_queue")
    .select("question_id, streak")
    .eq("user_id", userId)
    .in("question_id", ids);
  if (error) throw error;
  const current = new Map((existing ?? []).map((r) => [r.question_id, r.streak]));

  const upserts: Database["public"]["Tables"]["review_queue"]["Insert"][] = [];
  const graduated: string[] = [];
  const now = new Date().toISOString();

  for (const r of results) {
    if (!r.correct) {
      upserts.push({
        user_id: userId,
        question_id: r.questionId,
        subject_id: subjectId,
        topic_id: r.topicId,
        streak: 0,
        interval_days: STEPS_DAYS[0],
        due_at: dueIn(STEPS_DAYS[0]),
        updated_at: now,
      });
    } else if (current.has(r.questionId)) {
      const streak = (current.get(r.questionId) ?? 0) + 1;
      if (streak >= STEPS_DAYS.length) {
        graduated.push(r.questionId);
      } else {
        upserts.push({
          user_id: userId,
          question_id: r.questionId,
          subject_id: subjectId,
          topic_id: r.topicId,
          streak,
          interval_days: STEPS_DAYS[streak],
          due_at: dueIn(STEPS_DAYS[streak]),
          updated_at: now,
        });
      }
    }
  }

  if (upserts.length > 0) {
    const { error: upErr } = await supabase.from("review_queue").upsert(upserts, { onConflict: "user_id,question_id" });
    if (upErr) throw upErr;
  }
  if (graduated.length > 0) {
    const { error: delErr } = await supabase
      .from("review_queue")
      .delete()
      .eq("user_id", userId)
      .in("question_id", graduated);
    if (delErr) throw delErr;
  }
}

/** Saves a finished round: the attempt, every answer, and the review-queue changes. */
export async function saveAttempt(supabase: Client, userId: string, input: AttemptInput): Promise<string> {
  const score = input.results.filter((r) => r.correct).length;
  const total = input.results.length;
  if (total === 0) throw new Error("empty attempt");

  const { data: attempt, error } = await supabase
    .from("attempts")
    .insert({ user_id: userId, subject_id: input.subjectId, topic_id: input.topicId, mode: input.mode, score, total })
    .select("id")
    .single();
  if (error) throw error;

  const { error: ansErr } = await supabase.from("answers").insert(
    input.results.map((r) => ({
      attempt_id: attempt.id,
      user_id: userId,
      question_id: r.questionId,
      topic_id: r.topicId,
      correct: r.correct,
    })),
  );
  if (ansErr) throw ansErr;

  await updateReviewQueue(supabase, userId, input.subjectId, input.results);
  return attempt.id;
}

export type AttemptRow = Tables<"attempts">;

export async function fetchRecentAttempts(supabase: Client, userId: string, limit = 60): Promise<AttemptRow[]> {
  const { data, error } = await supabase
    .from("attempts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data ?? [];
}

export type TopicAccuracy = { topicId: string; correct: number; total: number; pct: number };

/** Accuracy per topic from every answer the student has given (most recent 3000). */
export async function fetchTopicAccuracy(supabase: Client, userId: string): Promise<TopicAccuracy[]> {
  const { data, error } = await supabase
    .from("answers")
    .select("topic_id, correct")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(3000);
  if (error) throw error;
  const map = new Map<string, { correct: number; total: number }>();
  for (const row of data ?? []) {
    const m = map.get(row.topic_id) ?? { correct: 0, total: 0 };
    m.total++;
    if (row.correct) m.correct++;
    map.set(row.topic_id, m);
  }
  return [...map.entries()].map(([topicId, m]) => ({ topicId, ...m, pct: Math.round((m.correct / m.total) * 100) }));
}

export async function fetchDueReviews(supabase: Client, userId: string) {
  const { data, error } = await supabase
    .from("review_queue")
    .select("question_id, subject_id, topic_id, due_at, streak")
    .eq("user_id", userId)
    .lte("due_at", new Date().toISOString())
    .order("due_at", { ascending: true })
    .limit(200);
  if (error) throw error;
  return data ?? [];
}
