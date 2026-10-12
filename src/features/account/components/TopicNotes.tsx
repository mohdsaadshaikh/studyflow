"use client";

import { useEffect, useRef, useState } from "react";
import { Check, LoaderCircle, LockOpen, NotebookPen } from "lucide-react";
import { getSupabase } from "@/lib/supabase/client";
import { useAuth } from "./AuthProvider";
import { useHydrated } from "@/hooks/use-hydrated";
import { ActionBlockButton } from "@/components/system/action-block";

type SaveState = "idle" | "saving" | "saved" | "error";

/** A personal note per topic, autosaved to the account. Guests see an invite. */
export function TopicNotes({ subjectId, topicId }: { subjectId: string; topicId: string }) {
  const { status, user, signInWithGoogle } = useAuth();
  // Auth resolves on the client; holding back until hydration keeps SSR and client trees equal.
  const hydrated = useHydrated();
  const [body, setBody] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [save, setSave] = useState<SaveState>("idle");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase || !user) return;
    let cancelled = false;
    supabase
      .from("notes")
      .select("body")
      .eq("user_id", user.id)
      .eq("subject_id", subjectId)
      .eq("topic_id", topicId)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        setBody(data?.body ?? "");
        setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [user, subjectId, topicId]);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  if (!hydrated || status === "unavailable" || status === "loading") return null;

  if (status !== "signed-in" || !user) {
    return (
      <section className="ink-block flex max-w-4xl flex-wrap items-center justify-between gap-4 p-4 sm:p-5">
        <div className="flex min-w-0 items-start gap-3">
          <span className="invite-lock mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-sm border-2 border-edge bg-accent" aria-hidden="true">
            <LockOpen className="size-4" />
          </span>
          <div>
            <p className="font-heading text-base font-semibold">Your own notes on this topic</p>
            <p className="text-sm text-muted-foreground">Sign in to jot down tricks and mnemonics. They follow you to every device.</p>
          </div>
        </div>
        <ActionBlockButton onClick={() => void signInWithGoogle()} tone="forest" size="sm" label="Free with Google" title="Sign in" arrow="right" />
      </section>
    );
  }

  const onChange = (value: string) => {
    setBody(value);
    setSave("saving");
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(async () => {
      const supabase = getSupabase();
      if (!supabase) return;
      const { error } = await supabase.from("notes").upsert(
        { user_id: user.id, subject_id: subjectId, topic_id: topicId, body: value.slice(0, 20000), updated_at: new Date().toISOString() },
        { onConflict: "user_id,subject_id,topic_id" },
      );
      setSave(error ? "error" : "saved");
    }, 700);
  };

  return (
    <section className="ink-block max-w-4xl overflow-hidden">
      <header className="flex items-center justify-between gap-3 border-b-2 border-edge px-4 py-3 sm:px-5">
        <label htmlFor={`notes-${topicId}`} className="flex items-center gap-2 font-heading text-base font-semibold">
          <NotebookPen className="size-4" aria-hidden="true" />
          Your notes
        </label>
        <span className="ink-label inline-flex items-center gap-1.5 text-muted-foreground" aria-live="polite">
          {save === "saving" && <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" />}
          {save === "saved" && <Check className="motion-draw size-3.5 text-primary" strokeWidth={3} aria-hidden="true" />}
          {save === "saving" ? "Saving" : save === "saved" ? "Saved" : save === "error" ? "Not saved, retrying on next edit" : "Private to you"}
        </span>
      </header>
      <textarea
        id={`notes-${topicId}`}
        value={body}
        disabled={!loaded}
        onChange={(e) => onChange(e.target.value)}
        placeholder={loaded ? "Tricks, mnemonics, things the teacher stressed…" : "Loading your notes…"}
        rows={5}
        className="block w-full resize-y bg-background p-4 text-[15px] leading-relaxed outline-none placeholder:text-muted-foreground focus-visible:bg-card sm:p-5"
      />
    </section>
  );
}
