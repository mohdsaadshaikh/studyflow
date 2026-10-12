import type { Topic } from "@/content/types";

const CHAPTER = "Ch 2 · Boolean Algebra";

export const topics: Topic[] = [
  // ---------------------------------------------------------------------------
  // 1. Introduction, variables, constants, expressions
  // ---------------------------------------------------------------------------
  {
    id: "dld-boolean-intro",
    number: 1,
    chapter: CHAPTER,
    title: "Introduction to Boolean Algebra: Variables, Constants and Expressions",
    summary:
      "What Boolean algebra is, why a variable can only be 0 or 1, how expressions are written and evaluated, the notation used in class, operator precedence and the duality principle.",
    content: `## What Boolean algebra is

Our class notes define it like this: Boolean algebra is a mathematical system used in digital electronics to represent and simplify logical operations. George Boole worked out the algebra in the 1850s for logic. Claude Shannon showed in 1938 that the same rules describe switching circuits, and that is the reason every DLD course starts here.

A digital circuit only ever sees two voltage levels, low and high. Boolean algebra gives us symbols for those two levels and rules for combining them. Once a circuit is written as an expression, you can simplify the expression on paper and build a smaller circuit that does the same job.

## Boolean constants and variables

There are only two constants: 0 and 1.

| Value | Meaning in the notes | In a circuit |
|---|---|---|
| 0 | False / OFF | low voltage |
| 1 | True / ON | high voltage |

A Boolean variable is a letter (A, B, C, X, Y...) that stands for a signal. It can only ever be 0 or 1. There is no 2, no 0.5 and no negative value. That single rule is why things like A + A = A work here even though they look wrong in school algebra.

## Boolean expressions

A Boolean expression is built from variables, constants and the three basic operators (AND, OR, NOT), with brackets where needed. Examples:

\`\`\`
F = A'B + AC
G = (A + B')·C'
H = A·B·C + 1
\`\`\`

Words you should know for the paper:

- A literal is a variable or its complement. In A'B + AC the literals are A', B, A and C, so it has 4 literals.
- A product term is literals ANDed together, like A'B or ABC'.
- A sum term is literals ORed together, like (A + B' + C).
- A function F(A, B, C) is an expression with a name, written so you know which variables it depends on.
- An expression is in SOP (sum of products) form when it is an OR of product terms, like A'B + AC. It is in POS (product of sums) form when it is an AND of sum terms, like (A + B)(A' + C).

## Notation used in this app

| Operation | We write | You may also see |
|---|---|---|
| NOT (complement) | A' | Ā (bar over the letter), ¬A |
| AND | A·B or AB | A∧B |
| OR | A + B | A∨B |
| XOR | A ⊕ B | |
| XNOR | A ⊙ B | (A ⊕ B)' |

The handwritten class notes use the apostrophe (A') and the dot (A·B). On the whiteboard the teacher often draws a bar over the letter instead. Both mean the same thing. Use whichever your teacher accepts, but stay consistent inside one answer. When a bar covers a whole group, like a bar over A + B, write it as (A + B)' with brackets.

## Order of operations

Without brackets, evaluate in this order:

1. Brackets
2. NOT
3. AND
4. OR

So A + B·C' means A + (B·(C')). It does not mean (A + B)·C'.

## Worked example 1: evaluate F = A'B + AC for A = 1, B = 0, C = 1

\`\`\`
A' = 0                (NOT of 1)
A'B = 0·0 = 0
AC  = 1·1 = 1
F   = 0 + 1 = 1
\`\`\`

## Worked example 2: evaluate G = (A + B')·C' for A = 0, B = 1, C = 0

\`\`\`
B' = 0,  C' = 1
A + B' = 0 + 0 = 0
G = 0·1 = 0
\`\`\`

Notice that the bracket forces the OR to happen first. Without it, A + B'·C' would give 0 + (0·1) = 0 here too, but on other inputs the two expressions differ, so never drop brackets.

## How Boolean algebra differs from normal algebra

| Normal algebra | Boolean algebra |
|---|---|
| 1 + 1 = 2 | 1 + 1 = 1 (OR) |
| A + A = 2A | A + A = A |
| A·A = A² | A·A = A |
| no complement operator | A' exists, and A + A' = 1 |
| A + BC ≠ (A + B)(A + C) | A + BC = (A + B)(A + C) |
| subtraction and division exist | there is no subtraction or division |

The plus sign is OR, not addition. The notes say this directly: "The plus sign (+) in Boolean algebra means OR, not ordinary arithmetic addition."

## The duality principle

Every Boolean law comes in a pair. To get the dual of a statement:

- swap + and ·
- swap 0 and 1
- leave the variables and their complements alone

| Statement | Its dual |
|---|---|
| A + 0 = A | A·1 = A |
| A + 1 = 1 | A·0 = 0 |
| A + A' = 1 | A·A' = 0 |
| A + AB = A | A(A + B) = A |
| A + BC = (A + B)(A + C) | A(B + C) = AB + AC |

If a statement is a valid identity, its dual is valid too. That means you only need to memorise half the laws. Careful: the dual of an expression is not its complement. Taking the dual does not flip the variables. De Morgan (later topic) is what gives the complement.

## Common mistakes

- Writing 1 + 1 = 2 or 1 + 1 = 10. In Boolean algebra 1 + 1 = 1.
- Reading A + B·C as (A + B)·C. AND binds tighter than OR.
- Thinking A' and (A)' are different. They are the same. But AB' is A·(B'), while (AB)' complements the whole product.
- Mixing up the dual and the complement.

## How this shows up in the mid

Expect one or two short questions: define Boolean algebra, state the possible values of a Boolean variable, count the literals or terms in an expression, evaluate an expression for given inputs, or write the dual of a law. These are easy marks if your notation is clean.`,
    mcqs: [
      {
        q: "A Boolean variable can take which values?",
        options: ["Any integer", "0, 1 and 2", "Any real number between 0 and 1", "0 and 1 only"],
        answer: 3,
        explain: "Boolean variables are two-valued. 0 means False/OFF and 1 means True/ON.",
      },
      {
        q: "In Boolean algebra, 1 + 1 equals:",
        options: ["2", "10", "0", "1"],
        answer: 3,
        explain: "+ is OR. OR gives 1 when at least one input is 1, so 1 + 1 = 1.",
      },
      {
        q: "How many literals are in the expression A'B + AC'?",
        options: ["4", "2", "3", "5"],
        answer: 0,
        explain: "The literals are A', B, A and C'. Each appearance counts, so there are 4.",
      },
      {
        q: "Without brackets, which operation is evaluated first in A + B·C'?",
        options: ["OR", "AND", "NOT", "Left to right, whatever comes first"],
        answer: 2,
        explain: "Precedence is brackets, then NOT, then AND, then OR. So C' is found first, then B·C', then the OR.",
      },
      {
        q: "What is the dual of A + 0 = A?",
        options: ["A' + 1 = A'", "A·1 = A", "A·0 = 0", "A + 1 = 1"],
        answer: 1,
        explain: "Swap + with · and 0 with 1. Variables stay as they are. A + 0 = A becomes A·1 = A.",
      },
      {
        q: "Evaluate F = A'B + AC for A = 1, B = 0, C = 1.",
        options: ["0", "Undefined", "1", "2"],
        answer: 2,
        explain: "A' = 0 so A'B = 0. AC = 1·1 = 1. F = 0 + 1 = 1.",
      },
      {
        q: "Which of these expressions is in SOP (sum of products) form?",
        options: ["(A + B)(A' + C)", "A'B + AC", "(A + B)'", "A(B + C)"],
        answer: 1,
        explain: "SOP is an OR of AND terms. A'B + AC is two product terms ORed together.",
      },
      {
        q: "On the whiteboard the teacher writes a bar over A. In the notes the same thing is written as:",
        options: ["A'", "A·1", "A + 1", "1/A"],
        answer: 0,
        explain: "The bar and the apostrophe both mean NOT A, the complement of A.",
      },
      {
        q: "Which statement about Boolean algebra is FALSE?",
        options: [
          "A + A = A",
          "A·A = A",
          "There is a subtraction operator",
          "A + A' = 1",
        ],
        answer: 2,
        explain: "Boolean algebra has no subtraction or division. The other three are valid laws.",
      },
    ],
    fillBlanks: [
      {
        q: "In the notes, 1 represents True/ON and 0 represents ___/OFF.",
        answer: "False",
        alt: ["false"],
        explain: "0 = False/OFF, 1 = True/ON.",
      },
      {
        q: "A variable or its complement (like A or B') is called a ___.",
        answer: "literal",
        alt: ["literals"],
      },
      {
        q: "To form the dual, swap + with · and swap 0 with ___.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "In Boolean algebra, A + A = ___.",
        answer: "A",
        alt: ["a"],
        explain: "Idempotent law. OR-ing a signal with itself gives the same signal.",
      },
      {
        q: "Boolean algebra was developed by George ___.",
        answer: "Boole",
        alt: ["boole"],
      },
    ],
    trueFalse: [
      {
        q: "In Boolean algebra, A·A = A².",
        answer: false,
        explain: "There are no powers. A·A = A because 0·0 = 0 and 1·1 = 1.",
      },
      {
        q: "A + B·C means (A + B)·C.",
        answer: false,
        explain: "AND has higher precedence than OR, so it means A + (B·C).",
      },
      {
        q: "If an identity is true, its dual is also true.",
        answer: true,
        explain: "That is the duality principle. It is why every law is listed in an OR form and an AND form.",
      },
      {
        q: "The dual of an expression is the same as its complement.",
        answer: false,
        explain: "The dual swaps operators and constants but leaves variables alone. The complement also flips every variable (De Morgan).",
      },
      {
        q: "A' and Ā mean the same thing.",
        answer: true,
        explain: "Both are NOT A. The notes use the apostrophe, the whiteboard often uses a bar.",
      },
    ],
    flashcards: [
      { front: "Boolean algebra (notes definition)", back: "A mathematical system used in digital electronics to represent and simplify logical operations." },
      { front: "Possible values of a Boolean variable", back: "Only 0 (False/OFF) or 1 (True/ON)." },
      { front: "Boolean constants", back: "0 and 1." },
      { front: "Literal", back: "A variable or its complement, e.g. A, A', B'. Count every appearance." },
      { front: "Operator precedence", back: "Brackets, then NOT, then AND, then OR." },
      { front: "SOP vs POS", back: "SOP: OR of product terms (A'B + AC). POS: AND of sum terms ((A + B)(A' + C))." },
      { front: "How to take the dual", back: "Swap + and ·, swap 0 and 1, keep variables unchanged." },
      { front: "1 + 1 in Boolean algebra", back: "1. The + is OR, not addition." },
      { front: "Complement notations", back: "A' (notes), Ā (whiteboard bar), ¬A (logic books). All mean NOT A." },
    ],
    examples: [
      {
        title: "Evaluating expressions",
        items: [
          "F = A'B + AC with A=1, B=0, C=1: A'B = 0, AC = 1, so F = 1.",
          "G = (A + B')·C' with A=0, B=1, C=0: A + B' = 0, so G = 0.",
          "H = A·B·C + 1 is always 1, whatever A, B, C are (A + 1 = 1).",
        ],
      },
      {
        title: "Dual pairs",
        items: [
          "A + 0 = A  and  A·1 = A",
          "A + A' = 1  and  A·A' = 0",
          "A + AB = A  and  A(A + B) = A",
        ],
      },
    ],
    exercises: [
      {
        problem: "Evaluate F = A'B + AB'C + C' for A = 1, B = 1, C = 0.",
        solution: `A' = 0, B' = 0, C' = 1

A'B   = 0·1   = 0
AB'C  = 1·0·0 = 0
C'    = 1

F = 0 + 0 + 1 = 1`,
      },
      {
        problem: "Count the terms and literals in F = AB'C + A'C + B. Say whether F is in SOP or POS form.",
        solution: `Terms: AB'C, A'C, B            -> 3 terms
Literals: A, B', C, A', C, B     -> 6 literals
It is an OR of product terms, so it is in SOP form.`,
      },
      {
        problem: "Write the duals of: (a) A + A'B = A + B  (b) A·(B + C) = A·B + A·C  (c) A + 1 = 1",
        solution: `Rule: swap + and ·, swap 0 and 1, keep the variables.

(a) A·(A' + B) = A·B
(b) A + B·C = (A + B)·(A + C)
(c) A·0 = 0`,
      },
      {
        problem: "Put in the brackets that show how A + B'·C + D' is evaluated, then evaluate it for A=0, B=0, C=1, D=1.",
        solution: `Precedence: NOT, then AND, then OR.

A + ((B')·C) + (D')

B' = 1, D' = 0
B'·C = 1·1 = 1
F = 0 + 1 + 0 = 1`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. AND, OR, NOT
  // ---------------------------------------------------------------------------
  {
    id: "dld-boolean-operators",
    number: 2,
    chapter: CHAPTER,
    title: "Boolean Operators: AND, OR and NOT",
    summary:
      "The three basic operations, their truth tables and gate symbols, how they extend to 3 or more inputs, and the switch analogy that makes them easy to remember.",
    content: `## The three basic operations

Everything in this chapter is built from three operations. Learn their truth tables cold, because every later law can be checked against them.

## AND: A·B

The dot means AND. From the notes: the output is 1 only when both inputs are 1. "AND needs both 1s." The Boolean expression A·B is implemented using an AND gate.

| A | B | A·B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

AND works like multiplication on 0 and 1, which is why we often drop the dot and write AB.

Think of two switches in series feeding a bulb. The bulb lights only if both switches are closed.

## OR: A + B

The plus sign means OR, not ordinary addition. The output is 1 when at least one input is 1.

| A | B | A + B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

The last row is where students lose marks: 1 + 1 = 1. OR is two switches in parallel. Either one closed lights the bulb.

## NOT: A'

The apostrophe means NOT, also called the complement. It reverses the input: 0 becomes 1 and 1 becomes 0. The notes put it as "A' = opposite of A". NOT has only one input.

| A | A' |
|---|---|
| 0 | 1 |
| 1 | 0 |

## Gate symbols in text

Diagrams can't be drawn here, so this is how the gates are shown in this app:

\`\`\`
AND (flat back, round front)    OR (curved back, pointed front)    NOT (triangle + bubble)

 A ──┐                           A ──┐                             A ──|>o── A'
     [AND]── A·B                     (OR)── A + B
 B ──┘                           B ──┘
\`\`\`

In your paper draw the real shapes: AND is a D shape, OR is a shield or arrowhead shape, NOT is a triangle with a small circle (bubble) at its output. The bubble is what means "invert".

## More than two inputs

AND and OR extend to any number of inputs. With n inputs a truth table has 2ⁿ rows.

- An n-input AND is 1 in exactly one row, the row where every input is 1.
- An n-input OR is 0 in exactly one row, the row where every input is 0.

Both of these come straight from the solved truth tables in the notes:

| A | B | C | A·B | A·B·C | A + B + C |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 |

The notes work out A·B first as a helper column and then AND it with C. That habit of adding intermediate columns is worth copying in the exam, because the examiner can give part marks for each column.

## Worked example 1: truth table for F = (A + B)·C'

Make helper columns for A + B and C', then AND them.

| A | B | C | A + B | C' | F |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

F is 1 when C is 0 and at least one of A, B is 1.

## Worked example 2: a real situation

A car alarm should sound (Y = 1) when the alarm is armed (A = 1) and either a door is opened (D = 1) or a window is broken (W = 1).

\`\`\`
"either D or W"       -> D + W
"armed and (...)"     -> A·(D + W)

Y = A·(D + W)
\`\`\`

The brackets matter. A·D + W would sound the alarm whenever a window breaks, even when it is not armed.

## Common mistakes

- Writing 1 + 1 = 0 or 2 in the OR table.
- Forgetting the bubble on the NOT gate, which leaves a plain buffer.
- Saying an n-input table has 2n rows. It has 2ⁿ rows. Three inputs give 8, four give 16.
- Using an AND gate where the words say "either... or". "Either" is OR.

## How this shows up in the mid

Typical questions: draw the symbol and truth table of AND, OR and NOT; complete a truth table for a 3-variable expression; write the expression for a word problem; say how many rows a 4-input table needs (16).`,
    mcqs: [
      {
        q: "The output of a 2-input AND gate is 1 when:",
        options: ["At least one input is 1", "Both inputs are 0", "Both inputs are 1", "The inputs are different"],
        answer: 2,
        explain: "AND needs both 1s.",
      },
      {
        q: "The output of a 2-input OR gate is 0 when:",
        options: ["Both inputs are 0", "Both inputs are 1", "Exactly one input is 1", "Never"],
        answer: 0,
        explain: "OR is 1 if any input is 1, so it is 0 only in the all-zero row.",
      },
      {
        q: "How many rows does the truth table of a 4-variable expression have?",
        options: ["4", "8", "12", "16"],
        answer: 3,
        explain: "2ⁿ rows, so 2⁴ = 16.",
      },
      {
        q: "A 3-input AND gate gives output 1 in how many of its 8 rows?",
        options: ["1", "3", "7", "8"],
        answer: 0,
        explain: "Only the row A=B=C=1.",
      },
      {
        q: "A 3-input OR gate gives output 1 in how many of its 8 rows?",
        options: ["1", "4", "7", "8"],
        answer: 2,
        explain: "Every row except 000.",
      },
      {
        q: "Two switches connected in parallel controlling a bulb behave like which operation?",
        options: ["AND", "OR", "NOT", "NAND"],
        answer: 1,
        explain: "Closing either parallel switch completes the circuit, which is OR. Series switches behave like AND.",
      },
      {
        q: "On a gate symbol, the small circle (bubble) at the output means:",
        options: ["The output is inverted", "The gate has a clock", "The output is doubled", "The gate has 3 inputs"],
        answer: 0,
        explain: "The bubble means NOT. A triangle with a bubble is the NOT gate.",
      },
      {
        q: "For A = 1, B = 0, C = 0, what is F = (A + B)·C'?",
        options: ["0", "1", "Depends on the gate type", "Undefined"],
        answer: 1,
        explain: "A + B = 1, C' = 1, so F = 1·1 = 1.",
      },
      {
        q: "\"Y is 1 when the alarm is armed (A) and either a door (D) or a window (W) is open.\" Which expression is correct?",
        options: ["A·D + W", "A + D·W", "A·(D + W)", "(A + D)·W"],
        answer: 2,
        explain: "\"Either D or W\" is D + W, and the whole thing is ANDed with A. Without brackets the W term would ignore A.",
      },
    ],
    fillBlanks: [
      {
        q: "The NOT operation is also called the ___ of a variable.",
        answer: "complement",
        alt: ["inverse", "negation"],
      },
      {
        q: "A truth table for 3 variables has ___ rows.",
        answer: "8",
        alt: ["eight"],
      },
      {
        q: "In the OR table, 1 + 1 = ___.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "A NOT gate has exactly ___ input.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "Two switches in ___ behave like an AND gate.",
        answer: "series",
      },
    ],
    trueFalse: [
      {
        q: "AND behaves like ordinary multiplication on the values 0 and 1.",
        answer: true,
        explain: "0·0 = 0, 0·1 = 0, 1·0 = 0, 1·1 = 1, same as multiplying.",
      },
      {
        q: "OR behaves exactly like ordinary addition on 0 and 1.",
        answer: false,
        explain: "It differs in one row: 1 + 1 = 1 in Boolean algebra, not 2.",
      },
      {
        q: "A NOT gate can have two inputs.",
        answer: false,
        explain: "NOT takes one input and inverts it.",
      },
      {
        q: "An n-input OR gate outputs 0 in exactly one row of its truth table.",
        answer: true,
        explain: "The row where every input is 0.",
      },
      {
        q: "A truth table with 5 inputs has 10 rows.",
        answer: false,
        explain: "2⁵ = 32 rows.",
      },
    ],
    flashcards: [
      { front: "AND rule", back: "Output 1 only when all inputs are 1. \"AND needs both 1s.\"" },
      { front: "OR rule", back: "Output 1 when at least one input is 1. 0 only when all inputs are 0." },
      { front: "NOT rule", back: "Reverses the input: 0 becomes 1, 1 becomes 0. A' = opposite of A." },
      { front: "Rows in a truth table with n inputs", back: "2ⁿ (2 inputs: 4, 3 inputs: 8, 4 inputs: 16)." },
      { front: "Switch analogy", back: "Series switches = AND. Parallel switches = OR." },
      { front: "AND gate shape", back: "D shape: flat input side, round output side." },
      { front: "OR gate shape", back: "Curved input side, pointed output side." },
      { front: "NOT gate shape", back: "Triangle with a bubble at the output." },
      { front: "Truth table of A·B·C", back: "1 only in row 111. Every other row is 0." },
    ],
    examples: [
      {
        title: "Quick evaluations",
        items: [
          "A=1, B=1: A·B = 1, A + B = 1, A' = 0",
          "A=0, B=1: A·B = 0, A + B = 1, B' = 0",
          "A=1, B=0, C=1: A·B·C = 0, A + B + C = 1",
        ],
      },
      {
        title: "Words to operators",
        items: [
          "\"both\", \"and\", \"all of\" -> AND",
          "\"either\", \"or\", \"at least one\" -> OR",
          "\"not\", \"is off\", \"is false\" -> NOT",
        ],
      },
    ],
    exercises: [
      {
        problem: "Draw the truth table for F = A·B + C'.",
        solution: `Helper columns: A·B and C'

 A B C | A·B | C' | F = A·B + C'
 0 0 0 |  0  |  1 |  1
 0 0 1 |  0  |  0 |  0
 0 1 0 |  0  |  1 |  1
 0 1 1 |  0  |  0 |  0
 1 0 0 |  0  |  1 |  1
 1 0 1 |  0  |  0 |  0
 1 1 0 |  1  |  1 |  1
 1 1 1 |  1  |  0 |  1`,
      },
      {
        problem: "Draw the truth table for F = A' + B and say in words when F is 0.",
        solution: ` A B | A' | F = A' + B
 0 0 |  1 |  1
 0 1 |  1 |  1
 1 0 |  0 |  0
 1 1 |  0 |  1

F is 0 only when A = 1 and B = 0.`,
      },
      {
        problem: "A lift motor runs (M = 1) when the door is closed (D = 1) and someone presses either the UP button (U) or the DOWN button (W). Write M and evaluate it for D=1, U=0, W=1.",
        solution: `"either U or W"         -> U + W
"door closed and (...)" -> D·(U + W)

M = D·(U + W)

D=1, U=0, W=1:
U + W = 0 + 1 = 1
M = 1·1 = 1   (motor runs)`,
      },
      {
        problem: "How many rows are needed for a truth table with (a) 2, (b) 3, (c) 4, (d) 6 input variables?",
        solution: `Rows = 2^n

(a) 2^2 = 4
(b) 2^3 = 8
(c) 2^4 = 16
(d) 2^6 = 64`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Basic laws
  // ---------------------------------------------------------------------------
  {
    id: "dld-basic-laws",
    number: 3,
    chapter: CHAPTER,
    title: "Basic Laws: Identity, Null, Idempotent, Complement and Involution",
    summary:
      "The single-variable rules the teacher wrote as \"AND gate rules\" and \"OR gate rules\", with names, duals, truth-table proofs and practice using them.",
    content: `## The single-variable rules

On the whiteboard the teacher wrote these as two columns, "AND GATE" and "OR GATE". In books each line has a name. You need both: the rule itself and its name, because exam questions often say "simplify and name the law used at each step".

| Law | OR form | AND form |
|---|---|---|
| Identity | A + 0 = A | A·1 = A |
| Null (Dominance) | A + 1 = 1 | A·0 = 0 |
| Idempotent | A + A = A | A·A = A |
| Complement | A + A' = 1 | A·A' = 0 |
| Involution (Double Negation) | (A')' = A | (same, it has no dual partner) |

Each row is a dual pair: swap + with · and 0 with 1 and you get the other column.

The class whiteboard version, exactly as written:

\`\`\`
AND GATE          OR GATE
A·A  = A          A + A  = A
A·A' = 0          A + A' = 1
A·1  = A          A + 1  = 1
A·0  = 0          A + 0  = A
\`\`\`

## Why each law is true

The easy way to remember them is to think of the gate.

- Identity: OR with 0 or AND with 1 changes nothing. 0 is the "do nothing" input for OR, 1 is the "do nothing" input for AND.
- Null: OR with 1 is stuck at 1, AND with 0 is stuck at 0. One input forces the output.
- Idempotent: feeding the same signal into both inputs of an AND or OR just gives that signal back.
- Complement: A and A' are always opposite, so exactly one of them is 1. OR-ing them gives 1, AND-ing gives 0.
- Involution: inverting twice gets you back where you started. The teacher calls this the Double Negation Law and showed it as A = 0, A' = 1, A'' = 0.

## Proof by truth table (perfect induction)

Since A can only be 0 or 1, you prove a one-variable law by checking both values. This is called proof by perfect induction.

| A | A' | A + 0 | A·1 | A + 1 | A·0 | A + A | A·A | A + A' | A·A' | (A')' |
|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |

Compare each column with the A column or with a constant and every law checks out.

## These laws work on whole expressions

A does not have to be a single letter. Any expression can play the part of A. This is how the laws get used in real simplification:

\`\`\`
(B + C) + (B + C)'  = 1           complement law, with A = (B + C)
XY · 0              = 0           null law, with A = XY
(A'B)·(A'B)         = A'B         idempotent law, with A = A'B
((AB)')'            = AB          involution, with A = AB
\`\`\`

## Worked example 1: simplify (A + A')·(B·B)

\`\`\`
(A + A')·(B·B)
= 1·(B·B)          complement law   A + A' = 1
= 1·B              idempotent law   B·B = B
= B                identity law     1·B = B
\`\`\`

## Worked example 2: simplify A·A'·B + C·1

\`\`\`
A·A'·B + C·1
= 0·B + C·1        complement law   A·A' = 0
= 0 + C·1          null law         0·B = 0
= 0 + C            identity law     C·1 = C
= C                identity law     0 + C = C
\`\`\`

## Worked example 3: simplify (B + 1)·(C + C') + A·0

\`\`\`
(B + 1)·(C + C') + A·0
= 1·(C + C') + A·0  null law        B + 1 = 1
= 1·1 + A·0         complement law  C + C' = 1
= 1 + A·0           identity law    1·1 = 1
= 1                 null law        1 + anything = 1
\`\`\`

## Common mistakes

- Mixing up identity and null. A + 1 = 1 (null), but A·1 = A (identity). Check with the gate: an OR with one input stuck at 1 is always 1.
- Writing A + A = 2A or A·A = A². No coefficients, no powers.
- Writing A + A' = 0 or A·A' = 1. It is the other way round.
- Forgetting that the laws apply to whole bracketed expressions, not only single letters.

## How this shows up in the mid

These rules are the tools for every simplification question. Expect "state and prove the complement law with a truth table", "write the dual of A + 1 = 1", or a short simplification where you must name each law. Some papers also ask which law the double bar represents (involution, or double negation in our class).`,
    mcqs: [
      {
        q: "A + 1 = ?",
        options: ["A", "A'", "0", "1"],
        answer: 3,
        explain: "Null (dominance) law. An OR gate with an input stuck at 1 always gives 1.",
      },
      {
        q: "A·1 = ?",
        options: ["1", "0", "A", "A'"],
        answer: 2,
        explain: "Identity law. 1 is the neutral value for AND.",
      },
      {
        q: "Which law is A·A' = 0?",
        options: ["Idempotent", "Complement", "Identity", "Involution"],
        answer: 1,
        explain: "A signal ANDed with its own complement is always 0.",
      },
      {
        q: "Which law is A + A = A?",
        options: ["Idempotent", "Absorption", "Null", "Commutative"],
        answer: 0,
        explain: "Idempotent: repeating the same variable changes nothing.",
      },
      {
        q: "The teacher's \"Double Negation Law\" is better known as:",
        options: ["De Morgan's law", "Associative law", "Involution law", "Dominance law"],
        answer: 2,
        explain: "(A')' = A. Involution and double negation are the same law.",
      },
      {
        q: "What is the dual of A + A' = 1?",
        options: ["A·A' = 0", "A' + A = 1", "A + A = A", "A·1 = A"],
        answer: 0,
        explain: "Swap + with · and 1 with 0.",
      },
      {
        q: "Simplify (XY)·0 + (XY)·1.",
        options: ["0", "1", "X + Y", "XY"],
        answer: 3,
        explain: "(XY)·0 = 0 (null) and (XY)·1 = XY (identity), so the answer is 0 + XY = XY.",
      },
      {
        q: "(B + C) + (B + C)' equals:",
        options: ["B + C", "1", "0", "B'C'"],
        answer: 1,
        explain: "Complement law with A = (B + C). Anything ORed with its own complement is 1.",
      },
      {
        q: "Proof by perfect induction means:",
        options: [
          "Proving by checking every possible input combination",
          "Using De Morgan twice",
          "Proving a law for 2 variables and assuming it for 3",
          "Taking the dual of the expression",
        ],
        answer: 0,
        explain: "In Boolean algebra there are finitely many input combinations, so a truth table that checks all of them is a full proof.",
      },
    ],
    fillBlanks: [
      { q: "Identity law (OR form): A + 0 = ___", answer: "A", alt: ["a"] },
      { q: "Null law (AND form): A·0 = ___", answer: "0", alt: ["zero"] },
      { q: "Complement law (OR form): A + A' = ___", answer: "1", alt: ["one"] },
      { q: "Involution law: (A')' = ___", answer: "A", alt: ["a"] },
      {
        q: "The null law is also called the ___ law.",
        answer: "dominance",
        alt: ["dominance law", "annulment", "annulment law"],
      },
      { q: "Idempotent law (AND form): A·A = ___", answer: "A", alt: ["a"] },
    ],
    trueFalse: [
      { q: "A + 1 = A.", answer: false, explain: "A + 1 = 1 (null law). It is A·1 that equals A." },
      { q: "A·A' = 0 for every value of A.", answer: true, explain: "If A = 0 the product is 0·1, if A = 1 it is 1·0. Both are 0." },
      {
        q: "The basic laws only apply to single letters, not to bracketed expressions.",
        answer: false,
        explain: "Any expression can stand in for A. For example (AB) + (AB)' = 1.",
      },
      { q: "A + A + A = A.", answer: true, explain: "Idempotent law applied twice." },
      {
        q: "A two-row truth table is enough to prove any one-variable law.",
        answer: true,
        explain: "A has only two values, so checking A = 0 and A = 1 covers every case.",
      },
    ],
    flashcards: [
      { front: "Identity law", back: "A + 0 = A,  A·1 = A" },
      { front: "Null / dominance law", back: "A + 1 = 1,  A·0 = 0" },
      { front: "Idempotent law", back: "A + A = A,  A·A = A" },
      { front: "Complement law", back: "A + A' = 1,  A·A' = 0" },
      { front: "Involution (double negation) law", back: "(A')' = A. Invert twice and you are back to A." },
      { front: "Identity vs null: quick test", back: "Think of the gate. OR with 0 / AND with 1 passes A through (identity). OR with 1 / AND with 0 forces the output (null)." },
      { front: "Teacher's \"AND gate\" rules", back: "A·A = A, A·A' = 0, A·1 = A, A·0 = 0" },
      { front: "Teacher's \"OR gate\" rules", back: "A + A = A, A + A' = 1, A + 1 = 1, A + 0 = A" },
      { front: "Simplify (A + A')·B", back: "1·B = B (complement, then identity)." },
    ],
    examples: [
      {
        title: "One-liners",
        items: [
          "A·B·1 + 0 = A·B  (identity twice)",
          "((A')')·1 + 0 = A·1 + 0 = A  (involution, then identity twice)",
          "A·B + (A·B)' = 1  (complement law with A·B as the variable)",
          "A + A + A·1 = A + A = A  (identity, idempotent)",
        ],
      },
    ],
    exercises: [
      {
        problem: "Simplify (A + A')·(B·B), naming the law at each step.",
        solution: `(A + A')·(B·B)
= 1·(B·B)        complement law   (A + A' = 1)
= 1·B            idempotent law   (B·B = B)
= B              identity law     (1·B = B)`,
      },
      {
        problem: "Simplify A·A'·B + C·1, naming the law at each step.",
        solution: `A·A'·B + C·1
= 0·B + C·1      complement law   (A·A' = 0)
= 0 + C·1        null law         (0·B = 0)
= 0 + C          identity law     (C·1 = C)
= C              identity law     (0 + C = C)`,
      },
      {
        problem: "Prove the complement law (both forms) using a truth table.",
        solution: ` A | A' | A + A' | A·A'
 0 |  1 |   1    |  0
 1 |  0 |   1    |  0

The A + A' column is 1 in every row, so A + A' = 1.
The A·A' column is 0 in every row, so A·A' = 0.
Every possible value of A has been checked, so the proof is complete.`,
      },
      {
        problem: "Simplify (B + 1)·(C + C') + A·0.",
        solution: `(B + 1)·(C + C') + A·0
= 1·(C + C') + A·0     null law        (B + 1 = 1)
= 1·1 + A·0            complement law  (C + C' = 1)
= 1 + A·0              identity law    (1·1 = 1)
= 1                    null law        (1 + X = 1)`,
      },
      {
        problem: "Simplify ((A·B)')' + 0 and name the laws.",
        solution: `((A·B)')' + 0
= A·B + 0        involution law   ((X')' = X with X = A·B)
= A·B            identity law     (X + 0 = X)`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Commutative, associative, distributive
  // ---------------------------------------------------------------------------
  {
    id: "dld-comm-assoc-dist",
    number: 4,
    chapter: CHAPTER,
    title: "Commutative, Associative and Distributive Laws",
    summary:
      "Order and grouping laws, the truth-table proof of the associative law the teacher asked for, and both distributive laws including A + BC = (A + B)(A + C), which has no match in ordinary algebra.",
    content: `## Commutative law

The order of inputs does not matter.

| OR form | AND form |
|---|---|
| A + B = B + A | A·B = B·A |

In circuit terms, you can swap the two wires going into an AND or OR gate and nothing changes. This is the law you use when the teacher writes "rearrange" next to a step, for example turning BCAB into ABBC.

## Associative law

The grouping of the same operator does not matter.

| OR form | AND form |
|---|---|
| A + (B + C) = (A + B) + C | A·(B·C) = (A·B)·C |

Because of this, we can write A + B + C and ABC with no brackets at all. It is also why a 3-input AND gate can be built from two 2-input AND gates: AND A and B first, then AND the result with C. The teacher used exactly this when counting gates ("1 gate for 3 variables" with a 3-input AND, "2 gates" with 2-input ANDs).

\`\`\`
 A ──┐
     [AND]── A·B ──┐
 B ──┘             [AND]── A·B·C
 C ────────────────┘
\`\`\`

## Proving the associative law with a truth table

The teacher wrote "prove with the help of TT" on the board, so practise this layout.

| A | B | C | B + C | A + (B + C) | A + B | (A + B) + C |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |

Columns 5 and 7 match in all 8 rows, so A + (B + C) = (A + B) + C.

| A | B | C | B·C | A·(B·C) | A·B | (A·B)·C |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |

Columns 5 and 7 match again, so A·(B·C) = (A·B)·C.

## Distributive law

There are two forms, and they are duals of each other.

| AND over OR (looks like normal algebra) | OR over AND (Boolean only) |
|---|---|
| A·(B + C) = A·B + A·C | A + B·C = (A + B)·(A + C) |

The first one is the familiar "multiply out the bracket". You use it in both directions: expanding A(B + C), and factoring AB + AC back into A(B + C). Factoring is what the teacher does in steps like A'BC' + A'C = A'(BC' + C).

The second form looks wrong to anyone used to school algebra, but it is true in Boolean algebra. It is very handy for converting SOP to POS.

## Proof of A + BC = (A + B)(A + C) by algebra

Start from the right-hand side:

\`\`\`
(A + B)(A + C)
= A·A + A·C + B·A + B·C      distributive (multiply out)
= A + AC + AB + BC           idempotent   (A·A = A)
= A(1 + C + B) + BC          distributive (factor out A)
= A·1 + BC                   null law     (1 + anything = 1)
= A + BC                     identity     (A·1 = A)
\`\`\`

## Proof of A + BC = (A + B)(A + C) by truth table

| A | B | C | BC | A + BC | A + B | A + C | (A + B)(A + C) |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

Columns 5 and 8 are identical.

## Worked example 1: simplify (A + B)(A + C')

Use the OR-over-AND form backwards with C' in place of C:

\`\`\`
(A + B)(A + C') = A + BC'      distributive law (A + XY = (A + X)(A + Y))
\`\`\`

Doing it the long way by multiplying out gives the same answer but takes four more lines.

## Worked example 2: simplify (A + B)(A' + C)

\`\`\`
(A + B)(A' + C)
= AA' + AC + A'B + BC        distributive (multiply out)
= 0 + AC + A'B + BC          complement   (AA' = 0)
= AC + A'B + BC              identity
= AC + A'B                   consensus: BC is covered by AC + A'B
\`\`\`

The last step uses the consensus theorem (XY + X'Z + YZ = XY + X'Z). It is not on our outline, so if you don't want to quote it, AC + A'B + BC is still a correct answer. You can check the shorter form against a truth table: both are 1 for exactly the inputs 010, 011, 101 and 111.

## Worked example 3: factor AB + AC + AD

\`\`\`
AB + AC + AD = A(B + C + D)    distributive (factor out A)
\`\`\`

Before: three 2-input ANDs and a 3-input OR. After: one 3-input OR and one AND.

## Common mistakes

- Writing A + BC = (A + B)C. That is wrong. Try A = 1, C = 0: the left side is 1, the right side is 0.
- Writing A(B + C) = AB + C. You must multiply A into every term inside the bracket.
- Forgetting that the OR-over-AND form exists, then spending six lines multiplying out (A + B)(A + C).
- Using the associative law across different operators. (A + B)·C is not A + (B·C).

## How this shows up in the mid

"Prove the associative law using a truth table" is a classic short question, and the teacher specifically mentioned it. Expect "prove A + BC = (A + B)(A + C)" either algebraically or by truth table. Commutative and distributive steps appear inside every simplification question, so name them when you use them.`,
    mcqs: [
      {
        q: "A + BC equals:",
        options: ["(A + B)C", "AB + AC", "A + B + C", "(A + B)(A + C)"],
        answer: 3,
        explain: "This is the OR-over-AND distributive law, the dual of A(B + C) = AB + AC.",
      },
      {
        q: "Which law lets us write A + B + C without brackets?",
        options: ["Commutative", "Distributive", "Associative", "Absorption"],
        answer: 2,
        explain: "The associative law says the grouping does not matter.",
      },
      {
        q: "A·B = B·A is the:",
        options: ["Commutative law", "Associative law", "Identity law", "Distributive law"],
        answer: 0,
        explain: "Changing the order of inputs is the commutative law.",
      },
      {
        q: "What is the dual of A(B + C) = AB + AC?",
        options: [
          "A + BC = (A + B)(A + C)",
          "A + (B + C) = (A + B) + C",
          "A(BC) = (AB)C",
          "(A + B)' = A'B'",
        ],
        answer: 0,
        explain: "Swap + and ·: A + B·C = (A + B)·(A + C).",
      },
      {
        q: "Simplify (A + B)(A + C').",
        options: ["A + BC'", "AB + C'", "A + B + C'", "AC' + B"],
        answer: 0,
        explain: "(A + X)(A + Y) = A + XY with X = B and Y = C'.",
      },
      {
        q: "Factor AB + AC + AD.",
        options: ["A + BCD", "A(B + C + D)", "(A + B)(A + C)(A + D)", "ABCD"],
        answer: 1,
        explain: "Take the common factor A out using the distributive law.",
      },
      {
        q: "To prove the associative law for three variables with a truth table you need how many rows?",
        options: ["3", "4", "6", "8"],
        answer: 3,
        explain: "Three variables give 2³ = 8 rows.",
      },
      {
        q: "Which step is WRONG?",
        options: [
          "A(B + C) = AB + AC",
          "A + BC = (A + B)(A + C)",
          "A + BC = (A + B)C",
          "AB + AC = A(B + C)",
        ],
        answer: 2,
        explain: "(A + B)C = AC + BC, which is not A + BC. Try A = 1, C = 0 to see they differ.",
      },
      {
        q: "A 3-input AND gate can be built from how many 2-input AND gates?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explain: "AND A with B, then AND the result with C. The associative law guarantees the result is A·B·C.",
      },
    ],
    fillBlanks: [
      { q: "A + B = B + A is the ___ law.", answer: "commutative", alt: ["commutative law"] },
      { q: "A(B + C) = AB + ___", answer: "AC", alt: ["ac", "a·c", "a.c", "ca"] },
      { q: "A + BC = (A + B)(A + ___)", answer: "C", alt: ["c"] },
      {
        q: "A·(B·C) = (A·B)·C is the ___ law.",
        answer: "associative",
        alt: ["associative law"],
      },
      {
        q: "(A + B)(A + C') simplifies to A + ___",
        answer: "BC'",
        alt: ["bc'", "b·c'", "b.c'", "c'b"],
      },
    ],
    trueFalse: [
      {
        q: "A + BC = (A + B)(A + C) holds in Boolean algebra but not in ordinary algebra.",
        answer: true,
        explain: "In ordinary algebra (a + b)(a + c) = a² + ab + ac + bc. Boolean algebra collapses this to A + BC.",
      },
      {
        q: "(A + B)·C = A + (B·C).",
        answer: false,
        explain: "The associative law only regroups the same operator. Here the operators are different. A = 1, C = 0 breaks it.",
      },
      {
        q: "The commutative law means you can swap the input wires of an AND gate without changing its output.",
        answer: true,
      },
      {
        q: "The two distributive laws are duals of each other.",
        answer: true,
        explain: "Swapping + and · in A(B + C) = AB + AC gives A + BC = (A + B)(A + C).",
      },
      {
        q: "A(B + C) = AB + C.",
        answer: false,
        explain: "A must multiply every term in the bracket: AB + AC.",
      },
    ],
    flashcards: [
      { front: "Commutative law", back: "A + B = B + A,  A·B = B·A" },
      { front: "Associative law", back: "A + (B + C) = (A + B) + C,  A(BC) = (AB)C" },
      { front: "Distributive law (AND over OR)", back: "A(B + C) = AB + AC" },
      { front: "Distributive law (OR over AND)", back: "A + BC = (A + B)(A + C)" },
      { front: "Simplify (A + B)(A + C)", back: "A + BC" },
      { front: "Why the associative law matters for gates", back: "A multi-input gate can be split into a chain of 2-input gates, e.g. ABC = (AB)C." },
      { front: "Classic distributive trap", back: "A + BC is NOT (A + B)C. It is (A + B)(A + C)." },
      { front: "Simplify (A + B)(A' + C)", back: "AC + A'B (multiply out, AA' = 0, drop BC by consensus)." },
      { front: "\"Rearrange\" step on the board", back: "Uses the commutative law, e.g. BCAB = ABBC." },
    ],
    examples: [
      {
        title: "Using distributive both ways",
        items: [
          "Expand: A(B + C') = AB + AC'",
          "Factor: A'BC' + A'C = A'(BC' + C)",
          "OR over AND: (X + Y)(X + Z) = X + YZ",
          "Multiply out: (A + B)(C + D) = AC + AD + BC + BD",
        ],
      },
    ],
    exercises: [
      {
        problem: "Prove A + BC = (A + B)(A + C) algebraically, naming each law.",
        solution: `RHS = (A + B)(A + C)
    = AA + AC + BA + BC        distributive (multiply out)
    = A + AC + AB + BC         idempotent   (AA = A), commutative (BA = AB)
    = A(1 + C + B) + BC        distributive (factor A)
    = A·1 + BC                 null law     (1 + X = 1)
    = A + BC                   identity     (A·1 = A)
    = LHS`,
      },
      {
        problem: "Prove the associative law A·(B·C) = (A·B)·C using a truth table.",
        solution: ` A B C | B·C | A·(B·C) | A·B | (A·B)·C
 0 0 0 |  0  |    0    |  0  |    0
 0 0 1 |  0  |    0    |  0  |    0
 0 1 0 |  0  |    0    |  0  |    0
 0 1 1 |  1  |    0    |  0  |    0
 1 0 0 |  0  |    0    |  0  |    0
 1 0 1 |  0  |    0    |  0  |    0
 1 1 0 |  0  |    0    |  1  |    0
 1 1 1 |  1  |    1    |  1  |    1

The A·(B·C) and (A·B)·C columns match in all 8 rows. Proved.`,
      },
      {
        problem: "Simplify (A + B)(A + B').",
        solution: `(A + B)(A + B')
= A + BB'          distributive (A + XY = (A + X)(A + Y))
= A + 0            complement   (BB' = 0)
= A                identity`,
      },
      {
        problem: "Expand (A + B)(A' + C) and simplify as far as you can.",
        solution: `(A + B)(A' + C)
= AA' + AC + BA' + BC      distributive
= 0 + AC + A'B + BC        complement (AA' = 0), commutative
= AC + A'B + BC            identity
= AC + A'B                 consensus theorem (BC is redundant)

Check with A=0,B=1,C=1: original = (1)(1) = 1, AC + A'B = 0 + 1 = 1.
Check with A=1,B=1,C=0: original = (1)(0) = 0, AC + A'B = 0 + 0 = 0.`,
      },
      {
        problem: "Show by a counter-example that A + BC is not equal to (A + B)C.",
        solution: `Take A = 1, B = 0, C = 0.

A + BC   = 1 + 0·0 = 1
(A + B)C = (1 + 0)·0 = 0

1 ≠ 0, so the two expressions are not equal.
The correct identity is A + BC = (A + B)(A + C).`,
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // 5. Absorption
  // ---------------------------------------------------------------------------
  {
    id: "dld-absorption-law",
    number: 5,
    chapter: CHAPTER,
    title: "Absorption Law (and A + A'B = A + B)",
    summary:
      "The absorption law in all the forms the teacher wrote on the board, proofs by algebra and truth table, and how it does most of the work in simplification questions.",
    content: `## The law as written in class

The teacher's board had three lines under "Absorption Law":

\`\`\`
A·(A + B) = A
A + (A·B) = A
A + A'B   = A + B
\`\`\`

Add the dual of the third line and you have the full set:

| Form | OR version | AND version (dual) |
|---|---|---|
| Absorption | A + AB = A | A(A + B) = A |
| Redundant complement | A + A'B = A + B | A(A' + B) = AB |

Some books call the second row "redundant literal" or "simplification theorem" and keep the name absorption for the first row only. Our board puts all of them under absorption, so that is the name to use in our paper.

## Why A + AB = A makes sense

If A = 1, the whole thing is 1 no matter what AB is. If A = 0, then AB is 0 too, so the result is 0. Either way the output just follows A, and B has no effect. The term AB gets "absorbed" into A.

## Why A + A'B = A + B makes sense

If A = 1, both sides are 1. If A = 0, then A' = 1 and A'B becomes just B, so the left side is B and the right side is 0 + B = B. The A' in the second term never does anything useful, so you can drop it.

## Algebraic proofs

A + AB = A:

\`\`\`
A + AB
= A·1 + AB        identity    (A = A·1)
= A(1 + B)        distributive (factor A)
= A·1             null        (1 + B = 1)
= A               identity
\`\`\`

A(A + B) = A:

\`\`\`
A(A + B)
= AA + AB         distributive
= A + AB          idempotent  (AA = A)
= A               absorption  (just proved above)
\`\`\`

A + A'B = A + B:

\`\`\`
A + A'B
= (A + A')(A + B)  distributive (OR over AND: X + YZ = (X + Y)(X + Z))
= 1·(A + B)        complement   (A + A' = 1)
= A + B            identity
\`\`\`

A(A' + B) = AB:

\`\`\`
A(A' + B)
= AA' + AB         distributive
= 0 + AB           complement
= AB               identity
\`\`\`

## Truth-table proof of A + A'B = A + B

| A | B | A' | A'B | A + A'B | A + B |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 |

The last two columns match.

## Spotting absorption in a messy expression

The pattern is: one term is a single variable (or a whole group), and another term contains that same thing ANDed with something else. Watch for these shapes:

- X + X·(anything) = X
- X + X'·(stuff) = X + (stuff)
- X·(X + anything) = X
- X·(X' + stuff) = X·(stuff)

X can be a whole product. For example AB + ABC = AB, because ABC is AB·C.

## Worked example 1 (from the class simplification): B'C + B

\`\`\`
B'C + B
= B + B'C          commutative
= B + C            absorption (X + X'Y = X + Y with X = B, Y = C)
\`\`\`

The teacher used this in the middle of the 14-gate to 5-gate simplification, writing {B'C + B = B + C} in curly brackets next to the step. The same board also used {A'C + A = A + C}, which is the same law with A in place of B.

## Worked example 2: AB' + A'B'C

\`\`\`
AB' + A'B'C
= B'(A + A'C)      distributive (factor B')
= B'(A + C)        absorption   (A + A'C = A + C)
= AB' + B'C        distributive
\`\`\`

## Worked example 3: (A + B)(A + B + C)

Let X = A + B. Then the expression is X(X + C):

\`\`\`
(A + B)(A + B + C)
= X(X + C)         with X = A + B
= X                absorption  (X(X + Y) = X)
= A + B
\`\`\`

## Bonus: the consensus theorem

Not on our outline but it turns up in simplification. AB + A'C + BC = AB + A'C. The BC term is redundant because whenever B = C = 1, either A = 1 (so AB = 1) or A = 0 (so A'C = 1). Its dual is (A + B)(A' + C)(B + C) = (A + B)(A' + C).

## Common mistakes

- Writing A + A'B = B or A + A'B = A. It is A + B.
- Writing A + AB = AB or A + AB = A + B. It is just A.
- Applying absorption when the "repeated" variable is not really the same. A + BC has no absorption in it.
- Missing absorption when the absorbing term is a product, as in AB + ABC'.

## How this shows up in the mid

Absorption is the law that finishes most simplification questions. You'll often get "state and prove the absorption law" (algebra or truth table), and "A + A'B = A + B" is a favourite prove-this question. In long simplifications, write the name next to each absorption step the way the teacher wrote the rule in curly brackets.`,
    mcqs: [
      {
        q: "A + AB = ?",
        options: ["AB", "A + B", "A", "B"],
        answer: 2,
        explain: "Absorption. Whenever AB is 1, A is already 1, so AB adds nothing.",
      },
      {
        q: "A + A'B = ?",
        options: ["A + B", "B", "A", "AB"],
        answer: 0,
        explain: "The A' is redundant. Proof: A + A'B = (A + A')(A + B) = A + B.",
      },
      {
        q: "A(A + B) = ?",
        options: ["AB", "A", "A + B", "B"],
        answer: 1,
        explain: "AND form of absorption. Multiply out: A + AB = A.",
      },
      {
        q: "A(A' + B) = ?",
        options: ["A + B", "B", "A'B", "AB"],
        answer: 3,
        explain: "AA' + AB = 0 + AB = AB.",
      },
      {
        q: "Simplify B'C + B.",
        options: ["B'", "C", "B + C", "BC"],
        answer: 2,
        explain: "B + B'C = B + C. This is the step written as {B'C + B = B + C} on the class board.",
      },
      {
        q: "Simplify AB + ABC.",
        options: ["AB", "ABC", "AB + C", "A"],
        answer: 0,
        explain: "ABC is AB·C, so AB + AB·C = AB by absorption.",
      },
      {
        q: "Simplify (A + B)(A + B + C).",
        options: ["A + B + C", "C", "(A + B)C", "A + B"],
        answer: 3,
        explain: "Let X = A + B. X(X + C) = X.",
      },
      {
        q: "Which law is used in A + A'B = (A + A')(A + B)?",
        options: ["De Morgan", "Distributive (OR over AND)", "Associative", "Idempotent"],
        answer: 1,
        explain: "X + YZ = (X + Y)(X + Z) with X = A, Y = A', Z = B.",
      },
      {
        q: "Simplify A' + AB.",
        options: ["A' + B", "B", "A'", "1"],
        answer: 0,
        explain: "Same pattern with A' as the main variable: A' + (A')'B = A' + B.",
      },
    ],
    fillBlanks: [
      { q: "A + AB = ___", answer: "A", alt: ["a"] },
      { q: "A + A'B = ___", answer: "A+B", alt: ["a+b", "a + b", "b+a", "b + a"] },
      { q: "A(A + B) = ___", answer: "A", alt: ["a"] },
      { q: "A(A' + B) = ___", answer: "AB", alt: ["ab", "a·b", "a.b", "ba"] },
      { q: "A'C + A simplifies to A + ___", answer: "C", alt: ["c"] },
      {
        q: "In AB + A'C + BC, the redundant term BC can be dropped by the ___ theorem.",
        answer: "consensus",
        alt: ["consensus theorem"],
      },
    ],
    trueFalse: [
      { q: "A + A'B = A + B.", answer: true, explain: "Redundant complement form of absorption." },
      { q: "A + AB = A + B.", answer: false, explain: "A + AB = A. If A = 0 and B = 1 the left side is 0 but A + B is 1." },
      { q: "A(A + B) = A is the dual of A + AB = A.", answer: true, explain: "Swap + and · and you get one from the other." },
      { q: "A + BC can be simplified by absorption.", answer: false, explain: "No term contains A, so there is nothing to absorb." },
      {
        q: "AB + AB·C' = AB.",
        answer: true,
        explain: "Absorption with X = AB.",
      },
    ],
    flashcards: [
      { front: "Absorption (OR form)", back: "A + AB = A" },
      { front: "Absorption (AND form)", back: "A(A + B) = A" },
      { front: "A + A'B", back: "A + B (the A' is redundant)" },
      { front: "A(A' + B)", back: "AB" },
      { front: "Proof of A + A'B = A + B in one line", back: "(A + A')(A + B) = 1·(A + B) = A + B" },
      { front: "Proof of A + AB = A in one line", back: "A(1 + B) = A·1 = A" },
      { front: "Board steps from class", back: "{B'C + B = B + C} and {A'C + A = A + C}" },
      { front: "Consensus theorem (bonus)", back: "AB + A'C + BC = AB + A'C" },
      { front: "How to spot absorption", back: "One term is X, another term is X·(something) or X'·(something)." },
    ],
    examples: [
      {
        title: "Absorption in action",
        items: [
          "AB + ABC = AB",
          "(A + B)(A + B + C) = A + B",
          "X + X'YZ = X + YZ",
          "A'B + A'B'C = A'(B + B'C) = A'(B + C) = A'B + A'C",
          "(A + B')(A + B' + C) = A + B'",
        ],
      },
    ],
    exercises: [
      {
        problem: "Prove A + A'B = A + B (a) algebraically and (b) by truth table.",
        solution: `(a)
A + A'B
= (A + A')(A + B)    distributive (X + YZ = (X + Y)(X + Z))
= 1·(A + B)          complement
= A + B              identity

(b)
 A B | A' | A'B | A + A'B | A + B
 0 0 |  1 |  0  |    0    |   0
 0 1 |  1 |  1  |    1    |   1
 1 0 |  0 |  0  |    1    |   1
 1 1 |  0 |  0  |    1    |   1
Columns 5 and 6 match, so the identity holds.`,
      },
      {
        problem: "Prove A(A + B) = A, naming each law.",
        solution: `A(A + B)
= AA + AB          distributive
= A + AB           idempotent (AA = A)
= A(1 + B)         distributive (factor A)
= A·1              null (1 + B = 1)
= A                identity`,
      },
      {
        problem: "Simplify AB' + A'B'C.",
        solution: `AB' + A'B'C
= B'(A + A'C)      distributive (factor B')
= B'(A + C)        absorption (A + A'C = A + C)
= AB' + B'C        distributive`,
      },
      {
        problem: "Simplify A'B + A'B'C.",
        solution: `A'B + A'B'C
= A'(B + B'C)      distributive (factor A')
= A'(B + C)        absorption (B + B'C = B + C)
= A'B + A'C        distributive`,
      },
      {
        problem: "Simplify (A + B')(A + B' + C).",
        solution: `Let X = A + B'.
(A + B')(A + B' + C) = X(X + C)
                     = X               absorption (X(X + Y) = X)
                     = A + B'`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. De Morgan
  // ---------------------------------------------------------------------------
  {
    id: "dld-de-morgan",
    number: 6,
    chapter: CHAPTER,
    title: "De Morgan's Theorems",
    summary:
      "Both De Morgan theorems for two and n variables, truth-table proofs, how to complement a whole expression step by step, and bubble pushing on gate diagrams.",
    content: `## The two theorems

| Theorem | Statement | In words |
|---|---|---|
| First | (A·B)' = A' + B' | NOT of an AND is the OR of the NOTs |
| Second | (A + B)' = A'·B' | NOT of an OR is the AND of the NOTs |

The usual memory line is "break the bar, change the sign". When you split a bar (or a ' outside brackets) across the variables, every · under it becomes + and every + becomes ·. Each variable gets complemented.

The two theorems are duals of each other.

## Truth-table proof of the first theorem

| A | B | A·B | (A·B)' | A' | B' | A' + B' |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |

The (A·B)' and A' + B' columns match.

## Truth-table proof of the second theorem

| A | B | A + B | (A + B)' | A' | B' | A'·B' |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |

The (A + B)' and A'·B' columns match.

## More than two variables

The theorems extend to any number of variables:

\`\`\`
(A·B·C)'     = A' + B' + C'
(A + B + C)' = A'·B'·C'
(A·B·C·D)'   = A' + B' + C' + D'
\`\`\`

You can derive the 3-variable version from the 2-variable one by grouping: (A·B·C)' = ((A·B)·C)' = (A·B)' + C' = A' + B' + C'.

## Complementing a whole expression, step by step

Work from the outside in. Apply De Morgan to the outermost operator first, then keep going into the brackets.

Worked example 1: find ((A + B)·C)'

\`\`\`
((A + B)·C)'
= (A + B)' + C'          De Morgan (outer AND becomes OR)
= A'B' + C'              De Morgan on (A + B)'
\`\`\`

Worked example 2: find (AB' + C)'

\`\`\`
(AB' + C)'
= (AB')'·C'              De Morgan (outer OR becomes AND)
= (A' + B'')·C'          De Morgan on (AB')'
= (A' + B)·C'            involution (B'' = B)
\`\`\`

Worked example 3: find (A'B + AB')'

\`\`\`
(A'B + AB')'
= (A'B)'·(AB')'                  De Morgan
= (A + B')·(A' + B)              De Morgan + involution on each
= AA' + AB + A'B' + BB'          distributive
= 0 + AB + A'B' + 0              complement
= AB + A'B'                      identity
\`\`\`

A'B + AB' is XOR, and its complement AB + A'B' is XNOR, which you'll see again in the XOR topic.

## A shortcut: dual plus complemented literals

To complement any expression: take its dual (swap + and ·, swap 0 and 1), then complement every single literal. This gives the same answer as repeated De Morgan.

\`\`\`
F  = AB + C'D
dual:               (A + B)(C' + D)
complement literals: (A' + B')(C + D')
F' = (A' + B')(C + D')
\`\`\`

## Bubble pushing

De Morgan has a picture version. A bubble means NOT, so:

- A NAND gate (AND with a bubble on the output) does the same job as an OR gate with bubbles on both inputs. (AB)' = A' + B'. This second symbol is called the negative-OR or invert-OR.
- A NOR gate (OR with a bubble on the output) does the same job as an AND gate with bubbles on both inputs. (A + B)' = A'B'. This one is the negative-AND.

\`\`\`
 NAND               same as          negative-OR
 A ──┐                               A ──o┐
     [AND]o── (AB)'                       (OR)── A' + B'
 B ──┘                               B ──o┘

 NOR                same as          negative-AND
 A ──┐                               A ──o┐
     (OR)o── (A+B)'                       [AND]── A'B'
 B ──┘                               B ──o┘
\`\`\`

The rule for pushing a bubble through a gate: move the bubble from the output to all inputs (or the other way) and switch AND to OR or OR to AND. Two bubbles on the same wire cancel (involution). This is how NAND-only and NOR-only circuits are analysed in the universal gates topic.

## Common mistakes

- Writing (AB)' = A'B'. Wrong. Test A = 1, B = 0: (AB)' = 1 but A'B' = 0. The sign has to change.
- Writing (A + B)' = A' + B'. Same mistake the other way.
- Breaking the bar but forgetting to complement one of the variables.
- Not keeping brackets. (AB + C)' is (AB)'·C' = (A' + B')C'. If you drop the brackets you get A' + B'C', which is a different function.
- Confusing AB' (only B is complemented) with (AB)' (the whole product is complemented).

## How this shows up in the mid

De Morgan comes up in nearly every paper. Typical questions: state and prove both De Morgan theorems with truth tables, find the complement of a given expression, show that NAND equals negative-OR, or use De Morgan in the middle of a simplification.`,
    mcqs: [
      {
        q: "(A·B)' = ?",
        options: ["A'·B'", "A + B", "(A + B)'", "A' + B'"],
        answer: 3,
        explain: "First De Morgan theorem: break the bar, change · to +.",
      },
      {
        q: "(A + B)' = ?",
        options: ["A' + B'", "A·B", "A'·B'", "(A·B)'"],
        answer: 2,
        explain: "Second De Morgan theorem: break the bar, change + to ·.",
      },
      {
        q: "(A + B + C)' = ?",
        options: ["A'B'C'", "A' + B' + C'", "ABC", "(ABC)'"],
        answer: 0,
        explain: "n-variable De Morgan: every + becomes · and every variable is complemented.",
      },
      {
        q: "The complement of ((A + B)·C) is:",
        options: ["A'B'C'", "(A + B)C'", "A' + B' + C'", "A'B' + C'"],
        answer: 3,
        explain: "((A + B)C)' = (A + B)' + C' = A'B' + C'.",
      },
      {
        q: "A NAND gate is equivalent to:",
        options: [
          "An AND gate with inverted inputs",
          "An OR gate with inverted inputs",
          "An OR gate with an inverted output",
          "A NOR gate",
        ],
        answer: 1,
        explain: "(AB)' = A' + B', so NAND = negative-OR (bubbled-input OR).",
      },
      {
        q: "A NOR gate is equivalent to:",
        options: [
          "An AND gate with inverted inputs",
          "An OR gate with inverted inputs",
          "A NAND gate",
          "An AND gate with an inverted output",
        ],
        answer: 0,
        explain: "(A + B)' = A'B', so NOR = negative-AND.",
      },
      {
        q: "(AB' + C)' simplifies to:",
        options: ["A'B + C'", "(A' + B)C'", "(A' + B')C'", "A' + BC'"],
        answer: 1,
        explain: "(AB')'·C' = (A' + B)·C'.",
      },
      {
        q: "Which is a correct use of De Morgan?",
        options: ["(AB)' = A'B'", "(A + B)' = A' + B'", "(A'B')' = A + B", "(A' + B')' = A' B'"],
        answer: 2,
        explain: "(A'B')' = A'' + B'' = A + B.",
      },
      {
        q: "If F = AB + C'D, then F' is:",
        options: ["A'B' + CD'", "(A + B)(C' + D)", "(A' + B')(C + D')", "A' + B' + C + D'"],
        answer: 2,
        explain: "F' = (AB)'·(C'D)' = (A' + B')(C + D').",
      },
    ],
    fillBlanks: [
      { q: "(A·B)' = A' + ___", answer: "B'", alt: ["b'"] },
      { q: "(A + B)' = A'·___", answer: "B'", alt: ["b'"] },
      { q: "(A'B')' = ___", answer: "A+B", alt: ["a+b", "a + b", "b+a", "b + a"] },
      {
        q: "Short rule for De Morgan: break the bar, change the ___.",
        answer: "sign",
        alt: ["operator", "operation"],
      },
      {
        q: "An OR gate with bubbles on its inputs behaves like a ___ gate.",
        answer: "NAND",
        alt: ["nand"],
      },
      { q: "(A' + B')' = ___", answer: "AB", alt: ["ab", "a·b", "a.b", "ba"] },
    ],
    trueFalse: [
      { q: "(AB)' = A'B'.", answer: false, explain: "(AB)' = A' + B'. With A = 1, B = 0 the two sides are 1 and 0." },
      { q: "(A + B + C + D)' = A'B'C'D'.", answer: true, explain: "De Morgan works for any number of variables." },
      { q: "The two De Morgan theorems are duals of each other.", answer: true },
      {
        q: "Bubble pushing moves a bubble from output to inputs and switches AND to OR (or OR to AND).",
        answer: true,
      },
      {
        q: "AB' and (AB)' mean the same thing.",
        answer: false,
        explain: "In AB' only B is complemented. In (AB)' the whole product is complemented, which equals A' + B'.",
      },
    ],
    flashcards: [
      { front: "De Morgan 1", back: "(A·B)' = A' + B'" },
      { front: "De Morgan 2", back: "(A + B)' = A'·B'" },
      { front: "3-variable De Morgan", back: "(ABC)' = A' + B' + C',  (A + B + C)' = A'B'C'" },
      { front: "Memory line", back: "Break the bar, change the sign (and complement each variable)." },
      { front: "NAND equals...", back: "Negative-OR: OR gate with bubbles on the inputs." },
      { front: "NOR equals...", back: "Negative-AND: AND gate with bubbles on the inputs." },
      { front: "Complement of A'B + AB'", back: "AB + A'B' (XOR complemented gives XNOR)." },
      { front: "Shortcut for F'", back: "Take the dual of F, then complement every literal." },
      { front: "(AB + C)'", back: "(A' + B')·C'. Keep the brackets." },
    ],
    examples: [
      {
        title: "Complements",
        items: [
          "((A + B)C)' = A'B' + C'",
          "(AB' + C)' = (A' + B)C'",
          "((A + B')(C' + D))' = A'B + CD'",
          "(AB + C'D)' = (A' + B')(C + D')",
          "(A'B + AB')' = AB + A'B'",
        ],
      },
    ],
    exercises: [
      {
        problem: "Prove both De Morgan theorems using truth tables.",
        solution: ` A B | AB | (AB)' | A' B' | A'+B' | A+B | (A+B)' | A'B'
 0 0 |  0 |   1   |  1  1 |   1   |  0  |   1    |  1
 0 1 |  0 |   1   |  1  0 |   1   |  1  |   0    |  0
 1 0 |  0 |   1   |  0  1 |   1   |  1  |   0    |  0
 1 1 |  1 |   0   |  0  0 |   0   |  1  |   0    |  0

(AB)' column = A'+B' column   -> (AB)' = A' + B'
(A+B)' column = A'B' column   -> (A + B)' = A'B'`,
      },
      {
        problem: "Find the complement of F = (A + B')(C' + D) and simplify.",
        solution: `F' = ((A + B')(C' + D))'
   = (A + B')' + (C' + D)'      De Morgan (AND becomes OR)
   = A'B'' + C''D'              De Morgan on each bracket
   = A'B + CD'                  involution`,
      },
      {
        problem: "Find F' for F = A'B + AB' and show it equals AB + A'B'.",
        solution: `F' = (A'B + AB')'
   = (A'B)'·(AB')'              De Morgan
   = (A + B')·(A' + B)          De Morgan + involution
   = AA' + AB + B'A' + B'B      distributive
   = 0 + AB + A'B' + 0          complement
   = AB + A'B'                  identity`,
      },
      {
        problem: "Show that (A'·B')' = A + B, and say what this means for gates.",
        solution: `(A'·B')'
= A'' + B''        De Morgan
= A + B            involution

Meaning: an AND gate with bubbles on both inputs and a bubble on
the output is just an OR gate. Equivalently, NAND-ing the two
inverted inputs gives OR. This is exactly how OR is built from
NAND gates.`,
      },
      {
        problem: "Complement F = AB + C'D using the dual-and-complement shortcut, then check one row.",
        solution: `F    = AB + C'D
dual = (A + B)(C' + D)            swap + and ·
F'   = (A' + B')(C + D')          complement each literal

Check A=1, B=1, C=0, D=0:
F  = 1·1 + 1·0 = 1
F' = (0 + 0)(0 + 1) = 0           opposite of F, correct.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Simplification
  // ---------------------------------------------------------------------------
  {
    id: "dld-simplification",
    number: 7,
    chapter: CHAPTER,
    title: "Boolean Expression Simplification",
    summary:
      "How to simplify step by step with the laws, the teacher's three whiteboard examples with gate counts (6 to 2, 14 to 5, 12 to 3), and extra practice in the same style.",
    content: `## Why we simplify

Every operator in an expression turns into a gate, and every complemented literal needs a NOT. A shorter expression means fewer gates, so the circuit is cheaper and smaller. The teacher made this point by counting gates before and after each simplification.

## How gates were counted in class

The class convention, as far as the board shows, is:

- each 2-input AND or OR counts as 1 gate
- a product of 3 literals needs 2 two-input ANDs, a sum of 4 terms needs 3 two-input ORs
- each NOT counts as 1 gate

The board noted "1 gate for 3 variables, 2 gates for 3 variables": ABC is one 3-input AND gate, or two 2-input AND gates chained together. When an exam asks for a gate count, say which convention you are using.

## A general method

1. Look for a common factor and take it out (distributive).
2. Look for X + X' or X·X' inside brackets (complement law), and X·X or X + X (idempotent).
3. Look for absorption: X + XY = X and X + X'Y = X + Y.
4. Clean up with identity and null (X·1, X + 0, X + 1, X·0).
5. If a bar covers a group, open it with De Morgan first.
6. Rearrange terms (commutative) to bring matching ones together. Writing "rearrange" next to the step is fine.
7. Write the law next to every step.

There is often more than one route. Any route that uses valid laws earns the marks, as long as the final answer is minimal.

## Class example 1: F = BC(AC' + AB)  (6 gates to 2 gates)

\`\`\`
F = BC(AC' + AB)
  = BCAC' + BCAB         distributive (multiply BC in)
  = ABCC' + ABBC         rearrange (commutative)
  = AB·0 + ABC           complement (CC' = 0), idempotent (BB = B)
  = 0 + ABC              null (AB·0 = 0)
  = ABC                  identity
\`\`\`

Gate count. Before: NOT for C', AND for BC, AND for AC', AND for AB, OR, final AND = 6 gates. After: ABC = two 2-input ANDs (or one 3-input AND) = 2 gates.

## Class example 2: F = A'BC + AB'C + ABC' + ABC  (14 gates to 5 gates)

\`\`\`
F = A'BC + AB'C + ABC' + ABC
  = A'BC + AB'C + AB(C' + C)      distributive (factor AB)
  = A'BC + AB'C + AB              complement (C' + C = 1), identity
  = A'BC + A(B'C + B)             distributive (factor A)
  = A'BC + A(B + C)               absorption  {B'C + B = B + C}
  = A'BC + AB + AC                distributive
  = B(A'C + A) + AC               distributive (factor B)
  = B(A + C) + AC                 absorption  {A'C + A = A + C}
  = AB + BC + AC                  distributive
\`\`\`

Gate count. Before: 3 NOTs, 4 three-literal products at 2 ANDs each = 8, and a 4-term OR = 3 ORs. Total 3 + 8 + 3 = 14. After: 3 ANDs (AB, BC, AC) + 2 ORs = 5.

This function is 1 whenever at least two of the three inputs are 1, so it is called the majority function.

A quicker route, if you spot it: ABC can be repeated as many times as you like (idempotent, X = X + X + X), so pair it with each of the other three terms:

\`\`\`
F = (A'BC + ABC) + (AB'C + ABC) + (ABC' + ABC)    idempotent
  = BC(A' + A) + AC(B' + B) + AB(C' + C)          distributive
  = BC + AC + AB                                  complement, identity
\`\`\`

## Class example 3: F = A'BC' + A'C + B'C + AC  (12 gates to 3 gates)

\`\`\`
F = A'BC' + A'C + B'C + AC
  = A'(BC' + C) + B'C + AC         distributive (factor A')
  = A'(B + C) + B'C + AC           absorption  {BC' + C = B + C}
  = A'B + A'C + B'C + AC           distributive
  = A'B + B'C + A'C + AC           rearrange
  = A'B + B'C + C(A' + A)          distributive (factor C)
  = A'B + B'C + C                  complement {A' + A = 1}, identity
  = A'B + C(B' + 1)                distributive (factor C)
  = A'B + C                        null {B' + 1 = 1}, identity
\`\`\`

Gate count. After: one NOT (A'), one AND, one OR = 3 gates. The board says 12 gates before, which matches using a separate NOT for each complemented literal (A' twice, C', B' = 4 NOTs) plus 5 ANDs plus 3 ORs.

## More examples in the same style

Example 4: AB + AB'

\`\`\`
AB + AB' = A(B + B')     distributive
         = A·1           complement
         = A             identity
\`\`\`

Example 5: AB + A(B + C) + B(B + C)

\`\`\`
AB + A(B + C) + B(B + C)
= AB + AB + AC + BB + BC      distributive
= AB + AC + B + BC            idempotent (AB + AB = AB, BB = B)
= AC + B(A + 1 + C)           rearrange, distributive (factor B)
= AC + B                      null (A + 1 + C = 1), identity
\`\`\`

Example 6: (A + B')(A' + B')

\`\`\`
(A + B')(A' + B')
= B' + AA'           distributive (OR over AND, factor B')
= B' + 0             complement
= B'                 identity
\`\`\`

## Checking your answer

You can always check a simplification by trying a few input combinations in both the original and the answer. If even one row differs, there's a mistake. For 3 variables, writing the full 8-row table for both is the strongest check and takes two minutes.

## Common mistakes

- Cancelling like ordinary algebra: AB + AC = A(B + C) is fine, but AB + C is not A(B + C).
- Dropping a term because it "looks covered" without a law to back it up.
- Writing A + A'B = B. It is A + B.
- Stopping early. A'B + B'C + C still simplifies to A'B + C.
- Not naming the laws. Marks are usually given per step.

## How this shows up in the mid

This is the biggest question type in the chapter. You'll get one or two expressions with 3 or 4 variables and be asked to simplify them, name the laws, and sometimes count gates before and after or draw the simplified circuit.`,
    mcqs: [
      {
        q: "Simplify BC(AC' + AB).",
        options: ["ABC", "AB + BC", "BC", "A + BC"],
        answer: 0,
        explain: "BCAC' + BCAB = ABCC' + ABBC = 0 + ABC = ABC.",
      },
      {
        q: "A'BC + AB'C + ABC' + ABC simplifies to:",
        options: ["ABC", "A + B + C", "AB + BC + AC", "A'B + C"],
        answer: 2,
        explain: "This is the majority function from class: 14 gates down to 5.",
      },
      {
        q: "A'BC' + A'C + B'C + AC simplifies to:",
        options: ["A' + C", "A'B + C", "B + C", "A'BC"],
        answer: 1,
        explain: "Worked on the board: down to A'B + C with 3 gates.",
      },
      {
        q: "AB + AB' = ?",
        options: ["B", "1", "A", "AB"],
        answer: 2,
        explain: "A(B + B') = A·1 = A.",
      },
      {
        q: "AB + A(B + C) + B(B + C) simplifies to:",
        options: ["B + AC", "A + BC", "AB + C", "A + B + C"],
        answer: 0,
        explain: "Expand, use idempotent to merge AB + AB and BB, then B(A + 1 + C) = B.",
      },
      {
        q: "Using 2-input gates and one NOT per complemented literal, how many gates does A'BC + AB'C + ABC' + ABC need?",
        options: ["8", "11", "12", "14"],
        answer: 3,
        explain: "3 NOTs + 8 ANDs (2 per 3-literal term) + 3 ORs = 14, as on the board.",
      },
      {
        q: "How many 2-input gates does AB + BC + AC need?",
        options: ["3", "5", "6", "4"],
        answer: 1,
        explain: "3 ANDs and 2 ORs.",
      },
      {
        q: "(A + B')(A' + B') simplifies to:",
        options: ["A'", "B'", "AB'", "1"],
        answer: 1,
        explain: "Factor B' with OR-over-AND: B' + AA' = B' + 0 = B'.",
      },
      {
        q: "In the step A'B + B'C + C = A'B + C(B' + 1), which law finishes the job?",
        options: ["Complement", "Null (B' + 1 = 1)", "Involution", "De Morgan"],
        answer: 1,
        explain: "B' + 1 = 1, so C·1 = C.",
      },
    ],
    fillBlanks: [
      { q: "AB + AB' = ___", answer: "A", alt: ["a"] },
      { q: "BC(AC' + AB) = ___", answer: "ABC", alt: ["abc", "a·b·c", "a.b.c"] },
      {
        q: "A'B + B'C + C = A'B + ___",
        answer: "C",
        alt: ["c"],
      },
      {
        q: "AB + BC + AC is called the ___ function because it is 1 when at least two inputs are 1.",
        answer: "majority",
      },
      { q: "(A + B)(A + B') = ___", answer: "A", alt: ["a"] },
      {
        q: "A product of 3 literals needs ___ two-input AND gates.",
        answer: "2",
        alt: ["two"],
      },
    ],
    trueFalse: [
      {
        q: "A simpler Boolean expression usually means fewer gates in the circuit.",
        answer: true,
      },
      { q: "A'B + C and A'BC' + A'C + B'C + AC are equivalent.", answer: true, explain: "That is the third class example." },
      { q: "AB + C = A(B + C).", answer: false, explain: "A(B + C) = AB + AC. With A = 0, C = 1 the two differ." },
      {
        q: "There is only one valid sequence of steps for simplifying a given expression.",
        answer: false,
        explain: "Different routes are fine if every step uses a valid law and the final answer is minimal.",
      },
      {
        q: "You can check a simplification by comparing truth tables of the original and the result.",
        answer: true,
      },
    ],
    flashcards: [
      { front: "BC(AC' + AB)", back: "ABC  (6 gates down to 2)" },
      { front: "A'BC + AB'C + ABC' + ABC", back: "AB + BC + AC  (14 gates down to 5)" },
      { front: "A'BC' + A'C + B'C + AC", back: "A'B + C  (12 gates down to 3)" },
      { front: "AB + AB'", back: "A" },
      { front: "AB + A(B + C) + B(B + C)", back: "B + AC" },
      { front: "(A + B')(A' + B')", back: "B'" },
      { front: "Gate count for a 3-literal product", back: "2 two-input ANDs (or one 3-input AND)." },
      { front: "Trick for majority function", back: "Repeat ABC three times (idempotent) and pair it with each other term." },
      { front: "Simplification order of attack", back: "Factor, kill X + X' and X·X', absorb, clean up with identity/null, De Morgan if a bar covers a group." },
    ],
    examples: [
      {
        title: "Quick simplifications",
        items: [
          "AB + AB' = A",
          "(A + B)(A + B') = A",
          "A'B'C + A'BC + AB'C + ABC = C",
          "A'B'C' + A'B'C + AB'C' + AB'C = B'",
          "AB' + A'B + AB = A + B",
        ],
      },
      {
        title: "Class gate counts",
        items: [
          "BC(AC' + AB): 6 gates -> ABC: 2 gates",
          "A'BC + AB'C + ABC' + ABC: 14 gates -> AB + BC + AC: 5 gates",
          "A'BC' + A'C + B'C + AC: 12 gates -> A'B + C: 3 gates",
        ],
      },
    ],
    exercises: [
      {
        problem: "Simplify F = A'BC + AB'C + ABC' + ABC and compare the gate counts before and after.",
        solution: `F = A'BC + AB'C + ABC' + ABC
  = A'BC + AB'C + AB(C' + C)     distributive
  = A'BC + AB'C + AB             complement, identity
  = A'BC + A(B'C + B)            distributive
  = A'BC + A(B + C)              absorption (B + B'C = B + C)
  = A'BC + AB + AC               distributive
  = B(A'C + A) + AC              distributive
  = B(A + C) + AC                absorption (A + A'C = A + C)
  = AB + BC + AC                 distributive

Gates before: 3 NOT + 8 AND + 3 OR = 14
Gates after:  3 AND + 2 OR       = 5`,
      },
      {
        problem: "Simplify F = A'BC' + A'C + B'C + AC.",
        solution: `F = A'BC' + A'C + B'C + AC
  = A'(BC' + C) + B'C + AC       distributive
  = A'(B + C) + B'C + AC         absorption (C + C'B = C + B)
  = A'B + A'C + B'C + AC         distributive
  = A'B + B'C + C(A' + A)        rearrange, distributive
  = A'B + B'C + C                complement, identity
  = A'B + C(B' + 1)              distributive
  = A'B + C                      null, identity`,
      },
      {
        problem: "Simplify F = AB' + A'B + AB.",
        solution: `F = AB' + A'B + AB
  = AB' + A'B + AB + AB          idempotent (AB = AB + AB)
  = A(B' + B) + B(A' + A)        rearrange, distributive
  = A·1 + B·1                    complement
  = A + B                        identity`,
      },
      {
        problem: "Simplify F = A'B'C + A'BC + AB'C + ABC.",
        solution: `F = A'B'C + A'BC + AB'C + ABC
  = A'C(B' + B) + AC(B' + B)     distributive
  = A'C + AC                     complement, identity
  = C(A' + A)                    distributive
  = C                            complement, identity`,
      },
      {
        problem: "Simplify F = AB + A(B + C) + B(B + C).",
        solution: `F = AB + A(B + C) + B(B + C)
  = AB + AB + AC + BB + BC       distributive
  = AB + AC + B + BC             idempotent
  = AC + B(A + 1 + C)            rearrange, distributive
  = AC + B                       null, identity

Answer: F = B + AC`,
      },
      {
        problem: "Simplify F = BC(AC' + AB) and state the gate saving.",
        solution: `F = BC(AC' + AB)
  = BCAC' + BCAB                 distributive
  = ABCC' + ABBC                 commutative (rearrange)
  = AB·0 + ABC                   complement (CC' = 0), idempotent (BB = B)
  = 0 + ABC                      null
  = ABC                          identity

Before: NOT, AND(BC), AND(AC'), AND(AB), OR, AND = 6 gates
After:  two 2-input ANDs (or one 3-input AND) = 2 gates`,
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // 8. Truth tables, minterms, SOP/POS
  // ---------------------------------------------------------------------------
  {
    id: "dld-truth-tables",
    number: 8,
    chapter: CHAPTER,
    title: "Truth Tables, Minterms and Maxterms (SOP and POS)",
    summary:
      "Building a truth table from an expression, going the other way from a table to a canonical SOP or POS expression, minterm and maxterm notation, and canonical vs non-canonical form.",
    content: `## What a truth table is

From the notes: a truth table is a table used to show all possible combinations of input values and the corresponding output of a Boolean expression. For n variables there are 2ⁿ combinations, so 2ⁿ rows. The notes' example: A + B has 2 variables, 2² = 4, so we need 4 rows. And the reminder underneath: A + B = 1 if at least one input is 1.

## Writing the input rows without missing any

Count in binary from 0 to 2ⁿ − 1. For 3 variables:

- column A: four 0s then four 1s
- column B: two 0s, two 1s, repeat
- column C: alternate 0, 1

Number the rows 0 to 7. The row number is just the input read as a binary number (row 5 is A=1, B=0, C=1). You need this numbering for minterms.

## Expression to truth table

Add a helper column for every sub-expression, then combine. The notes do exactly this for A·B·C, with an A·B column first.

Worked example 1: F = A + B'C

| Row | A | B | C | B' | B'C | F = A + B'C |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| 2 | 0 | 1 | 0 | 0 | 0 | 0 |
| 3 | 0 | 1 | 1 | 0 | 0 | 0 |
| 4 | 1 | 0 | 0 | 1 | 0 | 1 |
| 5 | 1 | 0 | 1 | 1 | 1 | 1 |
| 6 | 1 | 1 | 0 | 0 | 0 | 1 |
| 7 | 1 | 1 | 1 | 0 | 0 | 1 |

F is 1 in rows 1, 4, 5, 6, 7.

## Minterms and maxterms

A minterm is a product (AND) term that contains every variable once, either plain or complemented. Each minterm is 1 in exactly one row. Rule: a 0 in the row means the variable appears complemented.

A maxterm is a sum (OR) term that contains every variable once. Each maxterm is 0 in exactly one row. Rule: a 1 in the row means the variable appears complemented. That is the opposite of the minterm rule.

The 2-variable table from the board:

| A | B | Minterm | Maxterm |
|---|---|---|---|
| 0 | 0 | A'B' (m0) | A + B (M0) |
| 0 | 1 | A'B (m1) | A + B' (M1) |
| 1 | 0 | AB' (m2) | A' + B (M2) |
| 1 | 1 | AB (m3) | A' + B' (M3) |

Minterms are written with small m, maxterms with capital M. Notice Mi = (mi)'. For example M1 = A + B' = (A'B)'.

## Truth table to SOP (sum of minterms)

1. Find every row where F = 1.
2. Write the minterm for each of those rows.
3. OR them together.

Short form: F = Σ(list of row numbers). Σ means "sum of minterms".

## Truth table to POS (product of maxterms)

1. Find every row where F = 0.
2. Write the maxterm for each of those rows.
3. AND them together.

Short form: F = Π(list of row numbers). Π means "product of maxterms". The Π list is always the row numbers missing from the Σ list.

## Class example: minterms and maxterms of a 3-variable table

This is the example the teacher worked on the board ("identify the minterms and maxterms expressions from the following TT"):

| Row | A | B | C | F | Term |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | M0 = A + B + C |
| 1 | 0 | 0 | 1 | 1 | m1 = A'B'C |
| 2 | 0 | 1 | 0 | 1 | m2 = A'BC' |
| 3 | 0 | 1 | 1 | 0 | M3 = A + B' + C' |
| 4 | 1 | 0 | 0 | 1 | m4 = AB'C' |
| 5 | 1 | 0 | 1 | 0 | M5 = A' + B + C' |
| 6 | 1 | 1 | 0 | 0 | M6 = A' + B' + C |
| 7 | 1 | 1 | 1 | 1 | m7 = ABC |

\`\`\`
SOP:  F(A,B,C) = m1 + m2 + m4 + m7 = Σ(1, 2, 4, 7)
               = A'B'C + A'BC' + AB'C' + ABC

POS:  F(A,B,C) = M0·M3·M5·M6 = Π(0, 3, 5, 6)
               = (A + B + C)(A + B' + C')(A' + B + C')(A' + B' + C)
\`\`\`

Both expressions describe the same function. (It is 1 when an odd number of inputs are 1, which is A ⊕ B ⊕ C. More on that in the XOR topic.)

A note on the photo: in the whiteboard picture the F column and the m/M labels look shifted by a row, so some of the 0s and 1s are hard to match up. The table above is the one that agrees with the final Σ(1, 2, 4, 7) and Π(0, 3, 5, 6) the teacher wrote, so go with this one.

## Canonical vs non-canonical form

An expression is in canonical form when every term contains every variable. From the board, for F(A, B):

- A'B + AB' is canonical SOP. Both terms have A and B.
- A + AB' is non-canonical. The first term is missing B. (It also simplifies straight to A by absorption.)
- (A' + B)(A + B')(A' + B') is canonical POS. It is M2·M1·M3 = Π(1, 2, 3), which leaves only row 0 as a 1, so it equals A'B'.

Canonical forms come straight out of a truth table but are long. Simplified forms are short but not unique-looking. Exams ask for both.

## Non-canonical to canonical

Multiply each term by (X + X') for every missing variable X, then expand.

Worked example 2: write F = A + B'C in canonical SOP.

\`\`\`
A    = A(B + B')(C + C')  = AB'C' + AB'C + ABC' + ABC
B'C  = B'C(A + A')        = AB'C + A'B'C

F = AB'C' + AB'C + ABC' + ABC + A'B'C     (AB'C repeated once, idempotent)
  = Σ(1, 4, 5, 6, 7)
\`\`\`

This matches the 1-rows of the truth table in worked example 1.

## Common mistakes

- Using the minterm rule for maxterms. For a maxterm, a 1 in the row means the variable is complemented.
- Writing the POS from the 1-rows. POS comes from the 0-rows.
- Skipping or repeating an input row. Always count in binary.
- Writing 2n rows instead of 2ⁿ.

## How this shows up in the mid

Expect at least one of: draw the truth table of an expression (often 3 variables), write the canonical SOP and POS from a given table, express a function in Σ and Π notation, or prove two expressions equal by comparing truth tables.`,
    mcqs: [
      {
        q: "For 3 input variables, a truth table has how many rows?",
        options: ["3", "6", "8", "9"],
        answer: 2,
        explain: "2³ = 8.",
      },
      {
        q: "The minterm for row A=1, B=0, C=1 is:",
        options: ["AB'C", "A'BC'", "A' + B + C'", "A + B' + C"],
        answer: 0,
        explain: "For a minterm, a 0 means complemented. Only B is 0, so AB'C (m5).",
      },
      {
        q: "The maxterm for row A=0, B=1, C=1 is:",
        options: ["A'BC", "A + B' + C'", "A' + B + C", "AB'C'"],
        answer: 1,
        explain: "For a maxterm, a 1 means complemented. B and C are 1, so A + B' + C' (M3).",
      },
      {
        q: "A canonical SOP expression is formed from the rows where F equals:",
        options: ["0", "1", "either, it does not matter", "the input A"],
        answer: 1,
        explain: "SOP = OR of the minterms for the 1-rows.",
      },
      {
        q: "If F(A,B,C) = Σ(1, 2, 4, 7), then in Π notation F =",
        options: ["Π(1, 2, 4, 7)", "Π(0, 3, 5, 6)", "Π(0, 1, 2, 3)", "Π(3, 5, 6, 7)"],
        answer: 1,
        explain: "The maxterm list is all the row numbers not in the minterm list.",
      },
      {
        q: "Which expression is in canonical form for F(A, B)?",
        options: ["A + AB'", "A'B + AB'", "A + B'", "A"],
        answer: 1,
        explain: "Every term contains both A and B.",
      },
      {
        q: "Each minterm is equal to 1 in how many rows of the truth table?",
        options: ["Exactly one", "Exactly two", "Half of them", "All except one"],
        answer: 0,
        explain: "A minterm is 1 only for its own input combination.",
      },
      {
        q: "F = A + B'C. Which list gives its minterms?",
        options: ["Σ(1, 4, 5, 6, 7)", "Σ(0, 2, 3)", "Σ(1, 5)", "Σ(4, 5, 6, 7)"],
        answer: 0,
        explain: "A = 1 covers rows 4 to 7, and B'C adds row 1 (A=0, B=0, C=1).",
      },
      {
        q: "(A' + B)(A + B')(A' + B') simplifies to:",
        options: ["AB", "A + B", "A'B'", "A'B + AB'"],
        answer: 2,
        explain: "These are maxterms M2, M1, M3, so F is 0 in rows 1, 2, 3 and 1 only in row 0: F = A'B'.",
      },
    ],
    fillBlanks: [
      {
        q: "For n variables a truth table has 2 to the power ___ rows.",
        answer: "n",
      },
      {
        q: "The minterm for A=0, B=1 is ___.",
        answer: "A'B",
        alt: ["a'b", "a'·b", "a'.b", "ba'"],
      },
      {
        q: "The maxterm for A=0, B=0 is ___.",
        answer: "A+B",
        alt: ["a+b", "a + b", "b+a", "b + a"],
      },
      {
        q: "The symbol Σ is used for a sum of ___.",
        answer: "minterms",
        alt: ["minterm"],
      },
      {
        q: "POS is built from the rows where the output is ___.",
        answer: "0",
        alt: ["zero"],
      },
    ],
    trueFalse: [
      { q: "Mi is the complement of mi.", answer: true, explain: "e.g. M1 = A + B' and m1 = A'B. By De Morgan, (A'B)' = A + B'." },
      { q: "A + AB' is in canonical form.", answer: false, explain: "The term A is missing B." },
      {
        q: "The Σ list and the Π list of the same function together contain every row number exactly once.",
        answer: true,
      },
      {
        q: "To find a maxterm you complement the variables that are 0 in the row.",
        answer: false,
        explain: "That is the minterm rule. For maxterms you complement the variables that are 1.",
      },
      {
        q: "Two expressions with identical truth tables are equal.",
        answer: true,
        explain: "Equal outputs for every input is the definition of equal Boolean functions.",
      },
    ],
    flashcards: [
      { front: "Truth table (notes definition)", back: "A table showing all possible combinations of input values and the corresponding output of a Boolean expression." },
      { front: "Minterm", back: "AND term with every variable once. Complement a variable if its bit is 0. It is 1 in exactly one row." },
      { front: "Maxterm", back: "OR term with every variable once. Complement a variable if its bit is 1. It is 0 in exactly one row." },
      { front: "Table to SOP", back: "Take the 1-rows, write their minterms, OR them. F = Σ(...)" },
      { front: "Table to POS", back: "Take the 0-rows, write their maxterms, AND them. F = Π(...)" },
      { front: "Canonical form", back: "Every term contains every variable (plain or complemented)." },
      { front: "Σ(1,2,4,7) for A, B, C", back: "A'B'C + A'BC' + AB'C' + ABC = Π(0,3,5,6)" },
      { front: "m5 for A, B, C", back: "AB'C (101)" },
      { front: "M5 for A, B, C", back: "A' + B + C' (101)" },
      { front: "Making a term canonical", back: "Multiply by (X + X') for each missing variable X, then expand." },
    ],
    examples: [
      {
        title: "Σ and Π pairs (3 variables)",
        items: [
          "A + B'C = Σ(1, 4, 5, 6, 7) = Π(0, 2, 3)",
          "A'B + AC = Σ(2, 3, 5, 7) = Π(0, 1, 4, 6)",
          "AB + BC + AC = Σ(3, 5, 6, 7) = Π(0, 1, 2, 4)",
          "A'B'C + A'BC' + AB'C' + ABC = Σ(1, 2, 4, 7) = Π(0, 3, 5, 6)",
        ],
      },
    ],
    exercises: [
      {
        problem: "Draw the truth table for F = A'B + AC and write F in Σ and Π form.",
        solution: ` Row | A B C | A' | A'B | AC | F
  0  | 0 0 0 |  1 |  0  |  0 | 0
  1  | 0 0 1 |  1 |  0  |  0 | 0
  2  | 0 1 0 |  1 |  1  |  0 | 1
  3  | 0 1 1 |  1 |  1  |  0 | 1
  4  | 1 0 0 |  0 |  0  |  0 | 0
  5  | 1 0 1 |  0 |  0  |  1 | 1
  6  | 1 1 0 |  0 |  0  |  0 | 0
  7  | 1 1 1 |  0 |  0  |  1 | 1

F = Σ(2, 3, 5, 7) = A'BC' + A'BC + AB'C + ABC
F = Π(0, 1, 4, 6) = (A + B + C)(A + B + C')(A' + B + C)(A' + B' + C)`,
      },
      {
        problem: "A function F(A,B,C) is 1 in rows 1, 2, 4 and 7 only. Write its canonical SOP and canonical POS.",
        solution: `1-rows: 001, 010, 100, 111
SOP: F = m1 + m2 + m4 + m7
       = A'B'C + A'BC' + AB'C' + ABC

0-rows: 000, 011, 101, 110
POS: F = M0·M3·M5·M6
       = (A + B + C)(A + B' + C')(A' + B + C')(A' + B' + C)`,
      },
      {
        problem: "Write F = A + B'C in canonical SOP form using the (X + X') method.",
        solution: `A   = A(B + B')(C + C')
    = AB'C' + AB'C + ABC' + ABC
B'C = B'C(A + A')
    = AB'C + A'B'C

F = A'B'C + AB'C' + AB'C + ABC' + ABC    (AB'C kept once: idempotent)
  = Σ(1, 4, 5, 6, 7)`,
      },
      {
        problem: "Use a truth table to show (A + B)(A' + C) = AC + A'B.",
        solution: ` A B C | A+B | A'+C | (A+B)(A'+C) | AC | A'B | AC+A'B
 0 0 0 |  0  |  1   |      0      |  0 |  0  |   0
 0 0 1 |  0  |  1   |      0      |  0 |  0  |   0
 0 1 0 |  1  |  1   |      1      |  0 |  1  |   1
 0 1 1 |  1  |  1   |      1      |  0 |  1  |   1
 1 0 0 |  1  |  0   |      0      |  0 |  0  |   0
 1 0 1 |  1  |  1   |      1      |  1 |  0  |   1
 1 1 0 |  1  |  0   |      0      |  0 |  0  |   0
 1 1 1 |  1  |  1   |      1      |  1 |  0  |   1

The two result columns are identical, so the expressions are equal.`,
      },
      {
        problem: "Simplify F(A,B) = (A' + B)(A + B')(A' + B') by identifying its maxterms.",
        solution: `A + B'  = M1 (row 01)
A' + B  = M2 (row 10)
A' + B' = M3 (row 11)

F = Π(1, 2, 3), so F = 0 in rows 1, 2, 3 and F = 1 only in row 0 (A=0, B=0).
F = Σ(0) = A'B'`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. Logic gates <-> expressions
  // ---------------------------------------------------------------------------
  {
    id: "dld-gates-expressions",
    number: 9,
    chapter: CHAPTER,
    title: "Logic Gates and Boolean Expressions",
    summary:
      "Turning an expression into a circuit diagram and reading a circuit back into an expression, using the examples from the notes, plus counting gates and simplifying before you draw.",
    content: `## The link between the two

Each operator in an expression is one gate. Each variable is an input wire. The output of the last operator evaluated is the circuit's output. So drawing a circuit is just writing the expression in a different language.

The notes go through eight circuit diagrams in increasing difficulty. Here they are in text form.

## Drawing rules

1. Put the inputs (A, B, C...) on the left.
2. Wherever a variable appears complemented, add a NOT gate on that input.
3. Build the innermost brackets first. Every AND term gets an AND gate and every sum gets an OR gate.
4. Feed those outputs into the gate for the next operator outward.
5. Label each gate output with its sub-expression, as the notes do (A + B, (A + B)·C...). Examiners like this.

## The simple ones from the notes

\`\`\`
1) A·B             A ──┐
                       [AND]── A·B
                   B ──┘

2) A + B           A ──┐
                       (OR)── A + B
                   B ──┘

3) A'              A ──|>o── A'

4) (A + B)·C       A ──┐
                       (OR)── A + B ──┐
                   B ──┘              [AND]── (A + B)·C
                   C ─────────────────┘
\`\`\`

## Notes example 5: (A·B) + (B·C)

\`\`\`
 A ──────┐
         [AND]── A·B ──┐
 B ──┬───┘             (OR)── (A·B) + (B·C)
     │                 │
     └───┐             │
         [AND]── B·C ──┘
 C ──────┘
\`\`\`

The notes draw this twice. The first drawing writes B twice as two separate inputs. The second ("OR" in the notes) uses one B line and branches it to both AND gates. Both are correct. The branched version is how a real circuit is wired, since B is one signal.

Gates: 2 AND + 1 OR = 3.

## Notes example 6: ((A + B + C)·(B + D)) + (A·B)

\`\`\`
 A,B,C ──(OR)── A + B + C ──┐
                            [AND]── (A + B + C)·(B + D) ──┐
 B,D ────(OR)── B + D ──────┘                             (OR)── F
                                                          │
 A,B ────[AND]── A·B ─────────────────────────────────────┘
\`\`\`

Gates (2-input count): 2 for A + B + C, 1 for B + D, 1 AND, 1 for A·B, 1 final OR = 6.

## Notes example 7: (A·B) + (A'·B·C')

\`\`\`
 A ──────────────┐
                 [AND]── A·B ────────┐
 B ──────────────┘                   (OR)── F
                                     │
 A ──|>o── A' ──┐                    │
 B ─────────────[AND]── A'·B·C' ─────┘
 C ──|>o── C' ──┘
\`\`\`

## Notes example 8: (A + B + C)·(A' + B' + D)·(A' + B + D')

\`\`\`
 A  ────────┐
 B  ────────(OR)── A + B + C ─────┐
 C  ────────┘                     │
                                  │
 A ─|>o─ A' ┐                     │
 B ─|>o─ B' (OR)── A' + B' + D ───[AND]── F
 D ──────── ┘                     │
                                  │
 A ─|>o─ A' ┐                     │
 B ──────── (OR)── A' + B + D' ───┘
 D ─|>o─ D' ┘
\`\`\`

Three OR gates (one per bracket) feeding one 3-input AND. This is a two-level OR-AND circuit, the shape every POS expression has. SOP expressions give the AND-OR shape, like example 5.

## Reading a circuit back into an expression

Work from the inputs to the output. Write the output of each gate as soon as you know its inputs.

Worked example 1:

\`\`\`
 A ──┐
     [AND]── X ──|>o── Y ──┐
 B ──┘                     (OR)── Z ──|>o── F
 C ────────────────────────┘
\`\`\`

\`\`\`
X = A·B
Y = (A·B)'
Z = (A·B)' + C
F = ((A·B)' + C)'
  = (A·B)''·C'        De Morgan
  = A·B·C'            involution
\`\`\`

Worked example 2: simplify before drawing. Notes example 7 is (A·B) + (A'·B·C'):

\`\`\`
AB + A'BC'
= B(A + A'C')       distributive (factor B)
= B(A + C')         absorption (A + A'C' = A + C')
= AB + BC'          distributive
\`\`\`

Original: 2 NOT + 1 AND (AB) + 2 AND (A'BC') + 1 OR = 6 gates. B(A + C') needs 1 NOT + 1 OR + 1 AND = 3 gates.

Worked example 3: notes example 6 simplified.

\`\`\`
(A + B + C)(B + D) + AB
= AB + AD + BB + BD + CB + CD + AB    distributive
= AB + AD + B + BD + BC + CD          idempotent (BB = B, AB + AB = AB)
= B + AD + CD                         absorption (B absorbs AB, BD, BC)
= B + D(A + C)                        distributive
\`\`\`

From 6 gates down to 3 (OR for A + C, AND with D, OR with B).

## Common mistakes

- Putting the NOT on the output of a gate when only one input should be complemented. A'B is not (AB)'.
- Forgetting a branch point: if a variable feeds two gates, draw a dot where the line splits.
- Drawing the AND and OR shapes the wrong way round.
- When reading a circuit, writing the gates in the wrong order. Always go input to output.

## How this shows up in the mid

Very common: "draw the logic circuit for F = ..." (often one of the notes' examples or close to them), "write the Boolean expression for the given circuit", and "simplify the expression and draw the simplified circuit, compare gate counts".`,
    mcqs: [
      {
        q: "How many gates does (A·B) + (B·C) need?",
        options: ["2", "4", "5", "3"],
        answer: 3,
        explain: "Two AND gates and one OR gate.",
      },
      {
        q: "A circuit has inputs A and B going into an OR gate, and that output goes into an AND gate with C. The output is:",
        options: ["A + B·C", "(A + B)·C", "A·B + C", "A + B + C"],
        answer: 1,
        explain: "The OR is done first, then the AND with C. This is example 4 from the notes.",
      },
      {
        q: "A and B go into an AND gate, its output goes through a NOT gate. The result is:",
        options: ["A'B'", "A' + B'", "(AB)'", "Both (AB)' and A' + B'"],
        answer: 3,
        explain: "The circuit gives (AB)', which equals A' + B' by De Morgan.",
      },
      {
        q: "A POS expression like (A + B)(C + D) is implemented as:",
        options: ["AND-OR (two levels)", "OR-AND (two levels)", "A single gate", "NOT-NOT"],
        answer: 1,
        explain: "First level ORs for each bracket, second level AND.",
      },
      {
        q: "AB + A'BC' simplifies to:",
        options: ["AB + BC'", "B", "A + BC'", "ABC'"],
        answer: 0,
        explain: "B(A + A'C') = B(A + C') = AB + BC'.",
      },
      {
        q: "In the notes, the second version of (A·B) + (B·C) differs from the first because:",
        options: [
          "It uses NAND gates",
          "It uses one B input line branched to both AND gates",
          "It has a different output",
          "It leaves out the OR gate",
        ],
        answer: 1,
        explain: "Same function, but the B signal is drawn once and split, the way it would be wired.",
      },
      {
        q: "((A·B)' + C)' equals:",
        options: ["ABC'", "A'B'C", "(AB)'C'", "AB + C'"],
        answer: 0,
        explain: "De Morgan: (AB)''·C' = ABC'.",
      },
      {
        q: "(A + B + C)(B + D) + AB simplifies to:",
        options: ["A + B + D", "B + D(A + C)", "AB + CD", "B + AC"],
        answer: 1,
        explain: "Expanding and absorbing leaves B + AD + CD = B + D(A + C).",
      },
      {
        q: "How many 2-input OR gates are needed for A + B + C?",
        options: ["1", "2", "3", "0"],
        answer: 1,
        explain: "(A + B) first, then OR with C.",
      },
    ],
    fillBlanks: [
      {
        q: "An SOP expression gives a two-level ___-OR circuit.",
        answer: "AND",
        alt: ["and"],
      },
      {
        q: "In a circuit, each complemented input like A' needs a ___ gate.",
        answer: "NOT",
        alt: ["not", "inverter"],
      },
      {
        q: "AB + A'BC' simplifies to B(A + ___).",
        answer: "C'",
        alt: ["c'"],
      },
      {
        q: "When one variable feeds two gates, the line splits at a ___ point.",
        answer: "branch",
        alt: ["junction", "branching", "tap"],
      },
      {
        q: "(A + B + C)(B + D) + AB simplifies to B + D(A + ___).",
        answer: "C",
        alt: ["c"],
      },
    ],
    trueFalse: [
      {
        q: "Each operator in a Boolean expression corresponds to one gate (counting multi-input gates as one).",
        answer: true,
      },
      {
        q: "A'B and (AB)' produce the same circuit.",
        answer: false,
        explain: "A'B inverts only A before the AND. (AB)' inverts the AND output.",
      },
      {
        q: "To read a circuit into an expression, you start from the output and work back to the inputs.",
        answer: false,
        explain: "Start at the inputs and write each gate's output as you move toward the final output. (Going backwards can work, but forward is the safe method.)",
      },
      {
        q: "Simplifying an expression before drawing usually reduces the number of gates.",
        answer: true,
      },
      {
        q: "Drawing a variable twice as separate inputs, or once with a branch, gives the same function.",
        answer: true,
        explain: "Both drawings in the notes for (A·B) + (B·C) are correct.",
      },
    ],
    flashcards: [
      { front: "Expression to circuit: order", back: "NOT gates on inputs first, then innermost brackets, then outward to the final gate." },
      { front: "Circuit to expression: order", back: "Go from inputs to output, writing each gate's output expression." },
      { front: "SOP circuit shape", back: "AND gates feeding one OR gate (AND-OR)." },
      { front: "POS circuit shape", back: "OR gates feeding one AND gate (OR-AND)." },
      { front: "(A·B) + (A'·B·C') simplified", back: "AB + BC' = B(A + C')" },
      { front: "((A + B + C)(B + D)) + AB simplified", back: "B + D(A + C)" },
      { front: "Gates for (A + B)·C", back: "1 OR + 1 AND = 2" },
      { front: "Output of AND then NOT", back: "(AB)' = A' + B'" },
      { front: "Branch point", back: "A dot where one input line splits to feed more than one gate." },
    ],
    examples: [
      {
        title: "Circuits from the notes",
        items: [
          "A·B: one AND gate",
          "(A + B)·C: OR then AND",
          "(A·B) + (B·C): two ANDs into an OR",
          "((A + B + C)·(B + D)) + (A·B): ORs into an AND, then OR with AB",
          "(A·B) + (A'·B·C'): two NOTs, two ANDs, one OR",
          "(A + B + C)·(A' + B' + D)·(A' + B + D'): three ORs into an AND",
        ],
      },
    ],
    exercises: [
      {
        problem: "Draw the logic circuit for F = (A·B) + (B·C) and count the gates.",
        solution: ` A ──────┐
         [AND]── A·B ──┐
 B ──┬───┘             (OR)── F = (A·B) + (B·C)
     │                 │
     └───┐             │
         [AND]── B·C ──┘
 C ──────┘

Gates: 2 AND + 1 OR = 3
(Bonus: F = B(A + C) needs only 1 OR + 1 AND = 2 gates.)`,
      },
      {
        problem: "Write the output expression of this circuit and simplify it:\nA and B go into an AND gate (X). C goes through a NOT gate (Y). X and Y go into an OR gate (Z). Z goes through a NOT gate to give F.",
        solution: `X = AB
Y = C'
Z = AB + C'
F = (AB + C')'
  = (AB)'·C''          De Morgan
  = (A' + B')·C        De Morgan, involution`,
      },
      {
        problem: "Simplify F = (A·B) + (A'·B·C') and draw both the original and simplified circuits. Compare gate counts.",
        solution: `F = AB + A'BC'
  = B(A + A'C')        distributive
  = B(A + C')          absorption

Original:
 A ─────────────[AND]── AB ──────┐
 B ─────────────┘                (OR)── F
 A ─|>o─ A' ─┐                   │
 B ──────────[AND]── A'BC' ──────┘
 C ─|>o─ C' ─┘
Gates: 2 NOT + 1 AND + 2 AND (3-input as two 2-input) + 1 OR = 6

Simplified:
 A ──────────────(OR)── A + C' ──┐
 C ─|>o─ C' ─────┘               [AND]── F
 B ──────────────────────────────┘
Gates: 1 NOT + 1 OR + 1 AND = 3`,
      },
      {
        problem: "Simplify F = ((A + B + C)·(B + D)) + (A·B) and say how many 2-input gates the result needs.",
        solution: `F = (A + B + C)(B + D) + AB
  = AB + AD + BB + BD + CB + CD + AB    distributive
  = AB + AD + B + BD + BC + CD          idempotent
  = B + AD + CD                         absorption (B + B·X = B)
  = B + D(A + C)                        distributive

Gates: OR (A + C), AND (with D), OR (with B) = 3
Original needed 6.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 10. Universal gates
  // ---------------------------------------------------------------------------
  {
    id: "dld-universal-gates",
    number: 10,
    chapter: CHAPTER,
    title: "NAND and NOR as Universal Gates",
    summary:
      "Why NAND and NOR are called universal, how to build NOT, AND, OR (and more) from each one with the minimum gate counts, and how to convert SOP/POS circuits to NAND-only or NOR-only form.",
    content: `## What "universal" means

A gate is universal if you can build NOT, AND and OR from it alone. Since every Boolean function can be written with NOT, AND and OR, a universal gate can build any digital circuit. NAND and NOR are both universal. AND or OR alone are not, because neither can make a NOT.

In practice, chips are often made only from NAND (or NOR) gates. In CMOS, a 2-input NAND takes 4 transistors, while an AND is a NAND plus an inverter (6 transistors). Using one gate type also makes manufacturing simpler.

## NAND and NOR truth tables

NAND = NOT AND, F = (A·B)'. NOR = NOT OR, F = (A + B)'.

| A | B | NAND (A·B)' | NOR (A + B)' |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

NAND is 0 only when all inputs are 1. NOR is 1 only when all inputs are 0. Symbols: the AND shape with a bubble on the output (NAND), the OR shape with a bubble on the output (NOR).

## Building from NAND only

NOT from 1 NAND: tie both inputs together.

\`\`\`
 A ──┬──┐
     └──[NAND]o── (A·A)' = A'
\`\`\`

AND from 2 NANDs: NAND, then invert with a second NAND.

\`\`\`
 A ──┐
     [NAND]o── (AB)' ──┬──┐
 B ──┘                 └──[NAND]o── ((AB)')' = AB
\`\`\`

OR from 3 NANDs: invert each input, then NAND them.

\`\`\`
 A ──[NAND as NOT]── A' ──┐
                          [NAND]o── (A'·B')' = A + B
 B ──[NAND as NOT]── B' ──┘
\`\`\`

Proof of the OR: (A'·B')' = A'' + B'' = A + B by De Morgan and involution.

NOR from 4 NANDs: build OR (3), then invert (1).

XOR from 4 NANDs:

\`\`\`
N1 = (A·B)'
N2 = (A·N1)'
N3 = (B·N1)'
F  = (N2·N3)'  = A ⊕ B
\`\`\`

## Building from NOR only

NOT from 1 NOR: tie both inputs together. (A + A)' = A'.

OR from 2 NORs: NOR, then invert with a second NOR. ((A + B)')' = A + B.

AND from 3 NORs: invert each input, then NOR them.

\`\`\`
 A ──[NOR as NOT]── A' ──┐
                         (NOR)o── (A' + B')' = A·B
 B ──[NOR as NOT]── B' ──┘
\`\`\`

Proof: (A' + B')' = A''·B'' = AB.

NAND from 4 NORs: build AND (3), then invert (1).

XNOR from 4 NORs: N1 = (A + B)', N2 = (A + N1)', N3 = (B + N1)', F = (N2 + N3)' = A ⊙ B.

## Gate count summary (minimum, 2-input gates)

| To build | Using NAND only | Using NOR only |
|---|---|---|
| NOT | 1 | 1 |
| AND | 2 | 3 |
| OR | 3 | 2 |
| NAND | 1 | 4 |
| NOR | 4 | 1 |
| XOR | 4 | 5 |
| XNOR | 5 | 4 |

A pattern to remember: NAND is good at AND-type things, NOR is good at OR-type things, and each needs 3 gates for the "opposite" basic gate.

## SOP to NAND-NAND

A two-level AND-OR circuit turns into a NAND-NAND circuit by replacing every gate with a NAND. This works because of double inversion and De Morgan:

\`\`\`
F = AB + CD
  = ((AB + CD)')'           involution
  = ((AB)'·(CD)')'          De Morgan
\`\`\`

So: NAND A and B, NAND C and D, then NAND those two outputs. 3 NAND gates in total.

## POS to NOR-NOR

The dual idea: an OR-AND circuit becomes NOR-NOR.

\`\`\`
F = (A + B)(C + D)
  = ((A + B)' + (C + D)')'
\`\`\`

NOR A and B, NOR C and D, then NOR the two outputs.

## Worked example 1: F = AB + C using only NAND gates

\`\`\`
F = AB + C
  = ((AB)'·C')'             involution + De Morgan

N1 = (A·B)'                 1st NAND
N2 = (C·C)' = C'            2nd NAND (as NOT)
F  = (N1·N2)'               3rd NAND

 A ──┐
     [NAND]o── N1 ─────┐
 B ──┘                 [NAND]o── F = AB + C
 C ──[NAND]o── C' ─────┘
\`\`\`

Total: 3 NAND gates.

## Worked example 2: F = (A + B)·C using only NOR gates

\`\`\`
F = (A + B)C
  = ((A + B)' + C')'        involution + De Morgan

N1 = (A + B)'               1st NOR
N2 = (C + C)' = C'          2nd NOR (as NOT)
F  = (N1 + N2)'             3rd NOR
\`\`\`

Total: 3 NOR gates. Check one row: A=1, B=0, C=1 gives N1 = 0, N2 = 0, F = (0 + 0)' = 1, and (A + B)C = 1. Correct.

## Common mistakes

- Saying AND or OR is universal. Neither can make a NOT on its own.
- Forgetting the inverters on the inputs when building OR from NAND (or AND from NOR). NAND of A and B directly gives (AB)', not A + B.
- Mixing up the counts: AND from NAND is 2 gates, OR from NAND is 3. It's the other way round for NOR.
- In NAND-NAND conversion, forgetting that a single literal going straight into the OR level needs to be complemented (like the C in AB + C).

## How this shows up in the mid

Expect "why are NAND and NOR called universal gates?", "implement NOT, AND and OR using only NAND gates (draw and prove)", the same for NOR, or "implement F = ... using only NAND gates". Always show the algebra (double inversion plus De Morgan) next to the diagram.`,
    mcqs: [
      {
        q: "Which gates are called universal gates?",
        options: ["AND and OR", "XOR and XNOR", "NOT and AND", "NAND and NOR"],
        answer: 3,
        explain: "Each of NAND and NOR alone can build NOT, AND and OR.",
      },
      {
        q: "Minimum number of 2-input NAND gates needed to make an OR gate:",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explain: "Two NANDs as inverters on A and B, then one NAND: (A'B')' = A + B.",
      },
      {
        q: "Minimum number of 2-input NOR gates needed to make an AND gate:",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explain: "Invert A and B with two NORs, then NOR them: (A' + B')' = AB.",
      },
      {
        q: "How do you make a NOT gate from a NAND gate?",
        options: [
          "Connect both inputs together",
          "Connect one input to 0",
          "Add a bubble to the input",
          "It is not possible",
        ],
        answer: 0,
        explain: "(A·A)' = A'. Tying one input to 1 also works: (A·1)' = A'.",
      },
      {
        q: "The output of a NOR gate is 1 when:",
        options: ["Both inputs are 1", "At least one input is 1", "Both inputs are 0", "Inputs differ"],
        answer: 2,
        explain: "NOR = (A + B)', which is 1 only when A + B = 0.",
      },
      {
        q: "AB + CD written in NAND-only form is:",
        options: ["((AB)'(CD)')'", "(AB)' + (CD)'", "((A + B)'(C + D)')'", "(ABCD)'"],
        answer: 0,
        explain: "Double invert and apply De Morgan: ((AB)'·(CD)')'.",
      },
      {
        q: "How many 2-input NAND gates make an XOR gate (minimum)?",
        options: ["2", "3", "5", "4"],
        answer: 3,
        explain: "N1 = (AB)', N2 = (A·N1)', N3 = (B·N1)', F = (N2·N3)'.",
      },
      {
        q: "Why can't AND gates alone build every circuit?",
        options: [
          "They are too slow",
          "They cannot produce a NOT (complement)",
          "They need 3 inputs",
          "They can, AND is universal",
        ],
        answer: 1,
        explain: "With only AND gates, an output can never be 1 when all inputs are 0, so no inversion is possible.",
      },
      {
        q: "F = (A + B)C using only NOR gates needs how many gates?",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explain: "N1 = (A + B)', N2 = C', F = (N1 + N2)' = (A + B)C.",
      },
    ],
    fillBlanks: [
      {
        q: "A NOT gate needs ___ NAND gate(s).",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "An AND gate needs ___ NAND gates.",
        answer: "2",
        alt: ["two"],
      },
      {
        q: "An OR gate needs ___ NOR gates.",
        answer: "2",
        alt: ["two"],
      },
      {
        q: "(A'·B')' = A + B, so a NAND with inverted inputs acts as an ___ gate.",
        answer: "OR",
        alt: ["or"],
      },
      {
        q: "A two-level AND-OR circuit can be converted directly into a ___-NAND circuit.",
        answer: "NAND",
        alt: ["nand"],
      },
      {
        q: "NOR output is 1 only when all inputs are ___.",
        answer: "0",
        alt: ["zero"],
      },
    ],
    trueFalse: [
      { q: "NAND and NOR are both universal gates.", answer: true },
      { q: "An OR gate needs 3 NOR gates.", answer: false, explain: "OR needs 2 NOR gates (NOR then invert). It is AND that needs 3 NORs." },
      { q: "Tying both inputs of a NOR gate together makes it a NOT gate.", answer: true, explain: "(A + A)' = A'." },
      { q: "AND is a universal gate.", answer: false, explain: "It cannot produce a complement." },
      {
        q: "A POS circuit (OR-AND) can be converted directly into NOR-NOR form.",
        answer: true,
        explain: "(A + B)(C + D) = ((A + B)' + (C + D)')'.",
      },
    ],
    flashcards: [
      { front: "Universal gate", back: "A gate that can build NOT, AND and OR on its own, so it can build any circuit. NAND and NOR." },
      { front: "NOT from NAND", back: "1 gate: tie inputs together. (A·A)' = A'" },
      { front: "AND from NAND", back: "2 gates: NAND then NAND-as-NOT. ((AB)')' = AB" },
      { front: "OR from NAND", back: "3 gates: invert A and B, then NAND. (A'B')' = A + B" },
      { front: "NOT from NOR", back: "1 gate: tie inputs together. (A + A)' = A'" },
      { front: "OR from NOR", back: "2 gates: NOR then NOR-as-NOT. ((A + B)')' = A + B" },
      { front: "AND from NOR", back: "3 gates: invert A and B, then NOR. (A' + B')' = AB" },
      { front: "XOR from NAND (4 gates)", back: "N1 = (AB)', N2 = (A·N1)', N3 = (B·N1)', F = (N2·N3)'" },
      { front: "SOP to NAND-NAND", back: "AB + CD = ((AB)'(CD)')'" },
      { front: "POS to NOR-NOR", back: "(A + B)(C + D) = ((A + B)' + (C + D)')'" },
    ],
    examples: [
      {
        title: "NAND-only and NOR-only forms",
        items: [
          "A' = (A·A)' = (A + A)'",
          "AB = ((AB)')' using NAND, = (A' + B')' using NOR",
          "A + B = (A'·B')' using NAND, = ((A + B)')' using NOR",
          "AB + C = ((AB)'·C')' : 3 NANDs",
          "AB + C'D = ((AB)'·(C'D)')' with C' = (CC)' : 4 NANDs",
        ],
      },
    ],
    exercises: [
      {
        problem: "Show how NOT, AND and OR gates are built using only NAND gates. Prove each with Boolean algebra.",
        solution: `NOT (1 NAND):  inputs tied together
  F = (A·A)' = A'                     idempotent (A·A = A)

AND (2 NANDs): NAND, then NAND as NOT
  N1 = (A·B)'
  F  = (N1·N1)' = N1' = ((A·B)')' = A·B          involution

OR (3 NANDs):  invert each input, then NAND
  N1 = (A·A)' = A'
  N2 = (B·B)' = B'
  F  = (N1·N2)' = (A'·B')' = A'' + B'' = A + B   De Morgan, involution`,
      },
      {
        problem: "Show how NOT, OR and AND gates are built using only NOR gates.",
        solution: `NOT (1 NOR):   F = (A + A)' = A'

OR (2 NORs):   N1 = (A + B)'
               F  = (N1 + N1)' = N1' = A + B

AND (3 NORs):  N1 = (A + A)' = A'
               N2 = (B + B)' = B'
               F  = (N1 + N2)' = (A' + B')' = A''·B'' = A·B   De Morgan`,
      },
      {
        problem: "Implement F = AB + C using only NAND gates.",
        solution: `F = AB + C
  = ((AB + C)')'             involution
  = ((AB)'·C')'              De Morgan

N1 = (A·B)'                  NAND #1
N2 = (C·C)'  = C'            NAND #2 (as NOT)
F  = (N1·N2)'                NAND #3

 A ──┐
     [NAND]o── N1 ───────┐
 B ──┘                   [NAND]o── F
 C ─┬─┐                  │
    └─[NAND]o── C' ──────┘

Total: 3 NAND gates.`,
      },
      {
        problem: "Implement F = (A + B)·C using only NOR gates.",
        solution: `F = (A + B)·C
  = (((A + B)·C)')'          involution
  = ((A + B)' + C')'         De Morgan

N1 = (A + B)'                NOR #1
N2 = (C + C)' = C'           NOR #2 (as NOT)
F  = (N1 + N2)'              NOR #3

Total: 3 NOR gates.`,
      },
      {
        problem: "Implement XOR (F = A'B + AB') using only NAND gates, (a) the direct way and (b) with the 4-gate trick.",
        solution: `(a) Direct, from the SOP:
F = A'B + AB' = ((A'B)'·(AB')')'
  A' = (A·A)'          NAND #1
  B' = (B·B)'          NAND #2
  (A'B)'               NAND #3
  (AB')'               NAND #4
  F                    NAND #5
5 gates.

(b) 4-gate version:
N1 = (A·B)'
N2 = (A·N1)'
N3 = (B·N1)'
F  = (N2·N3)'

Check A=1, B=0: N1 = 1, N2 = (1·1)' = 0, N3 = (0·1)' = 1, F = (0·1)' = 1  (correct, 1 ⊕ 0 = 1)
Check A=1, B=1: N1 = 0, N2 = 1, N3 = 1, F = (1·1)' = 0                      (correct)`,
      },
      {
        problem: "Implement F = AB + C'D using only NAND gates and count them.",
        solution: `F = AB + C'D
  = ((AB)'·(C'D)')'           involution + De Morgan

C'      = (C·C)'              NAND #1
(AB)'                         NAND #2
(C'D)'                        NAND #3
F = ((AB)'·(C'D)')'           NAND #4

Total: 4 NAND gates.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 11. XOR / XNOR
  // ---------------------------------------------------------------------------
  {
    id: "dld-xor-xnor",
    number: 11,
    chapter: CHAPTER,
    title: "XOR and XNOR: Expressions and Properties",
    summary:
      "XOR and XNOR truth tables, their SOP and POS expressions, the algebra properties that show up in simplification, multi-input XOR as an odd-parity function, and where these gates are used.",
    content: `## XOR (exclusive OR)

XOR gives 1 when the inputs are different. Think "A or B, but not both".

\`\`\`
A ⊕ B = A'B + AB'
\`\`\`

| A | B | A ⊕ B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Compare with OR: the only difference is the last row. OR gives 1 there, XOR gives 0.

Other forms you should be able to prove:

\`\`\`
A ⊕ B = A'B + AB'            SOP
      = (A + B)(A' + B')     POS
      = (A + B)(AB)'         "OR but not AND"
\`\`\`

Proof of the POS form:

\`\`\`
(A + B)(A' + B')
= AA' + AB' + BA' + BB'      distributive
= 0 + AB' + A'B + 0          complement
= A'B + AB'                  identity, commutative
\`\`\`

Symbol: the OR shape with an extra curved line just behind the input side.

## XNOR (exclusive NOR)

XNOR gives 1 when the inputs are the same. It is the complement of XOR, so it is also called the equivalence gate.

\`\`\`
A ⊙ B = AB + A'B' = (A ⊕ B)'
\`\`\`

| A | B | A ⊙ B |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Notation: we use A ⊙ B. Many books simply write (A ⊕ B)' with a bar, and that is fine in the exam too. Symbol: the XOR shape with a bubble on the output.

Proof that XNOR is the complement of XOR (done in the De Morgan topic):

\`\`\`
(A'B + AB')'
= (A'B)'(AB')'               De Morgan
= (A + B')(A' + B)           De Morgan, involution
= AB + A'B'                  distributive, complement, identity
\`\`\`

## Properties of XOR

| Property | Rule |
|---|---|
| XOR with 0 | A ⊕ 0 = A |
| XOR with 1 | A ⊕ 1 = A' |
| XOR with itself | A ⊕ A = 0 |
| XOR with complement | A ⊕ A' = 1 |
| Commutative | A ⊕ B = B ⊕ A |
| Associative | (A ⊕ B) ⊕ C = A ⊕ (B ⊕ C) |
| Complement one input | (A ⊕ B)' = A' ⊕ B = A ⊕ B' |
| Complement both inputs | A' ⊕ B' = A ⊕ B |

A ⊕ 1 = A' is why XOR is called a controlled inverter: one input decides whether the other passes straight through or gets flipped.

Careful with distribution. AND does distribute over XOR: A(B ⊕ C) = AB ⊕ AC. XOR does not distribute over AND or OR: A ⊕ BC is not (A ⊕ B)(A ⊕ C). And A ⊕ B is not the same as A + B.

## XOR with more than two inputs

Because XOR is associative, A ⊕ B ⊕ C has a single meaning. It is 1 when an odd number of inputs are 1.

| A | B | C | A ⊕ B ⊕ C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

So A ⊕ B ⊕ C = Σ(1, 2, 4, 7). That is exactly the function from the minterm example on the class whiteboard.

## Worked example 1: show A'B'C + A'BC' + AB'C' + ABC = A ⊕ B ⊕ C

\`\`\`
A'B'C + A'BC' + AB'C' + ABC
= A'(B'C + BC') + A(B'C' + BC)     distributive
= A'(B ⊕ C) + A(B ⊙ C)             definitions of XOR and XNOR
= A'(B ⊕ C) + A(B ⊕ C)'            XNOR = complement of XOR
= A ⊕ (B ⊕ C)                      XOR definition with X = B ⊕ C: A'X + AX'
= A ⊕ B ⊕ C                        associative
\`\`\`

The canonical form needs 3 NOTs, 8 two-input ANDs and 3 two-input ORs (14 gates). The XOR form needs 2 XOR gates.

## Worked example 2: simplify A ⊕ AB

\`\`\`
A ⊕ AB
= A'(AB) + A(AB)'          XOR definition: X'Y + XY'
= 0 + A(A' + B')           complement (A'A = 0), De Morgan
= AA' + AB'                distributive
= AB'                      complement, identity
\`\`\`

## Worked example 3: simplify (A ⊕ B) + AB

\`\`\`
(A ⊕ B) + AB
= A'B + AB' + AB           XOR definition
= A'B + A(B' + B)          distributive
= A'B + A                  complement, identity
= A + B                    absorption (A + A'B = A + B)
\`\`\`

So XOR plus the "both" row gives back OR, which makes sense from the truth tables.

## A note on 3-input XNOR

Two 2-input XNOR gates in a chain give (A ⊙ B) ⊙ C, which turns out to equal A ⊕ B ⊕ C, not its complement. But a "3-input XNOR gate" in most books means (A ⊕ B ⊕ C)', which is 1 when an even number of inputs are 1. If a question uses three-input XNOR, check which one it means.

## Where XOR and XNOR are used

- Parity: for 3 data bits, the even-parity bit is P = A ⊕ B ⊕ C. The receiver XORs all bits including P and gets 0 if nothing flipped.
- Half adder: Sum = A ⊕ B, Carry = A·B.
- Comparator: A ⊙ B = 1 exactly when A and B are equal.
- Controlled inverter: A ⊕ 1 = A', A ⊕ 0 = A.

## Building XOR from basic gates

From A'B + AB': 2 NOT + 2 AND + 1 OR = 5 gates. From NAND only: 4 gates (see the universal gates topic).

\`\`\`
 A ──┬──────────────┐
     │              [AND]── AB' ──┐
     │  B ─|>o─ B' ─┘             (OR)── A ⊕ B
     └─|>o─ A' ──┐                │
                 [AND]── A'B ─────┘
 B ──────────────┘
\`\`\`

## Common mistakes

- Writing A ⊕ B = A + B. They differ when A = B = 1.
- Writing A ⊕ B = AB + A'B'. That is XNOR.
- Thinking A ⊕ A = A (like idempotent). It is 0.
- Calling A ⊕ B ⊕ C "1 when exactly one input is 1". It is 1 for an odd count, which includes all three.

## How this shows up in the mid

Typical: draw the truth table and symbol of XOR and XNOR, write their expressions, prove A ⊕ B = (A + B)(A' + B') or that XNOR is the complement of XOR, simplify an expression that turns into XOR, or design a 3-bit even-parity generator.`,
    mcqs: [
      {
        q: "A ⊕ B is equal to:",
        options: ["AB + A'B'", "A'B + AB'", "A + B", "(A + B)'"],
        answer: 1,
        explain: "XOR is 1 when exactly one of A, B is 1: A'B + AB'.",
      },
      {
        q: "A ⊙ B (XNOR) is equal to:",
        options: ["AB + A'B'", "A'B + AB'", "A'B'", "A + B'"],
        answer: 0,
        explain: "XNOR is 1 when the inputs are equal: both 1 (AB) or both 0 (A'B').",
      },
      {
        q: "A ⊕ 1 = ?",
        options: ["1", "A", "0", "A'"],
        answer: 3,
        explain: "XOR with 1 flips the other input.",
      },
      {
        q: "A ⊕ A = ?",
        options: ["A", "1", "0", "A'"],
        answer: 2,
        explain: "Equal inputs give 0 for XOR.",
      },
      {
        q: "A 3-input XOR (A ⊕ B ⊕ C) is 1 when:",
        options: [
          "Exactly one input is 1",
          "An odd number of inputs are 1",
          "An even number of inputs are 1",
          "All inputs are equal",
        ],
        answer: 1,
        explain: "Rows 001, 010, 100 and 111 give 1, so any odd count.",
      },
      {
        q: "Which equals A ⊕ B?",
        options: ["(A + B)(A' + B')", "(A + B')(A' + B)", "A'B'", "(AB)'"],
        answer: 0,
        explain: "Multiply out: AB' + A'B. The second option is XNOR.",
      },
      {
        q: "(A ⊕ B)' equals:",
        options: ["A' ⊕ B'", "A ⊕ B", "A ⊕ B'", "A'B'"],
        answer: 2,
        explain: "Complementing one input complements the XOR. Complementing both (A' ⊕ B') changes nothing.",
      },
      {
        q: "In a half adder, the Sum output is:",
        options: ["A·B", "A + B", "A ⊙ B", "A ⊕ B"],
        answer: 3,
        explain: "1 + 0 = 1 and 1 + 1 = 10 (sum 0, carry 1), which matches XOR for the sum bit.",
      },
      {
        q: "Simplify (A ⊕ B) + AB.",
        options: ["A ⊕ B", "AB", "A + B", "1"],
        answer: 2,
        explain: "A'B + AB' + AB = A'B + A = A + B.",
      },
      {
        q: "Σ(1, 2, 4, 7) for variables A, B, C is the same as:",
        options: ["A + B + C", "A ⊕ B ⊕ C", "AB + BC + AC", "(A ⊕ B ⊕ C)'"],
        answer: 1,
        explain: "Those are exactly the rows with an odd number of 1s.",
      },
    ],
    fillBlanks: [
      { q: "A ⊕ 0 = ___", answer: "A", alt: ["a"] },
      { q: "A ⊕ A' = ___", answer: "1", alt: ["one"] },
      {
        q: "XNOR is also called the ___ gate because it outputs 1 when inputs are equal.",
        answer: "equivalence",
        alt: ["equality", "coincidence"],
      },
      {
        q: "XOR outputs 1 when the inputs are ___.",
        answer: "different",
        alt: ["unequal", "not equal", "not the same"],
      },
      { q: "A ⊕ AB simplifies to A·___", answer: "B'", alt: ["b'"] },
      {
        q: "For 3 data bits A, B, C the even-parity bit is P = A ⊕ B ⊕ ___",
        answer: "C",
        alt: ["c"],
      },
    ],
    trueFalse: [
      { q: "A ⊕ B and A + B give the same output when A = B = 1.", answer: false, explain: "A + B = 1 but A ⊕ B = 0 in that row." },
      { q: "XNOR is the complement of XOR.", answer: true },
      { q: "A' ⊕ B' = A ⊕ B.", answer: true, explain: "Flipping both inputs keeps them equal or different, so the output is unchanged." },
      { q: "XOR is associative, so A ⊕ B ⊕ C needs no brackets.", answer: true },
      {
        q: "A ⊕ A = A.",
        answer: false,
        explain: "A ⊕ A = 0. XOR is not idempotent.",
      },
    ],
    flashcards: [
      { front: "XOR expression", back: "A ⊕ B = A'B + AB' = (A + B)(A' + B')" },
      { front: "XNOR expression", back: "A ⊙ B = AB + A'B' = (A ⊕ B)'" },
      { front: "XOR in words", back: "1 when inputs differ (A or B, not both)." },
      { front: "XNOR in words", back: "1 when inputs are equal. Also called equivalence." },
      { front: "A ⊕ 0, A ⊕ 1", back: "A, A'" },
      { front: "A ⊕ A, A ⊕ A'", back: "0, 1" },
      { front: "Multi-input XOR", back: "1 when an odd number of inputs are 1 (odd function)." },
      { front: "A ⊕ B ⊕ C as minterms", back: "Σ(1, 2, 4, 7) = A'B'C + A'BC' + AB'C' + ABC" },
      { front: "Half adder", back: "Sum = A ⊕ B, Carry = AB" },
      { front: "XOR from basic gates", back: "2 NOT + 2 AND + 1 OR = 5 gates (4 if NAND only)." },
    ],
    examples: [
      {
        title: "XOR identities",
        items: [
          "A ⊕ 0 = A,  A ⊕ 1 = A'",
          "A ⊕ A = 0,  A ⊕ A' = 1",
          "(A ⊕ B)' = A ⊕ B' = A' ⊕ B = A ⊙ B",
          "A ⊕ AB = AB'",
          "A ⊕ (A + B) = A'B",
          "(A ⊕ B) + AB = A + B",
        ],
      },
    ],
    exercises: [
      {
        problem: "Prove A ⊕ B = (A + B)(A' + B').",
        solution: `(A + B)(A' + B')
= AA' + AB' + BA' + BB'      distributive
= 0 + AB' + A'B + 0          complement, commutative
= A'B + AB'                  identity
= A ⊕ B                      definition of XOR`,
      },
      {
        problem: "Prove that (A ⊕ B)' = A ⊕ B'.",
        solution: `A ⊕ B' = A'(B') + A(B')'     XOR definition: X'Y + XY' with Y = B'
       = A'B' + AB            involution
       = A ⊙ B                definition of XNOR
       = (A ⊕ B)'             XNOR is the complement of XOR`,
      },
      {
        problem: "Show that F = A'B'C + A'BC' + AB'C' + ABC equals A ⊕ B ⊕ C.",
        solution: `F = A'B'C + A'BC' + AB'C' + ABC
  = A'(B'C + BC') + A(B'C' + BC)    distributive
  = A'(B ⊕ C) + A(B ⊙ C)            XOR / XNOR definitions
  = A'(B ⊕ C) + A(B ⊕ C)'           XNOR = (XOR)'
  = A ⊕ (B ⊕ C)                     XOR definition with X = B ⊕ C
  = A ⊕ B ⊕ C                       associative`,
      },
      {
        problem: "Design an even-parity generator for 3 data bits A, B, C: give the truth table, the expression and the gates.",
        solution: `The parity bit P makes the total number of 1s (A, B, C and P) even.
So P = 1 when A, B, C contain an odd number of 1s.

 A B C | P
 0 0 0 | 0
 0 0 1 | 1
 0 1 0 | 1
 0 1 1 | 0
 1 0 0 | 1
 1 0 1 | 0
 1 1 0 | 0
 1 1 1 | 1

P = Σ(1, 2, 4, 7) = A ⊕ B ⊕ C

Circuit: two 2-input XOR gates.
 A ──┐
     (XOR)── A ⊕ B ──┐
 B ──┘               (XOR)── P
 C ──────────────────┘`,
      },
      {
        problem: "Simplify (a) A ⊕ AB and (b) A ⊕ (A + B).",
        solution: `(a) A ⊕ AB
  = A'(AB) + A(AB)'          XOR definition
  = 0 + A(A' + B')           complement, De Morgan
  = AA' + AB'                distributive
  = AB'                      complement, identity

(b) A ⊕ (A + B)
  = A'(A + B) + A(A + B)'    XOR definition
  = A'A + A'B + A·A'B'       distributive, De Morgan
  = 0 + A'B + 0              complement
  = A'B                      identity`,
      },
    ],
  },
];
