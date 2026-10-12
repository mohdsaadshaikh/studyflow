"use client";

import { toast } from "sonner";
import { shareQuery, type ShareMode } from "./share-data";

/** Opens the phone's share sheet (WhatsApp etc.), or WhatsApp web on desktop. */
export async function shareResult(d: {
  subjectId: string;
  subjectShort: string;
  mode: ShareMode;
  score: number;
  total: number;
  topicId?: string;
}) {
  const url = `${window.location.origin}/share?${shareQuery(d)}`;
  const text = `I scored ${d.score}/${d.total} on ${d.subjectShort} on StudyFlow. Try it:`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "StudyFlow result", text, url });
      return;
    } catch {
      /* cancelled: fall through to nothing */
      return;
    }
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener,noreferrer");
  toast("Opening WhatsApp…");
}
