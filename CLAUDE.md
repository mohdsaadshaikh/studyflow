@AGENTS.md

# StudyFlow: context for Claude sessions

Read `PRODUCT.md` first (users, purpose, binding brand commitments) and `README.md` (structure, accounts, content rules).

## What this is
Exam-prep web app for one BSCS class in Pakistan, shared through the class WhatsApp group. Each subject follows the teacher's course outline: notes, flashcards, MCQs, fill-blanks, true/false, worked exercises, timed mock tests. Semester 2 Mids (Digital Logic Design) is the current exam; Semester 1 is "Mids + Finals" (content not split by exam). Goal: a student walks into the exam having covered every outline topic.

## Hard rules
- Design: follow the ink-block system in `src/app/globals.css` and the primitives in `src/components/system/`. The user decided these personally (see PRODUCT.md "Brand Commitments"): no pure-black outlines, no JetBrains Mono, keep the original three-bar logo + "StudyFlow" wordmark, visible motion everywhere, side-by-side actions share height/anatomy. Use the `impeccable` and `animate` skills for UI work.
- Accounts are optional. Never put study content behind sign-in; account features are perks with gentle invites.
- Content: question ids are `<topicId>:<mode>:<index>`. Append questions; don't insert or reorder existing ones.
- DLD content was written from `raw-content/semester-2/dld/` (class notes + WhatsApp outline). Verify arithmetic and Boolean identities by script when editing it. Use the `humanizer` skill for prose.

## Supabase
- Project `studyflow` (ref `gogjvdhtisjfaszaixda`, region ap-south-1, Free plan, org "mohdsaadshaikh's projects"). The other project in that org, `leads-store`, is unrelated; don't touch it.
- The Supabase MCP server is configured at local scope only, locked to this project.
- Browser-only client; RLS on every table. Run the Supabase advisors after any schema change.
- Google OAuth must be configured by the user in Google Cloud + the Supabase dashboard; secrets never go in the repo or chat.
