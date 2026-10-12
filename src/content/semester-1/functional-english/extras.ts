import type { MCQ, ExampleGroup } from "@/content/types";

type Extra = { mcqs?: MCQ[]; examples?: ExampleGroup[] };

export const feExtras: Record<string, Extra> = {
  phrases: {
    examples: [
      {
        title: "Infinitive phrases in action",
        items: [
          "**To learn a new language** takes years of practice. *(noun – subject)*",
          "I need a pen **to sign this form**. *(adjective – modifies pen)*",
          "She woke up early **to catch the train**. *(adverb – purpose)*",
          "His goal is **to become a software engineer**. *(noun – complement)*",
        ],
      },
      {
        title: "Participle phrases",
        items: [
          "**Tired after the journey**, the children fell asleep at once.",
          "The window **broken in the storm** has been replaced.",
          "**Walking along the beach**, we found a shell.",
          "Books **written by Allama Iqbal** inspire generations.",
        ],
      },
      {
        title: "Gerund phrases",
        items: [
          "**Solving puzzles** improves logical thinking. *(subject)*",
          "He enjoys **playing cricket on weekends**. *(object)*",
          "Her hobby is **collecting old coins**. *(complement)*",
          "She is good at **debugging complex code**. *(object of preposition)*",
        ],
      },
      {
        title: "Spot the difference: gerund vs participle",
        items: [
          "**Swimming** is great exercise. → gerund (noun).",
          "The **swimming** dolphin amazed us. → participle (adjective).",
          "I love **reading** mystery novels. → gerund.",
          "The boy **reading** in the corner is my brother. → participle.",
        ],
      },
    ],
    mcqs: [
      { q: "'My ambition is to become a doctor.' — 'to become a doctor' is a:", options: ["Gerund phrase", "Participle phrase", "Infinitive phrase", "Adverb clause"], answer: 2 },
      { q: "Identify the participle phrase: 'The cake baked by my mother was delicious.'", options: ["The cake", "baked by my mother", "was delicious", "by my mother"], answer: 1 },
      { q: "Which sentence contains a gerund?", options: ["She wants to leave.", "Walking is healthy.", "The walking man waved.", "He will walk home."], answer: 1 },
      { q: "Non-finite verbs include all EXCEPT:", options: ["Infinitives", "Gerunds", "Participles", "Auxiliaries"], answer: 3 },
    ],
  },
  clauses: {
    examples: [
      {
        title: "Independent vs dependent",
        items: [
          "**She passed the exam.** → independent (complete thought).",
          "**Because she studied hard** → dependent (incomplete on its own).",
          "Combined: *She passed the exam **because she studied hard**.*",
        ],
      },
      {
        title: "Noun clauses",
        items: [
          "**What you said** hurt me. *(subject)*",
          "I know **that he is honest**. *(object)*",
          "The truth is **that we were wrong**. *(complement)*",
          "Tell me **whether you can come**. *(object)*",
        ],
      },
      {
        title: "Adjective (relative) clauses",
        items: [
          "The girl **who won the prize** is my sister.",
          "I bought the laptop **that was on sale**.",
          "Karachi, **which is the largest city of Pakistan**, lies on the coast.",
        ],
      },
      {
        title: "Adverb clauses",
        items: [
          "Time: We left **when the rain stopped**.",
          "Cause: She was happy **because she got the job**.",
          "Condition: **If you study**, you will pass.",
          "Contrast: **Although he is rich**, he is humble.",
        ],
      },
    ],
    mcqs: [
      { q: "'I know the man who lives next door.' — 'who lives next door' is a(n):", options: ["Noun clause", "Adjective clause", "Adverb clause", "Independent clause"], answer: 1 },
      { q: "'When the bell rang' is a(n) ___ clause.", options: ["Noun", "Adjective", "Adverb", "Main"], answer: 2 },
      { q: "How many clauses are in 'She smiled and waved as he left.'?", options: ["1", "2", "3", "4"], answer: 2 },
      { q: "Which word commonly introduces a noun clause?", options: ["Although", "That", "Because", "Where"], answer: 1 },
    ],
  },
  "sentence-types": {
    examples: [
      {
        title: "By function",
        items: [
          "Declarative: *The library opens at 9 a.m.*",
          "Interrogative: *Did you submit the assignment?*",
          "Imperative: *Please switch off the lights.*",
          "Exclamatory: *What an amazing performance!*",
        ],
      },
      {
        title: "By structure",
        items: [
          "Simple: *Ali plays football.*",
          "Compound: *Ali plays football, **and** Sara plays tennis.*",
          "Complex: *Ali plays football **whenever he is free**.*",
          "Compound–complex: *Ali plays football **when he is free**, but Sara prefers tennis.*",
        ],
      },
      {
        title: "Conjunctions",
        items: [
          "Coordinating: *I called him, **but** he didn't answer.*",
          "Subordinating: *I'll come **if** I finish on time.*",
          "Correlative: ***Not only*** *did he sing,* ***but also*** *danced.*",
          "Correlative: ***Either*** *we leave now* ***or*** *we miss the bus.*",
        ],
      },
    ],
    mcqs: [
      { q: "'Stop talking!' is what kind of sentence?", options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], answer: 2 },
      { q: "Which is a compound sentence?", options: ["She sings beautifully.", "She sings, and he plays.", "She sings when happy.", "Sing now!"], answer: 1 },
      { q: "Which is NOT in FANBOYS?", options: ["For", "Yet", "Although", "So"], answer: 2 },
      { q: "Identify the correlative pair:", options: ["and / but", "if / when", "neither / nor", "because / since"], answer: 2 },
    ],
  },
  "conditional-sentences": {
    examples: [
      {
        title: "All four types",
        items: [
          "Type 0: *If you mix red and blue, you get purple.*",
          "Type 1: *If it rains tomorrow, we **will** cancel the trip.*",
          "Type 2: *If I **were** the principal, I would change the rules.*",
          "Type 3: *If they **had left** earlier, they would have caught the flight.*",
        ],
      },
      {
        title: "Mixed conditionals",
        items: [
          "*If I had studied medicine, I would be a doctor now.* (past condition → present result)",
          "*If she were more careful, she wouldn't have made that mistake.* (present trait → past result)",
        ],
      },
      {
        title: "Common student mistakes",
        items: [
          "❌ *If I will see him, I will tell him.* → ✅ *If I see him, I will tell him.*",
          "❌ *If I was rich…* → ✅ *If I were rich…* (formal)",
          "❌ *If she had came…* → ✅ *If she had come…*",
        ],
      },
    ],
    mcqs: [
      { q: "'If I had known, I _____ helped.' Choose the correct form.", options: ["will have", "would have", "would", "had"], answer: 1 },
      { q: "Which is a Type 1 conditional?", options: ["If water boils, it evaporates.", "If it rains, we will stay home.", "If I were you, I would leave.", "If she had tried, she would have won."], answer: 1 },
      { q: "What modal is typical in Type 2 main clause?", options: ["will", "would", "would have", "shall"], answer: 1 },
    ],
  },
  "uses-of-tenses": {
    examples: [
      {
        title: "Present tenses",
        items: [
          "Simple present (habit): *He **drinks** coffee every morning.*",
          "Present continuous (now): *She **is writing** her thesis.*",
          "Present perfect (relevance now): *I **have finished** my homework.*",
          "Present perfect continuous (duration): *They **have been waiting** for an hour.*",
        ],
      },
      {
        title: "Past tenses",
        items: [
          "Simple past: *We **visited** Lahore last summer.*",
          "Past continuous: *I **was studying** when the lights went out.*",
          "Past perfect: *The train **had left** before we reached the station.*",
          "Past perfect continuous: *She **had been working** there for ten years before she retired.*",
        ],
      },
      {
        title: "Future tenses",
        items: [
          "Simple future: *I **will call** you tomorrow.*",
          "Future continuous: *At 8 p.m. I **will be having** dinner.*",
          "Future perfect: *By 2030 he **will have completed** his PhD.*",
          "Be going to: *Look at those clouds — it **is going to** rain!*",
        ],
      },
    ],
    mcqs: [
      { q: "Choose the present perfect: 'She _____ in this office for ten years.'", options: ["works", "is working", "has worked", "had worked"], answer: 2 },
      { q: "'When I arrived, they ___ already left.'", options: ["have", "had", "were", "are"], answer: 1 },
      { q: "'The train leaves at 6 a.m. tomorrow.' — tense use:", options: ["Present continuous for future", "Simple present for scheduled future", "Future perfect", "Simple future"], answer: 1 },
    ],
  },
  "sequence-of-tenses": {
    examples: [
      {
        title: "Past main → past subordinate",
        items: [
          "*He **said** that he **was** ill.* (present → past)",
          "*She **told** me that she **had finished**.* (present perfect → past perfect)",
          "*They **promised** that they **would** return.* (will → would)",
          "*I **thought** he **could** swim.* (can → could)",
        ],
      },
      {
        title: "Exceptions — universal truth & history",
        items: [
          "*The teacher **explained** that water **boils** at 100 °C.* (general truth – stays present)",
          "*Our guide **told** us that Pakistan **gained** independence in 1947.* (historical fact – simple past)",
          "*Mum **said** that she **gets up** at 5 a.m. daily.* (habitual – stays present)",
        ],
      },
      {
        title: "Reported speech transformations",
        items: [
          "Direct: *He said, 'I am tired.'* → Reported: *He said that he **was** tired.*",
          "Direct: *She said, 'I will help you.'* → Reported: *She said that she **would** help me.*",
          "Direct: *They said, 'We have won.'* → Reported: *They said that they **had won**.*",
        ],
      },
    ],
    mcqs: [
      { q: "He said that the sun ___ in the east.", options: ["rose", "rises", "had risen", "is rising"], answer: 1 },
      { q: "She told me that she ___ the work.", options: ["finishes", "had finished", "has finished", "will finish"], answer: 1 },
      { q: "When the main clause is in the present, the subordinate clause:", options: ["Must be present", "Must be past", "Can be any tense", "Must be future"], answer: 2 },
    ],
  },
  parallelism: {
    examples: [
      {
        title: "Parallel lists",
        items: [
          "❌ *She likes swimming, to read, and hiking.* → ✅ *She likes **swimming**, **reading**, and **hiking**.*",
          "❌ *The job requires honesty, intelligence, and being punctual.* → ✅ *The job requires **honesty**, **intelligence**, and **punctuality**.*",
        ],
      },
      {
        title: "Parallel correlatives",
        items: [
          "❌ *He is **not only** smart **but also** works hard.* → ✅ *He is **not only** smart **but also** hard-working.*",
          "✅ *We will **either** drive to Murree **or** fly to Skardu.*",
          "✅ ***Both*** the manager ***and*** the team leader signed the report.*",
        ],
      },
      {
        title: "Parallel comparisons",
        items: [
          "✅ *Reading a novel is more enjoyable than **watching** a film.*",
          "✅ *To know is one thing; **to act** is another.*",
        ],
      },
    ],
    mcqs: [
      { q: "Which sentence is parallel?", options: ["She likes to sing, dancing, and act.", "She likes to sing, to dance, and to act.", "She likes singing, to dance, and acting.", "She like sing, dance, act."], answer: 1 },
      { q: "Fix the faulty parallel: 'He is tall, handsome, and has intelligence.'", options: ["tall, handsome, intelligent", "tall, has handsomeness, intelligent", "tallness, handsomeness, intelligent", "tall, handsome, intelligence"], answer: 0 },
      { q: "Parallelism mainly creates:", options: ["Confusion", "Balance and clarity", "Brevity", "Complexity"], answer: 1 },
    ],
  },
  punctuation: {
    examples: [
      {
        title: "Comma uses",
        items: [
          "Items in a series: *We bought apples, oranges, and bananas.*",
          "After introductory clause: ***If it rains,** we will stay home.*",
          "Around non-essential info: *My brother**, who lives in Multan,** is a doctor.*",
          "Before coordinating conjunction joining two independent clauses: *I called her**, but** she didn't answer.*",
        ],
      },
      {
        title: "Semicolon vs colon",
        items: [
          "Semicolon links two related independent clauses: *She loves coffee**;** he prefers tea.*",
          "Colon introduces a list/explanation: *Bring the following**:** notebook, pen, and ID card.*",
          "Colon introduces a quote: *He said it best**:** 'Practice makes perfect.'*",
        ],
      },
      {
        title: "Apostrophes & quotation marks",
        items: [
          "Possession: *Ali**'s** laptop / the students**'** lounge.*",
          "Contraction: *don**'**t = do not, it**'**s = it is.*",
          "Quoted speech: *She whispered**, '**I'm scared**.'***",
        ],
      },
    ],
    mcqs: [
      { q: "Which sentence is correctly punctuated?", options: ["Its raining outside.", "It's raining outside.", "Its' raining outside.", "Its raining' outside."], answer: 1 },
      { q: "A semicolon is BEST used to:", options: ["Introduce a list", "Join two related independent clauses", "Show possession", "Mark a question"], answer: 1 },
      { q: "Choose the correct comma use:", options: ["Although it rained we played.", "Although it rained, we played.", "Although, it rained we played.", "Although it, rained we played."], answer: 1 },
    ],
  },
  "paragraph-writing": {
    examples: [
      {
        title: "Anatomy of a paragraph",
        items: [
          "**Topic sentence:** *Regular exercise is essential for university students.*",
          "**Supporting sentence 1:** *It improves concentration during long study sessions.*",
          "**Supporting sentence 2:** *Physical activity also reduces academic stress.*",
          "**Supporting sentence 3:** *Group sports help build communication and teamwork skills.*",
          "**Concluding sentence:** *Therefore, every student should make exercise a daily habit.*",
        ],
      },
      {
        title: "Cohesion devices",
        items: [
          "Addition: *moreover, in addition, furthermore*",
          "Contrast: *however, on the other hand, nevertheless*",
          "Cause/effect: *therefore, as a result, consequently*",
          "Example: *for instance, such as, namely*",
        ],
      },
    ],
    mcqs: [
      { q: "The main idea of a paragraph is in the:", options: ["Last sentence", "Topic sentence", "Random middle sentence", "Title"], answer: 1 },
      { q: "Which is a contrast transition?", options: ["Moreover", "However", "Therefore", "For example"], answer: 1 },
      { q: "A unified paragraph means all sentences:", options: ["Are equal length", "Support one main idea", "Are questions", "Use the same word"], answer: 1 },
    ],
  },
  "vocabulary-context": {
    examples: [
      {
        title: "Context clues",
        items: [
          "Definition: *A **lexicon**, **or dictionary**, lists words with meanings.*",
          "Synonym: *He is **frugal**, in other words, **thrifty** with money.*",
          "Antonym: *Unlike his **gregarious** sister, Ali is **shy**.*",
          "Example: *Citrus fruits — **such as oranges, lemons, and limes** — are rich in vitamin C.*",
        ],
      },
      {
        title: "Word formation",
        items: [
          "Prefix: *un-* + *happy* = **unhappy**",
          "Suffix: *develop* + *-ment* = **development**",
          "Compound: *note* + *book* = **notebook**",
          "Conversion: *email* (noun) → *to email* (verb)",
        ],
      },
      {
        title: "Connotation matters",
        items: [
          "*childish* (negative) vs *childlike* (positive)",
          "*cheap* (negative) vs *inexpensive* (neutral)",
          "*stubborn* (negative) vs *determined* (positive)",
        ],
      },
    ],
    mcqs: [
      { q: "What is the prefix in 'misunderstand'?", options: ["mis-", "under-", "-stand", "-ing"], answer: 0 },
      { q: "Which has a positive connotation?", options: ["Stubborn", "Determined", "Bossy", "Pushy"], answer: 1 },
      { q: "From context: 'The room was so frigid we could see our breath.' — frigid means:", options: ["Hot", "Damp", "Very cold", "Bright"], answer: 2 },
    ],
  },
  "reading-strategies": {
    examples: [
      {
        title: "Skimming vs scanning",
        items: [
          "**Skimming:** quickly read the headings, first sentences, and conclusion to get the **gist**.",
          "**Scanning:** sweep the text for a **specific** detail (a date, name, or term).",
          "Skim a textbook chapter before lectures; scan a timetable for your room number.",
        ],
      },
      {
        title: "SQ3R method",
        items: [
          "**S**urvey – preview headings, images, summary.",
          "**Q**uestion – turn each heading into a question.",
          "**R**ead – actively look for answers.",
          "**R**ecite – say or write key ideas in your own words.",
          "**R**eview – revisit notes within 24 hours.",
        ],
      },
      {
        title: "Active annotation",
        items: [
          "Underline key terms; circle unfamiliar vocabulary.",
          "Use margin symbols: **?** = unclear, **★** = important, **→** = links to another idea.",
          "Summarise each section in **one sentence** at the bottom of the page.",
        ],
      },
    ],
    mcqs: [
      { q: "Which strategy is best for finding a phone number in a directory?", options: ["Skimming", "Scanning", "Intensive reading", "SQ3R"], answer: 1 },
      { q: "The 'Q' in SQ3R stands for:", options: ["Quote", "Question", "Quiet", "Quick"], answer: 1 },
      { q: "Skimming is mainly used to find:", options: ["Specific facts", "General idea", "Spelling errors", "Tone"], answer: 1 },
    ],
  },
  "critical-thinking": {
    examples: [
      {
        title: "Fact vs opinion",
        items: [
          "Fact: *Pakistan was founded in 1947.* (verifiable)",
          "Opinion: *Pakistani cuisine is the best in the world.* (subjective)",
          "Mixed claim: *Studies suggest social media harms attention spans.* (opinion supported by data)",
        ],
      },
      {
        title: "Common logical fallacies",
        items: [
          "**Ad hominem:** attacking the person, not the argument.",
          "**Straw man:** misrepresenting an opponent's view to refute it.",
          "**Hasty generalisation:** drawing a sweeping conclusion from too little evidence.",
          "**False cause:** assuming A caused B because A came first.",
        ],
      },
      {
        title: "Evaluating sources",
        items: [
          "Check author credentials and publication date.",
          "Cross-reference with at least two independent sources.",
          "Notice tone — is it neutral, persuasive, or sensational?",
          "Identify hidden assumptions and biases.",
        ],
      },
    ],
    mcqs: [
      { q: "Which is a fact?", options: ["Mathematics is hard.", "Water freezes at 0 °C.", "Cats are better than dogs.", "Summer is the best season."], answer: 1 },
      { q: "Attacking the person instead of their argument is:", options: ["Straw man", "Ad hominem", "False cause", "Slippery slope"], answer: 1 },
      { q: "A reliable source usually has:", options: ["No author", "An identifiable author and references", "Only opinions", "Anonymous claims"], answer: 1 },
    ],
  },
  "communication-skills": {
    examples: [
      {
        title: "Verbal vs non-verbal",
        items: [
          "Verbal: choice of words, tone, pace, volume.",
          "Non-verbal: eye contact, posture, gestures, facial expressions.",
          "Up to **70%** of meaning can be carried by non-verbal cues.",
        ],
      },
      {
        title: "Formal vs informal register",
        items: [
          "Formal email opening: *Dear Dr Khan, I hope this message finds you well.*",
          "Informal opening: *Hey Sir, hope you're doing good!*",
          "Formal close: *Yours sincerely, / Best regards,*",
          "Informal close: *Cheers, / Take care,*",
        ],
      },
      {
        title: "The 7 Cs of communication",
        items: [
          "**Clear** – simple words, one idea at a time.",
          "**Concise** – no unnecessary words.",
          "**Concrete** – specific facts and figures.",
          "**Correct** – grammar, spelling, facts.",
          "**Coherent** – logical flow.",
          "**Complete** – all needed info.",
          "**Courteous** – respectful tone.",
        ],
      },
    ],
    mcqs: [
      { q: "Which is non-verbal communication?", options: ["A phone call", "An email", "Eye contact", "A radio ad"], answer: 2 },
      { q: "The 7 Cs include all EXCEPT:", options: ["Clear", "Concise", "Cunning", "Courteous"], answer: 2 },
      { q: "An appropriate formal closing is:", options: ["Cheers", "Yours sincerely", "Later", "Bye"], answer: 1 },
    ],
  },
  "active-listening": {
    examples: [
      {
        title: "Active listening behaviours",
        items: [
          "Maintain comfortable **eye contact** with the speaker.",
          "Use small verbal affirmations: *I see, mm-hm, go on.*",
          "**Paraphrase** what was said: *So you're saying that…*",
          "Avoid interrupting; pause before replying.",
        ],
      },
      {
        title: "Listening barriers",
        items: [
          "**Physical:** noise, poor acoustics.",
          "**Psychological:** stress, prejudice, daydreaming.",
          "**Linguistic:** unfamiliar accent or jargon.",
          "**Technological:** weak signal, choppy audio in online lectures.",
        ],
      },
      {
        title: "Levels of listening",
        items: [
          "**Ignoring** – not really listening at all.",
          "**Pretending** – nodding without engagement.",
          "**Selective** – hearing only what interests you.",
          "**Attentive** – focused on words spoken.",
          "**Empathic** – understanding feelings and intent (the goal).",
        ],
      },
    ],
    mcqs: [
      { q: "Active listening involves:", options: ["Multitasking", "Interrupting often", "Paraphrasing the speaker", "Looking away"], answer: 2 },
      { q: "Which is a psychological barrier?", options: ["Background noise", "Prejudice", "Bad microphone", "Heavy accent"], answer: 1 },
      { q: "The highest level of listening is:", options: ["Selective", "Pretending", "Attentive", "Empathic"], answer: 3 },
    ],
  },
  "contextual-interpretation": {
    examples: [
      {
        title: "Literal vs implied meaning",
        items: [
          "*It's freezing in here!* — Literal: low temperature. **Implied:** please close the window / turn off the AC.",
          "*Nice job.* — Said sincerely = praise. Said sarcastically = criticism.",
          "*Can you pass the salt?* — Literal: a question. **Implied:** a polite request.",
        ],
      },
      {
        title: "Tone & register clues",
        items: [
          "Formal report: *The data indicate a significant increase.*",
          "Casual chat: *Numbers went way up, dude!*",
          "Persuasive ad: *Don't miss this once-in-a-lifetime opportunity!*",
        ],
      },
      {
        title: "Cultural context",
        items: [
          "*Insha'Allah* in a Pakistani context often signals polite uncertainty about the future.",
          "A 👍 emoji is friendly in many cultures but can be rude in others.",
          "Idioms rarely translate literally: *spill the beans* ≠ *beans on the floor*.",
        ],
      },
    ],
    mcqs: [
      { q: "'Could you open the window?' is best understood as:", options: ["A question about ability", "A polite request", "A complaint", "A command"], answer: 1 },
      { q: "Sarcasm is detected mainly through:", options: ["Punctuation only", "Tone and context", "Vocabulary size", "Sentence length"], answer: 1 },
      { q: "Idioms should be interpreted:", options: ["Word-for-word", "Figuratively, in context", "Backwards", "As statistics"], answer: 1 },
    ],
  },
};
