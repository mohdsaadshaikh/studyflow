import type { Topic } from "@/content/types";

export const topics: Topic[] = [
  {
    id: "pf-lab-ch1",
    number: 1,
    title: "Chapter 1: Constants and I/O Programs",
    summary: "Lab programs demonstrating string constants, integer constants, and printf output formatting.",
    content: `## Program 1.1: Print Names and Ages

**Objective:** Print constant data using string and integer constants.

**Pseudocode:**
\`\`\`
ALGORITHM PrintNamesAndAges
BEGIN
    DECLARE string name1 ← "Mr. Green"
    DECLARE integer age1 ← 42
    DECLARE string name2 ← "Mr. Brown"
    DECLARE integer age2 ← 48
    
    OUTPUT name1 + " is " + age1 + ","
    OUTPUT name2 + " is " + age2 + "."
END
\`\`\`

**Flowchart:**
\`\`\`
           ┌──────────┐
           │  START   │
           └─────┬────┘
                 │
                 ▼
         ┌──────────────────┐
         │ PRINT "Mr. Green │
         │     is 42,"      │
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ PRINT "Mr. Brown │
         │     is 48."      │
         └────────┬─────────┘
                  │
                  ▼
           ┌──────────┐
           │   END    │
           └──────────┘
\`\`\`

**Flow Description:**
1. START: Program begins execution
2. INITIALIZE: Set up string and integer constants
3. PRINT FIRST: Output first person's name and age
4. PRINT SECOND: Output second person's name and age
5. END: Program terminates

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Mr. Green is 42,\\n");
    printf("Mr. Brown is 48.\\n");
    return 0;
}
\`\`\`

**Output:**
\`\`\`
Mr. Green is 42,
Mr. Brown is 48.
\`\`\`

---

## Program 1.2: Character Constants

**Objective:** Print specific letters using character constants.

**Pseudocode:**
\`\`\`
ALGORITHM PrintCharacterConstants
BEGIN
    DECLARE char a ← 'a'
    DECLARE char b ← 'b'
    DECLARE char c ← 'c'
    
    OUTPUT a, ", ", b, ", and ", c, " are all letters."
END
\`\`\`

**Flowchart:**
\`\`\`
           ┌──────────┐
           │  START   │
           └─────┬────┘
                 │
                 ▼
    ┌────────────────────────┐
    │ DECLARE char vars a, b,│
    │          c with values │
    └────────┬───────────────┘
             │
             ▼
   ┌──────────────────────┐
   │ OUTPUT: a, b, c and  │
   │ "are all letters"    │
   └────────┬─────────────┘
            │
            ▼
        ┌──────────┐
        │   END    │
        └──────────┘
\`\`\`

**Execution Steps:**
1. START: Initialize program
2. INITIALIZE: Assign character values to variables
   - a ← 'a'
   - b ← 'b'
   - c ← 'c'
3. OUTPUT: Print characters with format string
4. END: Program completes
\`\`\`c
#include <stdio.h>

int main(void) {
    char a = 'a', b = 'b', c = 'c';
    printf("%c, %c, and %c are all letters.\\n", a, b, c);
    return 0;
}
\`\`\`

**Output:**
\`\`\`
a, b, and c are all letters.
\`\`\`

**Key Concepts:**
- Character constants enclosed in single quotes: 'a', 'b', 'c'
- Format specifier %c for printing individual characters
- Combining multiple characters in one printf statement`,
    mcqs: [
      { q: "Character 'a' is enclosed in:", options: ["Double quotes", "Single quotes", "Parentheses", "Brackets"], answer: 1 },
      { q: "Format specifier for character is:", options: ["%d", "%c", "%s", "%f"], answer: 1 },
      { q: "Which is NOT a valid character constant?", options: ["'a'", "'Z'", "'5'", "a"], answer: 3 },
      { q: "Output of printf(\"A\\\\n\") is:", options: ["A newline", "A\\\\n", "Just A", "Compile error"], answer: 2 },
      { q: "String constants are enclosed in:", options: ["Single quotes", "Double quotes", "Braces", "Brackets"], answer: 1 },
      { q: "Escape sequence \\\\n represents:", options: ["Null", "Newline", "Number", "Name"], answer: 1 },
      { q: "printf requires which header?", options: ["stdlib.h", "string.h", "stdio.h", "math.h"], answer: 2 },
      { q: "Integer constant 42 is a type:", options: ["Variable", "Literal", "Function", "Array"], answer: 1 },
      { q: "printf(\"A\", 'A') prints:", options: ["A, A", "A", "Error", "'A'"], answer: 1 },
      { q: "Multiple format specifiers in printf must match:", options: ["Variable types", "Argument count and types", "Nothing", "Semicolons"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Character constants use ___ quotes.", answer: "single" },
      { q: "String constants use ___ quotes.", answer: "double" },
      { q: "The ___ function outputs formatted text.", answer: "printf" },
      { q: "Escape sequence ___ represents a newline.", answer: "\\n" },
      { q: "Format specifier ___ is used for integers.", answer: "%d" },
      { q: "Format specifier ___ is used for strings.", answer: "%s" },
    ],
    trueFalse: [
      { q: "Character constants and string constants use the same quote types.", answer: false },
      { q: "42 is a string constant.", answer: false },
      { q: "'hello' is a valid character constant.", answer: false },
      { q: "printf requires a semicolon at the end.", answer: true },
      { q: "Escape sequences start with a backslash.", answer: true },
      { q: "Format specifiers begin with %.", answer: true },
    ],
    flashcards: [
      { front: "Character constant", back: "Single character in single quotes: 'A'" },
      { front: "String constant", back: "Multiple characters in double quotes: \"Hello\"" },
      { front: "Escape sequence", back: "Special character starting with backslash: \\n, \\t" },
      { front: "Format specifier", back: "Placeholder for printf: %d (int), %c (char), %s (string)" },
      { front: "printf", back: "Function to print formatted output to console" },
    ],
    examples: [
      {
        title: "Multiple characters output",
        items: [
          "printf(\"%c %c %c\", 'X', 'Y', 'Z');",
          "Output: X Y Z",
          "Each %c replaced by corresponding argument",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a program that prints 5 lines with different character constants on each line.",
        solution: `#include <stdio.h>

int main(void) {
    printf("%c\\n", 'A');
    printf("%c\\n", 'B');
    printf("%c\\n", 'C');
    printf("%c\\n", 'D');
    printf("%c\\n", 'E');
    return 0;
}`,
      },
      {
        problem: "Create a program that prints your name using individual character constants.",
        solution: `#include <stdio.h>

int main(void) {
    printf("%c%c%c%c%c\\n", 'A', 'l', 'i', 'K', 'h');
    return 0;
}
// Output: AliKh`,
      },
    ],
  },

  {
    id: "pf-lab-ch2",
    number: 2,
    title: "Chapter 2: Variables and Input Programs",
    summary: "Programs demonstrating variable declarations, input with scanf, floating point calculations, and basic output formatting.",
    content: `## Program 2.1: Square of a Number

**Objective:** Read a number from user and print its square using floating point.

**Pseudocode:**
\`\`\`
ALGORITHM CalculateSquare
BEGIN
    DECLARE float n
    DECLARE float square
    
    OUTPUT "Enter a number: "
    INPUT n
    
    square ← n * n
    
    OUTPUT "Square = " + square (formatted to 2 decimals)
    RETURN 0
END
\`\`\`

**Flowchart:**
\`\`\`
         ┌──────────┐
         │  START   │
         └────┬─────┘
              │
              ▼
    ┌─────────────────────┐
    │  DECLARE float n,   │
    │  DECLARE float sq   │
    └────────┬────────────┘
             │
             ▼
    ┌────────────────────────┐
    │ PRINT "Enter number: " │
    └────────┬───────────────┘
             │
             ▼
    ┌────────────────────┐
    │ INPUT: Read value  │
    │ into variable n    │
    └────────┬───────────┘
             │
             ▼
    ┌────────────────────┐
    │ CALCULATE: square  │
    │   = n * n          │
    └────────┬───────────┘
             │
             ▼
    ┌────────────────────────┐
    │ PRINT "Square = " +    │
    │ square (%.2f format)   │
    └────────┬───────────────┘
             │
             ▼
         ┌──────────┐
         │   END    │
         └──────────┘
\`\`\`

**Process Steps:**
1. START: Begin program execution
2. DECLARE: Reserve memory for input and result
3. PROMPT: Display input message
4. READ: Accept number from keyboard
5. CALCULATE: Multiply number by itself
6. DISPLAY: Show result with formatting
7. END: Terminate program

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    float n, square;
    printf("Enter a number: ");
    scanf("%f", &n);
    square = n * n;
    printf("Square = %.2f\\n", square);
    return 0;
}
\`\`\`

**Output Example:**
\`\`\`
Enter a number: 5.5
Square = 30.25
\`\`\`

**Key Points:**
- scanf uses %f for floats and requires & before variable name
- Format specifier %.2f limits output to 2 decimal places
- Variable assignment with = operator

---

## Program 2.2: Box Drawing

**Objective:** Draw a 4×4 box with asterisks using nested loops.

**Pseudocode:**
\`\`\`
START
FOR row = 1 TO 4
    FOR column = 1 TO 4
        PRINT "*"
    END FOR
    PRINT newline
END FOR
END
\`\`\`

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int width = 4, height = 4;
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++)
            printf("*");
        printf("\\n");
    }
    return 0;
}
\`\`\`

**Output:**
\`\`\`
****
****
****
****
\`\`\`

**Learning Points:**
- Variable declaration and initialization
- Nested loops for 2D patterns
- Printf for formatting output`,
    mcqs: [
      { q: "scanf requires ___ before variable name.", options: ["*", "&", "#", "@"], answer: 1 },
      { q: "Format specifier for float is:", options: ["%d", "%f", "%s", "%c"], answer: 1 },
      { q: "%.2f limits decimal places to:", options: ["0", "1", "2", "3"], answer: 2 },
      { q: "Nested loops execute body ___ for each outer iteration.", options: ["Once", "All inner times", "Zero times", "Depends on input"], answer: 1 },
      { q: "Variable declaration reserves:", options: ["CPU time", "Memory", "Hard disk", "Cache"], answer: 1 },
      { q: "The = operator is:", options: ["Comparison", "Assignment", "Addition", "Division"], answer: 1 },
      { q: "scanf(\"%f\", x) is WRONG because:", options: ["No format", "Missing &", "Wrong type", "Syntax error"], answer: 1 },
      { q: "4x4 box requires loops with ranges:", options: ["0-3 both", "1-4 both", "Either", "Depends"], answer: 2 },
      { q: "printf(\"%.2f\", 3.14159) prints:", options: ["3.14159", "3.14", "3.1", "3"], answer: 1 },
      { q: "In nested loops, inner loop completes ___ times per outer:", options: ["Once", "Never", "Completely", "Partially"], answer: 2 },
    ],
    fillBlanks: [
      { q: "Variable ___ gives a starting value to a variable.", answer: "initialization" },
      { q: "Function ___ reads formatted input from keyboard.", answer: "scanf" },
      { q: "The symbol ___ must precede variable names in scanf.", answer: "&" },
      { q: "Nested loops have ___ levels of indentation.", answer: "multiple" },
      { q: "Format %.2f limits to ___ decimal places.", answer: "2" },
      { q: "The ___ loop repeats a block of code multiple times.", answer: "for" },
    ],
    trueFalse: [
      { q: "scanf needs the & operator before variable names.", answer: true },
      { q: "printf and scanf use the same format specifiers.", answer: true },
      { q: "A 4×4 box can be drawn with nested loops.", answer: true },
      { q: "Variables must be initialized on declaration.", answer: false },
      { q: "%.2f means 2 significant figures.", answer: false },
      { q: "Nested loops can have any depth.", answer: true },
    ],
    flashcards: [
      { front: "scanf", back: "Reads formatted input; needs & before variable" },
      { front: "%f", back: "Format specifier for float/double" },
      { front: "%.2f", back: "Float with 2 decimal places" },
      { front: "Nested loop", back: "Loop inside another loop" },
      { front: "&", back: "Address-of operator used with scanf" },
      { front: "Variable", back: "Named memory location storing a value" },
    ],
    examples: [
      {
        title: "Reading and squaring",
        items: [
          "Read 7.5",
          "Calculate: 7.5 × 7.5 = 56.25",
          "Print: Square = 56.25",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a program that reads a float and prints its cube (x³).",
        solution: `#include <stdio.h>

int main(void) {
    float n, cube;
    printf("Enter a number: ");
    scanf("%f", &n);
    cube = n * n * n;
    printf("Cube = %.2f\\n", cube);
    return 0;
}`,
      },
      {
        problem: "Create a 5×5 box using nested loops.",
        solution: `#include <stdio.h>

int main(void) {
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++)
            printf("*");
        printf("\\n");
    }
    return 0;
}`,
      },
    ],
  },

  {
    id: "pf-lab-ch3",
    number: 3,
    title: "Chapter 3: Loops Programs",
    summary: "Lab programs featuring for loops, while loops, character input, and sequence generation.",
    content: `## Program 3.1: Squares of Numbers 1 to 20

**Objective:** Print squares of all numbers from 1 to 20 in a formatted table.

**Pseudocode:**
\`\`\`
START
FOR i = 1 TO 20
    SET square = i * i
    PRINT i, square
END FOR
END
\`\`\`

**Flowchart:**
Start → i = 1 → i ≤ 20? → Print i and i² → i++ → Loop or End

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Number\\tSquare\\n");
    printf("------\\t------\\n");
    for (int i = 1; i <= 20; i++) {
        printf("%d\\t%d\\n", i, i * i);
    }
    return 0;
}
\`\`\`

**Output (First 5 rows):**
\`\`\`
Number  Square
------  ------
1       1
2       4
3       9
4       16
5       25
\`\`\`

---

## Program 3.2: Count Characters Until Period

**Objective:** Count characters typed until a period (.) is entered using do-while.

**Pseudocode:**
\`\`\`
START
SET count = 0
REPEAT
    READ character
    IF character ≠ '.' THEN
        INCREMENT count
    END IF
UNTIL character = '.'
PRINT count
END
\`\`\`

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int count = 0;
    char ch;
    printf("Enter characters (end with period): ");
    do {
        ch = getche();
        if (ch != '.') count++;
    } while (ch != '.');
    printf("\\nCharacters read = %d\\n", count);
    return 0;
}
\`\`\`

**Key Concepts:**
- for loop for counting iterations
- do-while guarantees at least one execution
- Character comparison with !=
- Conditional increment inside loop`,
    mcqs: [
      { q: "for(i=1; i<=20; i++) executes body ___ times.", options: ["19", "20", "21", "0"], answer: 1 },
      { q: "do-while executes body at least ___ times.", options: ["0", "1", "2", "Depends"], answer: 1 },
      { q: "Character comparison '.' != 'A' is:", options: ["true", "false", "Error", "Undefined"], answer: 0 },
      { q: "Format \\\\t in printf means:", options: ["Tab", "Text", "Time", "True"], answer: 0 },
      { q: "Loop counter typically starts at:", options: ["0", "1", "-1", "Varies"], answer: 0, explain: "Common convention, though both 0 and 1 are used." },
      { q: "sum = 1 + 2 + ... + 20 can use:", options: ["for loop", "while loop", "Both", "Neither"], answer: 2 },
      { q: "getche() reads and:", options: ["Discards input", "Echoes to screen", "Buffers input", "Skips whitespace"], answer: 1 },
      { q: "i++ in for loop:", options: ["Increments", "Is optional", "Before body", "After body"], answer: 3 },
      { q: "Table formatting uses:", options: ["Spaces", "Tabs (\\\\t)", "Both", "Neither"], answer: 2 },
      { q: "20² equals:", options: ["40", "200", "400", "200"], answer: 2 },
    ],
    fillBlanks: [
      { q: "The ___ loop counts from 1 to n automatically.", answer: "for" },
      { q: "The ____ loop runs at least once before testing.", answer: "do-while" },
      { q: "Character stored in variable type ___.", answer: "char" },
      { q: "Loop counter increments with ___ operator.", answer: "++" },
      { q: "Comparison operator for not-equal is ___.", answer: "!=" },
      { q: "Nested loops use ___ level of indentation.", answer: "multiple" },
    ],
    trueFalse: [
      { q: "for(i=1; i<=20; i++) prints 21 lines.", answer: false },
      { q: "do-while checks condition after body execution.", answer: true },
      { q: "i++a and ++i behave identically in for loops.", answer: true },
      { q: "getche() doesn't echo characters to screen.", answer: false },
      { q: "Character '.' has ASCII value 46.", answer: true },
      { q: "Tabs align output in fixed-width fonts.", answer: true },
    ],
    flashcards: [
      { front: "for loop", back: "Pre-tested loop with init, condition, update" },
      { front: "do-while", back: "Post-tested loop; runs at least once" },
      { front: "getche()", back: "Reads single character and echoes to screen" },
      { front: "i++", back: "Post-increment operator" },
      { front: "i <= 20", back: "Condition: loop while i is less than or equal to 20" },
      { front: "\\t", back: "Tab escape sequence for formatting" },
    ],
    examples: [
      {
        title: "Square table generation",
        items: [
          "i = 1: 1 × 1 = 1",
          "i = 2: 2 × 2 = 4",
          "... continues to 20",
          "i = 20: 20 × 20 = 400",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a program that prints cubes of 1 to 10.",
        solution: `#include <stdio.h>

int main(void) {
    printf("Number\\tCube\\n");
    for (int i = 1; i <= 10; i++) {
        printf("%d\\t%d\\n", i, i * i * i);
    }
    return 0;
}`,
      },
      {
        problem: "Create a program that counts characters until 'q' is entered.",
        solution: `#include <stdio.h>

int main(void) {
    int count = 0;
    char ch;
    printf("Enter characters (end with q): ");
    do {
        ch = getche();
        if (ch != 'q') count++;
    } while (ch != 'q');
    printf("\\nCharacters: %d\\n", count);
    return 0;
}`,
      },
    ],
  },

  {
    id: "pf-lab-ch4",
    number: 4,
    title: "Chapter 4: Decisions Programs",
    summary: "Programs demonstrating if-else statements, nested conditionals, logical operators, and decision-making logic.",
    content: `## Program 4.1: Speed Checker with Nested If

**Objective:** Given a speed in km/h, print appropriate response using nested if-else.

**Pseudocode:**
\`\`\`
START
READ speed
IF speed > 75 THEN
    PRINT "Very excessive speeding"
ELSE IF speed > 55 THEN
    PRINT "Excessive speeding"
ELSE IF speed > 45 THEN
    PRINT "Moderate speeding"
ELSE
    PRINT "Acceptable speed"
END IF
END
\`\`\`

**Flowchart:**
Start → Read speed → speed > 75? → (Yes: "Very excessive") → (No: speed > 55?) → (Yes: "Excessive") → (No: speed > 45?) → (Yes: "Moderate") → (No: "Acceptable") → End

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int speed;
    printf("Enter speed (km/h): ");
    scanf("%d", &speed);
    
    if (speed > 75)
        printf("Very excessive speeding!\\n");
    else if (speed > 55)
        printf("Excessive speeding.\\n");
    else if (speed > 45)
        printf("Moderate speeding.\\n");
    else
        printf("Acceptable speed.\\n");
    
    return 0;
}
\`\`\`

**Learning Points:**
- Comparison operators: >, <, >=, <=, ==, !=
- else-if chains for multiple conditions
- Nested logic without multiple if statements
- Precedence of conditions matters`,
    mcqs: [
      { q: "if-else executes:", options: ["Both branches", "One branch", "No branch", "Depends on input"], answer: 1 },
      { q: "else-if chain stops at:", options: ["Last condition", "First true condition", "All conditions", "Never"], answer: 1 },
      { q: "Comparison > is:", options: ["Assignment", "Relational", "Logical", "Arithmetic"], answer: 1 },
      { q: "Nesting if-else:", options: ["Not allowed", "Allowed", "Requires loop", "Causes error"], answer: 1 },
      { q: "In speed > 75: 75 means speed must be:", options: ["Exactly 75", "At least 75", "More than 75", "Less than 75"], answer: 2 },
      { q: "Multiple conditions require:", options: ["&&", "||", "Either", "Both"], answer: 2 },
      { q: "else clause matches the:", options: ["First if", "Nearest unmatched if", "Last if", "All ifs"], answer: 1 },
      { q: "if (0) executes:", options: ["Always", "Never", "Sometimes", "Error"], answer: 1 },
      { q: "if (1) executes:", options: ["Always", "Never", "Sometimes", "Error"], answer: 0 },
      { q: "&&  operator means:", options: ["OR", "AND", "NOT", "XOR"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The ___ keyword introduces a condition.", answer: "if" },
      { q: "The ___ keyword provides alternative execution.", answer: "else" },
      { q: "Relational operator ___ means greater than.", answer: ">" },
      { q: "Logical AND operator is ___.", answer: "&&" },
      { q: "Logical OR operator is ___.", answer: "||" },
      { q: "Logical NOT operator is ___.", answer: "!" },
    ],
    trueFalse: [
      { q: "An if without else is valid.", answer: true },
      { q: "Multiple else-ifs are allowed.", answer: true },
      { q: "Curly braces are always required for single statements.", answer: false },
      { q: "speed > 75 checks if speed is at least 75.", answer: false },
      { q: "Else clause must match the nearest unmatched if.", answer: true },
      { q: "&&  operator short-circuits in C.", answer: true },
    ],
    flashcards: [
      { front: "if", back: "Executes body if condition is true" },
      { front: "else", back: "Executes body if preceding if was false" },
      { front: "else-if", back: "Tests another condition if previous was false" },
      { front: ">", back: "Greater than operator" },
      { front: ">=", back: "Greater than or equal operator" },
      { front: "&&", back: "Logical AND - true if both conditions true" },
    ],
    examples: [
      {
        title: "Speed checking",
        items: [
          "Speed 80 → 'Very excessive speeding!'",
          "Speed 60 → 'Excessive speeding.'",
          "Speed 50 → 'Moderate speeding.'",
          "Speed 40 → 'Acceptable speed.'",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a program that reads a grade (0-100) and prints A (90+), B (80-89), C (70-79), D (60-69), F (<60).",
        solution: `#include <stdio.h>

int main(void) {
    int grade;
    scanf("%d", &grade);
    
    if (grade >= 90) printf("A\\n");
    else if (grade >= 80) printf("B\\n");
    else if (grade >= 70) printf("C\\n");
    else if (grade >= 60) printf("D\\n");
    else printf("F\\n");
    
    return 0;
}`,
      },
      {
        problem: "Create a program that determines if a number is positive, negative, or zero.",
        solution: `#include <stdio.h>

int main(void) {
    int n;
    scanf("%d", &n);
    
    if (n > 0) printf("Positive\\n");
    else if (n < 0) printf("Negative\\n");
    else printf("Zero\\n");
    
    return 0;
}`,
      },
    ],
  },

  {
    id: "pf-lab-ch5",
    number: 5,
    title: "Chapter 5: Functions Programs",
    summary: "Programs demonstrating function definitions, return values, parameters, and function calls.",
    content: `## Program 5.1: Find Larger of Two Numbers

**Objective:** Use a function to compare two numbers and return the larger.

**Pseudocode:**
\`\`\`
FUNCTION larger(a, b)
    IF a > b THEN
        RETURN a
    ELSE
        RETURN b
    END IF
END FUNCTION

START
READ two numbers
SET result = larger(num1, num2)
PRINT result
END
\`\`\`

**C Code:**
\`\`\`c
#include <stdio.h>

int larger(int a, int b) {
    if (a > b) return a;
    else return b;
}

int main(void) {
    int x, y;
    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);
    printf("Larger = %d\\n", larger(x, y));
    return 0;
}
\`\`\`

**Output Example:**
\`\`\`
Enter two numbers: 15 23
Larger = 23
\`\`\`

---

## Program 5.2: Time Conversion Function

**Objective:** Convert hours and minutes to total minutes using a function.

**Pseudocode:**
\`\`\`
FUNCTION toMinutes(hours, minutes)
    RETURN hours * 60 + minutes
END FUNCTION

START
READ hours, minutes
SET total = toMinutes(hours, minutes)
PRINT total
END
\`\`\`

**C Code:**
\`\`\`c
#include <stdio.h>

int toMinutes(int h, int m) {
    return h * 60 + m;
}

int main(void) {
    int h, m;
    printf("Enter hours and minutes: ");
    scanf("%d %d", &h, &m);
    printf("Total minutes = %d\\n", toMinutes(h, m));
    return 0;
}
\`\`\`

**Key Concepts:**
- Function definition with return type, name, and parameters
- Function call with arguments
- Return value sent back to caller
- Parameter passing by value`,
    mcqs: [
      { q: "Function return type indicates:", options: ["Parameter type", "Type of value returned", "Call location", "Error type"], answer: 1 },
      { q: "Parameters are ___ to a function.", options: ["Returned", "Received", "Printed", "Stored"], answer: 1 },
      { q: "Function void returns:", options: ["Zero", "Null", "Nothing", "Undefined"], answer: 2 },
      { q: "Function call larger(5, 3) passes:", options: ["Variables", "Copies of values", "Addresses", "References"], answer: 1 },
      { q: "return statement:", options: ["Continues function", "Exits function", "Repeats function", "Pauses function"], answer: 1 },
      { q: "Function must be ___ before main() call.", options: ["Defined", "Declared or defined", "Called", "Used"], answer: 1 },
      { q: "Multiple return statements:", options: ["Not allowed", "Allowed", "Error", "Ignored"], answer: 1 },
      { q: "toMinutes(2, 30) returns:", options: ["230", "2.30", "150", "32"], answer: 2 },
      { q: "Function name should be:", options: ["Lowercase", "Descriptive", "Any case", "Single letter"], answer: 1 },
      { q: "Prototype declares:", options: ["Function body", "Function signature", "Return value only", "Parameters only"], answer: 1 },
    ],
    fillBlanks: [
      { q: "A ___ is a reusable block of code.", answer: "function" },
      { q: "The ___ statement sends value back from function.", answer: "return" },
      { q: "Function ___ tells compiler about the function.", answer: "prototype" },
      { q: "Arguments passed to function are received as ___.", answer: "parameters" },
      { q: "void return type means function returns ___.", answer: "nothing" },
      { q: "Functions improve code ___ and maintainability.", answer: "reusability" },
    ],
    trueFalse: [
      { q: "A function must have a return statement.", answer: false },
      { q: "main() is a function.", answer: true },
      { q: "Functions improve code organization.", answer: true },
      { q: "Pass by value creates a copy of the argument.", answer: true },
      { q: "Functions must be defined before main().", answer: false, explain: "They can be declared (prototype) before and defined after." },
      { q: "A function can have multiple return statements.", answer: true },
    ],
    flashcards: [
      { front: "Function", back: "Reusable named block of code" },
      { front: "Parameter", back: "Variable in function definition" },
      { front: "Argument", back: "Value passed to function" },
      { front: "Return type", back: "Type of value function sends back" },
      { front: "return", back: "Statement that exits function and sends value" },
      { front: "Prototype", back: "Declaration of function before use" },
    ],
    examples: [
      {
        title: "Function call with result",
        items: [
          "larger(10, 7) → returns 10",
          "larger(3, 8) → returns 8",
          "Result printed or used in expression",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a function that returns the absolute value of an integer.",
        solution: `#include <stdio.h>

int absolute(int x) {
    if (x < 0) return -x;
    else return x;
}

int main(void) {
    printf("%d\\n", absolute(-5));   // 5
    printf("%d\\n", absolute(10));   // 10
    return 0;
}`,
      },
      {
        problem: "Create a function that calculates the area of a rectangle (length × width).",
        solution: `#include <stdio.h>

float rectangleArea(float length, float width) {
    return length * width;
}

int main(void) {
    float l, w;
    scanf("%f %f", &l, &w);
    printf("Area = %.2f\\n", rectangleArea(l, w));
    return 0;
}`,
      },
    ],
  },

  {
    id: "pf-lab-ch6",
    number: 6,
    title: "Chapter 6: Arrays and Processing",
    summary: "Programs demonstrating array declarations, initialization, processing, and multi-dimensional arrays.",
    content: `## Program 6.1: Average of Seven Temperatures

**Objective:** Read 7 temperatures, calculate average, and display all values read.

**Pseudocode:**
\`\`\`
START
DECLARE array temps[7]
SET sum = 0
FOR i = 0 TO 6
    READ temps[i]
    ADD temps[i] to sum
END FOR
SET average = sum / 7
PRINT "Temperatures read:"
FOR i = 0 TO 6
    PRINT temps[i]
END FOR
PRINT average
END
\`\`\`

**Flowchart:**
Start → Read 7 temps & accumulate sum → Calculate average → Display all temps → Display average → End

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    float temps[7], sum = 0.0f;
    
    printf("Enter 7 temperatures:\\n");
    for (int i = 0; i < 7; i++) {
        scanf("%f", &temps[i]);
        sum += temps[i];
    }
    
    printf("\\nTemperatures read:\\n");
    for (int i = 0; i < 7; i++)
        printf("%.1f ", temps[i]);
    
    printf("\\nAverage = %.2f\\n", sum / 7);
    return 0;
}
\`\`\`

**Output Example:**
\`\`\`
Enter 7 temperatures:
25.5 26.0 24.8 25.2 26.5 25.0 26.1
Temperatures read:
25.5 26.0 24.8 25.2 26.5 25.0 26.1
Average = 25.44
\`\`\`

**Key Concepts:**
- Array declaration: type name[size]
- Array indexing from 0 to size-1
- Loop through array elements
- Accumulating values with +=`,
    mcqs: [
      { q: "Array int a[7] holds:", options: ["6 elements", "7 elements", "8 elements", "Varies"], answer: 1 },
      { q: "First array element index:", options: ["1", "0", "-1", "Undefined"], answer: 1 },
      { q: "Array a[5] last valid index:", options: ["4", "5", "6", "a.length"], answer: 0 },
      { q: "Array bounds checking in C:", options: ["Always", "Sometimes", "Never", "Optional"], answer: 2 },
      { q: "String in C is:", options: ["char array", "Special type", "Pointer", "Structure"], answer: 0 },
      { q: "Arrays passed to functions:", options: ["By value", "By reference (address)", "Copied", "Neither"], answer: 1 },
      { q: "2D array int a[3][4] holds:", options: ["3 elements", "4 elements", "12 elements", "7 elements"], answer: 2 },
      { q: "sizeof(int a[5]) typically equals:", options: ["5", "10", "20", "Depends on compiler"], answer: 2, explain: "Assuming 4-byte int." },
      { q: "Array name a is:", options: ["A variable", "An address", "A value", "A function"], answer: 1 },
      { q: "Buffer overflow means:", options: ["Writing outside array", "Reading outside array", "Array is full", "Program crashes"], answer: 0 },
    ],
    fillBlanks: [
      { q: "Array indices start at ___.", answer: "0" },
      { q: "Last index of a[10] is ___.", answer: "9" },
      { q: "A ___ is a fixed-size collection of same-type elements.", answer: "array" },
      { q: "C does ___ bounds checking on arrays.", answer: "not", alt: ["no"] },
      { q: "Strings are ___ arrays of char.", answer: "null-terminated" },
      { q: "2D arrays are stored in ___ order.", answer: "row-major" },
    ],
    trueFalse: [
      { q: "Array indices start at 1.", answer: false },
      { q: "C prevents writing past array end.", answer: false },
      { q: "int a[5] allocates space for exactly 5 integers.", answer: true },
      { q: "Array name refers to first element's address.", answer: true },
      { q: "Strings are null-terminated in C.", answer: true },
      { q: "Arrays can contain mixed types.", answer: false },
    ],
    flashcards: [
      { front: "Array", back: "Fixed-size sequence of same-type values" },
      { front: "Index", back: "Position of element in array (0-based)" },
      { front: "Bounds", back: "Valid range of array indices" },
      { front: "Buffer overflow", back: "Writing past end of array" },
      { front: "String", back: "char array terminated by \\0" },
      { front: "2D array", back: "Array of arrays (rows × columns)" },
    ],
    examples: [
      {
        title: "Array averaging",
        items: [
          "Array: [25.5, 26.0, 24.8, 25.2, 26.5, 25.0, 26.1]",
          "Sum: 178.1",
          "Average: 178.1 / 7 = 25.44",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a program that reads 5 integers and finds the maximum element.",
        solution: `#include <stdio.h>

int main(void) {
    int a[5], max;
    for (int i = 0; i < 5; i++) scanf("%d", &a[i]);
    
    max = a[0];
    for (int i = 1; i < 5; i++)
        if (a[i] > max) max = a[i];
    
    printf("Maximum = %d\\n", max);
    return 0;
}`,
      },
      {
        problem: "Create a program that reverses a 5-element array and prints it.",
        solution: `#include <stdio.h>

int main(void) {
    int a[5];
    for (int i = 0; i < 5; i++) scanf("%d", &a[i]);
    
    for (int i = 4; i >= 0; i--)
        printf("%d ", a[i]);
    printf("\\n");
    
    return 0;
}`,
      },
    ],
  },

  {
    id: "pf-lab-assign1",
    number: 7,
    title: "Assignment 1: Time and Basic Arithmetic",
    summary: "Complete programs for time conversions, arithmetic operations, and unit conversions.",
    content: `## Assignment 1.1: Hours and Minutes to Minutes

**Objective:** Convert user-entered hours and minutes to total minutes.

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int hours, minutes, total;
    printf("Input hours: ");
    scanf("%d", &hours);
    printf("Input minutes: ");
    scanf("%d", &minutes);
    total = hours * 60 + minutes;
    printf("Total: %d minutes.\\n", total);
    return 0;
}
\`\`\`

**Expected Output:**
\`\`\`
Input hours: 5
Input minutes: 37
Total: 337 minutes.
\`\`\`

---

## Assignment 1.2: Minutes to Hours and Minutes

**Objective:** Convert total minutes to hours and minutes format.

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int total, hours, minutes;
    printf("Input minutes: ");
    scanf("%d", &total);
    hours = total / 60;
    minutes = total % 60;
    printf("%d Hours, %d Minutes\\n", hours, minutes);
    return 0;
}
\`\`\`

**Expected Output:**
\`\`\`
Input minutes: 546
9 Hours, 6 Minutes
\`\`\`

---

## Assignment 1.3: Sum of Three Numbers

**Objective:** Read three numbers in one line and calculate their sum.

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int a, b, c, sum;
    printf("Input three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    sum = a + b + c;
    printf("The sum of three numbers: %d\\n", sum);
    return 0;
}
\`\`\`

**Key Concepts:**
- Multiple scanf inputs in one statement
- Three-variable arithmetic
- Formatted output with printf`,
    mcqs: [
      { q: "5 hours 37 minutes = ___ minutes.", options: ["335", "336", "337", "338"], answer: 2 },
      { q: "546 minutes = ___ hours ___ minutes.", options: ["8:6", "9:6", "10:6", "7:26"], answer: 1 },
      { q: "Conversion formula: total_min = hours * ___ + minutes.", options: ["24", "60", "3600", "100"], answer: 1 },
      { q: "scanf(\"%d %d %d\", &a, &b, &c) reads:", options: ["One number", "Three numbers", "Three times", "None"], answer: 1 },
      { q: "The sum 5 + 10 + 15 equals:", options: ["25", "30", "35", "40"], answer: 1 },
      { q: "546 / 60 using integer division gives:", options: ["8", "9", "10", "11"], answer: 1 },
      { q: "546 % 60 using modulus gives:", options: ["6", "8", "46", "54"], answer: 0 },
      { q: "Expression hours * 60 calculates:", options: ["Seconds", "Minutes", "Hours", "Days"], answer: 1 },
      { q: "Output format \\\"...\\n\\\" includes:", options: ["Newline", "Tab", "Space", "Nothing"], answer: 0 },
      { q: "Reading input requires the ___ function.", options: ["printf", "scanf", "getchar", "puts"], answer: 1 },
    ],
    fillBlanks: [
      { q: "1 hour = ___ minutes.", answer: "60" },
      { q: "1 minute = ___ seconds.", answer: "60" },
      { q: "1 day = ___ hours.", answer: "24" },
      { q: "Expression total / 60 gives the ___ part.", answer: "hours" },
      { q: "Expression total % 60 gives the ___ part.", answer: "minutes" },
      { q: "Multiple variables read with scanf are separated by ___.", answer: "space" },
    ],
    trueFalse: [
      { q: "5 hours 37 minutes equals 337 minutes.", answer: true },
      { q: "546 minutes equals 9 hours 6 minutes.", answer: true },
      { q: "Integer division truncates toward infinity.", answer: false },
      { q: "The modulus operator % returns the quotient.", answer: false },
      { q: "Three numbers can be read in one scanf call.", answer: true },
      { q: "printf uses %% to print a percent sign.", answer: true },
    ],
    flashcards: [
      { front: "Time Conversion", back: "total_minutes = hours * 60 + minutes" },
      { front: "Reverse Conversion", back: "hours = total / 60; minutes = total % 60" },
      { front: "Three inputs", back: "scanf(\"%d %d %d\", &a, &b, &c);" },
      { front: "Sum formula", back: "sum = a + b + c;" },
      { front: "546 minutes", back: "9 hours and 6 minutes" },
      { front: "%d", back: "Format specifier for integer" },
    ],
    examples: [
      {
        title: "Hour conversion example",
        items: [
          "Input: 5 hours, 37 minutes",
          "Calculation: 5 × 60 + 37 = 337",
          "Output: 337 minutes",
        ],
      },
      {
        title: "Reverse conversion",
        items: [
          "Input: 546 minutes",
          "Hours: 546 ÷ 60 = 9",
          "Minutes: 546 % 60 = 6",
          "Output: 9 Hours, 6 Minutes",
        ],
      },
    ],
    exercises: [
      {
        problem: "Modify Assignment 1.1 to also print total seconds.",
        solution: `#include <stdio.h>

int main(void) {
    int hours, minutes;
    printf("Input hours: ");
    scanf("%d", &hours);
    printf("Input minutes: ");
    scanf("%d", &minutes);
    
    int total_min = hours * 60 + minutes;
    int total_sec = total_min * 60;
    
    printf("Total: %d minutes.\\n", total_min);
    printf("Total: %d seconds.\\n", total_sec);
    return 0;
}`,
      },
      {
        problem: "Create a program that reads age in years and prints it in months.",
        solution: `#include <stdio.h>

int main(void) {
    int years;
    printf("Input your Age in years: ");
    scanf("%d", &years);
    printf("Total months in your age: %d\\n", years * 12);
    return 0;
}`,
      },
    ],
  },

  {
    id: "pf-lab-assign2",
    number: 8,
    title: "Assignment 2: Arithmetic Operations and Conversions",
    summary: "Complete programs for arithmetic calculations, conversions, swapping, and character processing.",
    content: `## Assignment 2.1: Arithmetic on Two Numbers

**Objective:** Perform all basic arithmetic operations on two input numbers.

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int a, b;
    printf("Input any two numbers: ");
    scanf("%d %d", &a, &b);
    printf("The sum of the given numbers: %d\\n", a + b);
    printf("The difference of the given numbers: %d\\n", a - b);
    printf("The product of the given numbers: %d\\n", a * b);
    printf("The quotient of the given numbers: %f\\n", (float)a / b);
    return 0;
}
\`\`\`

---

## Assignment 2.2: Quotient and Remainder

**Objective:** Calculate both quotient and remainder of a division operation.

**C Code:**
\`\`\`c
#include <stdio.h>

int main(void) {
    int num, denom, q, r;
    printf("Input numerator: ");
    scanf("%d", &num);
    printf("Input denominator: ");
    scanf("%d", &denom);
    q = num / denom;
    r = num % denom;
    printf("quotient %d, remainder %d\\n", q, r);
    return 0;
}
\`\`\`

---

## Assignment 2.3-2.10: Additional Programs

### 2.3: Absolute Values
**Objective:** Print absolute values using labs() function.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n1, n2;
    printf("Input 1st number: ");
    scanf("%d", &n1);
    printf("Input 2nd number: ");
    scanf("%d", &n2);
    printf("Absolute value of %d: %ld\\n", n1, labs((long)n1));
    printf("Absolute value of %d: %ld\\n", n2, labs((long)n2));
    return 0;
}
\`\`\`

### 2.4: Swap Variables (Without Third Variable)
\`\`\`c
#include <stdio.h>

int main(void) {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    printf("Before: a = %d, b = %d\\n", a, b);
    
    a = a + b;      // a now holds sum
    b = a - b;      // b = original a
    a = a - b;      // a = original b
    
    printf("After: a = %d, b = %d\\n", a, b);
    return 0;
}
\`\`\`

### 2.5: Feet to Meters Conversion
\`\`\`c
#include <stdio.h>

int main(void) {
    float feet, meters;
    printf("Enter distance in feet: ");
    scanf("%f", &feet);
    meters = feet / 3.2808399f;
    printf("%.2f feet = %.2f meters\\n", feet, meters);
    return 0;
}
\`\`\`

### 2.6: Days to Years, Weeks, Days
\`\`\`c
#include <stdio.h>

int main(void) {
    int days, years, weeks, remaining;
    printf("Enter total days: ");
    scanf("%d", &days);
    years = days / 365;
    days = days % 365;
    weeks = days / 7;
    remaining = days % 7;
    printf("%d years, %d weeks, %d days\\n", years, weeks, remaining);
    return 0;
}
\`\`\`

### 2.7: Check Odd or Even
\`\`\`c
#include <stdio.h>

int main(void) {
    int n;
    printf("Enter an integer: ");
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("%d is even (0)\\n", n);
    else
        printf("%d is odd (1)\\n", n);
    return 0;
}
\`\`\`

### 2.8: Reverse Characters
\`\`\`c
#include <stdio.h>

int main(void) {
    char c1, c2, c3;
    printf("Input three characters: ");
    scanf("%c %c %c", &c1, &c2, &c3);
    printf("Reverse of %c%c%c is %c%c%c\\n", c1, c2, c3, c3, c2, c1);
    return 0;
}
\`\`\`

### 2.9: ASCII Value of Character
\`\`\`c
#include <stdio.h>

int main(void) {
    char c;
    printf("Enter a character: ");
    scanf("%c", &c);
    printf("ASCII value of %c is: %d\\n", c, (int)c);
    return 0;
}
\`\`\`

### 2.10: Character from ASCII Value
\`\`\`c
#include <stdio.h>

int main(void) {
    int ascii;
    printf("Enter an ASCII value: ");
    scanf("%d", &ascii);
    printf("Character with ASCII %d is: %c\\n", ascii, (char)ascii);
    return 0;
}
\`\`\`

**Key Concepts Throughout:**
- Arithmetic operators: +, −, *, /, %
- Type casting: (float), (long), (char)
- Modulus for odd/even and remainders
- Character I/O and ASCII values`,
    mcqs: [
      { q: "Result of 10 / 3 in integer division:", options: ["3.33", "3", "4", "3.0"], answer: 1 },
      { q: "To get float result 7 / 2, cast as:", options: ["7 / 2.0", "(float)7 / 2", "Both", "Neither"], answer: 2 },
      { q: "Modulus a % b returns:", options: ["Quotient", "Remainder", "Division", "Product"], answer: 1 },
      { q: "Absolute value of -25 is:", options: ["-25", "25", "0", "Error"], answer: 1 },
      { q: "To check if n is even: n % 2 ==:", options: ["1", "0", "-1", "varies"], answer: 1 },
      { q: "labs() function header is:", options: ["stdio.h", "stdlib.h", "math.h", "string.h"], answer: 1 },
      { q: "3.2808399 feet = 1 ___.", options: ["inch", "yard", "meter", "mile"], answer: 2 },
      { q: "365 days ≈ 1 ___.", options: ["week", "month", "year", "decade"], answer: 2 },
      { q: "ASCII value of 'A' is:", options: ["65", "97", "48", "32"], answer: 0 },
      { q: "Swap using a=a+b; b=a-b; a=a-b works because:", options: ["Math magic", "a holds sum", "Variables used twice", "Order matters"], answer: 1 },
    ],
    fillBlanks: [
      { q: "10 + 5 = ___", answer: "15" },
      { q: "10 - 5 = ___", answer: "5" },
      { q: "10 * 5 = ___", answer: "50" },
      { q: "10 / 5 = ___", answer: "2" },
      { q: "10 % 3 = ___", answer: "1" },
      { q: "labs(-42) = ___", answer: "42" },
    ],
    trueFalse: [
      { q: "7 / 2 in integer division equals 3.5.", answer: false },
      { q: "Modulus works with negative numbers.", answer: true },
      { q: "Absolute value is always non-negative.", answer: true },
      { q: "1 meter ≈ 3.28 feet.", answer: true },
      { q: "ASCII 'A' = 65, 'a' = 97.", answer: true },
      { q: "Swap without temp requires arithmetic tricks.", answer: true },
    ],
    flashcards: [
      { front: "a / b", back: "Integer division (truncates)" },
      { front: "a % b", back: "Modulus - remainder of division" },
      { front: "a % 2 == 0", back: "Test if a is even" },
      { front: "a % 2 == 1", back: "Test if a is odd" },
      { front: "labs(x)", back: "Absolute value of long int" },
      { front: "fabs(x)", back: "Absolute value of float/double" },
    ],
    examples: [
      {
        title: "Arithmetic operations",
        items: [
          "Sum: 10 + 5 = 15",
          "Difference: 10 − 5 = 5",
          "Product: 10 × 5 = 50",
          "Quotient: 10 ÷ 5 = 2",
          "Remainder: 10 % 3 = 1",
        ],
      },
      {
        title: "Odd/Even check",
        items: [
          "15 % 2 = 1 (odd)",
          "20 % 2 = 0 (even)",
          "Test: if (n % 2 == 0) then even",
        ],
      },
    ],
    exercises: [
      {
        problem: "Write a program that reads two floats and performs all four basic operations.",
        solution: `#include <stdio.h>

int main(void) {
    float a, b;
    scanf("%f %f", &a, &b);
    printf("Sum: %.2f\\n", a + b);
    printf("Diff: %.2f\\n", a - b);
    printf("Prod: %.2f\\n", a * b);
    printf("Quot: %.2f\\n", a / b);
    return 0;
}`,
      },
      {
        problem: "Create a program to convert a temperature from Celsius to Fahrenheit (F = 9/5*C + 32).",
        solution: `#include <stdio.h>

int main(void) {
    float celsius, fahrenheit;
    printf("Enter Celsius: ");
    scanf("%f", &celsius);
    fahrenheit = (9.0f / 5.0f) * celsius + 32;
    printf("Fahrenheit: %.2f\\n", fahrenheit);
    return 0;
}`,
      },
    ],
  },
];
