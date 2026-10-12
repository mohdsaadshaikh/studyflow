import type { Subject, Topic } from "@/content/types";
import { topics } from "./topics";
import { feExtras } from "./extras";

// Extra MCQs and example sets live in extras.ts and are merged into the base topics here.
const enrichedTopics: Topic[] = topics.map((t) => {
  const extra = feExtras[t.id];
  if (!extra) return t;
  return {
    ...t,
    mcqs: [...t.mcqs, ...(extra.mcqs ?? [])],
    examples: extra.examples,
  };
});

export const functionalEnglish: Subject = {
  id: "fe",
  name: "Functional English",
  short: "FE",
  semester: "sem-1",
  topics: enrichedTopics,
};
