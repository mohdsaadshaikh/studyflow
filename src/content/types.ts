export type MCQ = {
  q: string;
  options: string[];
  answer: number; // index
  explain?: string;
};

export type FillBlank = {
  q: string; // contains "___"
  answer: string;
  alt?: string[]; // accepted alternatives (lowercased)
  explain?: string;
};

export type TF = {
  q: string;
  answer: boolean;
  explain?: string;
};

export type Flashcard = {
  front: string;
  back: string;
};

export type ExampleGroup = {
  title: string;
  items: string[];
};

export type Exercise = {
  problem: string;
  solution: string;
};

export type Topic = {
  id: string;
  number: number;
  title: string;
  /** Optional chapter heading; consecutive topics with the same chapter are grouped in the sidebar. */
  chapter?: string;
  summary: string;
  content: string; // markdown-ish, rendered as styled paragraphs
  mcqs: MCQ[];
  fillBlanks: FillBlank[];
  trueFalse: TF[];
  flashcards: Flashcard[];
  examples?: ExampleGroup[];
  exercises?: Exercise[];
};

export type Semester = {
  id: string; // e.g. "sem-1"
  label: string; // e.g. "Semester 1"
  exam: string; // e.g. "Finals", "Mids"
};

export type Subject = {
  id: string;
  name: string;
  short: string;
  semester: Semester["id"];
  topics: Topic[];
};
