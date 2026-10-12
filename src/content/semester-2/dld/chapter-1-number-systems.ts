import type { Topic } from "@/content/types";

const CHAPTER = "Ch 1 · Number Systems & Complements";

export const topics: Topic[] = [
  // ───────────────────────────────────────────────────────────── 1
  {
    id: "dld-number-systems-binary",
    number: 1,
    chapter: CHAPTER,
    title: "Number Systems, Positional Notation & Binary",
    summary:
      "What a number system is, what base (radix) means, how positional weights work, and the binary system that every digital circuit runs on.",
    content: `## What a number system is

Our notes define it like this: a number system is a way of representing numerical quantities using a specific set of symbols and rules. The number of symbols a system uses is its **base**, also called the **radix**.

DLD uses four number systems:

| Number system | Base (radix) | Digits used |
|---|---|---|
| Decimal | 10 | 0 to 9 |
| Binary | 2 | 0 and 1 |
| Octal | 8 | 0 to 7 |
| Hexadecimal | 16 | 0 to 9 and A to F |

Always write the base as a subscript. 1011₂ is binary eleven, while 1011₁₀ is one thousand and eleven. In the paper you can write it as 1011₂ or (1011)₂; both are accepted.

## Positional notation

All four systems are positional. The value a digit contributes depends on the digit itself and on its position in the number. For a number system with base r, the positional weights are:

\`\`\`
... r³   r²   r¹   r⁰  .  r⁻¹   r⁻²   r⁻³ ...
                      ↑
                 radix point
\`\`\`

Digits to the left of the radix point form the integer part, and digits to the right form the fractional part. The general value of a number with digits d is:

\`\`\`
N = dₙ₋₁·rⁿ⁻¹ + ... + d₁·r¹ + d₀·r⁰ + d₋₁·r⁻¹ + d₋₂·r⁻² + ...
\`\`\`

The rightmost integer digit always has weight r⁰ = 1. That holds in every base.

## The binary number system

Binary has base 2 and only two digits, 0 and 1. It's the most important system in digital electronics because digital circuits work with two states: a voltage is either high or low, a switch is on or off. Each binary digit is called a **bit**.

- bit: one binary digit (0 or 1)
- nibble: a group of 4 bits
- byte: a group of 8 bits
- MSB (most significant bit): the leftmost bit, which has the highest weight
- LSB (least significant bit): the rightmost bit, which has weight 2⁰ = 1

### Powers of 2 you should know by heart

| Power | Value | Power | Value |
|---|---|---|---|
| 2⁰ | 1 | 2⁶ | 64 |
| 2¹ | 2 | 2⁷ | 128 |
| 2² | 4 | 2⁸ | 256 |
| 2³ | 8 | 2⁹ | 512 |
| 2⁴ | 16 | 2¹⁰ | 1024 |
| 2⁵ | 32 | | |

For fractions: 2⁻¹ = 0.5, 2⁻² = 0.25, 2⁻³ = 0.125, 2⁻⁴ = 0.0625. These show up in almost every conversion question.

### Worked example 1: 1011₂ (from class notes)

\`\`\`
1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰
      = 8   +  0   +  2   +  1
      = 11₁₀
\`\`\`

### Worked example 2: 1001.10₂ (binary fraction, from class notes)

\`\`\`
1001.10₂ = 1×2³ + 0×2² + 0×2¹ + 1×2⁰ + 1×2⁻¹ + 0×2⁻²
         = 8    + 0    + 0    + 1    + 0.5   + 0
         = 9.5₁₀
\`\`\`

### Worked example 3: 110101₂

\`\`\`
Weights:  32  16   8   4   2   1
Bits:      1   1   0   1   0   1
Sum:      32 + 16 + 0 + 4 + 0 + 1 = 53₁₀
\`\`\`

## How many values fit in n bits

With n bits you can make 2ⁿ different patterns, which cover the unsigned values 0 to 2ⁿ − 1.

| Bits (n) | Patterns (2ⁿ) | Largest unsigned value |
|---|---|---|
| 3 | 8 | 7 |
| 4 | 16 | 15 |
| 8 | 256 | 255 |
| 10 | 1024 | 1023 |

Going the other way: to represent 100₁₀ you need 7 bits, because 2⁶ = 64 is too small and 2⁷ = 128 is enough.

### Counting in binary (0 to 15)

| Decimal | Binary | Decimal | Binary |
|---|---|---|---|
| 0 | 0000 | 8 | 1000 |
| 1 | 0001 | 9 | 1001 |
| 2 | 0010 | 10 | 1010 |
| 3 | 0011 | 11 | 1011 |
| 4 | 0100 | 12 | 1100 |
| 5 | 0101 | 13 | 1101 |
| 6 | 0110 | 14 | 1110 |
| 7 | 0111 | 15 | 1111 |

Look at the columns: the LSB flips every row, the next bit every 2 rows, then every 4, then every 8. That pattern helps when you build truth tables in Chapter 2.

## Common mistakes

- Dropping the base subscript. Without it, 101 could be binary five or decimal one hundred and one, and some teachers cut marks for it.
- Starting the weights at 2¹ for the rightmost bit. The rightmost integer bit is 2⁰ = 1.
- Writing the first fractional weight as 2⁰. The first bit after the point is 2⁻¹ = 0.5.
- Using the digit 2 (or anything other than 0 and 1) in a binary number.

## How this shows up in the mid

Expect short questions like "define base/radix", "why do digital systems use binary", or "write the positional expansion of 1011.01₂". These are 2 to 3 mark questions. Write the full expansion line with the powers, because that line is usually where the marks are.`,
    mcqs: [
      {
        q: "The base (radix) of a number system tells you:",
        options: [
          "How many digits the largest number has",
          "Where the radix point is placed",
          "How many distinct symbols the system uses",
          "How many bits are in a byte",
        ],
        answer: 2,
        explain: "Base = number of distinct symbols. Binary uses 2 symbols, decimal 10, octal 8, hex 16.",
      },
      {
        q: "What is 1011₂ in decimal?",
        options: ["11", "13", "9", "10"],
        answer: 0,
        explain: "1×8 + 0×4 + 1×2 + 1×1 = 11.",
      },
      {
        q: "The weight of the first digit to the right of the binary point is:",
        options: ["2⁰ = 1", "2⁻² = 0.25", "2¹ = 2", "2⁻¹ = 0.5"],
        answer: 3,
        explain: "Weights after the point are negative powers, starting at 2⁻¹ = 0.5.",
      },
      {
        q: "How many different patterns can 8 bits represent?",
        options: ["8", "256", "128", "255"],
        answer: 1,
        explain: "2⁸ = 256 patterns, covering 0 to 255.",
      },
      {
        q: "Why do digital circuits use the binary system?",
        options: [
          "Binary numbers are shorter than decimal numbers",
          "Binary avoids the need for a radix point",
          "Binary has more digits than decimal",
          "Circuits naturally have two stable states, like high and low voltage",
        ],
        answer: 3,
        explain: "Two voltage levels map directly onto 0 and 1. Binary numbers are longer than decimal ones.",
      },
      {
        q: "A nibble contains:",
        options: ["4 bits", "2 bits", "8 bits", "16 bits"],
        answer: 0,
        explain: "Nibble = 4 bits, byte = 8 bits.",
      },
      {
        q: "1001.10₂ equals:",
        options: ["9.25₁₀", "9.1₁₀", "9.5₁₀", "17.5₁₀"],
        answer: 2,
        explain: "8 + 1 + 0.5 = 9.5. This example is straight from the class notes.",
      },
      {
        q: "What is the minimum number of bits needed to represent 100₁₀ as an unsigned number?",
        options: ["6", "7", "8", "10"],
        answer: 1,
        explain: "6 bits only reach 63. 7 bits reach 127, which covers 100.",
      },
      {
        q: "Which of these is NOT a valid binary number?",
        options: ["101101", "0000", "1", "10201"],
        answer: 3,
        explain: "Binary only allows 0 and 1, so the digit 2 makes 10201 invalid.",
      },
    ],
    fillBlanks: [
      {
        q: "The number of symbols used in a number system is called its base or ___.",
        answer: "radix",
        explain: "Base and radix mean the same thing.",
      },
      {
        q: "A single binary digit is called a ___.",
        answer: "bit",
        alt: ["binary digit"],
      },
      {
        q: "The rightmost bit of a binary number is called the ___ (abbreviation).",
        answer: "LSB",
        alt: ["lsb", "least significant bit"],
      },
      {
        q: "With n bits, the largest unsigned value you can store is 2ⁿ minus ___.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "110101₂ = ___₁₀.",
        answer: "53",
        explain: "32 + 16 + 4 + 1 = 53.",
      },
      {
        q: "In a positional system, the value of a digit depends on the digit itself and its ___.",
        answer: "position",
        alt: ["place", "position in the number"],
      },
    ],
    trueFalse: [
      {
        q: "In every positional number system, the rightmost integer digit has a weight of 1.",
        answer: true,
        explain: "That weight is r⁰, and anything to the power 0 is 1.",
      },
      {
        q: "A byte is 4 bits.",
        answer: false,
        explain: "A byte is 8 bits. 4 bits is a nibble.",
      },
      {
        q: "1011₂ and 1011₁₀ represent the same quantity.",
        answer: false,
        explain: "1011₂ = 11 while 1011₁₀ is one thousand and eleven. The base changes the value.",
      },
      {
        q: "With 4 bits you can represent 16 different values.",
        answer: true,
        explain: "2⁴ = 16, covering 0 to 15.",
      },
      {
        q: "The MSB is the bit with the lowest weight.",
        answer: false,
        explain: "MSB is the leftmost bit and has the highest weight. The LSB has the lowest.",
      },
      {
        q: "2⁻³ equals 0.125.",
        answer: true,
        explain: "2⁻³ = 1/8 = 0.125.",
      },
    ],
    flashcards: [
      { front: "Number system", back: "A method of representing numerical quantities using a specific set of symbols and rules." },
      { front: "Base / radix", back: "The number of distinct symbols a number system uses. Binary 2, octal 8, decimal 10, hex 16." },
      { front: "Positional weights in base r", back: "... r², r¹, r⁰ . r⁻¹, r⁻² ... The rightmost integer digit has weight r⁰ = 1." },
      { front: "Bit, nibble, byte", back: "Bit = 1 binary digit. Nibble = 4 bits. Byte = 8 bits." },
      { front: "MSB and LSB", back: "MSB: leftmost bit, highest weight. LSB: rightmost bit, weight 2⁰ = 1." },
      { front: "Patterns possible with n bits", back: "2ⁿ patterns, unsigned range 0 to 2ⁿ − 1." },
      { front: "Fractional binary weights", back: "2⁻¹ = 0.5, 2⁻² = 0.25, 2⁻³ = 0.125, 2⁻⁴ = 0.0625" },
      { front: "1011₂ in decimal", back: "8 + 0 + 2 + 1 = 11₁₀" },
      { front: "Why binary for circuits?", back: "Digital circuits have two stable states (high/low voltage, on/off), which map onto 1 and 0." },
    ],
    examples: [
      {
        title: "Positional expansions",
        items: [
          "**573₁₀** = 5×10² + 7×10¹ + 3×10⁰ = 500 + 70 + 3",
          "**1011₂** = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 11₁₀",
          "**10110₂** = 16 + 0 + 4 + 2 + 0 = 22₁₀",
          "**11.011₂** = 2 + 1 + 0 + 0.25 + 0.125 = 3.375₁₀",
        ],
      },
      {
        title: "Range of n bits",
        items: [
          "3 bits → 2³ = 8 patterns → 0 to 7",
          "4 bits → 2⁴ = 16 patterns → 0 to 15",
          "8 bits → 2⁸ = 256 patterns → 0 to 255",
          "To store 100₁₀ you need 7 bits (2⁷ = 128 > 100, 2⁶ = 64 < 100)",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write the positional expansion of **1101.11₂** and find its decimal value.",
        solution: `1101.11₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ + 1×2⁻¹ + 1×2⁻²
         = 8    + 4    + 0    + 1    + 0.5   + 0.25
         = 13.75₁₀`,
      },
      {
        problem: "Convert **110101₂** to decimal using a weight table.",
        solution: `Weights:  32  16   8   4   2   1
Bits:      1   1   0   1   0   1

Add the weights where the bit is 1:
32 + 16 + 4 + 1 = 53

110101₂ = 53₁₀`,
      },
      {
        problem: "How many bits are needed to represent the decimal number **300** in unsigned binary? What is the largest value that many bits can hold?",
        solution: `2⁸ = 256  → too small (max 255)
2⁹ = 512  → enough

So 9 bits are needed.
Largest value with 9 bits = 2⁹ − 1 = 511.`,
      },
      {
        problem: "Define base (radix) and give the base and digit set of the four number systems used in DLD.",
        solution: `Base (radix) = the number of distinct symbols a number system uses.

System        Base   Digits
Decimal        10    0-9
Binary          2    0, 1
Octal           8    0-7
Hexadecimal    16    0-9, A-F`,
      },
      {
        problem: "Find the decimal value of **0.1011₂**.",
        solution: `0.1011₂ = 1×2⁻¹ + 0×2⁻² + 1×2⁻³ + 1×2⁻⁴
        = 0.5   + 0      + 0.125  + 0.0625
        = 0.6875₁₀`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 2
  {
    id: "dld-decimal-octal-hex",
    number: 2,
    chapter: CHAPTER,
    title: "Decimal, Octal & Hexadecimal Systems",
    summary:
      "The other three systems on the syllabus: decimal (base 10), octal (base 8, digits 0-7) and hexadecimal (base 16, digits 0-9 and A-F), with their digit tables and positional expansions.",
    content: `## Decimal number system (base 10)

Decimal is the system we use every day. It's positional with base 10 and has ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.

The example from class:

\`\`\`
573₁₀ = 5×10² + 7×10¹ + 3×10⁰
      = 500   + 70    + 3
\`\`\`

The subscript 10 tells you the number belongs to the decimal system. Fractions work the same way: 4.25₁₀ = 4×10⁰ + 2×10⁻¹ + 5×10⁻².

## Octal number system (base 8)

Octal has base 8 and eight digits: 0, 1, 2, 3, 4, 5, 6, 7. The digits 8 and 9 are not valid in octal. If you see 189₈ in an MCQ, it's a trick: that number doesn't exist.

Positional weights are powers of 8: 8⁰ = 1, 8¹ = 8, 8² = 64, 8³ = 512.

Example from the notes:

\`\`\`
630₈ = 6×8² + 3×8¹ + 0×8⁰
     = 6×64 + 3×8  + 0×1
     = 384  + 24   + 0
     = 408₁₀
\`\`\`

Octal is handy because 8 = 2³, so each octal digit stands for exactly three bits. That makes long binary strings shorter to write.

## Hexadecimal number system (base 16)

Hexadecimal (hex) has base 16, so it needs 16 symbols. The first ten are 0 to 9, and the remaining six values are written with letters A to F.

| Decimal | Hex | Binary | Decimal | Hex | Binary |
|---|---|---|---|---|---|
| 0 | 0 | 0000 | 8 | 8 | 1000 |
| 1 | 1 | 0001 | 9 | 9 | 1001 |
| 2 | 2 | 0010 | 10 | A | 1010 |
| 3 | 3 | 0011 | 11 | B | 1011 |
| 4 | 4 | 0100 | 12 | C | 1100 |
| 5 | 5 | 0101 | 13 | D | 1101 |
| 6 | 6 | 0110 | 14 | E | 1110 |
| 7 | 7 | 0111 | 15 | F | 1111 |

Weights are powers of 16: 16⁰ = 1, 16¹ = 16, 16² = 256, 16³ = 4096.

Example from the notes:

\`\`\`
2A₁₆   (A = 10)
     = 2×16¹ + 10×16⁰
     = 32    + 10
     = 42₁₀
\`\`\`

A second one:

\`\`\`
3FF₁₆ = 3×16² + 15×16¹ + 15×16⁰
      = 768   + 240    + 15
      = 1023₁₀
\`\`\`

Since 16 = 2⁴, one hex digit is exactly four bits. Programmers use hex for memory addresses and colour codes for that reason: one byte is always two hex digits.

## Side-by-side comparison

| Property | Decimal | Octal | Hexadecimal |
|---|---|---|---|
| Base | 10 | 8 | 16 |
| Digits | 0-9 | 0-7 | 0-9, A-F |
| Largest digit | 9 | 7 | F (15) |
| Bits per digit | not exact | 3 | 4 |
| Weights | 1, 10, 100 ... | 1, 8, 64, 512 ... | 1, 16, 256, 4096 ... |

In any base r, the largest digit is r − 1. That rule shows up again in Chapter 1's complements: the (r−1)'s complement subtracts every digit from r − 1.

## Common mistakes

- Using 8 or 9 in an octal number.
- Treating hex letters as letters instead of values. In a calculation, A must become 10, F must become 15.
- Writing 10 as a single hex "digit". In hex, decimal ten is the single symbol A. 10₁₆ is sixteen.
- Mixing up 16² = 256 with 2⁸ = 256. They're equal, which is why two hex digits make a byte, but don't confuse the bases while expanding.

## How this shows up in the mid

Short notes ("explain the octal and hexadecimal number systems with examples"), quick positional expansions, and MCQs about valid digits. Learn the 0-15 table above cold. Half of the conversion chapter depends on it.`,
    mcqs: [
      {
        q: "Which digit is NOT valid in the octal system?",
        options: ["0", "7", "8", "5"],
        answer: 2,
        explain: "Octal digits are 0 to 7. 8 and 9 are invalid.",
      },
      {
        q: "In hexadecimal, the symbol D represents:",
        options: ["12", "14", "13", "11"],
        answer: 2,
        explain: "A=10, B=11, C=12, D=13, E=14, F=15.",
      },
      {
        q: "630₈ equals:",
        options: ["408₁₀", "630₁₀", "384₁₀", "410₁₀"],
        answer: 0,
        explain: "6×64 + 3×8 + 0 = 384 + 24 = 408. Class-notes example.",
      },
      {
        q: "2A₁₆ in decimal is:",
        options: ["210", "26", "32", "42"],
        answer: 3,
        explain: "2×16 + 10 = 42.",
      },
      {
        q: "How many bits does one hexadecimal digit represent?",
        options: ["2", "4", "3", "8"],
        answer: 1,
        explain: "16 = 2⁴, so one hex digit = 4 bits.",
      },
      {
        q: "The largest digit in a base-r system is:",
        options: ["r", "2r", "r + 1", "r − 1"],
        answer: 3,
        explain: "Digits go from 0 to r − 1. In octal that's 7, in hex F (15).",
      },
      {
        q: "Which of the following is a valid hexadecimal number?",
        options: ["9AF", "1G4", "XYZ", "12H"],
        answer: 0,
        explain: "Hex symbols stop at F, so G, H, X, Y, Z are not allowed.",
      },
      {
        q: "The weight of the third digit from the right (integer part) in octal is:",
        options: ["8", "16", "64", "512"],
        answer: 2,
        explain: "Weights are 8⁰ = 1, 8¹ = 8, 8² = 64.",
      },
      {
        q: "3FF₁₆ in decimal is:",
        options: ["1024", "1023", "1015", "767"],
        answer: 1,
        explain: "3×256 + 15×16 + 15 = 768 + 240 + 15 = 1023.",
      },
    ],
    fillBlanks: [
      {
        q: "The hexadecimal system uses the letters A to ___ for values 10 to 15.",
        answer: "F",
        alt: ["f"],
      },
      {
        q: "The base of the octal number system is ___.",
        answer: "8",
        alt: ["eight"],
      },
      {
        q: "One octal digit corresponds to ___ binary digits.",
        answer: "3",
        alt: ["three"],
      },
      {
        q: "157₈ = ___₁₀.",
        answer: "111",
        explain: "1×64 + 5×8 + 7 = 64 + 40 + 7 = 111.",
      },
      {
        q: "In hexadecimal, decimal 12 is written as ___.",
        answer: "C",
        alt: ["c"],
      },
    ],
    trueFalse: [
      {
        q: "The number 279₈ is a valid octal number.",
        answer: false,
        explain: "9 is not an octal digit, and neither is 8.",
      },
      {
        q: "10₁₆ is equal to 16₁₀.",
        answer: true,
        explain: "1×16 + 0 = 16.",
      },
      {
        q: "Two hexadecimal digits are enough to represent any 8-bit byte.",
        answer: true,
        explain: "Each hex digit covers 4 bits, so two cover 8 bits (00 to FF = 0 to 255).",
      },
      {
        q: "F₁₆ represents 16 in decimal.",
        answer: false,
        explain: "F = 15. Sixteen is written 10₁₆.",
      },
      {
        q: "Decimal, binary, octal and hexadecimal are all positional number systems.",
        answer: true,
        explain: "Each digit's value depends on its position, weighted by a power of the base.",
      },
    ],
    flashcards: [
      { front: "Octal: base and digits", back: "Base 8, digits 0 to 7. 8 and 9 are invalid." },
      { front: "Hexadecimal: base and digits", back: "Base 16, digits 0 to 9 and A to F (A=10 ... F=15)." },
      { front: "A, B, C, D, E, F in decimal", back: "10, 11, 12, 13, 14, 15" },
      { front: "Octal weights", back: "1, 8, 64, 512, 4096 ..." },
      { front: "Hex weights", back: "1, 16, 256, 4096 ..." },
      { front: "630₈ in decimal", back: "6×64 + 3×8 + 0 = 408₁₀" },
      { front: "2A₁₆ in decimal", back: "2×16 + 10 = 42₁₀" },
      { front: "Bits per octal digit / hex digit", back: "Octal: 3 bits (8 = 2³). Hex: 4 bits (16 = 2⁴)." },
      { front: "Largest digit in base r", back: "r − 1 (9 in decimal, 7 in octal, F in hex)" },
    ],
    examples: [
      {
        title: "Expansions in each base",
        items: [
          "**573₁₀** = 5×100 + 7×10 + 3×1",
          "**630₈** = 6×64 + 3×8 + 0×1 = 408₁₀",
          "**157₈** = 1×64 + 5×8 + 7×1 = 111₁₀",
          "**2A₁₆** = 2×16 + 10×1 = 42₁₀",
          "**3FF₁₆** = 3×256 + 15×16 + 15×1 = 1023₁₀",
        ],
      },
      {
        title: "Valid or not?",
        items: [
          "**765₈** valid (all digits 0-7)",
          "**189₈** invalid (8 and 9 are not octal digits)",
          "**9AF₁₆** valid",
          "**1G4₁₆** invalid (G is not a hex digit)",
          "**10201₂** invalid (2 is not a binary digit)",
        ],
      },
    ],
    exercises: [
      {
        problem: "Expand **745₈** using positional weights and find its decimal value.",
        solution: `745₈ = 7×8² + 4×8¹ + 5×8⁰
     = 7×64 + 4×8  + 5×1
     = 448  + 32   + 5
     = 485₁₀`,
      },
      {
        problem: "Expand **1C9₁₆** and find its decimal value.",
        solution: `C = 12

1C9₁₆ = 1×16² + 12×16¹ + 9×16⁰
      = 256   + 192    + 9
      = 457₁₀`,
      },
      {
        problem: "Write the decimal numbers 0 to 15 alongside their hexadecimal and 4-bit binary equivalents.",
        solution: `Dec  Hex  Binary     Dec  Hex  Binary
 0    0   0000        8    8   1000
 1    1   0001        9    9   1001
 2    2   0010       10    A   1010
 3    3   0011       11    B   1011
 4    4   0100       12    C   1100
 5    5   0101       13    D   1101
 6    6   0110       14    E   1110
 7    7   0111       15    F   1111`,
      },
      {
        problem: "Explain why octal and hexadecimal are popular in digital systems even though computers work in binary.",
        solution: `8 = 2³ and 16 = 2⁴.

So every octal digit stands for exactly 3 bits,
and every hex digit stands for exactly 4 bits.

That means a long binary string can be written
in a much shorter form and converted back without
any arithmetic, just by grouping bits.

Example: 10110110₂ = B6₁₆ (2 symbols instead of 8).`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 3
  {
    id: "dld-conversion-to-decimal",
    number: 3,
    chapter: CHAPTER,
    title: "Binary, Octal & Hex → Decimal",
    summary:
      "Converting any base into decimal by multiplying each digit by its positional weight and adding, including numbers with a fractional part.",
    content: `## The one rule

Converting into decimal is the same method for every base. Multiply each digit by its positional weight (a power of the base) and add the products. Our notes summarise it as:

- Binary → Decimal: use powers of 2
- Octal → Decimal: use powers of 8
- Hexadecimal → Decimal: use powers of 16

For fractions, keep going to the right with negative powers: r⁻¹, r⁻², r⁻³ and so on.

## Binary → Decimal

Example from the notes: convert 10110₂.

\`\`\`
Positional weights: 2⁴  2³  2²  2¹  2⁰
10110₂ = 1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰
       = 16   + 0    + 4    + 2    + 0
       = 22₁₀
\`\`\`

A faster way for long numbers is to write the weights above the bits and add only where the bit is 1:

\`\`\`
Weights: 64  32  16   8   4   2   1
Bits:     1   1   0   1   1   0   1
Sum:     64 + 32 + 8 + 4 + 1 = 109₁₀
\`\`\`

### Binary fraction → Decimal

Example from the notes: 101.101₂.

\`\`\`
101.101₂ = 1×2² + 0×2¹ + 1×2⁰ + 1×2⁻¹ + 0×2⁻² + 1×2⁻³
         = 4    + 0    + 1    + 0.5   + 0     + 0.125
         = 5.625₁₀
\`\`\`

Small heads-up: in the scanned notes the last term of this expansion is written as 0×2⁻³, but the next line adds 0.125, and 5.625 is the right answer. The last bit is 1, so the term is 1×2⁻³.

## Octal → Decimal

Example from the notes: 57₈.

\`\`\`
57₈ = 5×8¹ + 7×8⁰
    = 40   + 7
    = 47₁₀
\`\`\`

A three-digit one:

\`\`\`
247₈ = 2×8² + 4×8¹ + 7×8⁰
     = 128  + 32   + 7
     = 167₁₀
\`\`\`

With a fraction:

\`\`\`
25.4₈ = 2×8¹ + 5×8⁰ + 4×8⁻¹
      = 16   + 5    + 4/8
      = 21.5₁₀
\`\`\`

## Hexadecimal → Decimal

Example from the notes: 2F₁₆, where F = 15.

\`\`\`
2F₁₆ = 2×16¹ + 15×16⁰
     = 32    + 15
     = 47₁₀
\`\`\`

A three-digit one:

\`\`\`
1A3₁₆ = 1×16² + 10×16¹ + 3×16⁰
      = 256   + 160    + 3
      = 419₁₀
\`\`\`

With a fraction:

\`\`\`
B4.8₁₆ = 11×16¹ + 4×16⁰ + 8×16⁻¹
       = 176    + 4     + 8/16
       = 180.5₁₀
\`\`\`

## Checking your answer

You can check a decimal-to-other-base answer by converting it back with this method. The notes do exactly that: after getting 75₁₀ = 113₈, they verify 1×64 + 1×8 + 3 = 75. If you have spare time in the exam, do the check. It catches most slips.

## Common mistakes

- Numbering positions from the left. The rightmost integer digit is always position 0.
- Forgetting to convert hex letters to values before multiplying (A=10 ... F=15).
- Using positive powers after the radix point. They're r⁻¹, r⁻², ...
- Adding the digits instead of the weighted products.

## How this shows up in the mid

Almost every paper has a "convert the following into decimal" question with 3 or 4 parts mixing bases, often one with a fraction. Show the full expansion line. Writing only the final answer can lose you most of the marks even when it's correct.`,
    mcqs: [
      {
        q: "10110₂ in decimal is:",
        options: ["26", "11", "20", "22"],
        answer: 3,
        explain: "16 + 4 + 2 = 22. From the class notes.",
      },
      {
        q: "101.101₂ in decimal is:",
        options: ["5.101", "5.5", "5.625", "4.625"],
        answer: 2,
        explain: "4 + 1 + 0.5 + 0.125 = 5.625.",
      },
      {
        q: "57₈ in decimal is:",
        options: ["57", "45", "47", "35"],
        answer: 2,
        explain: "5×8 + 7 = 47.",
      },
      {
        q: "2F₁₆ in decimal is:",
        options: ["47", "45", "31", "215"],
        answer: 0,
        explain: "2×16 + 15 = 47.",
      },
      {
        q: "To convert an octal number to decimal you multiply each digit by:",
        options: ["Powers of 2", "Powers of 16", "Powers of 10", "Powers of 8"],
        answer: 3,
        explain: "Each base uses powers of its own radix.",
      },
      {
        q: "1A3₁₆ equals:",
        options: ["413₁₀", "419₁₀", "163₁₀", "403₁₀"],
        answer: 1,
        explain: "256 + 10×16 + 3 = 256 + 160 + 3 = 419.",
      },
      {
        q: "25.4₈ in decimal is:",
        options: ["21.4", "21.25", "25.5", "21.5"],
        answer: 3,
        explain: "16 + 5 + 4/8 = 21.5.",
      },
      {
        q: "The weight of the second digit after the point in hexadecimal is:",
        options: ["1/256", "1/8", "1/16", "1/32"],
        answer: 0,
        explain: "16⁻² = 1/256.",
      },
      {
        q: "1101101₂ equals:",
        options: ["107", "117", "109", "93"],
        answer: 2,
        explain: "64 + 32 + 8 + 4 + 1 = 109.",
      },
    ],
    fillBlanks: [
      {
        q: "To convert binary to decimal, multiply each bit by its corresponding power of ___ and add.",
        answer: "2",
        alt: ["two"],
      },
      {
        q: "247₈ = ___₁₀.",
        answer: "167",
        explain: "2×64 + 4×8 + 7 = 128 + 32 + 7 = 167.",
      },
      {
        q: "B4.8₁₆ = ___₁₀.",
        answer: "180.5",
        explain: "11×16 + 4 + 8/16 = 176 + 4 + 0.5.",
      },
      {
        q: "The first digit after the radix point in base r has weight r to the power ___.",
        answer: "-1",
        alt: ["−1", "minus 1", "negative 1"],
      },
      {
        q: "0.11₂ = ___₁₀.",
        answer: "0.75",
        explain: "0.5 + 0.25.",
      },
    ],
    trueFalse: [
      {
        q: "The same multiply-by-weight-and-add method works for converting binary, octal and hex into decimal.",
        answer: true,
        explain: "Only the base of the powers changes: 2, 8 or 16.",
      },
      {
        q: "0.1₂ equals 0.1₁₀.",
        answer: false,
        explain: "0.1₂ = 1×2⁻¹ = 0.5₁₀.",
      },
      {
        q: "2F₁₆ and 57₈ are equal.",
        answer: true,
        explain: "Both are 47₁₀.",
      },
      {
        q: "In hex to decimal conversion you can multiply the letter A directly without changing it to 10.",
        answer: false,
        explain: "A must be replaced by its value, 10, before multiplying.",
      },
      {
        q: "0.8₁₆ = 0.5₁₀.",
        answer: true,
        explain: "8 × 16⁻¹ = 8/16 = 0.5.",
      },
    ],
    flashcards: [
      { front: "Rule: any base → decimal", back: "Multiply each digit by base^position and add. Positions: 0 at the rightmost integer digit, negative after the point." },
      { front: "10110₂ → decimal", back: "16 + 4 + 2 = 22₁₀" },
      { front: "101.101₂ → decimal", back: "4 + 1 + 0.5 + 0.125 = 5.625₁₀" },
      { front: "57₈ → decimal", back: "5×8 + 7 = 47₁₀" },
      { front: "2F₁₆ → decimal", back: "2×16 + 15 = 47₁₀" },
      { front: "1A3₁₆ → decimal", back: "256 + 160 + 3 = 419₁₀" },
      { front: "25.4₈ → decimal", back: "16 + 5 + 0.5 = 21.5₁₀" },
      { front: "How do you verify a conversion?", back: "Convert the answer back to the original base (or to decimal) and check you get the starting number." },
    ],
    examples: [
      {
        title: "Quick conversions to decimal",
        items: [
          "**11111111₂** = 255₁₀",
          "**100000₂** = 32₁₀",
          "**777₈** = 7×64 + 7×8 + 7 = 511₁₀",
          "**FF₁₆** = 15×16 + 15 = 255₁₀",
          "**100₁₆** = 256₁₀",
        ],
      },
      {
        title: "Fractions",
        items: [
          "**0.101₂** = 0.5 + 0.125 = 0.625₁₀",
          "**11.01₂** = 3 + 0.25 = 3.25₁₀",
          "**0.4₈** = 4/8 = 0.5₁₀",
          "**0.C₁₆** = 12/16 = 0.75₁₀",
        ],
      },
    ],
    exercises: [
      {
        problem: "Convert **101101.011₂** to decimal.",
        solution: `Integer part:
101101 = 32 + 0 + 8 + 4 + 0 + 1 = 45

Fraction part:
.011 = 0×2⁻¹ + 1×2⁻² + 1×2⁻³
     = 0 + 0.25 + 0.125 = 0.375

101101.011₂ = 45.375₁₀`,
      },
      {
        problem: "Convert **3726₈** to decimal.",
        solution: `3726₈ = 3×8³ + 7×8² + 2×8¹ + 6×8⁰
      = 3×512 + 7×64 + 2×8 + 6×1
      = 1536  + 448  + 16  + 6
      = 2006₁₀`,
      },
      {
        problem: "Convert **2BC₁₆** to decimal.",
        solution: `B = 11, C = 12

2BC₁₆ = 2×16² + 11×16¹ + 12×16⁰
      = 512   + 176    + 12
      = 700₁₀`,
      },
      {
        problem: "Convert **16.24₈** to decimal.",
        solution: `16.24₈ = 1×8¹ + 6×8⁰ + 2×8⁻¹ + 4×8⁻²
       = 8    + 6    + 2/8   + 4/64
       = 8    + 6    + 0.25  + 0.0625
       = 14.3125₁₀`,
      },
      {
        problem: "Convert **A7.4₁₆** to decimal.",
        solution: `A = 10

A7.4₁₆ = 10×16¹ + 7×16⁰ + 4×16⁻¹
       = 160    + 7     + 4/16
       = 160    + 7     + 0.25
       = 167.25₁₀`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 4
  {
    id: "dld-conversion-from-decimal",
    number: 4,
    chapter: CHAPTER,
    title: "Decimal → Binary, Octal & Hex",
    summary:
      "Repeated division for the integer part (by 2, 8 or 16, remainders read bottom to top) and repeated multiplication for the fractional part (integer parts read top to bottom).",
    content: `## Integer part: repeated division

To convert a decimal integer to base r, keep dividing by r and write down the remainder each time. Stop when the quotient becomes 0. Then read the remainders from **bottom to top**. The first remainder you get is the LSB.

- Decimal → Binary: divide by 2
- Decimal → Octal: divide by 8
- Decimal → Hexadecimal: divide by 16

Our teacher calls this the "LCM method" in the summary page, because the division ladder looks like the one you draw when finding an LCM. In the notes the ladder is laid out as a table with Division, Quotient and Remainder columns. You can use either layout in the exam.

### Decimal → Binary: 13₁₀ (from the notes)

\`\`\`
Division   Quotient   Remainder
 13 ÷ 2       6           1    ← LSB
  6 ÷ 2       3           0
  3 ÷ 2       1           1
  1 ÷ 2       0           1    ← MSB

Read bottom to top: 1101
13₁₀ = 1101₂
\`\`\`

### Decimal → Octal: 75₁₀ (from the notes)

\`\`\`
Division   Quotient   Remainder
 75 ÷ 8       9           3
  9 ÷ 8       1           1
  1 ÷ 8       0           1

Read bottom to top: 113
75₁₀ = 113₈

Check: 1×64 + 1×8 + 3 = 75 ✓
\`\`\`

### Decimal → Hexadecimal: 165₁₀ (from the notes)

\`\`\`
Division   Quotient   Remainder
165 ÷ 16      10          5
 10 ÷ 16       0         10 → A

Read bottom to top: A5
165₁₀ = A5₁₆

Check: 10×16 + 5 = 165 ✓
\`\`\`

Any remainder from 10 to 15 must be written as a letter (A to F). Writing "105" for A5 is a classic mistake.

### One number, three bases: 156₁₀

\`\`\`
÷2:  156→78 r0, 78→39 r0, 39→19 r1, 19→9 r1,
     9→4 r1, 4→2 r0, 2→1 r0, 1→0 r1
     bottom to top: 10011100₂

÷8:  156→19 r4, 19→2 r3, 2→0 r2
     bottom to top: 234₈

÷16: 156→9 r12(C), 9→0 r9
     bottom to top: 9C₁₆
\`\`\`

## Fractional part: repeated multiplication

For the part after the decimal point, multiply by the new base. The integer part of each product becomes the next digit. Carry on with only the fractional part. Read the digits **top to bottom** (the first one you get sits right after the point).

Stop when the fraction becomes 0, or when you have enough digits (the question usually says "up to 4 places").

### 0.625₁₀ → binary (from the notes)

\`\`\`
0.625 × 2 = 1.25   → 1
0.25  × 2 = 0.5    → 0
0.5   × 2 = 1.0    → 1   (fraction is now 0, stop)

Read top to bottom: .101
0.625₁₀ = 0.101₂
\`\`\`

### 0.3₁₀ → binary (a fraction that never ends)

\`\`\`
0.3 × 2 = 0.6  → 0
0.6 × 2 = 1.2  → 1
0.2 × 2 = 0.4  → 0
0.4 × 2 = 0.8  → 0
0.8 × 2 = 1.6  → 1
0.6 × 2 = 1.2  → 1   (0.6 again, so the pattern repeats)

0.3₁₀ ≈ 0.010011₂ (0011 keeps repeating)
\`\`\`

Some decimal fractions have no exact binary form. Stop at the number of places asked and write ≈.

### Octal and hex fractions work the same way

\`\`\`
0.390625 × 8 = 3.125  → 3
0.125    × 8 = 1.0    → 1
0.390625₁₀ = 0.31₈

0.75 × 16 = 12.0 → C
0.75₁₀ = 0.C₁₆
\`\`\`

## Mixed numbers

Split the number at the point, convert each part separately, and join them. From the notes, 15.25₁₀:

\`\`\`
Integer part: 15₁₀ = 1111₂
Fraction:     0.25 × 2 = 0.5 → 0
              0.5  × 2 = 1.0 → 1     so 0.25₁₀ = 0.01₂

15.25₁₀ = 1111.01₂
\`\`\`

## Summary of directions

| Part | Method | Read the digits |
|---|---|---|
| Integer | Divide by the new base repeatedly | Remainders, bottom to top |
| Fraction | Multiply by the new base repeatedly | Integer parts, top to bottom |

## Common mistakes

- Reading the remainders top to bottom. That gives the number reversed (1011 instead of 1101 for 13).
- Stopping before the quotient reaches 0 and losing the MSB.
- Reading the fraction digits bottom to top. Fractions go top to bottom.
- Writing a hex remainder like 12 as "12" instead of C.
- Multiplying the whole product again instead of only its fractional part.

## How this shows up in the mid

This is the most common long question in Chapter 1. Expect something like "convert 156.375₁₀ into binary, octal and hexadecimal". Show the full division table for the integer part and the multiplication lines for the fraction. Add a one-line check at the end if time allows.`,
    mcqs: [
      {
        q: "When converting a decimal integer to binary by repeated division, the remainders are read:",
        options: ["Top to bottom", "Bottom to top", "Only the last one", "In any order"],
        answer: 1,
        explain: "The first remainder is the LSB, so you read from the last remainder (MSB) up to the first.",
      },
      {
        q: "13₁₀ in binary is:",
        options: ["1011", "1110", "1001", "1101"],
        answer: 3,
        explain: "Remainders 1, 0, 1, 1 read bottom to top give 1101.",
      },
      {
        q: "75₁₀ in octal is:",
        options: ["103₈", "311₈", "113₈", "117₈"],
        answer: 2,
        explain: "75 ÷ 8 = 9 r3, 9 ÷ 8 = 1 r1, 1 ÷ 8 = 0 r1 → 113₈.",
      },
      {
        q: "165₁₀ in hexadecimal is:",
        options: ["105₁₆", "5A₁₆", "A5₁₆", "B5₁₆"],
        answer: 2,
        explain: "165 ÷ 16 = 10 r5, 10 ÷ 16 = 0 r10 (A) → A5.",
      },
      {
        q: "To convert a decimal fraction to binary, you repeatedly:",
        options: ["Multiply by 2", "Divide by 2", "Multiply by 10", "Subtract 2"],
        answer: 0,
        explain: "Fractions use repeated multiplication. The integer part of each product is the next bit.",
      },
      {
        q: "0.625₁₀ in binary is:",
        options: ["0.110₂", "0.011₂", "0.111₂", "0.101₂"],
        answer: 3,
        explain: "1.25 → 1, 0.5 → 0, 1.0 → 1, read top to bottom: .101.",
      },
      {
        q: "15.25₁₀ in binary is:",
        options: ["1111.10₂", "1111.01₂", "1110.01₂", "1111.25₂"],
        answer: 1,
        explain: "15 = 1111 and 0.25 = .01.",
      },
      {
        q: "156₁₀ in hexadecimal is:",
        options: ["9B₁₆", "C9₁₆", "912₁₆", "9C₁₆"],
        answer: 3,
        explain: "156 ÷ 16 = 9 r12 (C), 9 ÷ 16 = 0 r9 → 9C.",
      },
      {
        q: "Which statement about 0.3₁₀ in binary is correct?",
        options: [
          "It has no finite binary form, the bits repeat",
          "It is exactly 0.0011₂",
          "It is exactly 0.11₂",
          "It cannot be converted",
        ],
        answer: 0,
        explain: "0.3 gives 0.0100110011..., with 0011 repeating. You stop at the required number of places.",
      },
      {
        q: "During repeated division, when do you stop?",
        options: [
          "When the remainder becomes 0",
          "After 4 steps",
          "When the quotient becomes 0",
          "When the quotient is less than the base",
        ],
        answer: 2,
        explain: "Keep dividing until the quotient is 0. Stopping earlier drops the leading digit.",
      },
    ],
    fillBlanks: [
      {
        q: "To convert decimal to octal, repeatedly divide by ___.",
        answer: "8",
        alt: ["eight"],
      },
      {
        q: "In repeated multiplication for fractions, the digits are read from ___ to bottom.",
        answer: "top",
      },
      {
        q: "156₁₀ = ___₂.",
        answer: "10011100",
        explain: "128 + 16 + 8 + 4 = 156.",
      },
      {
        q: "0.75₁₀ = 0.___₁₆.",
        answer: "C",
        alt: ["c"],
        explain: "0.75 × 16 = 12 = C.",
      },
      {
        q: "156₁₀ = ___₈.",
        answer: "234",
        explain: "156 ÷ 8 = 19 r4, 19 ÷ 8 = 2 r3, 2 ÷ 8 = 0 r2 → 234.",
      },
    ],
    trueFalse: [
      {
        q: "The first remainder you get in repeated division becomes the MSB.",
        answer: false,
        explain: "The first remainder is the LSB. The last remainder is the MSB.",
      },
      {
        q: "Every decimal fraction can be written exactly in binary with a finite number of bits.",
        answer: false,
        explain: "Fractions like 0.1 and 0.3 repeat forever in binary.",
      },
      {
        q: "For a mixed number like 15.25, you convert the integer part and the fractional part separately.",
        answer: true,
        explain: "Division for the integer part, multiplication for the fraction, then join at the point.",
      },
      {
        q: "A remainder of 11 when dividing by 16 is written as B.",
        answer: true,
        explain: "Hex digits above 9 are letters: 10=A, 11=B ...",
      },
      {
        q: "0.390625₁₀ = 0.31₈.",
        answer: true,
        explain: "0.390625 × 8 = 3.125 → 3, 0.125 × 8 = 1.0 → 1.",
      },
    ],
    flashcards: [
      { front: "Decimal integer → base r", back: "Repeatedly divide by r until quotient = 0. Read remainders bottom to top." },
      { front: "Decimal fraction → base r", back: "Repeatedly multiply the fraction by r. Take the integer parts, read top to bottom." },
      { front: "13₁₀ → binary", back: "1101₂" },
      { front: "75₁₀ → octal", back: "113₈ (check: 64 + 8 + 3 = 75)" },
      { front: "165₁₀ → hex", back: "A5₁₆ (check: 160 + 5 = 165)" },
      { front: "0.625₁₀ → binary", back: "0.101₂" },
      { front: "15.25₁₀ → binary", back: "1111.01₂" },
      { front: "When to stop multiplying a fraction?", back: "When the fraction becomes 0, or when you've reached the number of places the question asks for." },
      { front: "156₁₀ in binary, octal, hex", back: "10011100₂ = 234₈ = 9C₁₆" },
    ],
    examples: [
      {
        title: "Integer conversions",
        items: [
          "**13₁₀** → ÷2 remainders 1,0,1,1 → **1101₂**",
          "**75₁₀** → ÷8 remainders 3,1,1 → **113₈**",
          "**165₁₀** → ÷16 remainders 5,10 → **A5₁₆**",
          "**100₁₀** → **1100100₂** = **144₈** = **64₁₆**",
        ],
      },
      {
        title: "Fraction conversions",
        items: [
          "**0.625₁₀** → 1, 0, 1 → **0.101₂**",
          "**0.8125₁₀** → 1, 1, 0, 1 → **0.1101₂**",
          "**0.75₁₀** → 12 → **0.C₁₆**",
          "**0.3₁₀** → **0.0100110011...₂** (repeats)",
        ],
      },
    ],
    exercises: [
      {
        problem: "Convert **25.6875₁₀** to binary.",
        solution: `Integer part (÷2):
Division   Quotient   Remainder
25 ÷ 2       12          1
12 ÷ 2        6          0
 6 ÷ 2        3          0
 3 ÷ 2        1          1
 1 ÷ 2        0          1
Bottom to top: 11001

Fraction part (×2):
0.6875 × 2 = 1.375  → 1
0.375  × 2 = 0.75   → 0
0.75   × 2 = 1.5    → 1
0.5    × 2 = 1.0    → 1
Top to bottom: .1011

25.6875₁₀ = 11001.1011₂`,
      },
      {
        problem: "Convert **500₁₀** to octal and to hexadecimal.",
        solution: `Octal (÷8):
500 ÷ 8 = 62  r 4
 62 ÷ 8 =  7  r 6
  7 ÷ 8 =  0  r 7
Bottom to top: 764₈

Hex (÷16):
500 ÷ 16 = 31  r 4
 31 ÷ 16 =  1  r 15 → F
  1 ÷ 16 =  0  r 1
Bottom to top: 1F4₁₆

Check: 7×64 + 6×8 + 4 = 448 + 48 + 4 = 500 ✓
       1×256 + 15×16 + 4 = 256 + 240 + 4 = 500 ✓`,
      },
      {
        problem: "Convert **0.8125₁₀** to binary.",
        solution: `0.8125 × 2 = 1.625 → 1
0.625  × 2 = 1.25  → 1
0.25   × 2 = 0.5   → 0
0.5    × 2 = 1.0   → 1

Top to bottom: .1101
0.8125₁₀ = 0.1101₂

Check: 0.5 + 0.25 + 0 + 0.0625 = 0.8125 ✓`,
      },
      {
        problem: "Convert **47.375₁₀** to octal.",
        solution: `Integer part (÷8):
47 ÷ 8 = 5 r 7
 5 ÷ 8 = 0 r 5
Bottom to top: 57

Fraction part (×8):
0.375 × 8 = 3.0 → 3

47.375₁₀ = 57.3₈

Check: 5×8 + 7 + 3/8 = 47.375 ✓`,
      },
      {
        problem: "Convert **0.1₁₀** to binary up to 6 places.",
        solution: `0.1 × 2 = 0.2 → 0
0.2 × 2 = 0.4 → 0
0.4 × 2 = 0.8 → 0
0.8 × 2 = 1.6 → 1
0.6 × 2 = 1.2 → 1
0.2 × 2 = 0.4 → 0   (0.2 again, pattern repeats)

0.1₁₀ ≈ 0.000110₂`,
      },
      {
        problem: "Convert **254₁₀** to hexadecimal and binary.",
        solution: `Hex (÷16):
254 ÷ 16 = 15 r 14 → E
 15 ÷ 16 =  0 r 15 → F
Bottom to top: FE₁₆

Binary: each hex digit → 4 bits
F = 1111, E = 1110
254₁₀ = 11111110₂

Check: 255 − 1 = 254, and 11111111₂ = 255 ✓`,
      },
    ],
  },
  // ───────────────────────────────────────────────────────────── 5
  {
    id: "dld-binary-octal-hex-grouping",
    number: 5,
    chapter: CHAPTER,
    title: "Binary ↔ Octal & Binary ↔ Hex (Grouping)",
    summary:
      "Direct conversion without any division: group bits in 3s for octal and 4s for hex, starting from the binary point, and expand each digit back to 3 or 4 bits for the reverse direction.",
    content: `## Why grouping works

Octal and hex are both powers of 2:

- 8 = 2³, so one octal digit corresponds to exactly three bits
- 16 = 2⁴, so one hex digit corresponds to exactly four bits

So you never need to go through decimal for these directions. You just group bits and look them up.

## The two tables

| Octal | Binary | Octal | Binary |
|---|---|---|---|
| 0 | 000 | 4 | 100 |
| 1 | 001 | 5 | 101 |
| 2 | 010 | 6 | 110 |
| 3 | 011 | 7 | 111 |

| Hex | Binary | Hex | Binary |
|---|---|---|---|
| 0 | 0000 | 8 | 1000 |
| 1 | 0001 | 9 | 1001 |
| 2 | 0010 | A | 1010 |
| 3 | 0011 | B | 1011 |
| 4 | 0100 | C | 1100 |
| 5 | 0101 | D | 1101 |
| 6 | 0110 | E | 1110 |
| 7 | 0111 | F | 1111 |

You can rebuild either table from the weights 4-2-1 (octal) and 8-4-2-1 (hex) if you blank out in the exam.

## Binary → Octal

1. Start at the binary point (for a whole number, the right end).
2. Split the integer part into groups of 3 moving left. Split the fraction part into groups of 3 moving right.
3. If the leftmost integer group is short, add zeros on the left. If the last fraction group is short, add zeros on the right.
4. Replace each group with its octal digit.

Example from the notes: 110101₂

\`\`\`
110 101
 6   5
110101₂ = 65₈
\`\`\`

Example from the notes where padding is needed: 10110₂ has 5 bits, so add one zero on the left.

\`\`\`
010 110
 2   6
10110₂ = 26₈
\`\`\`

## Octal → Binary

Replace every octal digit with its 3-bit group. From the notes, 67₈:

\`\`\`
6 → 110
7 → 111
67₈ = 110111₂
\`\`\`

Another one: 725₈ → 111 010 101 → 111010101₂. Keep the inner zeros. The 2 must be written 010, not 10.

## Binary → Hexadecimal

Same idea with groups of 4. Example from the notes: 10110110₂

\`\`\`
1011 0110
 B    6
10110110₂ = B6₁₆
\`\`\`

## Hexadecimal → Binary

Replace each hex digit with its 4-bit group. From the notes, 2F₁₆:

\`\`\`
2 → 0010
F → 1111
2F₁₆ = 00101111₂ = 101111₂
\`\`\`

Leading zeros can be dropped because they don't change the value (the notes make this point too). Zeros inside the number must stay.

## With a fractional part

Convert 1101011.0101₂ to octal and to hex.

\`\`\`
To octal (groups of 3 from the point):
  integer:  1 101 011  → 001 101 011  → 1 5 3
  fraction: 010 1      → 010 100      → 2 4
  1101011.0101₂ = 153.24₈

To hex (groups of 4 from the point):
  integer:  110 1011   → 0110 1011    → 6 B
  fraction: 0101                      → 5
  1101011.0101₂ = 6B.5₁₆
\`\`\`

Both equal 107.3125₁₀, which is a good check.

The padding rule for fractions catches people out. In the fraction, zeros go on the **right**. Padding 0.1₂ to 0.001 would turn 0.5 into 0.125. It has to be 0.100 = 0.4₈.

## Common mistakes

- Grouping from the left end of the number. Always start at the binary point.
- Padding fraction groups on the left. Integer groups get zeros on the left, fraction groups on the right.
- Dropping the inner zeros when expanding. 52₈ is 101 010 = 101010₂. If you write the 2 as just 10, you get 10110₂, which is a different number.
- Mixing up 3-bit groups (octal) with 4-bit groups (hex).

## How this shows up in the mid

These are the quickest marks in Chapter 1. You'll typically get one binary number and be asked for octal and hex, or a hex number to convert to binary. Draw the group boundaries clearly with spaces so the examiner can follow.`,
    mcqs: [
      {
        q: "When converting binary to octal, bits are grouped in:",
        options: ["2s", "3s", "4s", "8s"],
        answer: 1,
        explain: "8 = 2³, so 3 bits per octal digit.",
      },
      {
        q: "110101₂ in octal is:",
        options: ["152₈", "56₈", "35₈", "65₈"],
        answer: 3,
        explain: "110 = 6, 101 = 5 → 65₈.",
      },
      {
        q: "10110110₂ in hexadecimal is:",
        options: ["6B₁₆", "A6₁₆", "B6₁₆", "266₁₆"],
        answer: 2,
        explain: "1011 = B, 0110 = 6 → B6₁₆.",
      },
      {
        q: "2F₁₆ in binary is:",
        options: ["10111₂", "1001111₂", "101111₂", "1011110₂"],
        answer: 2,
        explain: "2 = 0010, F = 1111 → 00101111 = 101111₂.",
      },
      {
        q: "10110₂ in octal is:",
        options: ["26₈", "54₈", "16₈", "22₈"],
        answer: 0,
        explain: "Pad to 010 110 → 2 6 → 26₈.",
      },
      {
        q: "67₈ in binary is:",
        options: ["110011₂", "1100111₂", "111110₂", "110111₂"],
        answer: 3,
        explain: "6 = 110, 7 = 111.",
      },
      {
        q: "When the last group of a binary fraction is incomplete, zeros are added:",
        options: [
          "On the left of the group",
          "On the right of the group",
          "Anywhere in the group",
          "Never, the group is dropped",
        ],
        answer: 1,
        explain: "Trailing zeros after the point don't change the value, so pad on the right.",
      },
      {
        q: "1101011.0101₂ in hex is:",
        options: ["D6.5₁₆", "6B.A₁₆", "153.24₁₆", "6B.5₁₆"],
        answer: 3,
        explain: "0110 1011 . 0101 → 6 B . 5.",
      },
      {
        q: "3A7₁₆ in binary is:",
        options: ["1110100111₂", "11101000111₂", "111010111₂", "1110100011₂"],
        answer: 0,
        explain: "3 = 0011, A = 1010, 7 = 0111 → 001110100111 = 1110100111₂.",
      },
    ],
    fillBlanks: [
      {
        q: "One hexadecimal digit is replaced by ___ binary digits.",
        answer: "4",
        alt: ["four"],
      },
      {
        q: "725₈ = ___₂.",
        answer: "111010101",
        explain: "7 = 111, 2 = 010, 5 = 101.",
      },
      {
        q: "1101011.0101₂ = ___₈.",
        answer: "153.24",
        explain: "001 101 011 . 010 100 → 1 5 3 . 2 4.",
      },
      {
        q: "Grouping for binary to octal starts from the binary ___.",
        answer: "point",
        alt: ["radix point", "binary point"],
      },
      {
        q: "0.1₂ = 0.___₈.",
        answer: "4",
        explain: "Pad to .100 = 4.",
      },
    ],
    trueFalse: [
      {
        q: "Binary to hexadecimal conversion can be done directly because 16 = 2⁴.",
        answer: true,
        explain: "Each hex digit maps to exactly 4 bits.",
      },
      {
        q: "To convert binary to octal you must first convert it to decimal.",
        answer: false,
        explain: "Grouping in 3s is direct. Going through decimal works but is slower and error prone.",
      },
      {
        q: "Leading zeros in a binary result can be dropped without changing the value.",
        answer: true,
        explain: "00101111₂ and 101111₂ are both 47.",
      },
      {
        q: "0.1₂ converted to octal is 0.1₈.",
        answer: false,
        explain: "0.1₂ = 0.100₂ = 0.4₈. Padding on the left (0.001) would be wrong.",
      },
      {
        q: "1101011.0101₂, 153.24₈ and 6B.5₁₆ are all the same number.",
        answer: true,
        explain: "All three equal 107.3125₁₀.",
      },
    ],
    flashcards: [
      { front: "Binary → Octal", back: "Group bits in 3s starting at the binary point (left for integer, right for fraction). Pad with zeros. Replace each group." },
      { front: "Binary → Hex", back: "Same as octal but groups of 4." },
      { front: "Octal → Binary", back: "Replace each octal digit with its 3-bit code (keep inner zeros)." },
      { front: "Hex → Binary", back: "Replace each hex digit with its 4-bit code." },
      { front: "Padding rule", back: "Integer part: zeros on the left. Fraction part: zeros on the right." },
      { front: "110101₂ → octal", back: "110 101 → 65₈" },
      { front: "10110110₂ → hex", back: "1011 0110 → B6₁₆" },
      { front: "2F₁₆ → binary", back: "0010 1111 → 101111₂" },
      { front: "1101011.0101₂ in octal and hex", back: "153.24₈ and 6B.5₁₆ (both 107.3125₁₀)" },
    ],
    examples: [
      {
        title: "Grouping conversions",
        items: [
          "**110101₂** → 110 101 → **65₈**",
          "**10110₂** → 010 110 → **26₈**",
          "**10110110₂** → 1011 0110 → **B6₁₆**",
          "**11111111₂** → 011 111 111 → **377₈**, and 1111 1111 → **FF₁₆**",
        ],
      },
      {
        title: "Expanding digits",
        items: [
          "**67₈** → 110 111 → **110111₂**",
          "**725₈** → 111 010 101 → **111010101₂**",
          "**2F₁₆** → 0010 1111 → **101111₂**",
          "**3A7₁₆** → 0011 1010 0111 → **1110100111₂**",
        ],
      },
    ],
    exercises: [
      {
        problem: "Convert **11011100101₂** to octal and to hexadecimal.",
        solution: `Octal (groups of 3 from the right):
11 011 100 101
→ 011 011 100 101
→  3   3   4   5
= 3345₈

Hex (groups of 4 from the right):
110 1110 0101
→ 0110 1110 0101
→  6    E    5
= 6E5₁₆

Check: both equal 1765₁₀.`,
      },
      {
        problem: "Convert **5D.C₁₆** to binary.",
        solution: `5 → 0101
D → 1101
C → 1100

5D.C₁₆ = 0101 1101 . 1100
       = 1011101.11₂   (drop leading 0 and trailing 00)

Check: 64+16+8+4+1 = 93, .11 = 0.75 → 93.75
       5×16 + 13 + 12/16 = 93.75 ✓`,
      },
      {
        problem: "Convert **47.36₈** to binary.",
        solution: `4 → 100
7 → 111
3 → 011
6 → 110

47.36₈ = 100 111 . 011 110
       = 100111.01111₂   (trailing 0 dropped)

Check: 39 + 0.25 + 0.125 + 0.0625 + 0.03125 = 39.46875
       4×8 + 7 + 3/8 + 6/64 = 39.46875 ✓`,
      },
      {
        problem: "Convert **1011.1₂** to octal and hex. Show the padding.",
        solution: `Octal:
integer  1 011  → 001 011 → 1 3
fraction 1      → 100     → 4
1011.1₂ = 13.4₈

Hex:
integer  1011   → B
fraction 1      → 1000    → 8
1011.1₂ = B.8₁₆

Both = 11.5₁₀`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 6
  {
    id: "dld-octal-hex-conversion",
    number: 6,
    chapter: CHAPTER,
    title: "Octal ↔ Hexadecimal",
    summary:
      "Octal and hex don't group into each other directly, so you go through binary: expand to bits, regroup, and read off the new digits. Going through decimal also works but takes longer.",
    content: `## Why you need a middle step

Octal digits are 3 bits and hex digits are 4 bits. 3 doesn't divide 4, so there's no digit-for-digit lookup between them. The usual method goes through binary:

\`\`\`
Octal  →  Binary (3 bits per digit)  →  regroup in 4s  →  Hex
Hex    →  Binary (4 bits per digit)  →  regroup in 3s  →  Octal
\`\`\`

The other route is through decimal (multiply by powers, then repeated division). It gives the same answer, but it's slower and has more room for arithmetic slips. Use binary unless the question tells you otherwise.

## Octal → Hexadecimal

Steps:

1. Write each octal digit as 3 bits.
2. Join the bits.
3. Regroup in 4s starting from the point. Pad the leftmost group with zeros.
4. Write each 4-bit group as a hex digit.

Example: 725₈

\`\`\`
Step 1:  7    2    5
        111  010  101
Step 2: 111010101
Step 3: 1 1101 0101 → 0001 1101 0101
Step 4:   1    D    5

725₈ = 1D5₁₆
\`\`\`

Check through decimal: 725₈ = 7×64 + 2×8 + 5 = 469. And 1D5₁₆ = 256 + 13×16 + 5 = 469 ✓

## Hexadecimal → Octal

Example: 2AF₁₆

\`\`\`
Step 1:   2     A     F
        0010  1010  1111
Step 2: 001010101111
Step 3: 001 010 101 111
Step 4:  1   2   5   7

2AF₁₆ = 1257₈
\`\`\`

Check: 2AF₁₆ = 512 + 160 + 15 = 687, and 1257₈ = 512 + 128 + 40 + 7 = 687 ✓

## With a fraction

Example: 37.4₈ to hex.

\`\`\`
3 → 011,  7 → 111,  4 → 100
011111.100₂

Integer: 01 1111   → 0001 1111 → 1 F
Fraction: 100      → 1000      → 8

37.4₈ = 1F.8₁₆   (both = 31.5₁₀)
\`\`\`

## The decimal route (for comparison)

Same question, 725₈ to hex, through decimal:

\`\`\`
725₈ = 7×64 + 2×8 + 5 = 469₁₀

469 ÷ 16 = 29 r 5
 29 ÷ 16 =  1 r 13 → D
  1 ÷ 16 =  0 r 1
Bottom to top: 1D5₁₆
\`\`\`

The answer matches, but it took a lot more arithmetic.

## All 12 directions at a glance

| From → To | Method |
|---|---|
| Binary → Decimal | Multiply by powers of 2, add |
| Decimal → Binary | Divide by 2 (integer), multiply by 2 (fraction) |
| Octal → Decimal | Multiply by powers of 8, add |
| Decimal → Octal | Divide by 8 (integer), multiply by 8 (fraction) |
| Hex → Decimal | Multiply by powers of 16, add |
| Decimal → Hex | Divide by 16 (integer), multiply by 16 (fraction) |
| Binary → Octal | Group bits in 3s from the point |
| Octal → Binary | Each digit → 3 bits |
| Binary → Hex | Group bits in 4s from the point |
| Hex → Binary | Each digit → 4 bits |
| Octal → Hex | Octal → binary → regroup in 4s |
| Hex → Octal | Hex → binary → regroup in 3s |

## Common mistakes

- Trying to convert digit by digit (for example writing 7₈ → 7₁₆ for each digit). That only works for single digits below 8.
- Regrouping from the left. Always regroup from the point outward, same as before.
- Losing the inner zeros when writing 3-bit or 4-bit groups.

## How this shows up in the mid

Usually one part of a multi-part conversion question, like "convert 725₈ into hexadecimal". Show the binary line and the regrouped line, because that's what the examiner checks. If the paper says "via decimal", follow that instead.`,
    mcqs: [
      {
        q: "The standard way to convert octal to hexadecimal is:",
        options: [
          "Replace each octal digit with a hex digit directly",
          "Multiply each digit by 2",
          "Convert to binary, then regroup the bits in 4s",
          "Convert to binary, then regroup the bits in 3s",
        ],
        answer: 2,
        explain: "Octal → 3-bit groups → regroup in 4s → hex.",
      },
      {
        q: "725₈ in hexadecimal is:",
        options: ["725₁₆", "1D5₁₆", "1C5₁₆", "D51₁₆"],
        answer: 1,
        explain: "111 010 101 → 0001 1101 0101 → 1D5.",
      },
      {
        q: "2AF₁₆ in octal is:",
        options: ["687₈", "2517₈", "1275₈", "1257₈"],
        answer: 3,
        explain: "0010 1010 1111 → 001 010 101 111 → 1257.",
      },
      {
        q: "37.4₈ in hexadecimal is:",
        options: ["1F.4₁₆", "37.8₁₆", "1F.8₁₆", "F1.8₁₆"],
        answer: 2,
        explain: "011 111 . 100 → 0001 1111 . 1000 → 1F.8.",
      },
      {
        q: "Why can't octal be converted to hex digit by digit?",
        options: [
          "Octal has no zero",
          "Hex uses letters",
          "An octal digit is 3 bits and a hex digit is 4 bits, so the boundaries don't line up",
          "They have the same base",
        ],
        answer: 2,
        explain: "Group sizes differ, so you need to regroup the bits.",
      },
      {
        q: "1F4₁₆ in octal is:",
        options: ["764₈", "1764₈", "746₈", "500₈"],
        answer: 0,
        explain: "0001 1111 0100 → 000 111 110 100 → 764₈ (both are 500₁₀).",
      },
      {
        q: "When converting hex to octal through binary, the bits are regrouped in:",
        options: ["2s", "8s", "4s", "3s"],
        answer: 3,
        explain: "Octal needs groups of 3.",
      },
      {
        q: "7654₈ in hex is:",
        options: ["F6C₁₆", "FAC₁₆", "EAC₁₆", "FCA₁₆"],
        answer: 1,
        explain: "111 110 101 100 → 1111 1010 1100 → FAC.",
      },
    ],
    fillBlanks: [
      {
        q: "Octal to hex conversion normally goes through the ___ system.",
        answer: "binary",
        alt: ["base 2", "base-2"],
      },
      {
        q: "725₈ = ___₁₆.",
        answer: "1D5",
        alt: ["1d5"],
      },
      {
        q: "2AF₁₆ = ___₈.",
        answer: "1257",
      },
      {
        q: "56.2₈ = ___₁₆.",
        answer: "2E.4",
        alt: ["2e.4"],
        explain: "101 110 . 010 → 0010 1110 . 0100 → 2E.4.",
      },
      {
        q: "A9.C₁₆ = ___₈.",
        answer: "251.6",
        explain: "1010 1001 . 1100 → 010 101 001 . 110 → 251.6.",
      },
    ],
    trueFalse: [
      {
        q: "Octal to hexadecimal can also be done through decimal and gives the same answer.",
        answer: true,
        explain: "Any correct route gives the same value. Binary is just faster.",
      },
      {
        q: "7₈ = 7₁₆.",
        answer: true,
        explain: "Single digits 0 to 7 have the same value in octal and hex. That stops working once you have more than one digit.",
      },
      {
        q: "17₈ = 17₁₆.",
        answer: false,
        explain: "17₈ = 15₁₀ = F₁₆, while 17₁₆ = 23₁₀.",
      },
      {
        q: "When regrouping bits for hex, you start from the binary point.",
        answer: true,
        explain: "Integer groups go left from the point, fraction groups go right.",
      },
      {
        q: "1257₈ and 2AF₁₆ both equal 687₁₀.",
        answer: true,
        explain: "512 + 128 + 40 + 7 = 687 and 512 + 160 + 15 = 687.",
      },
    ],
    flashcards: [
      { front: "Octal → Hex method", back: "Each octal digit → 3 bits, join, regroup in 4s from the point, read hex digits." },
      { front: "Hex → Octal method", back: "Each hex digit → 4 bits, join, regroup in 3s from the point, read octal digits." },
      { front: "725₈ → hex", back: "111 010 101 → 0001 1101 0101 → 1D5₁₆" },
      { front: "2AF₁₆ → octal", back: "0010 1010 1111 → 001 010 101 111 → 1257₈" },
      { front: "37.4₈ → hex", back: "1F.8₁₆ (31.5₁₀)" },
      { front: "Alternative route", back: "Convert to decimal first (powers), then to the target base (repeated division). Slower, same answer." },
      { front: "Why no direct octal↔hex lookup?", back: "3-bit and 4-bit groups don't line up." },
      { front: "1F4₁₆ → octal", back: "764₈ (= 500₁₀)" },
    ],
    examples: [
      {
        title: "Octal → Hex",
        items: [
          "**725₈** → 111010101 → 0001 1101 0101 → **1D5₁₆**",
          "**7654₈** → 111110101100 → 1111 1010 1100 → **FAC₁₆**",
          "**37.4₈** → 011111.100 → 0001 1111 . 1000 → **1F.8₁₆**",
        ],
      },
      {
        title: "Hex → Octal",
        items: [
          "**2AF₁₆** → 001010101111 → 001 010 101 111 → **1257₈**",
          "**1F4₁₆** → 000111110100 → 000 111 110 100 → **764₈**",
          "**A9.C₁₆** → 10101001.1100 → 010 101 001 . 110 → **251.6₈**",
        ],
      },
    ],
    exercises: [
      {
        problem: "Convert **7654₈** to hexadecimal.",
        solution: `7 → 111   6 → 110   5 → 101   4 → 100
Binary: 111110101100

Regroup in 4s from the right:
1111 1010 1100
 F    A    C

7654₈ = FAC₁₆

Check: 7×512 + 6×64 + 5×8 + 4 = 3584 + 384 + 40 + 4 = 4012
       15×256 + 10×16 + 12   = 3840 + 160 + 12     = 4012 ✓`,
      },
      {
        problem: "Convert **A9.C₁₆** to octal.",
        solution: `A → 1010   9 → 1001   . C → 1100
Binary: 10101001.1100

Integer, groups of 3 from the point:
10 101 001 → 010 101 001 → 2 5 1
Fraction, groups of 3 from the point:
110 0 → 110 000 → 6 0  (trailing 0 can be dropped)

A9.C₁₆ = 251.6₈

Check: 10×16 + 9 + 12/16 = 169.75
       2×64 + 5×8 + 1 + 6/8 = 169.75 ✓`,
      },
      {
        problem: "Convert **56.2₈** to hexadecimal.",
        solution: `5 → 101   6 → 110   . 2 → 010
Binary: 101110.010

Integer: 10 1110 → 0010 1110 → 2 E
Fraction: 010 → 0100 → 4

56.2₈ = 2E.4₁₆

Check: 5×8 + 6 + 2/8 = 46.25
       2×16 + 14 + 4/16 = 46.25 ✓`,
      },
      {
        problem: "Convert **1F4₁₆** to octal using both the binary route and the decimal route.",
        solution: `Binary route:
1 → 0001   F → 1111   4 → 0100
000111110100 → 000 111 110 100 → 0 7 6 4
1F4₁₆ = 764₈

Decimal route:
1F4₁₆ = 256 + 15×16 + 4 = 500₁₀
500 ÷ 8 = 62 r 4
 62 ÷ 8 =  7 r 6
  7 ÷ 8 =  0 r 7
Bottom to top: 764₈

Both routes give 764₈.`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 7
  {
    id: "dld-binary-addition-subtraction",
    number: 7,
    chapter: CHAPTER,
    title: "Binary Addition & Subtraction",
    summary:
      "The four rules each for binary addition (1 + 1 = 10, write 0 carry 1) and subtraction (0 − 1 = 1 with a borrow). You need these before complement subtraction makes sense.",
    content: `## Why this topic is here

It's not on the outline as its own item, but the class notes cover it right before signed numbers, and complement subtraction is nothing more than binary addition plus a rule about the carry. If your addition is shaky, every complement question goes wrong.

## Binary addition

There are only four basic cases:

| A | B | Sum | Carry |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

The last row is the one that matters: 1 + 1 = 10₂, because 10₂ = 2₁₀. You write 0 in the current column and carry 1 to the next column.

When a carry comes in from the previous column you may have to add three 1s:

\`\`\`
1 + 1 + 1 = 11₂   → write 1, carry 1
\`\`\`

### Example 1 (from the notes): 101 + 001

\`\`\`
   101
 + 001
 -----
   110

Check: 5 + 1 = 6 and 110₂ = 6 ✓
\`\`\`

### Example 2 (from the notes): 101101 + 111101

\`\`\`
Carry:   1 1 1 0 1 0
         1 0 1 1 0 1
       + 1 1 1 1 0 1
       -------------
       1 1 0 1 0 1 0

(The carry row shows the carry coming into each column.
The carry out of the leftmost column becomes the leading 1.)

101101₂ + 111101₂ = 1101010₂
Check: 45 + 61 = 106 and 1101010₂ = 64 + 32 + 8 + 2 = 106 ✓
\`\`\`

Work right to left, column by column, and write each carry above the next column so you don't lose it.

## Binary subtraction

Again four basic cases:

| A | B | Difference | Borrow |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |

0 − 1 can't be done directly, so you borrow 1 from the next column. In binary, borrowing 1 brings in 10₂ (that's 2), and 10₂ − 1₂ = 1₂. So 0 − 1 = 1 with a borrow.

### Example 1 (from the notes): 100 − 010

\`\`\`
   100
 − 010
 -----
   010

100₂ − 010₂ = 010₂   (4 − 2 = 2)
\`\`\`

### Example 2 (from the notes): 1000 − 0001

\`\`\`
   1000     after borrowing the top becomes 0 1 1 10
 − 0001
 ------
   0111

1000₂ − 0001₂ = 0111₂   (8 − 1 = 7)
\`\`\`

The borrow travels left until it finds a 1. Every 0 it passes through becomes 1, and the 1 it lands on becomes 0.

### Example 3: 11010 − 01011

\`\`\`
   11010
 − 01011
 -------
   01111

Check: 26 − 11 = 15 and 01111₂ = 15 ✓
\`\`\`

## The two rules to remember (from the notes)

- Addition: 1 + 1 = 10. Write 0, carry 1.
- Subtraction: 0 − 1 = 1 with a borrow from the next available 1.

## Common mistakes

- Writing 1 + 1 = 2. There's no digit 2 in binary.
- Forgetting the carry that comes out of the leftmost column. In plain addition it's part of the answer. (In complement subtraction it has a special meaning, which the next topics cover.)
- When borrowing across several zeros, forgetting to turn those zeros into 1s.

## How this shows up in the mid

Sometimes a direct question ("add 101101 and 111101", "subtract 0001 from 1000"), but more often it's hidden inside a complement subtraction question. Always check by converting to decimal; it only takes a few seconds.`,
    mcqs: [
      {
        q: "In binary, 1 + 1 equals:",
        options: ["2", "11", "01", "10"],
        answer: 3,
        explain: "1 + 1 = 10₂: write 0, carry 1.",
      },
      {
        q: "1 + 1 + 1 in binary gives:",
        options: ["11", "10", "111", "3"],
        answer: 0,
        explain: "1 + 1 + 1 = 3 = 11₂: write 1, carry 1.",
      },
      {
        q: "101₂ + 001₂ =",
        options: ["100₂", "111₂", "110₂", "1010₂"],
        answer: 2,
        explain: "5 + 1 = 6 = 110₂.",
      },
      {
        q: "101101₂ + 111101₂ =",
        options: ["1011010₂", "1101010₂", "1101100₂", "11101010₂"],
        answer: 1,
        explain: "45 + 61 = 106 = 1101010₂.",
      },
      {
        q: "In binary subtraction, 0 − 1 gives:",
        options: ["1 with no borrow", "0 with a borrow", "Not possible", "1 with a borrow"],
        answer: 3,
        explain: "Borrow 10₂ from the next column; 10 − 1 = 1.",
      },
      {
        q: "1000₂ − 0001₂ =",
        options: ["0110₂", "1001₂", "0111₂", "0011₂"],
        answer: 2,
        explain: "8 − 1 = 7 = 0111₂.",
      },
      {
        q: "When you borrow 1 in binary subtraction, the column receives:",
        options: ["1", "10₁₀", "10₂ (two)", "Nothing"],
        answer: 2,
        explain: "One unit of the next column is worth 2 in the current column.",
      },
      {
        q: "1011₂ + 1101₂ =",
        options: ["11000₂", "10110₂", "11100₂", "10100₂"],
        answer: 0,
        explain: "11 + 13 = 24 = 11000₂.",
      },
    ],
    fillBlanks: [
      {
        q: "In binary addition, 1 + 1 = ___ (write 0, carry 1).",
        answer: "10",
      },
      {
        q: "In binary subtraction, 0 − 1 = 1 with a ___.",
        answer: "borrow",
      },
      {
        q: "11010₂ − 01011₂ = ___₂.",
        answer: "01111",
        alt: ["1111"],
        explain: "26 − 11 = 15.",
      },
      {
        q: "100₂ − 010₂ = ___₂.",
        answer: "010",
        alt: ["10"],
      },
      {
        q: "10111₂ + 1011₂ = ___₂.",
        answer: "100010",
        explain: "23 + 11 = 34 = 100010₂.",
      },
    ],
    trueFalse: [
      {
        q: "Binary addition has only four basic cases.",
        answer: true,
        explain: "0+0, 0+1, 1+0, 1+1.",
      },
      {
        q: "1 + 1 in binary produces a sum bit of 1.",
        answer: false,
        explain: "Sum bit 0, carry 1.",
      },
      {
        q: "When a borrow passes through a column holding 0, that 0 becomes 1.",
        answer: true,
        explain: "Each 0 borrows from its left neighbour and lends to its right neighbour, ending up as 1.",
      },
      {
        q: "1 − 1 in binary gives 0 with a borrow.",
        answer: false,
        explain: "1 − 1 = 0 with no borrow. Only 0 − 1 needs a borrow.",
      },
      {
        q: "You can check a binary sum by converting all numbers to decimal.",
        answer: true,
        explain: "The notes do this after every example (\"recheck in decimal\").",
      },
    ],
    flashcards: [
      { front: "Binary addition rules", back: "0+0=0, 0+1=1, 1+0=1, 1+1=10 (write 0, carry 1)" },
      { front: "1 + 1 + 1 in binary", back: "11 (write 1, carry 1)" },
      { front: "Binary subtraction rules", back: "0−0=0, 1−0=1, 1−1=0, 0−1=1 with borrow" },
      { front: "What does a borrow bring into a binary column?", back: "10₂, which is 2. Then 10₂ − 1₂ = 1₂." },
      { front: "101101 + 111101", back: "1101010 (45 + 61 = 106)" },
      { front: "1000 − 0001", back: "0111 (8 − 1 = 7)" },
      { front: "Main rule for addition (notes)", back: "1 + 1 = 10: write 0, carry 1." },
      { front: "Main rule for subtraction (notes)", back: "0 − 1 = 1 with a borrow from the next available 1." },
    ],
    examples: [
      {
        title: "Addition",
        items: [
          "**101 + 001** = 110 (5 + 1 = 6)",
          "**1011 + 1101** = 11000 (11 + 13 = 24)",
          "**101101 + 111101** = 1101010 (45 + 61 = 106)",
          "**1111 + 0001** = 10000 (15 + 1 = 16)",
        ],
      },
      {
        title: "Subtraction",
        items: [
          "**100 − 010** = 010 (4 − 2 = 2)",
          "**1000 − 0001** = 0111 (8 − 1 = 7)",
          "**11010 − 01011** = 01111 (26 − 11 = 15)",
          "**10000 − 00011** = 01101 (16 − 3 = 13)",
        ],
      },
    ],
    exercises: [
      {
        problem: "Add **110110₂** and **101011₂**. Verify in decimal.",
        solution: `Carry:   1 1 1 1 0 0
         1 1 0 1 1 0
       + 1 0 1 0 1 1
       -------------
       1 1 0 0 0 0 1

110110₂ + 101011₂ = 1100001₂

Check: 54 + 43 = 97
       1100001₂ = 64 + 32 + 1 = 97 ✓`,
      },
      {
        problem: "Subtract **01101₂** from **10100₂**.",
        solution: `   10100
 − 01101
 -------
   00111

Column by column, right to left (col 1 = LSB):
col 1: 0 − 1 → borrow. Col 2 is 0, so the borrow
       comes from col 3 (1 → 0) and col 2 becomes 1.
       10 − 1 = 1
col 2: 1 − 0 = 1
col 3: 0 − 1 → borrow. Col 4 is 0, so the borrow
       comes from col 5 (1 → 0) and col 4 becomes 1.
       10 − 1 = 1
col 4: 1 − 1 = 0
col 5: 0 − 0 = 0

Result: 00111₂

Check: 10100₂ = 20, 01101₂ = 13, 20 − 13 = 7 ✓`,
      },
      {
        problem: "Add **1111₂ + 1111₂**.",
        solution: `Carry:   1 1 1 0
         1 1 1 1
       + 1 1 1 1
       ---------
       1 1 1 1 0

1111₂ + 1111₂ = 11110₂
Check: 15 + 15 = 30 = 16 + 8 + 4 + 2 ✓`,
      },
      {
        problem: "Subtract **0001₂** from **1000₂** and explain how the borrow moves.",
        solution: `   1000
 − 0001
 ------
   0111

The rightmost column is 0 − 1, so it needs a borrow.
The next two columns are 0, so the borrow keeps
moving left until it reaches the 1 in the MSB.
That 1 becomes 0, the two 0s it passed become 1,
and the rightmost column gets 10₂.

Top row after borrowing: 0 1 1 10
Then 10 − 1 = 1, 1 − 0 = 1, 1 − 0 = 1, 0 − 0 = 0

Answer: 0111₂ (8 − 1 = 7) ✓`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 8
  {
    id: "dld-magnitude-sign-magnitude",
    number: 8,
    chapter: CHAPTER,
    title: "Magnitude & Sign-Magnitude",
    summary:
      "Magnitude is the actual size of a number without its sign. Sign-magnitude representation stores negative numbers by using the leftmost bit as a sign (0 = positive, 1 = negative) and the remaining bits as the magnitude.",
    content: `## The problem: negative numbers in binary

A positive number is easy: 6₁₀ = 110₂. But a circuit only stores 0s and 1s. There's no minus sign. To store −6 we need some rule for showing the sign with bits. Chapter 1 covers three such rules: sign-magnitude, 1's complement and 2's complement. This topic is the first one.

## Magnitude

The magnitude of a number is its actual size or value, ignoring the sign. Our notes put it as "the remaining bits show the magnitude, meaning the actual value". So the magnitude of −6 and of +6 is the same: 6, which is 110₂.

When all the bits of a register are used for magnitude (no sign bit), the number is **unsigned**. An n-bit unsigned number covers 0 to 2ⁿ − 1. For 8 bits that's 0 to 255.

## Sign-magnitude representation

In sign-magnitude, the first (leftmost) bit tells us whether the number is positive or negative:

- sign bit 0 → positive
- sign bit 1 → negative

The remaining bits hold the magnitude in ordinary binary.

\`\`\`
  sign   magnitude
  ┌─┐  ┌───────────┐
   1      1  1  0        = −6
\`\`\`

### Example from the notes: −6

\`\`\`
6 in binary:  4 2 1
              1 1 0   → 110₂
The number is negative, so put 1 in front:
−6 = 1110₂ (sign-magnitude)
\`\`\`

The notes use just enough bits for the magnitude plus one sign bit. In textbooks and most exam questions you'll be given a fixed width like 8 bits. Then the sign bit is the leftmost of the 8 and the magnitude is padded with zeros to fill the other 7:

\`\`\`
+6  in 8-bit sign-magnitude:  0 0000110
−6  in 8-bit sign-magnitude:  1 0000110
+25 in 8-bit sign-magnitude:  0 0011001
−25 in 8-bit sign-magnitude:  1 0011001
\`\`\`

The padding zeros go between the sign bit and the magnitude, never in front of the sign bit.

### Reading a sign-magnitude number

Look at the first bit for the sign, then convert the rest:

\`\`\`
10000101 → sign 1 (negative), magnitude 0000101 = 5   → −5
01111111 → sign 0 (positive), magnitude 1111111 = 127 → +127
11111111 → sign 1 (negative), magnitude 1111111 = 127 → −127
\`\`\`

## Range in n bits

One bit is used for the sign, so only n − 1 bits are left for the magnitude:

\`\`\`
Range = −(2ⁿ⁻¹ − 1)  to  +(2ⁿ⁻¹ − 1)
\`\`\`

| Bits | Range |
|---|---|
| 4 | −7 to +7 |
| 8 | −127 to +127 |
| 16 | −32767 to +32767 |

## Problems with sign-magnitude

- There are two zeros: +0 = 0000 0000 and −0 = 1000 0000. A circuit has to treat both as zero.
- Arithmetic is awkward. To add two numbers the hardware has to compare signs and magnitudes and decide whether to add or subtract. Ordinary binary addition of +5 and −5 in this form doesn't give 0.

Those problems are why computers use 2's complement for signed numbers. Sign-magnitude is still worth knowing because it's the easiest to read, and the mid often asks you to write a number in all three forms.

## Comparison preview (8 bits)

| Number | Sign-magnitude | 1's complement | 2's complement |
|---|---|---|---|
| +5 | 00000101 | 00000101 | 00000101 |
| −5 | 10000101 | 11111010 | 11111011 |
| +25 | 00011001 | 00011001 | 00011001 |
| −25 | 10011001 | 11100110 | 11100111 |

Positive numbers look the same in all three. They differ only for negatives.

## Common mistakes

- Taking the sign bit as part of the value. 1110 in sign-magnitude is −6, not 14.
- Padding in the wrong place. −6 in 8 bits is 10000110, not 00001110 with a 1 somewhere else.
- Writing the range as −128 to +127. That's the 2's complement range; sign-magnitude stops at −127.

## How this shows up in the mid

"Represent −25 in sign-magnitude, 1's complement and 2's complement using 8 bits" is a very common question. Also short MCQs: what's the range, how many zeros, what does the MSB mean.`,
    mcqs: [
      {
        q: "In sign-magnitude representation, the leftmost bit indicates:",
        options: ["The magnitude", "The carry", "The parity", "The sign"],
        answer: 3,
        explain: "0 = positive, 1 = negative. The rest is the magnitude.",
      },
      {
        q: "Using the method in the notes, −6 in sign-magnitude is:",
        options: ["0110", "1110", "1001", "1010"],
        answer: 1,
        explain: "6 = 110, put 1 in front for negative → 1110.",
      },
      {
        q: "−25 in 8-bit sign-magnitude is:",
        options: ["11100110", "11100111", "00011001", "10011001"],
        answer: 3,
        explain: "Sign 1, magnitude 25 = 0011001 in 7 bits.",
      },
      {
        q: "The range of 8-bit sign-magnitude numbers is:",
        options: ["−127 to +127", "0 to 255", "−128 to +127", "−255 to +255"],
        answer: 0,
        explain: "−(2⁷ − 1) to +(2⁷ − 1).",
      },
      {
        q: "A drawback of sign-magnitude is that it has:",
        options: [
          "No way to show negative numbers",
          "A larger range than 2's complement",
          "Two representations of zero",
          "No sign bit",
        ],
        answer: 2,
        explain: "+0 = 00000000 and −0 = 10000000.",
      },
      {
        q: "The 8-bit sign-magnitude number 10000101 represents:",
        options: ["+133", "−5", "+5", "−123"],
        answer: 1,
        explain: "Sign bit 1 → negative, magnitude 0000101 = 5.",
      },
      {
        q: "The magnitude of −13 is:",
        options: ["−13", "1101 with a 1 in front", "0", "13"],
        answer: 3,
        explain: "Magnitude is the size without the sign: 13 (1101₂).",
      },
      {
        q: "The range of an 8-bit unsigned (magnitude only) number is:",
        options: ["0 to 127", "−127 to +127", "0 to 255", "1 to 256"],
        answer: 2,
        explain: "All 8 bits hold value: 0 to 2⁸ − 1.",
      },
      {
        q: "Which representation of +5 is the same in sign-magnitude, 1's and 2's complement (8 bits)?",
        options: ["10000101", "11111011", "00000101", "11111010"],
        answer: 2,
        explain: "Positive numbers are identical in all three forms.",
      },
    ],
    fillBlanks: [
      {
        q: "In sign-magnitude, a sign bit of ___ means the number is negative.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "The actual size of a number, ignoring its sign, is called its ___.",
        answer: "magnitude",
      },
      {
        q: "+25 in 8-bit sign-magnitude is ___.",
        answer: "00011001",
      },
      {
        q: "An n-bit sign-magnitude number ranges from −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − ___).",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "4-bit sign-magnitude can represent numbers from −7 to +___.",
        answer: "7",
        alt: ["seven"],
      },
    ],
    trueFalse: [
      {
        q: "In sign-magnitude, +0 and −0 have different bit patterns.",
        answer: true,
        explain: "00000000 and 10000000 in 8 bits.",
      },
      {
        q: "1110 in 4-bit sign-magnitude represents 14.",
        answer: false,
        explain: "The first bit is the sign. 1110 = −6.",
      },
      {
        q: "Positive numbers are written the same way in sign-magnitude, 1's complement and 2's complement.",
        answer: true,
        explain: "The three forms only differ for negative numbers.",
      },
      {
        q: "8-bit sign-magnitude can represent −128.",
        answer: false,
        explain: "Its range stops at −127. Only 2's complement reaches −128 in 8 bits.",
      },
      {
        q: "Sign-magnitude makes addition hardware simple.",
        answer: false,
        explain: "The hardware has to compare signs and magnitudes first, which is why 2's complement is preferred.",
      },
    ],
    flashcards: [
      { front: "Magnitude", back: "The actual size/value of a number, ignoring its sign." },
      { front: "Sign-magnitude representation", back: "MSB = sign (0 positive, 1 negative); remaining bits = magnitude in plain binary." },
      { front: "−6 in sign-magnitude (notes)", back: "6 = 110, put 1 in front → 1110" },
      { front: "−25 in 8-bit sign-magnitude", back: "10011001" },
      { front: "Range of n-bit sign-magnitude", back: "−(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1). 8 bits: −127 to +127." },
      { front: "Range of n-bit unsigned", back: "0 to 2ⁿ − 1. 8 bits: 0 to 255." },
      { front: "Drawbacks of sign-magnitude", back: "Two zeros (+0 and −0), and addition/subtraction need extra sign-checking logic." },
      { front: "Decode 10000101 (sign-magnitude)", back: "Sign 1 → negative; 0000101 = 5 → −5" },
    ],
    examples: [
      {
        title: "Writing numbers in 8-bit sign-magnitude",
        items: [
          "**+6** → 0 0000110 → 00000110",
          "**−6** → 1 0000110 → 10000110",
          "**−25** → 1 0011001 → 10011001",
          "**−127** → 1 1111111 → 11111111",
          "**+0** → 00000000, **−0** → 10000000",
        ],
      },
      {
        title: "Reading sign-magnitude numbers",
        items: [
          "**0101** (4-bit) → +5",
          "**1101** (4-bit) → −5",
          "**10001010** (8-bit) → −10",
          "**01000000** (8-bit) → +64",
        ],
      },
    ],
    exercises: [
      {
        problem: "Represent **−43** in 8-bit sign-magnitude.",
        solution: `43 in binary:
43 = 32 + 8 + 2 + 1 → 101011

Magnitude in 7 bits: 0101011
Sign bit for negative: 1

−43 = 1 0101011 = 10101011 (sign-magnitude)`,
      },
      {
        problem: "Find the decimal value of the 8-bit sign-magnitude numbers **11001100** and **01001100**.",
        solution: `11001100:
sign bit = 1 → negative
magnitude = 1001100 = 64 + 8 + 4 = 76
value = −76

01001100:
sign bit = 0 → positive
magnitude = 1001100 = 76
value = +76`,
      },
      {
        problem: "What is the range of a 6-bit sign-magnitude number? How many distinct values can it represent?",
        solution: `n = 6, so 5 bits hold the magnitude.

Range = −(2⁵ − 1) to +(2⁵ − 1)
      = −31 to +31

Distinct values = 31 + 31 + 1 (zero) = 63
(64 bit patterns, but +0 and −0 are the same value)`,
      },
      {
        problem: "Represent **+19** and **−19** in 8-bit sign-magnitude, and state the magnitude of each.",
        solution: `19 = 16 + 2 + 1 → 10011 → 7 bits: 0010011

+19 = 0 0010011 = 00010011
−19 = 1 0010011 = 10010011

Magnitude of both = 19 (0010011₂)`,
      },
    ],
  },
  // ───────────────────────────────────────────────────────────── 9
  {
    id: "dld-ones-twos-complement",
    number: 9,
    chapter: CHAPTER,
    title: "1's Complement & 2's Complement",
    summary:
      "1's complement flips every bit. 2's complement is the 1's complement plus 1. Both are used to represent negative binary numbers, and 2's complement is what real computers use.",
    content: `## 1's complement

To find the 1's complement, change every 0 into 1 and every 1 into 0. Example from the notes:

\`\`\`
Number:          1 0 1 1 0 0
1's complement:  0 1 0 0 1 1
\`\`\`

Formally, for an n-bit number N:

\`\`\`
1's complement of N = (2ⁿ − 1) − N
\`\`\`

2ⁿ − 1 is all 1s (for example 1111 for n = 4), and subtracting from all 1s never needs a borrow. That's why flipping each bit gives the same result.

The 1's complement is also called the (r−1)'s complement or diminished radix complement of a binary number, since r − 1 = 1.

## 2's complement

The 2's complement is the 1's complement plus 1:

\`\`\`
2's complement of N = 1's complement + 1 = 2ⁿ − N
\`\`\`

Example from the notes, 0101:

\`\`\`
Number:           0 1 0 1
1's complement:   1 0 1 0
Add 1:          +       1
                ---------
2's complement:   1 0 1 1
\`\`\`

The 2's complement is the r's complement (radix complement) for binary.

### Shortcut for 2's complement

Start from the right. Copy every bit up to and including the first 1. Flip all the bits to the left of it.

\`\`\`
Number:          0 0 1 1 0 1 0 0
                         ↑ first 1 from the right
Copy  "100", flip "00110" → "11001"
2's complement:  1 1 0 0 1 1 0 0
\`\`\`

Check with the long way: 1's complement of 00110100 is 11001011, plus 1 is 11001100 ✓. The shortcut is a textbook trick, not in our notes, so in the exam show the "1's complement + 1" steps and use the shortcut only to check yourself.

## Representing negative numbers

With a fixed number of bits, a negative number −N can be stored as the 1's or 2's complement of +N. The MSB still works as a sign indicator: 0 for positive, 1 for negative.

Example: −25 in 8 bits.

\`\`\`
+25                 = 00011001
−25 sign-magnitude  = 10011001
−25 1's complement  = 11100110   (flip every bit of +25)
−25 2's complement  = 11100111   (1's complement + 1)
\`\`\`

### 4-bit comparison table

| Decimal | Sign-magnitude | 1's complement | 2's complement |
|---|---|---|---|
| +7 | 0111 | 0111 | 0111 |
| +1 | 0001 | 0001 | 0001 |
| +0 | 0000 | 0000 | 0000 |
| −0 | 1000 | 1111 | (none) |
| −1 | 1001 | 1110 | 1111 |
| −2 | 1010 | 1101 | 1110 |
| −3 | 1011 | 1100 | 1101 |
| −4 | 1100 | 1011 | 1100 |
| −5 | 1101 | 1010 | 1011 |
| −6 | 1110 | 1001 | 1010 |
| −7 | 1111 | 1000 | 1001 |
| −8 | (none) | (none) | 1000 |

### Ranges in n bits

| System | Range | 8-bit range | Zeros |
|---|---|---|---|
| Sign-magnitude | −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1) | −127 to +127 | two |
| 1's complement | −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1) | −127 to +127 | two (0000 0000 and 1111 1111) |
| 2's complement | −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1) | −128 to +127 | one |

2's complement has only one zero. If you take the 2's complement of 0000, you get 1111 + 1 = 1 0000, and the extra carry is dropped, leaving 0000. That freed-up pattern is used for one extra negative number (−8 in 4 bits, −128 in 8 bits).

## Reading a 2's complement number

If the MSB is 0, read it as normal binary. If the MSB is 1, the number is negative: take the 2's complement to get the magnitude.

\`\`\`
11111011:
MSB = 1, so negative.
2's complement → 00000101 = 5
Value = −5
\`\`\`

Another way: in 2's complement the MSB has a negative weight. For 8 bits the weights are −128, 64, 32, 16, 8, 4, 2, 1. So 11111011 = −128 + 64 + 32 + 16 + 8 + 2 + 1 = −5. Same answer.

## Why computers use 2's complement

- One zero instead of two.
- Subtraction becomes addition. A − B is just A + (2's complement of B), so the same adder circuit does both jobs.
- No end-around carry step (that's needed for 1's complement, see the subtraction topic).

## Common mistakes

- Flipping bits and stopping there when the question asks for 2's complement. Don't forget the +1.
- Adding 1 to the original number instead of to the 1's complement.
- Ignoring the bit width. The 2's complement of 101 in 3 bits is 011, but in 8 bits (00000101) it's 11111011. Always pad to the given width first.
- Taking the complement of a positive number when asked to "represent +N". Positive numbers are written as they are.

## How this shows up in the mid

"Find the 1's and 2's complement of 10110100", "represent −45 in 8-bit 2's complement", and range MCQs are all standard. Also expect a comparison question: "differentiate between 1's and 2's complement".`,
    mcqs: [
      {
        q: "The 1's complement of 101100 is:",
        options: ["010011", "010100", "101011", "110011"],
        answer: 0,
        explain: "Flip every bit. From the class notes.",
      },
      {
        q: "The 2's complement of 0101 is:",
        options: ["1010", "1101", "0110", "1011"],
        answer: 3,
        explain: "1's complement 1010, plus 1 → 1011.",
      },
      {
        q: "The 2's complement of a number is equal to:",
        options: [
          "Its 1's complement minus 1",
          "Its 1's complement plus 1",
          "The number with its MSB flipped",
          "The number shifted left by one bit",
        ],
        answer: 1,
        explain: "2's complement = 1's complement + 1.",
      },
      {
        q: "−25 in 8-bit 2's complement is:",
        options: ["10011001", "11100110", "11100101", "11100111"],
        answer: 3,
        explain: "+25 = 00011001 → flip → 11100110 → +1 → 11100111.",
      },
      {
        q: "The range of 8-bit 2's complement numbers is:",
        options: ["−128 to +127", "−127 to +127", "−127 to +128", "0 to 255"],
        answer: 0,
        explain: "−2⁷ to 2⁷ − 1.",
      },
      {
        q: "Which representation has only one pattern for zero?",
        options: ["Sign-magnitude", "1's complement", "2's complement", "All of them"],
        answer: 2,
        explain: "Sign-magnitude and 1's complement both have +0 and −0.",
      },
      {
        q: "The 8-bit 2's complement number 11111011 represents:",
        options: ["−4", "−5", "+251", "−123"],
        answer: 1,
        explain: "2's complement of it is 00000101 = 5, and the MSB is 1, so −5.",
      },
      {
        q: "In 1's complement, −0 in 4 bits is written as:",
        options: ["1000", "0000", "It doesn't exist", "1111"],
        answer: 3,
        explain: "Flip all bits of 0000.",
      },
      {
        q: "The 2's complement of 00110100 is:",
        options: ["11001011", "11001101", "11001100", "00110011"],
        answer: 2,
        explain: "1's complement 11001011, plus 1 = 11001100.",
      },
      {
        q: "1's complement of an n-bit number N is mathematically:",
        options: ["2ⁿ − N", "N − 1", "(2ⁿ − 1) − N", "2N"],
        answer: 2,
        explain: "Subtracting from all 1s. The 2's complement is 2ⁿ − N.",
      },
    ],
    fillBlanks: [
      {
        q: "To find the 1's complement, change every 0 to 1 and every 1 to ___.",
        answer: "0",
        alt: ["zero"],
      },
      {
        q: "2's complement = 1's complement + ___.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "The 2's complement of 10110100 is ___.",
        answer: "01001100",
        explain: "Flip → 01001011, +1 → 01001100.",
      },
      {
        q: "In 4-bit 2's complement, the most negative number is ___.",
        answer: "-8",
        alt: ["−8", "minus 8", "1000"],
      },
      {
        q: "The 1's complement of a binary number is also called its (r−1)'s or ___ radix complement.",
        answer: "diminished",
      },
      {
        q: "−25 in 8-bit 1's complement is ___.",
        answer: "11100110",
      },
    ],
    trueFalse: [
      {
        q: "The 2's complement representation has two different zeros.",
        answer: false,
        explain: "It has one zero. 1's complement and sign-magnitude have two.",
      },
      {
        q: "Taking the 2's complement twice gives back the original number.",
        answer: true,
        explain: "2ⁿ − (2ⁿ − N) = N.",
      },
      {
        q: "8-bit 2's complement can represent +128.",
        answer: false,
        explain: "The maximum is +127. 10000000 is −128.",
      },
      {
        q: "In 2's complement, a number with MSB = 1 is negative.",
        answer: true,
        explain: "The MSB acts as a sign indicator in all three signed representations.",
      },
      {
        q: "The 1's complement of 0000 in 4 bits is 0000.",
        answer: false,
        explain: "It's 1111, which is −0 in 1's complement.",
      },
      {
        q: "Computers prefer 2's complement because subtraction can be done with an adder circuit and there's only one zero.",
        answer: true,
        explain: "A − B = A + (2's complement of B), and no end-around carry is needed.",
      },
    ],
    flashcards: [
      { front: "1's complement", back: "Flip every bit (0→1, 1→0). Equals (2ⁿ − 1) − N." },
      { front: "2's complement", back: "1's complement + 1. Equals 2ⁿ − N." },
      { front: "2's complement shortcut", back: "From the right, copy bits up to and including the first 1, then flip everything to its left." },
      { front: "−25 in 8 bits (SM, 1's, 2's)", back: "10011001, 11100110, 11100111" },
      { front: "8-bit ranges", back: "Sign-magnitude & 1's: −127 to +127. 2's: −128 to +127." },
      { front: "Number of zeros", back: "Sign-magnitude: 2. 1's complement: 2. 2's complement: 1." },
      { front: "Decode 11111011 (8-bit 2's)", back: "MSB 1 → negative; 2's complement = 00000101 = 5 → −5" },
      { front: "MSB weight in 8-bit 2's complement", back: "−128. Other weights: 64, 32, 16, 8, 4, 2, 1." },
      { front: "1's complement of 101100 (notes)", back: "010011" },
      { front: "2's complement of 0101 (notes)", back: "1010 + 1 = 1011" },
    ],
    examples: [
      {
        title: "Finding complements",
        items: [
          "**101100** → 1's: 010011 → 2's: 010100",
          "**0101** → 1's: 1010 → 2's: 1011",
          "**00110100** → 1's: 11001011 → 2's: 11001100",
          "**10000000** → 1's: 01111111 → 2's: 10000000 (−128 is its own 2's complement in 8 bits)",
        ],
      },
      {
        title: "Negative numbers in 8-bit 2's complement",
        items: [
          "**−1** → 11111111",
          "**−5** → 11111011",
          "**−25** → 11100111",
          "**−128** → 10000000",
        ],
      },
    ],
    exercises: [
      {
        problem: "Find the 1's and 2's complement of **10110100**.",
        solution: `Number:          1 0 1 1 0 1 0 0
1's complement:  0 1 0 0 1 0 1 1   (flip each bit)
Add 1:         +               1
                ---------------
2's complement:  0 1 0 0 1 1 0 0

Shortcut check: copy "100" from the right,
flip "10110" → "01001" → 01001100 ✓`,
      },
      {
        problem: "Represent **−45** in 8-bit sign-magnitude, 1's complement and 2's complement.",
        solution: `+45 = 32 + 8 + 4 + 1 = 00101101

Sign-magnitude: 1 0101101 = 10101101
1's complement: flip 00101101 → 11010010
2's complement: 11010010 + 1 = 11010011`,
      },
      {
        problem: "What decimal value does the 8-bit 2's complement number **10110010** represent?",
        solution: `MSB = 1 → negative.

2's complement of 10110010:
flip → 01001101
+1   → 01001110 = 64 + 8 + 4 + 2 = 78

Value = −78

Check with weights:
−128 + 32 + 16 + 2 = −78 ✓`,
      },
      {
        problem: "Write the range of 4-bit and 6-bit numbers in 1's complement and in 2's complement.",
        solution: `1's complement: −(2ⁿ⁻¹ − 1) to +(2ⁿ⁻¹ − 1)
2's complement: −2ⁿ⁻¹      to +(2ⁿ⁻¹ − 1)

n = 4:
1's: −7  to +7
2's: −8  to +7

n = 6:
1's: −31 to +31
2's: −32 to +31`,
      },
      {
        problem: "Show that 4-bit 2's complement has only one zero, but 4-bit 1's complement has two.",
        solution: `1's complement:
+0 = 0000
−0 = flip(0000) = 1111
Two different patterns for zero.

2's complement:
+0 = 0000
−0 = flip(0000) + 1 = 1111 + 1 = 1 0000
The 5th bit is outside the 4-bit width and is dropped,
leaving 0000.
So −0 and +0 are the same pattern: only one zero.`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 10
  {
    id: "dld-nines-tens-complement",
    number: 10,
    chapter: CHAPTER,
    title: "9's Complement & 10's Complement",
    summary:
      "The decimal versions of complements: 9's complement subtracts every digit from 9, and 10's complement is the 9's complement plus 1. They are the (r−1)'s and r's complements for base 10.",
    content: `## The general idea: r's and (r−1)'s complements

Every base r has two complements:

| Complement | Formula for an n-digit number N | Binary | Decimal |
|---|---|---|---|
| (r−1)'s complement (diminished radix) | (rⁿ − 1) − N | 1's complement | 9's complement |
| r's complement (radix) | rⁿ − N | 2's complement | 10's complement |

So 9's and 10's complements are to decimal what 1's and 2's complements are to binary. The method is the same; only the "largest digit" changes from 1 to 9.

## 9's complement

The 9's complement of a decimal number is found by subtracting each digit from 9. Example from the notes:

\`\`\`
Number:          2   4   6
               9−2 9−4 9−6
9's complement:  7   5   3   → 753
\`\`\`

This works because 10ⁿ − 1 is all 9s (999 for n = 3), and subtracting a digit from 9 never needs a borrow.

Another one:

\`\`\`
3907 → 9−3, 9−9, 9−0, 9−7 → 6092
\`\`\`

## 10's complement

The 10's complement is the 9's complement plus 1. From the notes:

\`\`\`
Number           = 246
9's complement   = 753
Add 1            = 753 + 1 = 754  → 10's complement
\`\`\`

Check with the formula: 10³ − 246 = 1000 − 246 = 754 ✓

### Shortcut for 10's complement

Leave any trailing zeros as they are. Subtract the first non-zero digit (from the right) from 10. Subtract every digit to its left from 9.

\`\`\`
5200:  trailing 00 stays → 00
       first non-zero digit 2 → 10 − 2 = 8
       remaining 5 → 9 − 5 = 4
10's complement = 4800        (check: 10000 − 5200 = 4800 ✓)
\`\`\`

As with the binary shortcut, this one isn't in the notes. Show the 9's + 1 method in your answer.

## The number of digits matters

The complement depends on n, the number of digits you're working with. If a question says "use 4 digits", pad with zeros first:

\`\`\`
9's complement of 52 (2 digits)  = 47
9's complement of 052 (3 digits) = 947
9's complement of 0052 (4 digits) = 9947
\`\`\`

This becomes important in subtraction, where both numbers must have the same number of digits.

## Other bases (for completeness)

The same rule works in any base. In octal, the (r−1)'s complement is the 7's complement (subtract each digit from 7) and the r's complement is the 8's complement:

\`\`\`
325₈ → 7's complement: 452₈ → 8's complement: 453₈
Check: 8³ = 512, 325₈ = 213, 512 − 213 = 299 = 453₈ ✓
\`\`\`

Our course focuses on 1's, 2's, 9's and 10's, so that's what you should expect in the mid.

## Common mistakes

- Subtracting from 10 for every digit when finding the 10's complement. Only one digit is subtracted from 10 (or you do 9's then +1).
- Forgetting to add 1 for the 10's complement.
- Using a different number of digits for the two numbers in a subtraction.
- Mixing them up: the 9's complement is the (r−1)'s complement, and the 10's complement is the r's complement.

## How this shows up in the mid

Short parts like "find the 9's and 10's complement of 3907 and 5200", and then they're used in decimal subtraction (next topic). Also a likely MCQ: "the r's complement of a decimal number is called the ___ complement".`,
    mcqs: [
      {
        q: "The 9's complement of 246 is:",
        options: ["753", "754", "864", "642"],
        answer: 0,
        explain: "9−2, 9−4, 9−6 → 753.",
      },
      {
        q: "The 10's complement of 246 is:",
        options: ["753", "755", "864", "754"],
        answer: 3,
        explain: "753 + 1 = 754 (also 1000 − 246).",
      },
      {
        q: "The 10's complement of a decimal number is its:",
        options: ["(r−1)'s complement", "r's complement", "1's complement", "Diminished radix complement"],
        answer: 1,
        explain: "For base 10, r's complement = 10's complement.",
      },
      {
        q: "The 9's complement of 3907 is:",
        options: ["6093", "6902", "7093", "6092"],
        answer: 3,
        explain: "9−3=6, 9−9=0, 9−0=9, 9−7=2 → 6092.",
      },
      {
        q: "The 10's complement of 5200 is:",
        options: ["4800", "4799", "5800", "4899"],
        answer: 0,
        explain: "10000 − 5200 = 4800.",
      },
      {
        q: "For an n-digit decimal number N, the 9's complement equals:",
        options: ["10ⁿ − N", "9 − N", "(10ⁿ − 1) − N", "N − 9"],
        answer: 2,
        explain: "10ⁿ − 1 is n nines.",
      },
      {
        q: "The 9's complement of 52 when using 3 digits is:",
        options: ["47", "947", "948", "057"],
        answer: 1,
        explain: "Pad to 052, then 9−0, 9−5, 9−2 → 947.",
      },
      {
        q: "Which pair are both diminished radix (r−1)'s complements?",
        options: ["2's and 9's", "2's and 10's", "1's and 10's", "1's and 9's"],
        answer: 3,
        explain: "1's (binary) and 9's (decimal) are (r−1)'s. 2's and 10's are r's.",
      },
      {
        q: "The 7's complement of 325₈ is:",
        options: ["453₈", "574₈", "452₈", "675₈"],
        answer: 2,
        explain: "7−3, 7−2, 7−5 → 452₈. The 8's complement would be 453₈.",
      },
    ],
    fillBlanks: [
      {
        q: "The 9's complement is obtained by subtracting each digit from ___.",
        answer: "9",
        alt: ["nine"],
      },
      {
        q: "10's complement = 9's complement + ___.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "The 10's complement of 3907 is ___.",
        answer: "6093",
      },
      {
        q: "The 9's complement of 583 is ___.",
        answer: "416",
      },
      {
        q: "In base r, the r's complement of an n-digit number N is r to the power n minus ___.",
        answer: "N",
        alt: ["n"],
      },
    ],
    trueFalse: [
      {
        q: "The 9's complement of a decimal number never requires borrowing.",
        answer: true,
        explain: "Every digit is 9 or less, so 9 − digit is never negative.",
      },
      {
        q: "To find the 10's complement you subtract every digit from 10.",
        answer: false,
        explain: "That gives the wrong answer. Take the 9's complement and add 1.",
      },
      {
        q: "The 9's complement of 052 and of 52 are the same.",
        answer: false,
        explain: "947 (3 digits) vs 47 (2 digits). The digit count changes the result.",
      },
      {
        q: "The 10's complement of 583 is 417.",
        answer: true,
        explain: "1000 − 583 = 417.",
      },
      {
        q: "9's complement in decimal plays the same role as 1's complement in binary.",
        answer: true,
        explain: "Both are (r−1)'s complements.",
      },
    ],
    flashcards: [
      { front: "9's complement", back: "Subtract each digit from 9. Equals (10ⁿ − 1) − N." },
      { front: "10's complement", back: "9's complement + 1. Equals 10ⁿ − N." },
      { front: "9's and 10's of 246 (notes)", back: "753 and 754" },
      { front: "(r−1)'s complement", back: "(rⁿ − 1) − N. Binary: 1's. Decimal: 9's. Also called diminished radix complement." },
      { front: "r's complement", back: "rⁿ − N. Binary: 2's. Decimal: 10's. Also called radix complement." },
      { front: "10's complement shortcut", back: "Keep trailing zeros, subtract the first non-zero digit from 10, the rest from 9." },
      { front: "10's complement of 5200", back: "4800" },
      { front: "9's complement of 3907", back: "6092 (10's: 6093)" },
    ],
    examples: [
      {
        title: "9's and 10's complements",
        items: [
          "**246** → 9's: 753 → 10's: 754",
          "**583** → 9's: 416 → 10's: 417",
          "**3907** → 9's: 6092 → 10's: 6093",
          "**5200** → 9's: 4799 → 10's: 4800",
          "**0** (3 digits) → 9's: 999 → 10's: 1000 → drop the carry → 000",
        ],
      },
    ],
    exercises: [
      {
        problem: "Find the 9's and 10's complement of **72532**.",
        solution: `9's complement:
9−7  9−2  9−5  9−3  9−2
 2    7    4    6    7   → 27467

10's complement:
27467 + 1 = 27468

Check: 100000 − 72532 = 27468 ✓`,
      },
      {
        problem: "Find the 9's and 10's complement of **8456** and **1000**.",
        solution: `8456:
9's  → 1543
10's → 1543 + 1 = 1544   (check: 10000 − 8456 = 1544 ✓)

1000:
9's  → 8999
10's → 8999 + 1 = 9000   (check: 10000 − 1000 = 9000 ✓)`,
      },
      {
        problem: "Find the 9's complement of **3250** using 5 digits.",
        solution: `Pad to 5 digits: 03250

9−0  9−3  9−2  9−5  9−0
 9    6    7    4    9   → 96749

(10's complement would be 96750)`,
      },
      {
        problem: "Show that the 10's complement of 246 found by the 9's + 1 method agrees with the formula 10ⁿ − N.",
        solution: `n = 3

9's + 1 method:
9's of 246 = 753
753 + 1   = 754

Formula:
10³ − 246 = 1000 − 246 = 754

Both give 754.`,
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── 11
  {
    id: "dld-subtraction-using-complements",
    number: 11,
    chapter: CHAPTER,
    title: "Subtraction Using Complements (Carry & No-Carry)",
    summary:
      "Subtract by adding the complement of the subtrahend. With r's complement (2's, 10's) a carry is discarded; with (r−1)'s complement (1's, 9's) it's added back as an end-around carry. If there's no carry, the answer is negative and you complement it.",
    content: `## The idea

To find M − N, add M to the complement of N instead of subtracting. Then look at whether the addition produced a carry out of the leftmost digit. That carry tells you the sign of the answer.

- Carry → the answer is positive.
- No carry → the answer is negative, and what you have is the complement of the answer.

Before you start, make both numbers the same length (pad the shorter one with leading zeros). The complement depends on the number of digits.

## Method 1: (r−1)'s complement, i.e. 1's complement (binary) or 9's complement (decimal)

Steps (as in the notes):

1. Take the 1's (or 9's) complement of the second number (the subtrahend).
2. Add it to the first number.
3. Carry case: if a carry comes out, add it to the rightmost bit of the result. This is the **end-around carry**. The answer is positive.
4. No-carry case: take the 1's (or 9's) complement of the result. The answer is negative.

### 1's complement, no-carry case (from the notes): 101011 − 111001

\`\`\`
1's complement of 111001 = 000110

    1 0 1 0 1 1
  + 0 0 0 1 1 0
  -------------
    1 1 0 0 0 1      → no carry

No carry, so take the 1's complement of the answer:
110001 → 001110
Answer: −001110₂

Check: 43 − 57 = −14, and 001110₂ = 14 ✓
\`\`\`

### 1's complement, carry case (from the notes): 111001 − 101011

\`\`\`
1's complement of 101011 = 010100

     1 1 1 0 0 1
   + 0 1 0 1 0 0
   -------------
   1 0 0 1 1 0 1     → carry 1

Add the carry to the rightmost bit (end-around carry):
     0 0 1 1 0 1
   +           1
   -------------
     0 0 1 1 1 0
Answer: +001110₂

Check: 57 − 43 = 14 ✓
\`\`\`

### 9's complement, carry case (from the notes): 583 − 246

\`\`\`
9's complement of 246 = 753

  583
+ 753
-----
 1336      → carry 1

End-around carry: 336 + 1 = 337
583 − 246 = 337
\`\`\`

### 9's complement, no-carry case: 246 − 583

\`\`\`
9's complement of 583 = 416

  246
+ 416
-----
  662      → no carry

Take the 9's complement: 662 → 337
246 − 583 = −337
\`\`\`

## Method 2: r's complement, i.e. 2's complement (binary) or 10's complement (decimal)

Steps (as in the notes):

1. Find the 2's (or 10's) complement of the second number.
2. Add it to the first number.
3. Carry case: discard the carry. The remaining result is positive.
4. No-carry case: take the 2's (or 10's) complement of the result and put a minus sign in front.

### 2's complement, carry case (from the notes): 1001 − 0101

\`\`\`
0101 → 1's complement 1010 → +1 → 2's complement 1011

    1 0 0 1
  + 1 0 1 1
  ---------
  1 0 1 0 0     → carry 1, discard it

Answer: +0100₂   (9 − 5 = 4 ✓)
\`\`\`

### 2's complement, no-carry case: 0101 − 1001

\`\`\`
1001 → 1's complement 0110 → +1 → 2's complement 0111

    0 1 0 1
  + 0 1 1 1
  ---------
    1 1 0 0     → no carry

Take the 2's complement: 1100 → 0011 + 1 → 0100
Answer: −0100₂   (5 − 9 = −4 ✓)
\`\`\`

### 10's complement, carry case (from the notes): 583 − 246

\`\`\`
10's complement of 246 = 754

  583
+ 754
-----
 1337      → discard the carry 1

583 − 246 = 337
\`\`\`

### 10's complement, no-carry case: 246 − 583

\`\`\`
10's complement of 583 = 417

  246
+ 417
-----
  663      → no carry

Take the 10's complement: 1000 − 663 = 337
246 − 583 = −337
\`\`\`

## Summary table

| Method | Carry produced | No carry |
|---|---|---|
| 1's complement | Add the carry to the LSB (end-around). Result is positive. | Take the 1's complement of the result. Answer is negative. |
| 2's complement | Discard the carry. Result is positive. | Take the 2's complement of the result. Answer is negative. |
| 9's complement | Add the carry to the last digit (end-around). Positive. | Take the 9's complement. Negative. |
| 10's complement | Discard the carry. Positive. | Take the 10's complement. Negative. |

## Why it works

For r's complement with n digits: M + (rⁿ − N) = rⁿ + (M − N).

- If M ≥ N, the sum is at least rⁿ, which shows up as a carry. Dropping the carry removes the rⁿ and leaves M − N.
- If M < N, the sum is rⁿ − (N − M), which is less than rⁿ, so there's no carry. That's exactly the r's complement of (N − M), so complementing it gives the magnitude.

For (r−1)'s complement: M + (rⁿ − 1 − N) = rⁿ + (M − N) − 1. When there's a carry, dropping it removes rⁿ, but you're still 1 short. Adding the carry back at the right end fixes that. That's the reason for the end-around carry.

## Common mistakes

- Complementing the first number instead of the second.
- Not padding both numbers to the same length before complementing. For 72532 − 3250, use 03250.
- Discarding the carry in the 1's or 9's method. It must be added back.
- Adding the carry back in the 2's or 10's method. It must be discarded.
- Forgetting the minus sign in the no-carry case, or forgetting to complement the result.

## How this shows up in the mid

This is the big question of Chapter 1, often 5 marks or more. A typical paper gives one binary pair and asks for both the 1's and 2's complement method, or a decimal pair for 9's and 10's. Sometimes both orders (M − N and N − M) so you have to show both the carry and the no-carry case. Write the complement step, the addition, and then say clearly "carry, so ..." or "no carry, so ...". Finish with a decimal check.`,
    mcqs: [
      {
        q: "In subtraction using 2's complement, if a carry is produced you should:",
        options: [
          "Add it to the LSB",
          "Take the 2's complement of the result",
          "Discard it, and the result is positive",
          "Add it to the MSB",
        ],
        answer: 2,
        explain: "With r's complement the carry is dropped.",
      },
      {
        q: "In subtraction using 1's complement, if a carry is produced you should:",
        options: [
          "Add it to the rightmost bit (end-around carry)",
          "Take the 1's complement of the result",
          "Discard it",
          "Ignore the result",
        ],
        answer: 0,
        explain: "The end-around carry corrects the result, which is otherwise one less than the true answer.",
      },
      {
        q: "If no carry is produced in 1's complement subtraction, the answer is:",
        options: [
          "Positive, and the sum is the answer",
          "Negative, and the sum is the answer",
          "Zero",
          "Negative, and you take the 1's complement of the sum",
        ],
        answer: 3,
        explain: "No carry means the sum is the complement of the magnitude.",
      },
      {
        q: "Using 9's complement, 583 − 246 gives an intermediate sum of:",
        options: ["1337", "1336", "336", "829"],
        answer: 1,
        explain: "583 + 753 = 1336. Then 336 + 1 = 337.",
      },
      {
        q: "Using 10's complement, 583 − 246: the sum 583 + 754 = 1337. The answer is:",
        options: ["1337", "338", "−337", "337"],
        answer: 3,
        explain: "Discard the carry 1 → 337.",
      },
      {
        q: "1001₂ − 0101₂ using 2's complement gives:",
        options: ["0100₂", "1100₂", "0011₂", "−0100₂"],
        answer: 0,
        explain: "1001 + 1011 = 10100 → discard carry → 0100 (9 − 5 = 4).",
      },
      {
        q: "101011 − 111001 using 1's complement: the sum 101011 + 000110 = 110001 with no carry. The answer is:",
        options: ["+110001", "−110001", "−001110", "+001110"],
        answer: 2,
        explain: "No carry → complement the result → −001110 (−14).",
      },
      {
        q: "In 10's complement subtraction 246 − 583, the sum 246 + 417 = 663 has no carry. The answer is:",
        options: ["663", "−337", "−336", "337"],
        answer: 1,
        explain: "10's complement of 663 is 337, and no carry means negative.",
      },
      {
        q: "Before subtracting 3250 from 72532 using 10's complement, you should write 3250 as:",
        options: ["3250", "32500", "0003250", "03250"],
        answer: 3,
        explain: "Both numbers need the same number of digits (5).",
      },
      {
        q: "The end-around carry is used in:",
        options: [
          "2's and 10's complement subtraction",
          "Only 2's complement",
          "1's and 9's complement subtraction",
          "Only decimal subtraction",
        ],
        answer: 2,
        explain: "(r−1)'s complement methods need it; r's complement methods discard the carry.",
      },
    ],
    fillBlanks: [
      {
        q: "In 1's complement subtraction, adding the carry back to the LSB is called the ___ carry.",
        answer: "end-around",
        alt: ["end around", "end-around carry"],
      },
      {
        q: "In 2's complement subtraction, when no carry occurs the result is ___.",
        answer: "negative",
        alt: ["-ve", "negative number"],
      },
      {
        q: "111001₂ − 101011₂ = ___₂.",
        answer: "001110",
        alt: ["1110", "+001110"],
        explain: "57 − 43 = 14.",
      },
      {
        q: "Using 9's complement, 246 − 583 = ___.",
        answer: "-337",
        alt: ["−337", "minus 337"],
      },
      {
        q: "In r's complement subtraction, the end carry is ___.",
        answer: "discarded",
        alt: ["dropped", "ignored", "discard"],
      },
    ],
    trueFalse: [
      {
        q: "In 2's complement subtraction, the end carry is added back to the LSB.",
        answer: false,
        explain: "That's the 1's complement rule. In 2's complement the carry is discarded.",
      },
      {
        q: "A carry in complement subtraction means the result is positive.",
        answer: true,
        explain: "A carry happens exactly when M ≥ N.",
      },
      {
        q: "When there is no carry, the sum itself is the correct negative answer.",
        answer: false,
        explain: "The sum is the complement of the magnitude. You must complement it and add the minus sign.",
      },
      {
        q: "583 − 246 = 337 can be done with either 9's or 10's complement.",
        answer: true,
        explain: "9's: 1336 → 336 + 1 = 337. 10's: 1337 → discard carry → 337.",
      },
      {
        q: "In complement subtraction you take the complement of the first number (the minuend).",
        answer: false,
        explain: "You complement the second number, the one being subtracted.",
      },
      {
        q: "The end-around carry is needed because M + (rⁿ − 1 − N) is one less than rⁿ + (M − N).",
        answer: true,
        explain: "Adding the carry back supplies the missing 1.",
      },
    ],
    flashcards: [
      { front: "Complement subtraction: first step", back: "Pad both numbers to the same length, then take the complement of the second number (subtrahend)." },
      { front: "1's / 9's complement, carry", back: "Add the carry to the rightmost digit (end-around carry). Answer is positive." },
      { front: "1's / 9's complement, no carry", back: "Take the 1's / 9's complement of the result. Answer is negative." },
      { front: "2's / 10's complement, carry", back: "Discard the carry. Answer is positive." },
      { front: "2's / 10's complement, no carry", back: "Take the 2's / 10's complement of the result. Answer is negative." },
      { front: "583 − 246 by 9's complement (notes)", back: "583 + 753 = 1336 → 336 + 1 = 337" },
      { front: "583 − 246 by 10's complement (notes)", back: "583 + 754 = 1337 → discard carry → 337" },
      { front: "1001 − 0101 by 2's complement (notes)", back: "1001 + 1011 = 10100 → discard carry → 0100" },
      { front: "101011 − 111001 by 1's complement (notes)", back: "101011 + 000110 = 110001, no carry → −001110" },
      { front: "Why does a carry mean positive?", back: "M + (rⁿ − N) = rⁿ + (M − N). It reaches rⁿ (a carry) only when M ≥ N." },
    ],
    examples: [
      {
        title: "Binary (from the notes and the reverse cases)",
        items: [
          "**111001 − 101011** (1's): 111001 + 010100 = 1001101 → carry → 001101 + 1 = **+001110**",
          "**101011 − 111001** (1's): 101011 + 000110 = 110001 → no carry → **−001110**",
          "**1001 − 0101** (2's): 1001 + 1011 = 10100 → discard carry → **+0100**",
          "**0101 − 1001** (2's): 0101 + 0111 = 1100 → no carry → 2's of 1100 = **−0100**",
        ],
      },
      {
        title: "Decimal",
        items: [
          "**583 − 246** (9's): 583 + 753 = 1336 → 336 + 1 = **337**",
          "**246 − 583** (9's): 246 + 416 = 662 → no carry → **−337**",
          "**583 − 246** (10's): 583 + 754 = 1337 → discard → **337**",
          "**246 − 583** (10's): 246 + 417 = 663 → no carry → **−337**",
        ],
      },
    ],
    exercises: [
      {
        problem: "Using **2's complement**, find X − Y and Y − X for **X = 1010100₂** and **Y = 1000011₂**.",
        solution: `X = 1010100 (84),  Y = 1000011 (67)

(a) X − Y
2's complement of Y: 0111100 + 1 = 0111101

     1 0 1 0 1 0 0
   + 0 1 1 1 1 0 1
   ---------------
   1 0 0 1 0 0 0 1   → carry, discard it

X − Y = +0010001₂ = 17 ✓ (84 − 67)

(b) Y − X
2's complement of X: 0101011 + 1 = 0101100

     1 0 0 0 0 1 1
   + 0 1 0 1 1 0 0
   ---------------
     1 1 0 1 1 1 1   → no carry

2's complement of 1101111 = 0010000 + 1 = 0010001
Y − X = −0010001₂ = −17 ✓`,
      },
      {
        problem: "Repeat the same subtraction using **1's complement**: X = 1010100₂, Y = 1000011₂.",
        solution: `(a) X − Y
1's complement of Y: 0111100

     1 0 1 0 1 0 0
   + 0 1 1 1 1 0 0
   ---------------
   1 0 0 1 0 0 0 0   → carry

End-around carry:
     0 0 1 0 0 0 0
   +             1
   ---------------
     0 0 1 0 0 0 1

X − Y = +0010001₂ = 17 ✓

(b) Y − X
1's complement of X: 0101011

     1 0 0 0 0 1 1
   + 0 1 0 1 0 1 1
   ---------------
     1 1 0 1 1 1 0   → no carry

1's complement of 1101110 = 0010001
Y − X = −0010001₂ = −17 ✓`,
      },
      {
        problem: "Using **10's complement**, find **72532 − 3250** and **3250 − 72532**.",
        solution: `Pad: 3250 → 03250 (5 digits)

(a) 72532 − 03250
10's complement of 03250 = 96750

   72532
 + 96750
 -------
  169282   → discard the carry 1

Answer: 69282 ✓

(b) 03250 − 72532
10's complement of 72532 = 27468

   03250
 + 27468
 -------
   30718   → no carry

10's complement of 30718 = 69282
Answer: −69282 ✓`,
      },
      {
        problem: "Using **9's complement**, find **8456 − 3721** and **3721 − 8456**.",
        solution: `(a) 8456 − 3721
9's complement of 3721 = 6278

   8456
 + 6278
 ------
  14734   → carry 1

End-around carry: 4734 + 1 = 4735
Answer: 4735 ✓

(b) 3721 − 8456
9's complement of 8456 = 1543

   3721
 + 1543
 ------
   5264   → no carry

9's complement of 5264 = 4735
Answer: −4735 ✓`,
      },
      {
        problem: "Using **8-bit 2's complement**, compute **25 − 43**.",
        solution: `+25 = 00011001
+43 = 00101011
2's complement of 43: 11010100 + 1 = 11010101

     0 0 0 1 1 0 0 1
   + 1 1 0 1 0 1 0 1
   -----------------
     1 1 1 0 1 1 1 0   → no carry

No carry → negative. 2's complement of 11101110:
00010001 + 1 = 00010010 = 18

25 − 43 = −18 ✓

(In 8-bit 2's complement the stored result 11101110
is itself the representation of −18.)`,
      },
      {
        problem: "Using **1's complement**, subtract **110101₂ − 100110₂** and verify in decimal.",
        solution: `1's complement of 100110 = 011001

     1 1 0 1 0 1
   + 0 1 1 0 0 1
   -------------
   1 0 0 1 1 1 0   → carry

End-around carry:
     0 0 1 1 1 0
   +           1
   -------------
     0 0 1 1 1 1

Answer: +001111₂ = 15

Check: 110101₂ = 53, 100110₂ = 38, 53 − 38 = 15 ✓`,
      },
    ],
  },
];
