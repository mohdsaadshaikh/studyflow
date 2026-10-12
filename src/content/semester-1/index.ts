import type { Subject } from "@/content/types";
import { digitalArt } from "./digital-art";
import { pakistanStudies } from "./pakistan-studies";
import { financialAccounting } from "./financial-accounting";
import { functionalEnglish } from "./functional-english";
import { appliedIct } from "./aict";
import { programmingFundamentals } from "./programming-fundamentals";
import { pfLab } from "./pf-lab";

// Semester 1 (final exams). Order here is the order shown in the sidebar.
export const semester1Subjects: Subject[] = [
  digitalArt,
  pakistanStudies,
  financialAccounting,
  functionalEnglish,
  appliedIct,
  programmingFundamentals,
  pfLab,
];
