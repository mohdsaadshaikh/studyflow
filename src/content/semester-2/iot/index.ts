import type { Subject } from "@/content/types";
import { topics as lectures1to4 } from "./lectures-1-4";
import { topics as lectures5to7 } from "./lectures-5-7";

// Lectures are authored with their own 1..n numbering; number topics continuously
// across the subject so the sidebar reads 01, 02, ... in order.
const topics = [...lectures1to4, ...lectures5to7].map((t, i) => ({ ...t, number: i + 1 }));

export const internetOfThings: Subject = {
  id: "iot",
  name: "Internet of Things",
  short: "IoT",
  semester: "sem-2",
  topics,
};
