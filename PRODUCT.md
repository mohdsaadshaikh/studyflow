# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

BSCS (Computer Science) students in one class/section, shared through the class WhatsApp group. Many open it for the first time from a link someone posted, so they have to find their semester and subject without any explanation. The same people come back repeatedly as the exam approaches.

## Product Purpose

Study Flow is an exam-prep companion. For each subject it gives the material as readable notes, then turns it into practice: flashcards, MCQs, fill-in-the-blanks, true/false, worked examples and exercises, and a timed mock test. Success means a student walks into the exam having covered every outline topic and checked themselves on it.

## Positioning

The content follows the class's own course outlines and the teacher's notes, topic by topic. It isn't a generic textbook or question bank, so it lines up with what will actually be examined in this class.

## Operating Context

- Exams come in rounds per semester: mid-terms ("Mids") and finals. Current state: Semester 1 (7 subjects, done) whose content mixes mid-term and final material with no record of which topic belonged to which exam, so it is labelled "Mids + Finals"; Semester 2 Mids (Digital Logic Design chapters 1–2 and Internet of Things lectures 1–7, upcoming).
- One semester's exam is "current" at any time. Older semesters stay available as an archive for revision.
- Three usage modes, all real:
  - phone, short sessions between classes;
  - laptop, long sit-down sessions working through a chapter;
  - night-before cramming, where the fastest path to MCQs, the mock test and unfinished topics matters most.
- Source material: course outline PDFs/texts, WhatsApp-shared outline messages and scanned class notes (`raw-content/`).

## Capabilities and Constraints

- Next.js 16 App Router, Tailwind v4, shadcn/ui (Radix). Static content in TypeScript files under `src/content/`. No backend, no accounts.
- Guests: progress (topics marked done) is stored per browser in localStorage, and nothing is ever blocked behind sign-in.
- Optional Google sign-in (Supabase) adds perks: cross-device sync, score history, weak-topic radar, spaced-repetition revision queue, bookmarks, per-topic notes. Shareable result cards work for everyone. Sign-in is invited at natural moments (third tick, result screen, locked tiles) and never forced.
- Hierarchy: Semester → exam (Mids/Finals) → Subject → (optional Chapter) → Topic → study mode.
- Terminology: "Mids", "Finals", "Mids + Finals" (a semester whose content is not split by exam), subject short codes (DLD, AICT, PF, FE, FA, PS, DA, Lab).
- Undecided: exam dates and countdowns. The user has not supplied dates, so the UI must not invent any.

## Brand Commitments

- Name: "Study Flow".
- Existing visual identity (cream, forest green, lavender CTA; no drop shadows) is kept. The user asked for a better UI/UX, not a rebrand.
- Confirmed by the user during the redesign (binding):
  - The "Continue" button's design language applies to the whole app: outlined flat blocks, a small caption over a bold Space Grotesk line, lift on hover and press on click.
  - No pure-black outlines. Blocks use a palette-matched deep forest edge. Forest-green blocks keep a visible, deeper green border, which must never be removed.
  - No JetBrains Mono anywhere. Space Grotesk for headings, labels and counters, Inter for body, and system monospace only inside code and aligned worked solutions.
  - Visible micro-interactions and motion are wanted everywhere, consistent in style.
  - Actions that sit side by side share height and anatomy; emphasis comes from fill, not size.
  - Logo: an open book (notes plus a circuit trace), not an abstract mark.

## Evidence on Hand

Real course content for 8 subjects in `src/content/`. Course outlines and class-note scans in `raw-content/`. There are no testimonials, usage stats or exam dates, and none should be made up.

## Product Principles

1. The current exam comes first. Opening the app should land a student one tap from the upcoming exam's subjects and their progress.
2. Zero-explanation navigation. A classmate arriving from a WhatsApp link must know where they are (semester, exam, subject, topic) at a glance.
3. Get to practice fast. When time is short, MCQs, the mock test and not-yet-done topics must be reachable in one or two moves.
4. Reading and practice live together. Notes and self-testing for a topic stay side by side, never in separate sections of the app.
5. Phone and laptop are both first-class.
