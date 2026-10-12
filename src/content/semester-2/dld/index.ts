import type { Subject } from "@/content/types";
import { topics as numberSystems } from "./chapter-1-number-systems";
import { topics as booleanAlgebra } from "./chapter-2-boolean-algebra";

// Chapters are authored with their own 1..n numbering; number topics
// continuously across the subject so the sidebar reads 01, 02, ... in order.
const topics = [...numberSystems, ...booleanAlgebra].map((t, i) => ({ ...t, number: i + 1 }));

export const digitalLogicDesign: Subject = {
  id: "dld",
  name: "Digital Logic Design",
  short: "DLD",
  semester: "sem-2",
  topics,
};
