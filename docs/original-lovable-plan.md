
## AICT Study App — Plan

A single-page study app covering all 19 topics from your AICT outline, with progress tracking, multiple practice modes, and mock tests. Study content will be written at BSc Computer Science depth (not surface-level definitions — includes architecture details, technical reasoning, examples).

### UI / Theme (wisprflow.ai inspired)
- Off-white / warm neutral background, near-black text
- **Sharp edges everywhere** — `border-radius: 0` globally
- Thin 1px hairline borders, generous whitespace
- Mono/sans pairing (e.g. Inter + JetBrains Mono for code/labels)
- Subtle hover states, no shadows, no gradients
- High-contrast accent (single dark color) for CTAs and progress

### App Structure (single page, sidebar nav)

```text
┌─────────────────┬──────────────────────────────────┐
│ AICT            │  Topic title                     │
│                 │  ──────────────────────────────  │
│ ▢ 1. Intro      │  [Read] [Flashcards] [MCQ]       │
│ ▣ 2. Computer.. │  [Fill-blanks] [True/False]      │
│ ▢ 3. Storage    │                                  │
│ ...             │  Content area                    │
│ ─────────────   │                                  │
│ Mock Tests      │                                  │
│ Progress: 42%   │                                  │
└─────────────────┴──────────────────────────────────┘
```

### Features

1. **Topic checklist sidebar** — all 19 topics + sub-sections, tick-box progress per topic, overall % bar.
2. **Study material view** — BSc-level notes per topic (definitions, technical depth, diagrams via simple ASCII/SVG, real-world examples).
3. **Practice modes per topic**:
   - MCQs (4 options, instant feedback + explanation)
   - Fill-in-the-blanks (typed answer, fuzzy match)
   - True / False (with reasoning shown after)
   - Flashcards (flip animation, sharp card)
4. **Mock tests** — mixed-format timed tests (e.g. 30 questions / 30 min), score + per-topic breakdown, retry.
5. **Progress persistence** — stored in `localStorage` (topic completion, quiz scores, mock test history). No backend needed for v1.

### Topics covered (from your PDF)
Intro to AICT, Computer Fundamentals, Storage Devices, I/O Devices, IT, Internet, WWW, Networking (Bandwidth/Broadband/Baseband), Protocols & IP, Web Concepts, Servers, E-Commerce, Cyber Security, Modern Tech (Big Data/Cloud/AI), Software (System/App/Utility/Drivers), DBMS, Transitive/Intransitive Networks, Networks (types), Hardware (Transistor/IC/Miniaturization), Binary Coding, Firewall, Client-Server vs P2P.

### Technical implementation

- **Stack**: React + Vite + Tailwind + shadcn (already in project).
- **Routing**: keep single `/` route, use internal state for topic selection + modes. Add `/mock/:id` for test runs.
- **Design tokens**: rewrite `index.css` — set `--radius: 0`, warm off-white bg (`hsl(40 20% 97%)`), near-black fg, single accent. Update `tailwind.config.ts` borderRadius to 0.
- **Data**: typed `topics.ts` array — each topic has `{ id, title, content (MD/JSX), mcqs[], fillBlanks[], trueFalse[], flashcards[] }`. Mock tests pull random questions across topics.
- **Components**: `Sidebar`, `TopicView`, `StudyContent`, `MCQRunner`, `FillBlankRunner`, `TrueFalseRunner`, `FlashcardDeck`, `MockTestRunner`, `ProgressBar`.
- **Persistence**: `useLocalStorage` hook keyed by topic id and test id.
- **No backend** for v1 (no auth, all local). Lovable Cloud can be added later if you want cross-device sync.

### Out of scope for v1
- User accounts / cloud sync
- AI-generated questions (content will be hand-authored)
- Spaced repetition scheduling

### Open questions
1. Roughly how many questions per topic? (suggest: 8 MCQ + 5 fill-blank + 5 T/F + 10 flashcards)
2. Mock test default length? (suggest: 30 questions, 30 min)
3. Want a dark mode toggle, or light-only to match wisprflow?
