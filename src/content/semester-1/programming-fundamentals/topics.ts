import type { Topic } from "@/content/types";

export const topics: Topic[] = [
  {
    id: "ide-system",
    number: 1,
    title: "The Turbo C++ Development System",
    summary: "How a C program is built — the IDE, the four-stage translation pipeline, file types, and the anatomy of a minimal program.",
    content: `## What an IDE Actually Is
An **Integrated Development Environment** bundles four tools into one screen:
1. **Editor** — types and saves source code.
2. **Preprocessor** — handles directives like *#include* and *#define* before compilation.
3. **Compiler** — translates each source file into machine code (an *.obj* file).
4. **Linker** — joins object files with library routines to produce the final *.exe*.
5. **Debugger** — steps through the running program, watching variables.

In **Turbo C++** all five sit in one window: F2 saves, F9 builds, Ctrl+F9 runs, F7/F8 step.

## The Build Pipeline
\`\`\`
hello.c  -->[preprocessor]-->  expanded source
         -->[compiler]      -->  hello.obj  (machine code, unresolved refs)
         -->[linker + libs] -->  hello.exe  (runnable program)
         -->[loader]        -->  process in RAM
\`\`\`
Each stage can fail with a different kind of error:
- **Preprocessor** — missing header, bad macro.
- **Compiler** — syntax / type error.
- **Linker** — *unresolved external* (function declared but never defined).
- **Runtime** — divide by zero, array overflow, stack overflow.

## Files You Will Meet
- **.c / .cpp** — source code you write.
- **.h** — header file with declarations (function prototypes, *#define*, *typedef*).
- **.obj** — compiler output for one source file.
- **.exe** — final program produced by the linker.
- **.lib** — precompiled library (e.g. C standard library).
- **.bak** — Turbo's automatic backup of your last save.

## Anatomy of a C Program
\`\`\`
#include <stdio.h>           // 1. preprocessor directive
#define PI 3.14              // 2. symbolic constant

int main(void) {             // 3. entry function
    float r = 5;             // 4. local variable
    printf("Area = %.2f\\n",  // 5. library call with format string
           PI * r * r);
    return 0;                // 6. exit status to the OS
}
\`\`\`
- *#include <stdio.h>* brings in **printf**'s declaration.
- *main* is the entry point. *void* in the parens means *no arguments*.
- *{ }* delimit a **block**. Each statement ends with a semicolon.
- *return 0* tells the operating system "everything went fine".

## Format Specifiers (printf / scanf)
| Specifier | Type | Example |
|-----------|------|---------|
| %d / %i | signed int | 42 |
| %u | unsigned int | 42 |
| %f | float / double | 3.14 |
| %.2f | 2-decimal float | 3.14 |
| %c | single char | 'A' |
| %s | string | "Ali" |
| %x / %X | hex (lower / upper) | 2a / 2A |
| %o | octal | 52 |
| %e | scientific | 3.14e+00 |
| %% | literal % | % |

## Escape Sequences
- *\\n* newline
- *\\t* tab
- *\\\\* backslash
- *\\"* double quote
- *\\0* null character (string terminator)`,
    mcqs: [
      { q: "Which file is produced by the linker?", options: [".c", ".obj", ".exe", ".h"], answer: 2 },
      { q: "Which header is required for printf()?", options: ["conio.h", "stdio.h", "string.h", "math.h"], answer: 1 },
      { q: "Execution of a C program begins at:", options: ["The first function", "main()", "#include", "The last statement"], answer: 1 },
      { q: "A statement in C ends with:", options: [".", ":", ";", ","], answer: 2 },
      { q: "Which specifier prints an integer?", options: ["%c", "%d", "%f", "%s"], answer: 1 },
      { q: "What does .obj contain?", options: ["Source code", "Machine code for one file", "Linked program", "Library routines"], answer: 1 },
      { q: "*Unresolved external symbol* is detected by the:", options: ["Preprocessor", "Compiler", "Linker", "Loader"], answer: 2 },
      { q: "Which directive defines a symbolic constant?", options: ["#include", "#define", "#const", "#let"], answer: 1 },
      { q: "What does \\n stand for?", options: ["Null", "Newline", "Number", "Name"], answer: 1 },
      { q: "Format specifier for a string is:", options: ["%c", "%d", "%s", "%f"], answer: 2 },
    ],
    fillBlanks: [
      { q: "The directive ___ includes a header file.", answer: "#include" },
      { q: "Curly braces ___ delimit a block of code.", answer: "{}", alt: ["{ }"] },
      { q: "The function where execution begins is called ___.", answer: "main" },
      { q: "Final program produced by the linker has the extension ___.", answer: ".exe", alt: ["exe"] },
      { q: "The escape sequence for a tab is ___.", answer: "\\t" },
      { q: "Symbolic constants are created with the ___ directive.", answer: "#define" },
    ],
    trueFalse: [
      { q: "Header files contain declarations the compiler needs.", answer: true },
      { q: "The compiler produces an .exe file directly.", answer: false, explain: "The compiler produces .obj; the linker produces .exe." },
      { q: "Every C statement must end with a semicolon.", answer: true },
      { q: "main() is optional in a C program.", answer: false },
      { q: "The preprocessor runs before the compiler.", answer: true },
      { q: "*return 0;* in main signals success to the OS.", answer: true },
    ],
    flashcards: [
      { front: "IDE", back: "Integrated Development Environment — editor + compiler + linker + debugger." },
      { front: ".obj file", back: "Machine code for a single source file before linking." },
      { front: "Linker", back: "Combines object files and libraries into an executable." },
      { front: "printf", back: "Standard library function for formatted output." },
      { front: "Header file", back: "File (.h) holding declarations included via #include." },
      { front: "Preprocessor", back: "First build stage — handles #include, #define before compilation." },
      { front: "Format specifier", back: "Token in printf/scanf telling how to format an argument (%d, %f, %s, ...)." },
    ],
    examples: [
      {
        title: "A first program",
        items: [
          "**#include <stdio.h>** — pulls in printf's declaration.",
          "**int main(void) { ... }** — the program's entry point.",
          "**printf(\"Hi\\n\");** — prints text and a newline.",
          "**return 0;** — tells the OS the program ended successfully.",
        ],
      },
      {
        title: "Format specifiers in action",
        items: [
          "*printf(\"%d\", 25);* prints **25**.",
          "*printf(\"%.2f\", 3.14159);* prints **3.14**.",
          "*printf(\"%c\", 'A');* prints **A**.",
          "*printf(\"%s\", \"Hi\");* prints **Hi**.",
          "*printf(\"%x\", 255);* prints **ff**.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a C program that prints your name and roll number on two separate lines.",
        solution: `#include <stdio.h>
int main(void) {
    printf("Name: Ali Khan\\n");
    printf("Roll : 2024-CS-12\\n");
    return 0;
}

// Output:
// Name: Ali Khan
// Roll : 2024-CS-12`,
      },
      {
        problem: "Print the area of a circle of radius 7 using a symbolic constant PI.",
        solution: `#include <stdio.h>
#define PI 3.14159

int main(void) {
    float r = 7.0f;
    float area = PI * r * r;
    printf("Area = %.2f\\n", area);
    return 0;
}

// Output: Area = 153.94`,
      },
      {
        problem: "Print the table:  A  65   B  66   C  67  using a single printf call.",
        solution: `#include <stdio.h>
int main(void) {
    printf("%c %d   %c %d   %c %d\\n",
           'A', 65, 'B', 66, 'C', 67);
    return 0;
}

// Output: A 65   B 66   C 67`,
      },
    ],
  },

  {
    id: "c-building-blocks",
    number: 2,
    title: "C Building Blocks",
    summary: "Variables, data types, type sizes, I/O, operators, precedence and comments — the atoms of every C program.",
    content: `## Variables and Definitions
A **variable** is a named memory cell with a type. *Defining* a variable allocates memory; *initialising* gives it a starting value.
\`\`\`
int   age;          // definition
int   year = 2025;  // definition + initialisation
char  grade = 'A';
float pi    = 3.14f;
\`\`\`

## Built-in Data Types (Turbo C, 16-bit)
| Type | Size | Range |
|------|------|-------|
| char | 1 byte | −128 … 127 |
| unsigned char | 1 byte | 0 … 255 |
| int | 2 bytes | −32 768 … 32 767 |
| unsigned int | 2 bytes | 0 … 65 535 |
| long | 4 bytes | ±2.1 × 10⁹ |
| float | 4 bytes | ~6 digits precision |
| double | 8 bytes | ~15 digits precision |

Use *sizeof(type)* to query a size at runtime.

## Constants
- **Literal:** *42*, *3.14*, *'A'*, *"Hi"*.
- **Symbolic (#define):** *#define MAX 100* — preprocessor substitution, no type.
- **const keyword:** *const float PI = 3.14159f;* — typed, lives in memory.

## Standard I/O
\`\`\`
printf("Enter age: ");
scanf("%d", &age);          // & = address-of
ch = getche();              // read one char with echo
putchar(ch);                // print one char
\`\`\`
**scanf** needs **addresses**, not values — forgetting *&* is the most common bug.

## Operators
- **Arithmetic:** + − * / %
- **Increment / Decrement:** ++ −−   (prefix vs postfix matters)
- **Relational:** == != < > <= >=
- **Logical:** && || !
- **Assignment:** = += −= *= /= %=
- **Bitwise:** & | ^ ~ << >>

## Precedence (high to low, abbreviated)
1. ()  []  ->  .
2. !  ~  ++  −−  unary −
3. *  /  %
4. +  −
5. <<  >>
6. <  <=  >  >=
7. ==  !=
8. &&
9. ||
10. ?:
11. =  +=  −=  *=  /=

When in doubt, **add parentheses**.

## Type Conversion
- **Implicit (promotion):** int → float happens automatically in mixed expressions.
- **Explicit (cast):** *(float) i / 2*.
- **Integer division** truncates: *7 / 2 == 3*. Force float: *7.0f / 2*.

## Comments
- **Line:** *// like this*
- **Block:** */* like this *​/*

Block comments **do not nest**.`,
    mcqs: [
      { q: "Which operator returns the address of a variable?", options: ["*", "&", "%", "#"], answer: 1 },
      { q: "Which type stores a single character?", options: ["int", "char", "float", "double"], answer: 1 },
      { q: "Result of 17 % 5 is:", options: ["3", "2", "3.4", "0"], answer: 1 },
      { q: "scanf() requires which kind of argument for variables?", options: ["Value", "Address", "String", "Pointer to function"], answer: 1 },
      { q: "Which is NOT a relational operator?", options: ["==", "!=", "=", ">="], answer: 2, explain: "= is assignment, not comparison." },
      { q: "// is used for:", options: ["Block comment", "Single-line comment", "Preprocessor", "Header inclusion"], answer: 1 },
      { q: "++x is called:", options: ["Postfix increment", "Prefix increment", "Decrement", "Modulus"], answer: 1 },
      { q: "A symbolic constant is declared with:", options: ["var", "const or #define", "static", "extern"], answer: 1 },
      { q: "What does sizeof(int) typically return in Turbo C (16-bit)?", options: ["1", "2", "4", "8"], answer: 1 },
      { q: "7 / 2 in C evaluates to:", options: ["3.5", "3", "4", "Error"], answer: 1 },
      { q: "Which has higher precedence?", options: ["+", "*", "==", "&&"], answer: 1 },
      { q: "What is the value of (a = 5)?", options: ["true (1)", "5", "0", "Error"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The ___ operator returns the address of a variable.", answer: "&" },
      { q: "*int x = 5;* is an example of variable ___.", answer: "initialization" },
      { q: "The result of 10 / 3 in integer arithmetic is ___.", answer: "3" },
      { q: "*scanf* expects format specifiers and ___ of variables.", answer: "addresses" },
      { q: "The keyword ___ creates a typed read-only variable.", answer: "const" },
      { q: "Casting (float)5 / 2 gives the value ___.", answer: "2.5" },
    ],
    trueFalse: [
      { q: "A variable must be defined before it is used.", answer: true },
      { q: "char and int can be used interchangeably with no consequence.", answer: false },
      { q: "// comments end at the end of the line.", answer: true },
      { q: "= and == do the same thing.", answer: false },
      { q: "Block comments /* ... */ may be nested.", answer: false },
      { q: "Integer division in C truncates toward zero.", answer: true },
    ],
    flashcards: [
      { front: "Variable", back: "A named memory location of a particular type." },
      { front: "Constant", back: "A value that cannot change during execution." },
      { front: "scanf", back: "Formatted input function; needs addresses." },
      { front: "Modulus %", back: "Returns the remainder of integer division." },
      { front: "Precedence", back: "The order in which operators are evaluated." },
      { front: "Cast", back: "Explicit type conversion: (float) x." },
      { front: "Promotion", back: "Implicit conversion of a smaller type to a larger one." },
    ],
    examples: [
      {
        title: "Reading and printing an integer",
        items: [
          "*int n;* — define an integer variable.",
          "*scanf(\"%d\", &n);* — read an integer into n.",
          "*printf(\"You typed %d\", n);* — echo it back.",
        ],
      },
      {
        title: "Operator behaviour",
        items: [
          "**a = 10; b = ++a;** -> a = 11, b = 11 (prefix).",
          "**a = 10; b = a++;** -> a = 11, b = 10 (postfix).",
          "**5 + 2 * 3** = 11 — * has higher precedence than +.",
          "**(5 + 2) * 3** = 21 — parentheses override precedence.",
          "**(float)9 / 2** = **4.5**, but **9 / 2** = **4**.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Read two integers from the user and print their sum, difference, product, quotient and remainder.",
        solution: `#include <stdio.h>
int main(void) {
    int a, b;
    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);
    printf("Sum        = %d\\n", a + b);
    printf("Difference = %d\\n", a - b);
    printf("Product    = %d\\n", a * b);
    printf("Quotient   = %d\\n", a / b);
    printf("Remainder  = %d\\n", a % b);
    return 0;
}`,
      },
      {
        problem: "Convert a temperature from Celsius to Fahrenheit using the formula F = 9/5 * C + 32.",
        solution: `#include <stdio.h>
int main(void) {
    float c, f;
    printf("Enter Celsius: ");
    scanf("%f", &c);
    f = (9.0f / 5.0f) * c + 32;   // use 9.0/5.0 to avoid integer division
    printf("Fahrenheit = %.2f\\n", f);
    return 0;
}`,
      },
      {
        problem: "Swap the values of two variables WITHOUT using a third variable.",
        solution: `#include <stdio.h>
int main(void) {
    int a = 5, b = 9;
    a = a + b;   // a = 14
    b = a - b;   // b = 5
    a = a - b;   // a = 9
    printf("a = %d, b = %d\\n", a, b);  // a = 9, b = 5
    return 0;
}`,
      },
      {
        problem: "Read a 4-digit number and print the sum of its digits.",
        solution: `#include <stdio.h>
int main(void) {
    int n, sum = 0;
    scanf("%d", &n);
    sum += n % 10;  n /= 10;
    sum += n % 10;  n /= 10;
    sum += n % 10;  n /= 10;
    sum += n % 10;
    printf("Sum of digits = %d\\n", sum);
    return 0;
}
// 1234 -> 1+2+3+4 = 10`,
      },
    ],
  },

  {
    id: "loops",
    number: 3,
    title: "Loops",
    summary: "Repetition with for, while and do-while; nested loops, break, continue and choosing the right loop.",
    content: `## Why Loops?
A loop runs a block of code many times without rewriting it. Three forms exist in C; they differ only in **when** the condition is tested and how the count is managed.

## The for Loop
\`\`\`
for (init; condition; update) statement;
\`\`\`
Order of execution:
1. **init** — once, before the first test.
2. **condition** — tested **before** every iteration; loop ends when false.
3. **body** — runs if condition is true.
4. **update** — after the body; then back to step 2.

You can use commas: *for (i = 0, j = 10; i < j; i++, j--)*.

## The while Loop
\`\`\`
while (condition) statement;
\`\`\`
Pre-tested. The body may run **zero** times. Best when you do not know the count in advance, e.g. reading until EOF.

## The do-while Loop
\`\`\`
do statement; while (condition);
\`\`\`
Post-tested — the body runs **at least once**. Common in menus and input validation.

## break and continue
- **break** leaves the **nearest** enclosing loop or *switch* immediately.
- **continue** skips the rest of the body and starts the next iteration. In a *for*, it still runs the *update* expression.

## Nested Loops
A loop inside another loop. The inner loop completes all its iterations for **each** iteration of the outer loop. Used for tables, matrices, and patterns.

## Choosing a Loop
- Known count → **for**
- Unknown count, may run zero times → **while**
- Must run at least once → **do-while**

## Common Pitfalls
- **Off-by-one:** *i <= n* vs *i < n*. Use *i < n* with 0-based loops.
- **Infinite loop:** forgetting to update the counter, or using *=* instead of *==*.
- **Empty body:** *for (i = 0; i < 10; i++);* with a semicolon does **nothing** in the body.`,
    mcqs: [
      { q: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "None"], answer: 2 },
      { q: "In a for loop, the update expression runs:", options: ["Before each iteration", "After each iteration", "Only once", "Never"], answer: 1 },
      { q: "Which keyword exits the nearest loop immediately?", options: ["exit", "stop", "break", "continue"], answer: 2 },
      { q: "Which loop tests the condition before the first iteration?", options: ["do-while", "while", "Both for and while", "None"], answer: 2 },
      { q: "continue causes the program to:", options: ["Exit the loop", "Skip to the next iteration", "Restart the program", "Pause"], answer: 1 },
      { q: "for (i = 0; i < 5; i++) executes the body how many times?", options: ["4", "5", "6", "Infinite"], answer: 1 },
      { q: "An infinite loop can be written as:", options: ["for(;;)", "while(0)", "do{}while(0);", "for(i=0;i<0;i++)"], answer: 0 },
      { q: "for (i=1; i<=10; i+=2) prints how many numbers?", options: ["4", "5", "6", "10"], answer: 1 },
      { q: "Inside nested loops, break exits:", options: ["All loops", "Only the innermost loop", "Only the outermost loop", "The program"], answer: 1 },
      { q: "What is wrong with:  while(x = 5) ?", options: ["Nothing", "Always true (assignment)", "Syntax error", "Never executes"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The ___ loop is best when the number of iterations is fixed.", answer: "for" },
      { q: "*do-while* always executes the body at least ___ time.", answer: "one", alt: ["1"] },
      { q: "The keyword ___ skips the rest of the loop body.", answer: "continue" },
      { q: "*while* tests the condition ___ each iteration.", answer: "before" },
      { q: "An infinite *for* loop is written *for(___;;)*.", answer: "" , alt: [""] },
    ],
    trueFalse: [
      { q: "A while loop may execute zero times.", answer: true },
      { q: "break can be used inside a switch statement.", answer: true },
      { q: "do-while ends with a semicolon after the condition.", answer: true },
      { q: "for(;;) is a syntax error.", answer: false },
      { q: "continue exits the loop completely.", answer: false },
      { q: "Nested loops are loops inside other loops.", answer: true },
    ],
    flashcards: [
      { front: "for loop", back: "Counted loop with init, condition and update." },
      { front: "while loop", back: "Pre-tested loop; may run zero times." },
      { front: "do-while", back: "Post-tested loop; runs at least once." },
      { front: "break", back: "Immediately exits the enclosing loop or switch." },
      { front: "continue", back: "Skips to the next iteration of the loop." },
      { front: "Nested loop", back: "Loop placed inside the body of another loop." },
      { front: "Off-by-one", back: "Classic bug from <= vs < in loop bounds." },
    ],
    examples: [
      {
        title: "Sum 1 to 10 with for",
        items: [
          "*int s = 0;*",
          "*for (int i = 1; i <= 10; i++) s += i;*",
          "Result: **s = 55**.",
        ],
      },
      {
        title: "Menu loop with do-while",
        items: [
          "Show the menu.",
          "Read the user's choice.",
          "Repeat **while** the choice is not 'Q'.",
          "Body runs at least once because the test is at the bottom.",
        ],
      },
      {
        title: "Multiplication square with nested loops",
        items: [
          "Outer loop **i = 1..5** controls rows.",
          "Inner loop **j = 1..5** prints i*j with a tab.",
          "After the inner loop, print **\\n** to move to the next row.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Print the multiplication table of a number entered by the user (1 to 10).",
        solution: `#include <stdio.h>
int main(void) {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (int i = 1; i <= 10; i++)
        printf("%d x %d = %d\\n", n, i, n * i);
    return 0;
}`,
      },
      {
        problem: "Compute the factorial of N using a while loop.",
        solution: `#include <stdio.h>
int main(void) {
    int n;
    long fact = 1;
    scanf("%d", &n);
    int i = 1;
    while (i <= n) {
        fact *= i;
        i++;
    }
    printf("%d! = %ld\\n", n, fact);
    return 0;
}
// 5 -> 120`,
      },
      {
        problem: "Count how many digits a positive integer has (do-while ensures 0 returns 1).",
        solution: `#include <stdio.h>
int main(void) {
    int n, count = 0;
    scanf("%d", &n);
    do {
        n /= 10;
        count++;
    } while (n != 0);
    printf("Digits = %d\\n", count);
    return 0;
}
// 12345 -> 5     0 -> 1`,
      },
      {
        problem: "Print this triangle for n = 5:\n*\n* *\n* * *\n* * * *\n* * * * *",
        solution: `#include <stdio.h>
int main(void) {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`,
      },
      {
        problem: "Skip multiples of 3 between 1 and 20 using continue, and stop completely once you hit 17 using break.",
        solution: `#include <stdio.h>
int main(void) {
    for (int i = 1; i <= 20; i++) {
        if (i == 17) break;
        if (i % 3 == 0) continue;
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}
// Output: 1 2 4 5 7 8 10 11 13 14 16`,
      },
    ],
  },

  {
    id: "decisions",
    number: 4,
    title: "Decisions",
    summary: "Branching with if, if-else, else-if ladders, switch, logical operators and the ternary operator.",
    content: `## The if Statement
\`\`\`
if (condition) statement;
\`\`\`
Executes the statement only when *condition* is non-zero. **Any non-zero value is true** in C — including negative numbers.

## if-else
\`\`\`
if (cond) A; else B;
\`\`\`
Two-way branch. **Nested** if-else chains can be deep — be careful which *if* an *else* matches: an *else* binds to the **nearest unmatched** *if*. Use braces to make this explicit.

## else-if Ladder
Used when one condition out of many should fire:
\`\`\`
if      (m >= 90) grade = 'A';
else if (m >= 80) grade = 'B';
else if (m >= 70) grade = 'C';
else if (m >= 60) grade = 'D';
else              grade = 'F';
\`\`\`
The first true branch runs; the rest are skipped.

## Logical Operators (Short-Circuit)
- **&&** — true only when both sides are true; if the left is false, the right is not evaluated.
- **||** — true when at least one side is true; if the left is true, the right is not evaluated.
- **!** — flips true to false.

This **short-circuit** behaviour is useful: *if (p != NULL && p->x > 0)* is safe.

## switch
Multi-way branching on an **integer or character** expression. Each *case* needs a **break** or it will *fall through* to the next case.
\`\`\`
switch (ch) {
  case 'A': case 'a': printf("Excellent"); break;
  case 'B': case 'b': printf("Good");      break;
  case 'C': case 'c': printf("Average");   break;
  default:            printf("Unknown");
}
\`\`\`
Limitations of switch:
- The expression must be **integer-compatible** (no float, no string).
- Each case label must be a **compile-time constant**.

## Conditional (Ternary) Operator
\`\`\`
result = condition ? value-if-true : value-if-false;
int max = (a > b) ? a : b;
\`\`\`
A one-line if-else expression. Avoid nesting more than one level — it gets hard to read.

## Common Mistakes
- *if (x = 5)* assigns 5 and is always true. Use *==*.
- Missing braces around multi-statement bodies.
- Forgetting *break* in *switch* → unintended fall-through.`,
    mcqs: [
      { q: "An else clause matches the:", options: ["First if in the program", "Nearest unmatched if", "Outermost if", "Last if in the file"], answer: 1 },
      { q: "Which keyword stops fall-through in a switch?", options: ["stop", "exit", "break", "return"], answer: 2 },
      { q: "switch can branch on:", options: ["float", "string", "int or char", "double"], answer: 2 },
      { q: "Logical AND is written as:", options: ["&", "&&", "and", "AND"], answer: 1 },
      { q: "The conditional operator (?:) is:", options: ["Unary", "Binary", "Ternary", "Quaternary"], answer: 2 },
      { q: "What is the value of (5 > 2) ? 10 : 20?", options: ["5", "10", "20", "2"], answer: 1 },
      { q: "If c is non-zero, *if(c)* is treated as:", options: ["false", "true", "error", "undefined"], answer: 1 },
      { q: "Short-circuit evaluation means:", options: ["Operands are reordered", "Right side may be skipped", "The OS skips checks", "Compiler removes the if"], answer: 1 },
      { q: "Case labels in switch must be:", options: ["Variables", "Compile-time constants", "Strings", "Floats"], answer: 1 },
      { q: "What does if (x = 0) do?", options: ["Tests x == 0", "Assigns 0 to x and is false", "Assigns 0 and is true", "Compile error"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The ___ operator is used for logical NOT.", answer: "!" },
      { q: "An *else* binds to the ___ unmatched *if*.", answer: "nearest" },
      { q: "Each switch case usually ends with the keyword ___.", answer: "break" },
      { q: "The conditional operator has ___ operands.", answer: "three", alt: ["3"] },
      { q: "A switch case label must be a ___ constant.", answer: "compile-time", alt: ["constant"] },
    ],
    trueFalse: [
      { q: "A switch can use a float expression.", answer: false },
      { q: "Without break, switch cases fall through.", answer: true },
      { q: "The expression a && b is true only when both are true.", answer: true },
      { q: "if (0) ... will execute its body.", answer: false },
      { q: "Logical operators short-circuit in C.", answer: true },
      { q: "*if (-1)* is true.", answer: true },
    ],
    flashcards: [
      { front: "if-else", back: "Two-way branch based on a condition." },
      { front: "else-if ladder", back: "Series of conditions; first true branch runs." },
      { front: "switch", back: "Multi-way branch on an integer/character value." },
      { front: "Fall-through", back: "Continuing into the next case when break is missing." },
      { front: "?:", back: "Ternary conditional operator: cond ? a : b." },
      { front: "Short-circuit", back: "Skipping evaluation of the right operand when the result is already known." },
    ],
    examples: [
      {
        title: "Grading with else-if",
        items: [
          "Read marks **m**.",
          "*if (m >= 90)* grade = **A**.",
          "*else if (m >= 80)* grade = **B**.",
          "*else if (m >= 70)* grade = **C**.",
          "*else* grade = **F**.",
        ],
      },
      {
        title: "switch on a character",
        items: [
          "*case 'Y':* print \"Yes\"; **break**;",
          "*case 'N':* print \"No\"; **break**;",
          "*default:* print \"Unknown\";",
        ],
      },
      {
        title: "Ternary for absolute value",
        items: [
          "*int abs = (x < 0) ? -x : x;*",
          "Single-line replacement for an if-else block.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Read a year and decide whether it is a leap year. (Divisible by 4, except centuries that are not divisible by 400.)",
        solution: `#include <stdio.h>
int main(void) {
    int y;
    scanf("%d", &y);
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
        printf("%d is a leap year\\n", y);
    else
        printf("%d is NOT a leap year\\n", y);
    return 0;
}
// 2024 -> leap   1900 -> not leap   2000 -> leap`,
      },
      {
        problem: "Find the largest of three numbers using nested if-else.",
        solution: `#include <stdio.h>
int main(void) {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    int max;
    if (a >= b) max = (a >= c) ? a : c;
    else        max = (b >= c) ? b : c;
    printf("Largest = %d\\n", max);
    return 0;
}`,
      },
      {
        problem: "Build a simple calculator using switch. Read two numbers and an operator (+ − * /).",
        solution: `#include <stdio.h>
int main(void) {
    float a, b, r;
    char op;
    scanf("%f %c %f", &a, &op, &b);
    switch (op) {
        case '+': r = a + b; break;
        case '-': r = a - b; break;
        case '*': r = a * b; break;
        case '/':
            if (b == 0) { printf("Divide by zero\\n"); return 1; }
            r = a / b; break;
        default:
            printf("Unknown operator\\n"); return 1;
    }
    printf("Result = %.2f\\n", r);
    return 0;
}`,
      },
      {
        problem: "Read a character and report whether it is a vowel, consonant, digit or other (use switch with fall-through).",
        solution: `#include <stdio.h>
int main(void) {
    char c;
    scanf(" %c", &c);              // leading space skips whitespace
    switch (c) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            printf("Vowel\\n"); break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            printf("Digit\\n"); break;
        default:
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
                printf("Consonant\\n");
            else
                printf("Other\\n");
    }
    return 0;
}`,
      },
    ],
  },

  {
    id: "functions",
    number: 5,
    title: "Functions",
    summary: "Reusable units of code: definition, return values, arguments, prototypes, scope, recursion and storage classes.",
    content: `## Why Functions?
- **Reuse** — write once, call many times.
- **Organisation** — split a large problem into named pieces.
- **Abstraction** — the caller only needs the *what*, not the *how*.
- **Testing** — test a function in isolation.

## Anatomy
\`\`\`
returnType name(parameter list) {
    body
    return value;
}
\`\`\`
- **return type** — type of the value sent back (*void* if none).
- **parameters** — variables that receive the **arguments** the caller passes.
- **return** — sends control (and a value) back to the caller; ends the function.

## Prototypes (Forward Declarations)
A **prototype** declares a function before it is used. The compiler then checks the number, types and order of arguments at every call site.
\`\`\`
int  add(int, int);            // prototype
float circle_area(float r);    // names are optional in a prototype
\`\`\`

## Passing Arguments
- **Pass by value** (default): the function gets a **copy**. Changes inside the function do **not** affect the caller's variable.
- **Simulating pass by reference** (preview of next chapter): pass an **address** (*&x*) and use a pointer (*int *p*).

## Scope and Lifetime
- **Local (auto):** declared inside a function or block. Created on entry, destroyed on exit.
- **External (global):** declared outside any function. Lives the entire program; visible from the point of declaration onward.
- **Static local:** local in scope but its memory persists between calls. Initialised once.
- **Static global:** restricts visibility to its source file.
- **register:** *hint* to keep the variable in a CPU register for speed.

## Recursion
A function that calls itself. Two parts are essential:
1. **Base case** — a condition that stops the recursion.
2. **Recursive case** — calls itself with a smaller input.

\`\`\`
int fact(int n) {
    if (n <= 1) return 1;       // base
    return n * fact(n - 1);     // recurse
}
\`\`\`
Each call uses **stack** memory; without a base case you get a *stack overflow*.

## Preprocessor Directives
- **#define NAME value** — symbolic constant.
- **#define SQ(x) ((x)*(x))** — macro (always parenthesise the body and arguments).
- **#include "file"** — bring another file's text into yours.
- **#ifdef / #endif** — conditional compilation.`,
    mcqs: [
      { q: "A function that returns nothing has return type:", options: ["int", "null", "void", "empty"], answer: 2 },
      { q: "In pass-by-value, changes inside the function:", options: ["Affect the caller", "Do not affect the caller", "Cause a syntax error", "Make the variable static"], answer: 1 },
      { q: "A prototype tells the compiler about a function's:", options: ["Body", "Arguments and return type", "Local variables", "Static variables"], answer: 1 },
      { q: "A static local variable:", options: ["Is destroyed each call", "Keeps its value between calls", "Is global", "Cannot be initialised"], answer: 1 },
      { q: "#define is processed by the:", options: ["Compiler", "Linker", "Preprocessor", "Loader"], answer: 2 },
      { q: "Which keyword sends a value back from a function?", options: ["send", "give", "return", "back"], answer: 2 },
      { q: "External variables are accessible:", options: ["Only in main()", "Throughout the program", "Only in their function", "Only in headers"], answer: 1 },
      { q: "Recursion REQUIRES a:", options: ["Loop", "Base case", "Pointer", "Static variable"], answer: 1 },
      { q: "Each function call uses memory on the:", options: ["Heap", "Stack", "ROM", "Registers only"], answer: 1 },
      { q: "Macro #define SQ(x) x*x called as SQ(2+3) gives:", options: ["25", "11", "10", "13"], answer: 1, explain: "Expands to 2+3*2+3 = 11. Always parenthesise!" },
    ],
    fillBlanks: [
      { q: "A variable declared inside a function is called a ___ variable.", answer: "local" },
      { q: "The default argument-passing mechanism in C is pass by ___.", answer: "value" },
      { q: "A function's ___ declares it before it is used.", answer: "prototype" },
      { q: "The ___ keyword keeps a local variable alive between calls.", answer: "static" },
      { q: "A function that calls itself is using ___.", answer: "recursion" },
      { q: "The condition that stops recursion is called the ___ case.", answer: "base" },
    ],
    trueFalse: [
      { q: "A function can return at most one value via return.", answer: true },
      { q: "Prototypes are optional and never improve safety.", answer: false },
      { q: "main() is itself a function.", answer: true },
      { q: "#include is a preprocessor directive.", answer: true },
      { q: "Recursion without a base case causes a stack overflow.", answer: true },
      { q: "A static local variable is initialised on every call.", answer: false },
    ],
    flashcards: [
      { front: "Function", back: "Named, reusable block of code." },
      { front: "Prototype", back: "Declaration of a function's signature before use." },
      { front: "Pass by value", back: "Function receives a copy of the argument." },
      { front: "Static variable", back: "Local in scope but persists across calls." },
      { front: "Macro", back: "Symbolic name expanded by the preprocessor." },
      { front: "Recursion", back: "A function that calls itself; needs a base case." },
      { front: "Stack frame", back: "Memory area allocated for one function call." },
    ],
    examples: [
      {
        title: "A function that returns a value",
        items: [
          "*int square(int n) { return n * n; }*",
          "Caller: *int y = square(5);* -> **y = 25**.",
          "The argument **5** is copied into parameter **n**.",
        ],
      },
      {
        title: "static variable counter",
        items: [
          "*void hit(void) { static int c = 0; c++; printf(\"%d\", c); }*",
          "Calling *hit()* three times prints **1 2 3** — c survives.",
        ],
      },
      {
        title: "Recursive factorial",
        items: [
          "*fact(0) = 1* — base case.",
          "*fact(n) = n * fact(n-1)* — recursive case.",
          "*fact(4) = 4 * 3 * 2 * 1 = 24*.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a function int max3(int, int, int) that returns the largest of three integers, and call it from main.",
        solution: `#include <stdio.h>

int max3(int a, int b, int c) {
    int m = a;
    if (b > m) m = b;
    if (c > m) m = c;
    return m;
}

int main(void) {
    printf("max = %d\\n", max3(7, 19, 4));   // 19
    return 0;
}`,
      },
      {
        problem: "Write a function isPrime(int n) that returns 1 if n is prime, 0 otherwise. Test it on numbers 2..20.",
        solution: `#include <stdio.h>

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}

int main(void) {
    for (int n = 2; n <= 20; n++)
        if (isPrime(n)) printf("%d ", n);
    printf("\\n");
    return 0;
}
// Output: 2 3 5 7 11 13 17 19`,
      },
      {
        problem: "Write a recursive function to compute the n-th Fibonacci number (F0=0, F1=1).",
        solution: `#include <stdio.h>

int fib(int n) {
    if (n < 2) return n;        // base
    return fib(n - 1) + fib(n - 2);
}

int main(void) {
    for (int i = 0; i < 10; i++)
        printf("%d ", fib(i));
    printf("\\n");
    return 0;
}
// Output: 0 1 1 2 3 5 8 13 21 34`,
      },
      {
        problem: "Write a function that uses a static counter to report how many times it has been called.",
        solution: `#include <stdio.h>

void hit(void) {
    static int count = 0;       // initialised ONCE
    count++;
    printf("Called %d time(s)\\n", count);
}

int main(void) {
    hit();   // 1
    hit();   // 2
    hit();   // 3
    return 0;
}`,
      },
    ],
  },

  {
    id: "arrays-strings",
    number: 6,
    title: "Arrays and Strings",
    summary: "Indexed collections of same-type values, multi-dimensional arrays, passing arrays to functions, and the special character arrays we call strings.",
    content: `## Arrays
An **array** is a fixed-size, indexed collection of values of the **same type**, stored in **contiguous memory**.
\`\`\`
int marks[5];          // definition: 5 ints
marks[0] = 90;         // assignment
int x = marks[2];      // access
\`\`\`
Indices start at **0** and run to **size − 1**. C does **not** check bounds — writing past the end corrupts memory and can crash later.

## Initialisation
\`\`\`
int a[5] = {1, 2, 3, 4, 5};
int b[]  = {10, 20, 30};   // size inferred = 3
int c[5] = {1, 2};         // c = {1, 2, 0, 0, 0}
int d[5] = {0};            // all zero
\`\`\`

## Memory Layout
*int a[5]* with *sizeof(int) = 2* in Turbo C occupies **10 bytes** in one continuous block. The array name *a* by itself is the **address** of *a[0]*.

## Multi-Dimensional Arrays
\`\`\`
int grid[3][4];          // 3 rows, 4 columns (12 ints)
int cube[2][3][4];       // 24 ints
\`\`\`
Stored **row-major**: row 0 first, then row 1, etc. Initialise with nested braces:
\`\`\`
int g[2][3] = { {1,2,3}, {4,5,6} };
\`\`\`

## Arrays as Function Arguments
You pass the **name** (the address of the first element). The function can change the original array. Sizes of all dimensions except the first must be specified:
\`\`\`
void print_row(int a[], int n);
void print_grid(int g[][4], int rows);
\`\`\`

## Strings
A **string** in C is an array of *char* terminated by the null byte **\\0**.
\`\`\`
char name[20] = "Ali";   // stored as 'A','l','i','\\0', then garbage
\`\`\`
**sizeof** of this array is 20, but the *length* of the string is 3.

## String I/O
- **gets(s)** — reads a line into *s* (UNSAFE — no length check; classic buffer overflow). *fgets(s, n, stdin)* is the modern replacement.
- **puts(s)** — prints a string and adds a newline.
- **scanf("%s", s)** — reads until whitespace.
- **scanf("%[^\\n]", s)** — reads up to a newline.

## Common String Functions (string.h)
| Function | Purpose |
|----------|---------|
| strlen(s) | length of s, excluding \\0 |
| strcpy(d, s) | copy s into d |
| strncpy(d, s, n) | copy at most n chars |
| strcat(d, s) | append s onto d |
| strcmp(a, b) | 0 if equal, <0 if a<b, >0 if a>b |
| strchr(s, c) | first occurrence of c, or NULL |
| strstr(s, sub) | first occurrence of substring |

## Common Pitfalls
- Forgetting room for the **\\0** — a name of 19 chars needs *char buf[20]*.
- Writing past the end of an array — silent corruption.
- Comparing strings with *==*. Use **strcmp**.`,
    mcqs: [
      { q: "The first index of a C array is:", options: ["1", "0", "-1", "Depends on the compiler"], answer: 1 },
      { q: "Strings in C are terminated by:", options: ["A space", "EOF", "Null character \\0", "Newline \\n"], answer: 2 },
      { q: "What does sizeof(int a[5]) typically equal on a 32-bit int system?", options: ["5", "10", "20", "40"], answer: 2 },
      { q: "When an array name is passed to a function, what is actually passed?", options: ["A copy of the array", "The address of the first element", "Only the first element", "Nothing"], answer: 1 },
      { q: "Which function returns the length of a string?", options: ["strcpy", "strlen", "strcat", "strcmp"], answer: 1 },
      { q: "char s[] = \"Hi\"; sizeof(s) is:", options: ["2", "3", "4", "5"], answer: 1, explain: "'H','i','\\0' = 3." },
      { q: "C performs bounds checking on arrays:", options: ["Always", "Sometimes", "Never", "Only in debug mode"], answer: 2 },
      { q: "strcmp(a, b) returns 0 when:", options: ["a is shorter", "a is longer", "They are equal", "Either is empty"], answer: 2 },
      { q: "How are 2D arrays stored in C?", options: ["Column-major", "Row-major", "Random", "Linked"], answer: 1 },
      { q: "Which call is UNSAFE for reading user input?", options: ["fgets", "scanf with width", "gets", "getchar"], answer: 2 },
    ],
    fillBlanks: [
      { q: "Array indices start at ___.", answer: "0" },
      { q: "A string in C ends with the ___ character.", answer: "null", alt: ["\\0", "nul"] },
      { q: "Function ___ copies one string into another.", answer: "strcpy" },
      { q: "*int a[3][4]* declares a ___-dimensional array.", answer: "two", alt: ["2"] },
      { q: "C arrays are stored in ___ memory.", answer: "contiguous" },
      { q: "An array name is the ___ of its first element.", answer: "address" },
    ],
    trueFalse: [
      { q: "All elements of an array must be of the same type.", answer: true },
      { q: "C automatically prevents writing past the end of an array.", answer: false },
      { q: "An array name is essentially a pointer to its first element.", answer: true },
      { q: "strlen counts the null terminator.", answer: false },
      { q: "Strings can be compared with ==.", answer: false },
      { q: "Multi-dimensional arrays are stored row-major in C.", answer: true },
    ],
    flashcards: [
      { front: "Array", back: "Fixed-size sequence of same-type values, accessed by index." },
      { front: "Bounds checking", back: "Verifying an index is within range — C does NOT do this." },
      { front: "String", back: "char array terminated by '\\0'." },
      { front: "strcpy", back: "Copies a source string into a destination array." },
      { front: "strcmp", back: "Compares two strings; returns 0 when equal." },
      { front: "Row-major", back: "2D arrays stored row by row in memory." },
      { front: "Buffer overflow", back: "Writing past the end of an array — corrupts memory." },
    ],
    examples: [
      {
        title: "Average of 5 numbers",
        items: [
          "*int a[5] = {10, 20, 30, 40, 50};*",
          "*int sum = 0; for (int i = 0; i < 5; i++) sum += a[i];*",
          "*float avg = sum / 5.0;* -> **avg = 30.0**.",
        ],
      },
      {
        title: "Working with a string",
        items: [
          "*char name[20];*",
          "*strcpy(name, \"Ali\");* -> name holds **A l i \\0**.",
          "*strlen(name)* = **3**.",
          "*strcat(name, \" Khan\");* -> name = **Ali Khan**.",
        ],
      },
      {
        title: "2D grid layout",
        items: [
          "*int g[2][3] = { {1,2,3}, {4,5,6} };*",
          "*g[0][2]* = **3**, *g[1][0]* = **4**.",
          "Stored in memory as: **1 2 3 4 5 6** (row-major).",
        ],
      },
    ],
    exercises: [
      {
        problem: "Read 10 integers into an array, then print them in REVERSE order.",
        solution: `#include <stdio.h>
int main(void) {
    int a[10];
    for (int i = 0; i < 10; i++) scanf("%d", &a[i]);
    for (int i = 9; i >= 0; i--) printf("%d ", a[i]);
    printf("\\n");
    return 0;
}`,
      },
      {
        problem: "Find the maximum and minimum element of an int array of size N.",
        solution: `#include <stdio.h>
int main(void) {
    int n, a[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &a[i]);

    int mx = a[0], mn = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > mx) mx = a[i];
        if (a[i] < mn) mn = a[i];
    }
    printf("max = %d, min = %d\\n", mx, mn);
    return 0;
}`,
      },
      {
        problem: "Sort an array of 5 integers in ascending order using bubble sort.",
        solution: `#include <stdio.h>
int main(void) {
    int a[5];
    for (int i = 0; i < 5; i++) scanf("%d", &a[i]);

    for (int i = 0; i < 4; i++)
        for (int j = 0; j < 4 - i; j++)
            if (a[j] > a[j+1]) {
                int t = a[j]; a[j] = a[j+1]; a[j+1] = t;
            }

    for (int i = 0; i < 5; i++) printf("%d ", a[i]);
    printf("\\n");
    return 0;
}`,
      },
      {
        problem: "Read a string and count the number of vowels in it.",
        solution: `#include <stdio.h>
#include <string.h>

int main(void) {
    char s[100];
    scanf("%99s", s);          // safe width-limited read
    int v = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        char c = s[i];
        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||
            c=='A'||c=='E'||c=='I'||c=='O'||c=='U')
            v++;
    }
    printf("Vowels = %d\\n", v);
    return 0;
}`,
      },
      {
        problem: "Reverse a string in place (without using a second array).",
        solution: `#include <stdio.h>
#include <string.h>

int main(void) {
    char s[100];
    scanf("%99s", s);
    int n = strlen(s);
    for (int i = 0; i < n / 2; i++) {
        char t = s[i];
        s[i] = s[n-1-i];
        s[n-1-i] = t;
    }
    printf("%s\\n", s);
    return 0;
}
// "hello" -> "olleh"`,
      },
      {
        problem: "Add two 3x3 matrices and print the result.",
        solution: `#include <stdio.h>
int main(void) {
    int a[3][3], b[3][3], c[3][3];
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) scanf("%d", &a[i][j]);
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) scanf("%d", &b[i][j]);

    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) c[i][j] = a[i][j] + b[i][j];

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) printf("%4d", c[i][j]);
        printf("\\n");
    }
    return 0;
}`,
      },
    ],
  },
];
