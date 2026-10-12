# StudyFlow — BSCS exam prep

Study notes, flashcards, MCQs, fill-in-the-blanks, true/false and timed mock tests for the BSCS program.

- **Semester 1 · Mids + Finals** (whole course; not split by exam): Digital Art, Pakistan Studies, Financial Accounting, Functional English, Applied ICT, Programming Fundamentals, PF Lab
- **Semester 2 · Mids:** Digital Logic Design (Ch 1 Number Systems & Complements, Ch 2 Boolean Algebra)

Next.js 16 (App Router, Cache Components) · React 19 · Tailwind CSS v4 · shadcn/ui (Radix) · Supabase (optional Google sign-in). Guests keep everything in `localStorage`; signing in adds sync and the study tracker.

```bash
npm install
cp .env.example .env.local   # then fill in the Supabase URL + publishable key
npm run dev      # http://localhost:3000
npm run build    # prerenders every topic page
```

## Accounts (Supabase)

Signing in is optional and never blocks anything. Signed-in students get:

- **Sync**: ticked topics follow them across devices (first sign-in merges guest ticks into the account)
- **Score history**: every MCQ / fill-blank / true-false round and mock test is saved
- **Weak-topic radar**: lowest-accuracy topics on the hub and after each result
- **Revision queue** (`/review`): missed questions return after 1, 3, 7, 14, 30 days
- **Bookmarks and notes**: save questions; a private note per topic
- **Shareable result card**: `/share?...` page with a generated preview image for WhatsApp

How it works:

- Browser-only client (`src/lib/supabase/client.ts`); pages stay static. No server-side session, no proxy.
- Tables: `progress`, `attempts`, `answers`, `review_queue`, `bookmarks`, `notes`, all with row-level security (a student can only read/write their own rows). Schema lives in the Supabase project; types in `src/lib/supabase/database.types.ts`.
- Question ids are `<topicId>:<mcq|fill|tf>:<index>` (`src/features/account/lib/questions.ts`). Append new questions to a topic rather than inserting in the middle, or saved history will point at the wrong question.
- Without the env vars the app runs guest-only and hides every account control.

Google sign-in setup: Google Cloud OAuth client (redirect URI `https://<project-ref>.supabase.co/auth/v1/callback`), then Supabase → Authentication → Providers → Google, and URL Configuration (site URL + `<origin>/**` redirect URLs).

## Folder structure

```text
src/
  app/                          Routes only. Thin: load content, render a feature component.
    [subjectId]/
      layout.tsx                Study shell (sidebar + main) for every subject page
      lesson/[topicId]/[[...mode]]/page.tsx   /dld/lesson/<topic>/<mode?>
      mock-test/page.tsx
  content/                      All study material. Plain data, no React.
    types.ts                    Topic, Subject, Semester, MCQ ...
    index.ts                    Registry: semesters, subjects, findSubject, getNav
    semester-1/<subject>/       index.ts (subject definition) + topics.ts
    semester-2/dld/             index.ts + one file per chapter
  features/account/             Supabase auth, sync, scores, review queue, bookmarks, notes
  features/share/               Share links + validated share data
  features/exam-hub/            Home / semester outline (checklist hub)
  features/study/               The study app itself
    index.ts                    Public exports used by routes
    components/layout/          StudyShell, Sidebar
    components/topic/           TopicView, StudyContent (notes), ExamplesView, ExercisesView
    components/practice/        MCQ, fill-blank, true/false runners, flashcards, shared result UI
    components/mock-test/       Timed mixed-MCQ test
    hooks/                      useCompletedTopics (progress checkmarks)
    lib/                        modes + URL helpers, notes markdown parser, inline formatting
  components/ui/                shadcn/ui components (generated; edit sparingly)
  hooks/                        Generic hooks (use-local-storage, use-mobile)
  lib/utils.ts                  cn()
raw-content/                    Source material the content was written from (outlines, class-note scans)
docs/                           Planning notes
.claude/skills/                 Project design + motion skills (impeccable, taste, animate, ...)
```

## Adding content

**New topic in an existing subject:** add an object to that subject's topics array. The `content` string supports `##`/`###` headings, paragraphs, `-` and `1.` lists, fenced code blocks, `|` tables, `**bold**` and `` `code` ``.

**New subject:**

1. Create `src/content/semester-N/<subject>/topics.ts` exporting `topics: Topic[]`.
2. Create `src/content/semester-N/<subject>/index.ts` exporting a `Subject` with a unique `id`, `short` label and `semester`.
3. Add it to `src/content/semester-N/index.ts`. A new semester also needs an entry in `semesters` in `src/content/index.ts`.

Topics with a `chapter` field are grouped under chapter headings in the sidebar. `/` redirects to `defaultSubjectId` in `src/content/index.ts`.

## Theme

Colors, radius, fonts and the `wf-panel` / `wf-button` / `wf-button-dark` classes live in `src/app/globals.css`: a cream, ink, forest-green and lavender palette with no drop shadows. Fonts are Inter (body), Space Grotesk (h1–h3) and JetBrains Mono (labels), loaded with `next/font` in `src/app/layout.tsx`.
