"use client";

import { useCallback, useRef, useState } from "react";
import { useRecordAttempt } from "@/features/account/hooks/use-study-data";
import { questionId, type QuestionMode } from "@/features/account/lib/questions";
import type { AnswerResult } from "@/features/account/lib/attempts";

/** Where a practice round happens; lets results be saved and shared. */
export type PracticeContext = {
  subjectId: string;
  subjectShort: string;
  topicId: string;
  topicTitle: string;
};

/**
 * Collects per-question results for one practice round and saves the round to the
 * student's account when it finishes (guests: nothing is sent).
 */
export function useRound(mode: QuestionMode, practice?: PracticeContext) {
  const record = useRecordAttempt();
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [saved, setSaved] = useState(false);
  const finishedRef = useRef(false);

  const answer = useCallback(
    (index: number, correct: boolean) => {
      if (!practice) return;
      setResults((r) => [...r, { questionId: questionId(practice.topicId, mode, index), topicId: practice.topicId, correct }]);
    },
    [mode, practice],
  );

  const finish = useCallback(
    (final: AnswerResult[]) => {
      if (!practice || finishedRef.current) return;
      finishedRef.current = true;
      void record({ subjectId: practice.subjectId, topicId: practice.topicId, mode, results: final }).then((r) =>
        setSaved(r.saved),
      );
    },
    [mode, practice, record],
  );

  const reset = useCallback(() => {
    finishedRef.current = false;
    setResults([]);
    setSaved(false);
  }, []);

  return { results, saved, answer, finish, reset };
}
