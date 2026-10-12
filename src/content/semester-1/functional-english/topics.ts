import type { Topic } from "@/content/types";

export const topics: Topic[] = [
  {
    id: "phrases",
    number: 1,
    title: "Phrases: Infinitive, Participle, Gerund",
    summary: "Non-finite verb phrases — forms built from verbs that function as nouns, adjectives or adverbs.",
    content: `## Definition
A **phrase** is a group of related words that lacks both a subject and a finite verb and therefore cannot stand alone as a sentence. Three important verb-based phrases use **non-finite** verb forms: the infinitive, the participle and the gerund.

## Infinitive Phrase
An infinitive is the base form of a verb usually preceded by *to* (*to write, to learn*). An **infinitive phrase** = infinitive + objects/modifiers. It can act as a noun, adjective, or adverb.
- **Noun:** *To master English* requires patience.
- **Adjective:** I have a book *to read*.
- **Adverb:** She works hard *to succeed*.

## Participle Phrase
A participle is a verb form used as an adjective. **Present participle** ends in *-ing*; **past participle** usually ends in *-ed/-en*. A participle phrase modifies a noun or pronoun.
- *Walking down the street*, she met an old friend.
- The book *written by Orwell* is famous.

## Gerund Phrase
A gerund is the *-ing* form of a verb used as a **noun**. A gerund phrase functions as subject, object or complement.
- *Reading novels* improves vocabulary. (subject)
- I enjoy *playing chess*. (object)
- Her hobby is *painting landscapes*. (complement)

## Gerund vs. Present Participle
Both end in *-ing* but differ in function: a **gerund** acts as a **noun**; a **present participle** acts as an **adjective** or part of a continuous tense.
- *Swimming* is fun. → gerund (noun, subject).
- The *swimming* child waved. → participle (adjective).`,
    mcqs: [
      { q: "Which phrase functions as a noun?", options: ["Infinitive only", "Gerund only", "Both infinitive and gerund", "Participle only"], answer: 2, explain: "Infinitives can be nouns and gerunds always are." },
      { q: "Identify the gerund: 'Smoking is harmful.'", options: ["Smoking", "is", "harmful", "None"], answer: 0 },
      { q: "'The boy crying loudly is my brother.' — 'crying loudly' is a:", options: ["Gerund phrase", "Participle phrase", "Infinitive phrase", "Noun phrase"], answer: 1 },
      { q: "Choose the infinitive phrase:", options: ["Reading books", "To finish the task", "The broken vase", "Running fast"], answer: 1 },
      { q: "A participle is a verb form used as a(n):", options: ["Noun", "Adjective", "Adverb", "Conjunction"], answer: 1 },
      { q: "'I like swimming.' Here 'swimming' is:", options: ["Participle", "Gerund", "Infinitive", "Finite verb"], answer: 1 },
    ],
    fillBlanks: [
      { q: "A gerund is the ___ form of a verb used as a noun.", answer: "-ing", alt: ["ing"] },
      { q: "An infinitive is usually preceded by the word ___.", answer: "to" },
      { q: "A participle works in a sentence as an ___.", answer: "adjective" },
      { q: "Phrases lack both a subject and a ___ verb.", answer: "finite" },
    ],
    trueFalse: [
      { q: "Every phrase contains a finite verb.", answer: false },
      { q: "An infinitive can act as a noun, adjective, or adverb.", answer: true },
      { q: "Gerunds and present participles share the -ing form.", answer: true },
      { q: "'To learn quickly' is a participle phrase.", answer: false, explain: "It is an infinitive phrase." },
    ],
    flashcards: [
      { front: "Phrase", back: "A group of related words without a subject–finite-verb pair." },
      { front: "Infinitive", back: "Base verb usually preceded by 'to'; functions as noun, adjective or adverb." },
      { front: "Gerund", back: "Verb + -ing used as a noun." },
      { front: "Participle", back: "Verb form used as an adjective (present -ing / past -ed)." },
      { front: "Non-finite verb", back: "A verb form not limited by tense, person or number (infinitive, gerund, participle)." },
    ],
  },
  {
    id: "clauses",
    number: 2,
    title: "Clauses",
    summary: "Independent and dependent clauses — the building blocks of sentences.",
    content: `## Definition
A **clause** is a group of words containing a **subject** and a **finite verb**. Unlike a phrase, a clause has a verb that agrees with its subject.

## Independent (Main) Clause
Expresses a complete thought and can stand alone as a sentence.
- *She writes poetry.*

## Dependent (Subordinate) Clause
Contains a subject and verb but cannot stand alone; it depends on a main clause.
- *Although she was tired*, she kept working.

## Types of Subordinate Clauses
1. **Noun clause** — functions as a noun (subject, object, complement). Often introduced by *that, what, whether, who*.
   - *What he said* surprised everyone.
2. **Adjective (relative) clause** — modifies a noun. Introduced by *who, which, that, whose, whom*.
   - The student *who studies daily* succeeds.
3. **Adverb clause** — modifies a verb, adjective or adverb; expresses time, cause, condition, contrast, purpose, manner.
   - We left *because it was raining*.

## Quick Recognition
- Phrase = no subject + finite verb.
- Clause = subject + finite verb.
- Sentence = at least one independent clause.`,
    mcqs: [
      { q: "A clause must always contain a:", options: ["Conjunction", "Subject and finite verb", "Preposition", "Noun phrase"], answer: 1 },
      { q: "'Although it rained, we played.' The first clause is:", options: ["Independent", "Dependent", "Noun clause", "Relative clause"], answer: 1 },
      { q: "'The book that I bought is new.' 'that I bought' is a(n):", options: ["Noun clause", "Adjective clause", "Adverb clause", "Independent clause"], answer: 1 },
      { q: "Which type of clause functions as a noun?", options: ["Adjective", "Adverb", "Noun", "Main"], answer: 2 },
      { q: "A subordinate clause can stand alone.", options: ["True", "False", "Sometimes", "Only with conjunction"], answer: 1 },
    ],
    fillBlanks: [
      { q: "A clause that expresses a complete thought is ___.", answer: "independent", alt: ["main"] },
      { q: "An adjective clause modifies a ___.", answer: "noun" },
      { q: "Adverb clauses begin with subordinating ___.", answer: "conjunctions" },
      { q: "'What he said' is a ___ clause.", answer: "noun" },
    ],
    trueFalse: [
      { q: "Every sentence must have at least one independent clause.", answer: true },
      { q: "A relative clause modifies a verb.", answer: false },
      { q: "Subordinate clauses are also called dependent clauses.", answer: true },
      { q: "A phrase can have a subject and finite verb.", answer: false },
    ],
    flashcards: [
      { front: "Clause", back: "Group of words with subject and finite verb." },
      { front: "Independent clause", back: "Stands alone; expresses complete thought." },
      { front: "Dependent clause", back: "Cannot stand alone; depends on main clause." },
      { front: "Noun clause", back: "Subordinate clause acting as a noun." },
      { front: "Relative clause", back: "Adjective clause introduced by who/which/that." },
    ],
  },
  {
    id: "sentence-types",
    number: 3,
    title: "Types of Sentence & Conjunctions",
    summary: "Classifying sentences by structure and function; the conjunctions that join them.",
    content: `## Sentence by Function
1. **Declarative** — states a fact. *The sun rises in the east.*
2. **Interrogative** — asks a question. *Where do you live?*
3. **Imperative** — gives a command/request. *Close the door.*
4. **Exclamatory** — expresses strong emotion. *What a beautiful day!*

## Sentence by Structure
1. **Simple** — one independent clause. *She sings.*
2. **Compound** — two or more independent clauses joined by a coordinating conjunction or semicolon. *She sings, and he plays.*
3. **Complex** — one independent + one or more dependent clauses. *She sings when she is happy.*
4. **Compound–Complex** — at least two independent + one or more dependent clauses.

## Conjunctions
- **Coordinating (FANBOYS):** for, and, nor, but, or, yet, so. Join equal grammatical units.
- **Subordinating:** because, although, since, while, if, when, unless… Introduce dependent clauses.
- **Correlative (paired):** either…or, neither…nor, both…and, not only…but also, whether…or.

## Punctuation Tip
Use a comma before a coordinating conjunction joining two independent clauses. No comma is needed when only joining two phrases.`,
    mcqs: [
      { q: "Which is a coordinating conjunction?", options: ["Although", "Because", "But", "Since"], answer: 2 },
      { q: "'She sings when she is happy.' is a:", options: ["Simple sentence", "Compound", "Complex", "Compound-complex"], answer: 2 },
      { q: "Imperative sentences usually:", options: ["Ask questions", "Give commands", "Express emotion", "State facts"], answer: 1 },
      { q: "FANBOYS represents:", options: ["Subordinating conjunctions", "Coordinating conjunctions", "Correlative conjunctions", "Prepositions"], answer: 1 },
      { q: "'Either you study or you fail.' uses a ___ conjunction.", options: ["Coordinating", "Subordinating", "Correlative", "None"], answer: 2 },
    ],
    fillBlanks: [
      { q: "A sentence with one independent clause is a ___ sentence.", answer: "simple" },
      { q: "Coordinating conjunctions are remembered by the acronym ___.", answer: "FANBOYS", alt: ["fanboys"] },
      { q: "Sentences that ask questions are called ___.", answer: "interrogative" },
      { q: "'Not only…but also' is a ___ conjunction pair.", answer: "correlative" },
    ],
    trueFalse: [
      { q: "A complex sentence has two or more independent clauses only.", answer: false },
      { q: "'And' joins equal grammatical units.", answer: true },
      { q: "Exclamatory sentences end with a full stop.", answer: false },
      { q: "Subordinating conjunctions begin dependent clauses.", answer: true },
    ],
    flashcards: [
      { front: "Declarative", back: "Sentence that states a fact." },
      { front: "Compound sentence", back: "Two+ independent clauses joined by coordinator/semicolon." },
      { front: "Complex sentence", back: "One independent + one+ dependent clause." },
      { front: "FANBOYS", back: "for, and, nor, but, or, yet, so." },
      { front: "Correlative conjunction", back: "Paired conjunctions: either/or, neither/nor, both/and." },
    ],
  },
  {
    id: "conditional-sentences",
    number: 4,
    title: "Conditional Sentences",
    summary: "If-clauses expressing real, hypothetical and impossible conditions.",
    content: `## Structure
A conditional has two parts: the **if-clause** (condition) and the **main clause** (result).

## Type 0 — General Truth
Form: *If + present simple, present simple.*
- *If you heat water to 100 °C, it boils.*

## Type 1 — Real / Likely Future
Form: *If + present simple, will + base verb.*
- *If it rains, we will stay home.*

## Type 2 — Unreal / Hypothetical Present
Form: *If + past simple, would + base verb.* Use *were* for all persons.
- *If I were rich, I would travel the world.*

## Type 3 — Impossible Past
Form: *If + past perfect, would have + past participle.*
- *If she had studied, she would have passed.*

## Mixed Conditionals
Combine type 3 condition with type 2 result, or vice versa, to express a present consequence of a past unreal event.
- *If I had taken that job, I would be richer now.*

## Punctuation
When the if-clause comes first, separate it with a comma. When it comes second, no comma is needed.`,
    mcqs: [
      { q: "Which type expresses general scientific truths?", options: ["Type 0", "Type 1", "Type 2", "Type 3"], answer: 0 },
      { q: "'If I _____ you, I would apologise.' Choose the correct verb.", options: ["am", "was", "were", "be"], answer: 2 },
      { q: "Type 3 conditional refers to:", options: ["Future possibility", "Present hypothesis", "Past unreal event", "General truth"], answer: 2 },
      { q: "'If it rains tomorrow, we _____ stay home.' (Type 1)", options: ["will", "would", "would have", "shall have"], answer: 0 },
      { q: "Mixed conditionals usually express:", options: ["Two real events", "Past condition with present result", "Future commands", "General truths"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Type 1 conditional uses present simple + ___ + base verb.", answer: "will" },
      { q: "Type 3 uses past perfect + would have + ___ participle.", answer: "past" },
      { q: "'If I were rich' is a Type ___ conditional.", answer: "2", alt: ["two"] },
      { q: "When the if-clause comes first, place a ___ before the main clause.", answer: "comma" },
    ],
    trueFalse: [
      { q: "Type 0 conditionals state general truths.", answer: true },
      { q: "We use 'was' (not 'were') with all persons in Type 2.", answer: false },
      { q: "Type 3 conditionals describe events that did not happen.", answer: true },
      { q: "A comma is required when the main clause precedes the if-clause.", answer: false },
    ],
    flashcards: [
      { front: "Conditional sentence", back: "Sentence with an if-clause expressing a condition and result." },
      { front: "Type 1", back: "Real future: If + present, will + base." },
      { front: "Type 2", back: "Unreal present: If + past, would + base." },
      { front: "Type 3", back: "Unreal past: If + past perfect, would have + past participle." },
      { front: "Mixed conditional", back: "Past condition with present result (or vice versa)." },
    ],
  },
  {
    id: "uses-of-tenses",
    number: 5,
    title: "Uses of Tenses",
    summary: "Twelve English tenses and their typical communicative uses.",
    content: `## Present
- **Simple present** — habits, general truths, scheduled events. *She works in a bank.*
- **Present continuous** — actions happening now or around now; future arrangements. *I am studying English.*
- **Present perfect** — past actions with present relevance; experience; unfinished time. *I have lived here for five years.*
- **Present perfect continuous** — actions that began in the past and continue. *She has been writing for two hours.*

## Past
- **Simple past** — completed actions at a definite past time. *He visited Lahore in 2020.*
- **Past continuous** — ongoing past action, often interrupted. *I was reading when she called.*
- **Past perfect** — action completed before another past action. *He had left before I arrived.*
- **Past perfect continuous** — duration of an action up to a point in the past.

## Future
- **Simple future** — predictions, promises, spontaneous decisions (will). *I will help you.*
- **Future continuous** — action in progress at a future time. *I will be travelling tomorrow.*
- **Future perfect** — action completed before a future point. *By June, I will have graduated.*
- **Future perfect continuous** — duration up to a future point.

## Be going to
Used for **plans** and **predictions based on present evidence**: *Look at those clouds — it's going to rain.*`,
    mcqs: [
      { q: "'I have lived here for five years.' This is:", options: ["Present perfect", "Past perfect", "Present continuous", "Simple past"], answer: 0 },
      { q: "Which tense expresses habitual action?", options: ["Present continuous", "Simple present", "Past perfect", "Future perfect"], answer: 1 },
      { q: "'By next year, I _____ this course.' (future perfect)", options: ["will finish", "will be finishing", "will have finished", "finish"], answer: 2 },
      { q: "Past continuous is used for:", options: ["Completed past action", "Action in progress in past", "Future plan", "General truth"], answer: 1 },
      { q: "'Be going to' is best for:", options: ["Spontaneous decisions", "Plans and evidence-based predictions", "Habits", "Repeated past actions"], answer: 1 },
    ],
    fillBlanks: [
      { q: "She ___ (write) a letter now. (present continuous)", answer: "is writing" },
      { q: "Use the ___ perfect tense for an action completed before another past action.", answer: "past" },
      { q: "Simple present + 's/es' is used with the ___ person singular.", answer: "third" },
      { q: "By 2030, AI ___ transformed many industries. (future perfect)", answer: "will have" },
    ],
    trueFalse: [
      { q: "Present perfect can describe an unfinished time period.", answer: true },
      { q: "Future continuous shows completed future action.", answer: false },
      { q: "Past continuous often describes an interrupted action.", answer: true },
      { q: "Simple present can describe future scheduled events.", answer: true },
    ],
    flashcards: [
      { front: "Simple present", back: "Habits, facts, scheduled events." },
      { front: "Present perfect", back: "Past actions with present relevance; experiences." },
      { front: "Past perfect", back: "Action completed before another past action." },
      { front: "Future perfect", back: "Action completed before a future point." },
      { front: "Be going to", back: "Plans and evidence-based predictions." },
    ],
  },
  {
    id: "sequence-of-tenses",
    number: 6,
    title: "Sequence of Tenses",
    summary: "Rules for matching the tense of subordinate clauses to the main verb.",
    content: `## Main Rule
The tense of a subordinate clause is generally governed by the tense of the main clause.

## Rule 1 — Main Verb in Present/Future
The subordinate clause may take **any tense** required by sense.
- *He says that he is tired / was tired / will be tired.*

## Rule 2 — Main Verb in Past
The subordinate clause is normally in the **past**.
- *He said that he was tired.*
- *She told me that she had finished.*
- Present → past, present perfect → past perfect, will → would, can → could, may → might.

## Exceptions
1. **Universal/general truths** stay in the present even after a past main verb.
   - *The teacher said that the earth is round.*
2. **Historical facts** stay in the past simple.
   - *We learned that World War II ended in 1945.*
3. **Habitual action** in subordinate clause may stay in present.

## Reported Speech Connection
Sequence of tenses is the foundation of indirect/reported speech. Backshifting verbs (am → was, will → would, have → had) keeps reports grammatically consistent with the past reporting verb.`,
    mcqs: [
      { q: "If the main verb is past, the subordinate verb is normally:", options: ["Present", "Past", "Future", "Imperative"], answer: 1 },
      { q: "'He said that water _____ at 100 °C.'", options: ["boils", "boiled", "had boiled", "will boil"], answer: 0, explain: "Universal truth stays present." },
      { q: "'will' becomes _____ after a past reporting verb.", options: ["shall", "would", "could", "might"], answer: 1 },
      { q: "Backshifting is mainly applied in:", options: ["Direct speech", "Reported speech", "Imperatives", "Questions"], answer: 1 },
      { q: "Historical facts after a past main verb remain in:", options: ["Past simple", "Past perfect", "Present perfect", "Future"], answer: 0 },
    ],
    fillBlanks: [
      { q: "Present perfect normally backshifts to ___ perfect.", answer: "past" },
      { q: "'can' backshifts to ___.", answer: "could" },
      { q: "'may' backshifts to ___.", answer: "might" },
      { q: "Universal truths keep their ___ tense after a past reporting verb.", answer: "present" },
    ],
    trueFalse: [
      { q: "The main clause's tense governs the subordinate clause's tense.", answer: true },
      { q: "Historical facts are backshifted to past perfect.", answer: false },
      { q: "If the main verb is in the present, the subordinate clause may use any tense.", answer: true },
      { q: "'will' becomes 'shall' in reported speech.", answer: false },
    ],
    flashcards: [
      { front: "Sequence of tenses", back: "Rule that the subordinate tense follows from the main tense." },
      { front: "Backshift", back: "Moving verbs one tense back in reported speech." },
      { front: "Universal truth exception", back: "General truths stay in present tense even after a past reporting verb." },
      { front: "will → would", back: "Modal backshift in reported speech." },
      { front: "can → could", back: "Modal backshift in reported speech." },
    ],
  },
  {
    id: "parallelism",
    number: 7,
    title: "Parallelism",
    summary: "Using matching grammatical forms for items in a series, comparison or list.",
    content: `## Definition
**Parallelism** (parallel structure) is the use of the **same grammatical form** for two or more ideas that have the same level of importance. It makes writing balanced, clear and rhythmic.

## Rule
Items joined by **and, or, but**, or correlative conjunctions (*not only…but also, both…and, either…or*) must share the same grammatical form (all nouns, all gerunds, all infinitives, all clauses, etc.).

## Examples
- ✗ *She likes reading, to swim and hiking.*
- ✓ *She likes reading, swimming and hiking.*
- ✗ *The job requires honesty, intelligence and being patient.*
- ✓ *The job requires honesty, intelligence and patience.*

## With Correlatives
Maintain the same form on both sides of paired conjunctions.
- ✓ *He is not only intelligent but also hardworking.*

## In Comparisons
Use parallel structures with *than* and *as*.
- ✓ *To work is better than to beg.*
- ✓ *Working is better than begging.*

## Why It Matters
Parallelism is required in academic writing, professional reports and oratory (think of famous speeches). It improves readability and emphasises the equal weight of ideas.`,
    mcqs: [
      { q: "Choose the parallel sentence:", options: ["She likes to read, swimming and hike.", "She likes reading, swimming and hiking.", "She likes reading, to swim and hike.", "She likes read, swim and hike."], answer: 1 },
      { q: "Parallelism is required for items joined by:", options: ["Prepositions only", "Coordinating and correlative conjunctions", "Subordinating conjunctions only", "Articles"], answer: 1 },
      { q: "Which is parallel? 'The course is interesting, useful and ___.'", options: ["it challenges you", "challenging", "to challenge", "challenge"], answer: 1 },
      { q: "Parallelism mainly improves:", options: ["Spelling", "Tense", "Clarity and balance", "Vocabulary"], answer: 2 },
      { q: "'Not only…but also' requires:", options: ["Different forms on each side", "Same grammatical form on each side", "Verbs only", "Nouns only"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Parallel structure means using the same ___ form for similar ideas.", answer: "grammatical" },
      { q: "Correlative conjunctions like 'either…___' demand parallel structure.", answer: "or" },
      { q: "Comparisons with 'than' and '___' should be parallel.", answer: "as" },
      { q: "Parallelism improves both clarity and ___.", answer: "balance", alt: ["rhythm"] },
    ],
    trueFalse: [
      { q: "Parallelism applies only to lists of nouns.", answer: false },
      { q: "Famous speeches often rely on parallel structure.", answer: true },
      { q: "Mixing infinitives with gerunds in a series is good style.", answer: false },
      { q: "Both sides of 'not only…but also' must share form.", answer: true },
    ],
    flashcards: [
      { front: "Parallelism", back: "Using the same grammatical form for ideas of equal weight." },
      { front: "Trigger words", back: "and, or, but, correlative conjunctions, comparisons." },
      { front: "Faulty parallelism", back: "Mixing forms (e.g., gerund + infinitive) in a series." },
      { front: "Correlative pair", back: "either/or, neither/nor, not only/but also, both/and." },
      { front: "Why use it?", back: "Clarity, balance, rhythm, professional tone." },
    ],
  },
  {
    id: "punctuation",
    number: 8,
    title: "Punctuation Marks",
    summary: "Marks that organise written language and clarify meaning.",
    content: `## Full Stop (Period) .
Ends a declarative or imperative sentence and follows abbreviations (Mr., etc.).

## Comma ,
- Separates items in a series. *I bought apples, oranges and pears.*
- Sets off introductory elements. *However, the plan failed.*
- Before coordinating conjunctions joining independent clauses. *He was tired, but he kept going.*
- Around non-essential information. *My brother, who lives in Karachi, is a doctor.*

## Semicolon ;
Joins two closely related independent clauses without a conjunction. *She loved music; he preferred silence.*

## Colon :
Introduces a list, explanation or quotation. *Bring the following: pen, notebook and ID card.*

## Question Mark ?
Ends a direct question.

## Exclamation Mark !
Indicates strong emotion. Use sparingly in formal writing.

## Apostrophe '
- Possession: *the student's book.*
- Contractions: *don't, it's = it is.*

## Quotation Marks
Enclose direct speech and short titles. Place commas/periods inside the closing quote in American style.

## Dash and Hyphen
- **Dash** sets off a strong break in thought. *The result — much to my surprise — was perfect.*
- **Hyphen** joins words: *well-known author, twenty-one.*

## Parentheses ( )
Add supplementary information. *The capital (Islamabad) lies in the north.*`,
    mcqs: [
      { q: "Which mark joins two independent clauses without a conjunction?", options: ["Comma", "Semicolon", "Colon", "Hyphen"], answer: 1 },
      { q: "An apostrophe can show:", options: ["Possession", "Contraction", "Both", "Neither"], answer: 2 },
      { q: "Which is used to introduce a list?", options: ["Semicolon", "Colon", "Dash", "Apostrophe"], answer: 1 },
      { q: "Non-essential information in a sentence is typically enclosed by:", options: ["Hyphens", "Commas", "Question marks", "Periods"], answer: 1 },
      { q: "'Don't' is an example of an apostrophe used for:", options: ["Possession", "Contraction", "Quotation", "Plural"], answer: 1 },
    ],
    fillBlanks: [
      { q: "A ___ ends a direct question.", answer: "question mark", alt: ["?"] },
      { q: "A ___ joins words like 'well-known'.", answer: "hyphen" },
      { q: "A ___ joins two related independent clauses without a conjunction.", answer: "semicolon" },
      { q: "Direct speech is enclosed in ___ marks.", answer: "quotation" },
    ],
    trueFalse: [
      { q: "Exclamation marks should be used frequently in formal writing.", answer: false },
      { q: "A colon can introduce a list or explanation.", answer: true },
      { q: "Hyphens and dashes serve the same function.", answer: false },
      { q: "Parentheses add supplementary information.", answer: true },
    ],
    flashcards: [
      { front: "Comma", back: "Separates items, clauses and non-essential info." },
      { front: "Semicolon", back: "Links related independent clauses." },
      { front: "Colon", back: "Introduces list, explanation or quotation." },
      { front: "Apostrophe", back: "Shows possession or contraction." },
      { front: "Dash", back: "Marks a strong break or aside." },
    ],
  },
  {
    id: "paragraph-writing",
    number: 9,
    title: "Paragraph Writing",
    summary: "Constructing unified, coherent and well-developed paragraphs.",
    content: `## What Is a Paragraph?
A paragraph is a group of sentences focused on a **single idea**. A well-written paragraph has unity, coherence, adequate development and a clear purpose.

## Structure (TEEL)
1. **Topic sentence** — states the main idea.
2. **Explanation** — clarifies the idea.
3. **Evidence/Example** — supports with facts, statistics or illustration.
4. **Link** — connects the paragraph back to the thesis or to the next paragraph.

## Qualities of a Good Paragraph
- **Unity** — every sentence relates to the topic sentence.
- **Coherence** — sentences flow logically; transitions like *however, therefore, in addition* connect ideas.
- **Adequate development** — enough detail to fully explain the point.
- **Conciseness** — no unnecessary words.

## Types of Paragraphs
- **Descriptive** — paints a picture using sensory details.
- **Narrative** — tells a story or sequence of events.
- **Expository** — explains or informs.
- **Persuasive (argumentative)** — convinces the reader of a viewpoint with evidence.

## Common Mistakes
- More than one main idea per paragraph.
- No topic sentence.
- Abrupt transitions.
- Repetition without new information.

## Process
Plan → Draft → Revise → Edit → Proofread.`,
    mcqs: [
      { q: "The TEEL structure stands for:", options: ["Topic, Evidence, Example, Link", "Topic, Explain, Evidence, Link", "Theme, Example, Effect, Link", "Theme, Evidence, Example, Logic"], answer: 1 },
      { q: "Unity in a paragraph means:", options: ["All sentences relate to one idea", "Sentences are short", "Use of transitions", "Lots of examples"], answer: 0 },
      { q: "A persuasive paragraph mainly aims to:", options: ["Describe", "Narrate", "Convince", "Inform only"], answer: 2 },
      { q: "Coherence is achieved largely through:", options: ["Vocabulary", "Transitions", "Punctuation", "Capital letters"], answer: 1 },
      { q: "A paragraph should ideally have ___ main idea(s).", options: ["One", "Two", "Three", "Many"], answer: 0 },
    ],
    fillBlanks: [
      { q: "The sentence stating the main idea is the ___ sentence.", answer: "topic" },
      { q: "A paragraph that paints a picture using senses is ___.", answer: "descriptive" },
      { q: "Logical flow between sentences is called ___.", answer: "coherence" },
      { q: "TEEL — Topic, Explain, Evidence, ___.", answer: "Link", alt: ["link"] },
    ],
    trueFalse: [
      { q: "A paragraph may safely contain several unrelated ideas.", answer: false },
      { q: "Transitions help paragraph coherence.", answer: true },
      { q: "Narrative paragraphs tell a story.", answer: true },
      { q: "Topic sentences are optional in academic writing.", answer: false },
    ],
    flashcards: [
      { front: "Paragraph", back: "Group of sentences focused on a single idea." },
      { front: "TEEL", back: "Topic, Explain, Evidence, Link." },
      { front: "Unity", back: "All sentences support the main idea." },
      { front: "Coherence", back: "Logical flow created by order and transitions." },
      { front: "Expository paragraph", back: "Paragraph that explains or informs." },
    ],
  },
  {
    id: "vocabulary-context",
    number: 10,
    title: "Vocabulary Development & Contextual Use",
    summary: "Building vocabulary and inferring word meaning from context.",
    content: `## Why Vocabulary Matters
A strong vocabulary improves reading comprehension, writing precision and oral communication. Researchers estimate an educated adult understands 20,000–35,000 word families.

## Strategies for Building Vocabulary
1. **Wide reading** — diverse texts (fiction, journalism, academic).
2. **Word roots, prefixes and suffixes** — Latin/Greek roots unlock thousands of words. *bene-* (good), *mal-* (bad), *tele-* (far).
3. **Word families** — *create, creator, creative, creativity*.
4. **Synonyms & antonyms** — record nuance. *happy = glad, content, joyful, elated.*
5. **Collocations** — words that naturally pair (*make a decision*, not *do a decision*).
6. **Notebooks/flashcards** — spaced repetition.

## Contextual Use
Most words have multiple meanings; **context decides the right one**. Use these clues:
- **Definition clues** — restated within the sentence (often after *is, means, called*).
- **Synonym/antonym clues** — *unlike X, Y means…*.
- **Example clues** — *such as, including, for instance*.
- **Inference** — combining sentence meaning with prior knowledge.

## Connotation vs. Denotation
- **Denotation** — literal dictionary meaning.
- **Connotation** — emotional/cultural associations. *Childlike* (positive) vs. *childish* (negative).

## Register
Choose words that match the situation: formal vs. informal, academic vs. conversational.`,
    mcqs: [
      { q: "The literal meaning of a word is its:", options: ["Connotation", "Denotation", "Collocation", "Inflection"], answer: 1 },
      { q: "'Make a decision' is an example of a:", options: ["Synonym", "Collocation", "Antonym", "Idiom"], answer: 1 },
      { q: "Inferring meaning from surrounding text is called:", options: ["Translation", "Contextual guessing", "Spelling", "Pronunciation"], answer: 1 },
      { q: "The prefix 'tele-' means:", options: ["Small", "Far", "Together", "Under"], answer: 1 },
      { q: "Which pair shows a connotation difference?", options: ["Big / large", "Childlike / childish", "Begin / start", "Quick / fast"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The cultural feeling associated with a word is its ___.", answer: "connotation" },
      { q: "Words that habitually go together are called ___.", answer: "collocations" },
      { q: "The prefix 'bene-' means ___.", answer: "good" },
      { q: "Choosing words to fit formality is called matching the ___.", answer: "register" },
    ],
    trueFalse: [
      { q: "Reading widely is one of the best ways to build vocabulary.", answer: true },
      { q: "All synonyms are perfectly interchangeable.", answer: false },
      { q: "Context can change the meaning of a word.", answer: true },
      { q: "Connotation refers only to dictionary meaning.", answer: false },
    ],
    flashcards: [
      { front: "Denotation", back: "Literal dictionary meaning of a word." },
      { front: "Connotation", back: "Emotional/cultural associations of a word." },
      { front: "Collocation", back: "Words that habitually appear together." },
      { front: "Context clue", back: "Hint within text that helps decode word meaning." },
      { front: "Register", back: "Level of formality appropriate to a situation." },
    ],
  },
  {
    id: "reading-strategies",
    number: 11,
    title: "Reading Strategies",
    summary: "Active techniques for understanding and retaining what you read.",
    content: `## Pre-Reading
- **Preview** the text: title, headings, images, summary.
- **Set a purpose**: are you reading to learn, to evaluate, or for pleasure?
- **Activate prior knowledge** about the topic.

## During Reading
1. **Skimming** — quickly run eyes over the text to grasp the main idea.
2. **Scanning** — search for specific information (a name, date, number).
3. **Intensive reading** — read carefully for full comprehension; analyse arguments.
4. **Extensive reading** — long texts read for general meaning and pleasure (novels, magazines).
5. **SQ3R** — *Survey, Question, Read, Recite, Review.*
6. **Annotate** — underline key ideas, write margin notes, summarise paragraphs.

## Post-Reading
- **Summarise** in your own words.
- **Question** the text — agree, disagree, connect to other knowledge.
- **Reflect** on what is unclear and revisit it.

## Improving Speed and Comprehension
- Read in chunks (groups of words), not single words.
- Avoid sub-vocalisation (silent reading aloud) for general texts.
- Practise daily; track speed (words per minute).

## Adapting Strategy to Text
Choose strategy by purpose: skim a newspaper, scan a directory, read intensively a textbook, read extensively for novels.`,
    mcqs: [
      { q: "Reading quickly to find the main idea is:", options: ["Scanning", "Skimming", "SQ3R", "Annotating"], answer: 1 },
      { q: "SQ3R stands for:", options: ["Survey, Question, Read, Recite, Review", "Skim, Question, Read, Recall, Reflect", "Survey, Quote, Recite, Read, Revise", "Search, Question, Read, Repeat, Reflect"], answer: 0 },
      { q: "Searching for a specific date in a text is:", options: ["Skimming", "Scanning", "Extensive reading", "Reflecting"], answer: 1 },
      { q: "Annotating means:", options: ["Translating", "Marking and noting key ideas", "Summarising at the end", "Reading aloud"], answer: 1 },
      { q: "Extensive reading is best for:", options: ["Detailed analysis", "Pleasure and general meaning", "Memorising data", "Skimming"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Reading slowly for full understanding is ___ reading.", answer: "intensive" },
      { q: "The 'Q' in SQ3R is for ___.", answer: "Question", alt: ["question"] },
      { q: "Looking for a specific name in a list is called ___.", answer: "scanning" },
      { q: "Activating ___ knowledge before reading aids comprehension.", answer: "prior" },
    ],
    trueFalse: [
      { q: "Skimming and scanning are the same.", answer: false },
      { q: "Annotation aids retention.", answer: true },
      { q: "SQ3R is a study-reading method.", answer: true },
      { q: "Sub-vocalisation usually increases reading speed.", answer: false },
    ],
    flashcards: [
      { front: "Skimming", back: "Fast reading for the main idea." },
      { front: "Scanning", back: "Quick search for specific info." },
      { front: "SQ3R", back: "Survey, Question, Read, Recite, Review." },
      { front: "Annotation", back: "Underlining and noting while reading." },
      { front: "Intensive reading", back: "Careful, detailed reading for full understanding." },
    ],
  },
  {
    id: "critical-thinking",
    number: 12,
    title: "Critical Thinking",
    summary: "Analysing and evaluating information rationally to form a judgement.",
    content: `## Definition
**Critical thinking** is the disciplined, reflective process of analysing, evaluating, and synthesising information to make reasoned judgements rather than accepting claims at face value.

## Core Skills
1. **Analysis** — break information into parts.
2. **Evaluation** — judge credibility, relevance, and bias.
3. **Inference** — draw logical conclusions from evidence.
4. **Interpretation** — understand meaning in context.
5. **Explanation** — present reasoning clearly.
6. **Self-regulation** — monitor and correct your own thinking.

## Steps in Critical Thinking
1. Identify the question or problem.
2. Gather relevant information.
3. Analyse arguments — premises, evidence, assumptions.
4. Identify biases and logical fallacies.
5. Consider alternative perspectives.
6. Reach a reasoned conclusion.

## Common Logical Fallacies
- **Ad hominem** — attacking the person, not the argument.
- **Straw man** — misrepresenting an opponent's view.
- **Appeal to authority** — accepting claim because of who said it.
- **False dilemma** — presenting only two choices when more exist.
- **Hasty generalisation** — drawing big conclusions from small evidence.

## Applications
Critical thinking strengthens academic writing, professional decision-making, media literacy and ethical reasoning. In the era of misinformation, it is among the most valuable graduate skills.`,
    mcqs: [
      { q: "Attacking the person rather than the argument is:", options: ["Straw man", "Ad hominem", "Appeal to authority", "False dilemma"], answer: 1 },
      { q: "Critical thinking primarily involves:", options: ["Memorisation", "Reasoned analysis and evaluation", "Following authority", "Speed reading"], answer: 1 },
      { q: "Drawing a big conclusion from a single example is:", options: ["Hasty generalisation", "Ad hominem", "Straw man", "False dilemma"], answer: 0 },
      { q: "Self-regulation in critical thinking means:", options: ["Censoring others", "Monitoring your own reasoning", "Voting on ideas", "Following rules"], answer: 1 },
      { q: "Misrepresenting an opponent's view to attack it is:", options: ["Straw man", "Ad hominem", "False analogy", "Bandwagon"], answer: 0 },
    ],
    fillBlanks: [
      { q: "A flaw in reasoning is called a logical ___.", answer: "fallacy" },
      { q: "Drawing logical conclusions from evidence is ___.", answer: "inference" },
      { q: "'Appeal to ___' accepts a claim because of who says it.", answer: "authority" },
      { q: "Critical thinking is essential for combating ___ in the digital age.", answer: "misinformation", alt: ["fake news"] },
    ],
    trueFalse: [
      { q: "Critical thinking involves accepting authority without question.", answer: false },
      { q: "Identifying assumptions is part of analysing arguments.", answer: true },
      { q: "False dilemma offers only two choices when more exist.", answer: true },
      { q: "Bias detection is irrelevant to critical thinking.", answer: false },
    ],
    flashcards: [
      { front: "Critical thinking", back: "Disciplined analysis and evaluation of information." },
      { front: "Inference", back: "Logical conclusion drawn from evidence." },
      { front: "Ad hominem", back: "Fallacy attacking the person, not the argument." },
      { front: "Straw man", back: "Misrepresenting a position to attack it." },
      { front: "False dilemma", back: "Offering only two options when more exist." },
    ],
  },
  {
    id: "communication-skills",
    number: 13,
    title: "Communication Skills",
    summary: "Verbal, non-verbal and written skills that enable effective exchange of meaning.",
    content: `## Definition
**Communication** is the process of transmitting and receiving information, ideas, feelings and attitudes between people. The classic model: **Sender → Message → Channel → Receiver → Feedback**, with **Noise** as a disruption.

## Types of Communication
1. **Verbal** — spoken or written words. Effective verbal communication is clear, concise, courteous and complete.
2. **Non-verbal** — body language, facial expressions, eye contact, gestures, posture, tone of voice. Research suggests a large share of meaning in face-to-face talk is non-verbal.
3. **Written** — emails, reports, essays. Requires correct grammar, structure and tone.
4. **Visual** — graphs, diagrams, slides.

## 7 Cs of Effective Communication
Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.

## Barriers to Communication
- **Physical** — distance, noise, poor connection.
- **Linguistic** — jargon, unfamiliar language.
- **Psychological** — stress, prejudice, lack of attention.
- **Cultural** — differing norms and gestures.

## Improving Communication
- Know your audience.
- Plan your message.
- Use simple language.
- Listen actively (see next topic).
- Seek and give feedback.

## Importance for Graduates
Strong communication is the most consistently demanded soft skill in employer surveys worldwide.`,
    mcqs: [
      { q: "Which is NOT one of the 7 Cs?", options: ["Clear", "Complex", "Concise", "Courteous"], answer: 1 },
      { q: "Body language belongs to which type?", options: ["Verbal", "Non-verbal", "Written", "Visual"], answer: 1 },
      { q: "In the communication model, distortion of message is called:", options: ["Channel", "Noise", "Feedback", "Sender"], answer: 1 },
      { q: "Which is a psychological barrier?", options: ["Distance", "Stress", "Jargon", "Bandwidth"], answer: 1 },
      { q: "The receiver's response to a message is called:", options: ["Channel", "Feedback", "Noise", "Encoding"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The 7 Cs include Clear, Concise, Concrete, Correct, Coherent, Complete and ___.", answer: "Courteous", alt: ["courteous"] },
      { q: "Differences in cultural norms cause ___ barriers.", answer: "cultural" },
      { q: "Sender, message, channel, receiver, ___ — the basic model.", answer: "feedback" },
      { q: "Effective communicators tailor messages to their ___.", answer: "audience" },
    ],
    trueFalse: [
      { q: "Non-verbal cues carry no meaning in face-to-face talk.", answer: false },
      { q: "Jargon is a linguistic barrier.", answer: true },
      { q: "Feedback is part of the communication process.", answer: true },
      { q: "Concise messages are usually more effective.", answer: true },
    ],
    flashcards: [
      { front: "Communication", back: "Transmitting and receiving meaning between people." },
      { front: "7 Cs", back: "Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous." },
      { front: "Noise", back: "Anything that distorts a message." },
      { front: "Non-verbal", back: "Body language, gestures, tone, eye contact." },
      { front: "Feedback", back: "Receiver's response that completes communication." },
    ],
  },
  {
    id: "active-listening",
    number: 14,
    title: "Active Listening",
    summary: "Fully concentrating, understanding, responding and remembering what is said.",
    content: `## Definition
**Active listening** is a communication technique that requires the listener to fully concentrate, understand, respond, and then remember what the speaker is saying. It contrasts with passive hearing.

## Five Stages
1. **Receiving** — physically hearing.
2. **Understanding** — interpreting meaning.
3. **Remembering** — storing information.
4. **Evaluating** — judging accuracy and relevance.
5. **Responding** — providing feedback.

## Techniques
- Maintain **eye contact** and open posture.
- **Paraphrase** — *"So you mean…"*
- **Ask clarifying questions** — *"Could you give an example?"*
- **Reflect feelings** — *"That sounds frustrating."*
- **Avoid interrupting** the speaker.
- **Summarise** at the end.

## Barriers
- Distractions (phones, noise).
- Pre-judging the speaker.
- Mentally preparing your reply instead of listening.
- Emotional reactions.

## Benefits
- Builds trust and rapport.
- Reduces misunderstandings and conflict.
- Improves learning and academic performance.
- Essential in interviews, counselling, leadership and teamwork.

## Practice Tip
Use the **70/30 rule**: in conversations, aim to listen 70% of the time and speak 30%.`,
    mcqs: [
      { q: "Active listening differs from hearing because it requires:", options: ["Loud volume", "Conscious engagement", "Note-taking only", "Silence"], answer: 1 },
      { q: "Restating the speaker's idea in your own words is:", options: ["Interrupting", "Paraphrasing", "Evaluating", "Reflecting"], answer: 1 },
      { q: "Which is NOT a stage of active listening?", options: ["Receiving", "Responding", "Translating", "Remembering"], answer: 2 },
      { q: "A common barrier to active listening is:", options: ["Eye contact", "Open posture", "Mentally preparing your reply", "Paraphrasing"], answer: 2 },
      { q: "The 70/30 rule suggests you should:", options: ["Speak 70%, listen 30%", "Listen 70%, speak 30%", "Speak only", "Listen only"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Repeating the speaker's message in your own words is called ___.", answer: "paraphrasing" },
      { q: "Hearing is passive; ___ listening is active.", answer: "active" },
      { q: "A clarifying ___ helps confirm understanding.", answer: "question" },
      { q: "Reflecting ___ shows empathy in active listening.", answer: "feelings" },
    ],
    trueFalse: [
      { q: "Interrupting is encouraged in active listening.", answer: false },
      { q: "Active listening builds trust.", answer: true },
      { q: "Eye contact is part of non-verbal active listening.", answer: true },
      { q: "Active listening is not useful in teamwork.", answer: false },
    ],
    flashcards: [
      { front: "Active listening", back: "Concentrating, understanding, responding and remembering speech." },
      { front: "Paraphrasing", back: "Restating speaker's message in your own words." },
      { front: "Reflecting feelings", back: "Acknowledging emotional content of a message." },
      { front: "Barrier", back: "Anything blocking effective listening (distraction, bias)." },
      { front: "70/30 rule", back: "Listen 70%, speak 30% in productive conversation." },
    ],
  },
  {
    id: "contextual-interpretation",
    number: 15,
    title: "Contextual Interpretation",
    summary: "Understanding meaning by considering linguistic, situational and cultural context.",
    content: `## What Is Context?
**Context** is the set of circumstances surrounding a word, sentence or text that influence its meaning. Without context, language is often ambiguous.

## Types of Context
1. **Linguistic (verbal) context** — surrounding words and sentences. Helps choose between word meanings.
2. **Situational context** — physical setting, participants, purpose. *"Could you pass the salt?"* in a restaurant is not a literal yes/no question.
3. **Cultural context** — shared knowledge, values, customs. Idioms like *"break a leg"* require cultural understanding.
4. **Historical context** — time period in which a text was produced.

## Why It Matters
- Resolves **ambiguity** of polysemous words (*bank* — financial / river).
- Reveals **implied meaning** (sarcasm, irony, politeness).
- Avoids **misinterpretation** in academic and professional reading.

## How to Interpret in Context
- Read the **whole** sentence/paragraph, not just the target word.
- Look for **definition, synonym, antonym, example, or inference clues**.
- Consider **tone** and **register**.
- Ask: **Who** is speaking, **to whom**, **when**, **why**?
- Be aware of **cultural assumptions** that may differ from yours.

## Practical Example
*"He gave a cold response."*
- **Linguistic clue:** "response" implies *cold* is metaphorical, not temperature.
- **Situational clue:** if argued moments earlier, suggests displeasure.
- **Cultural clue:** in some cultures, brevity is normal politeness, not coldness.`,
    mcqs: [
      { q: "Which context refers to surrounding words?", options: ["Cultural", "Linguistic", "Historical", "Situational"], answer: 1 },
      { q: "'Break a leg' relies most on:", options: ["Linguistic context", "Cultural context", "Phonetic context", "Historical context"], answer: 1 },
      { q: "A polysemous word is one that:", options: ["Has one meaning", "Has multiple meanings", "Sounds odd", "Is borrowed"], answer: 1 },
      { q: "Sarcasm is best understood through:", options: ["Spelling", "Tone and situation", "Punctuation only", "Length"], answer: 1 },
      { q: "Asking 'who, to whom, when, why' is part of analysing:", options: ["Tense", "Context", "Spelling", "Vocabulary lists"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Words with multiple meanings are called ___.", answer: "polysemous", alt: ["polysemic"] },
      { q: "The physical setting and participants form the ___ context.", answer: "situational" },
      { q: "Idioms typically require ___ context to interpret.", answer: "cultural" },
      { q: "Surrounding sentences create ___ context.", answer: "linguistic", alt: ["verbal"] },
    ],
    trueFalse: [
      { q: "Context can change the meaning of a sentence.", answer: true },
      { q: "Idioms can usually be understood literally across cultures.", answer: false },
      { q: "Tone is irrelevant to interpretation.", answer: false },
      { q: "Historical context can affect how we read older texts.", answer: true },
    ],
    flashcards: [
      { front: "Context", back: "Circumstances surrounding language that shape meaning." },
      { front: "Polysemy", back: "Single word having multiple related meanings." },
      { front: "Situational context", back: "Setting, participants and purpose of communication." },
      { front: "Cultural context", back: "Shared values and knowledge influencing meaning." },
      { front: "Implied meaning", back: "Meaning suggested but not explicitly stated (irony, sarcasm)." },
    ],
  },
];
