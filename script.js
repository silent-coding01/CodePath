function searchTopic() {
    let searchBox = document.getElementById("topicSearch");
    let input = searchBox.value.toLowerCase().trim();
    let resultsPanel = document.getElementById("searchResults");

    // On pages without a results panel, use direct navigation.
    if (!resultsPanel) {
        if (input.includes("variable") || input.includes("data type") ||
            input.includes("datatype") || input.includes("scanf") ||
            input.includes("integer") || input.includes("float") ||
            input.includes("double") || input.includes("char")) {
            window.location.href = "chapter2.html";
        } else if (input.includes("introduction") ||
            input.includes("c programming") || input === "c" ||
            input.includes("compiler") || input.includes("printf") ||
            input.includes("programming language")) {
            window.location.href = "chapter1.html";
        } else {
            alert("Topic not found yet. Try C programming or variables.");
        }
        return;
    }

    if (input === "") {
        resultsPanel.innerHTML = "<p>Please enter a topic to search.</p>";
        resultsPanel.style.display = "block";
        return;
    }

    let topics = [
    {
        name: "Introduction to C Programming",
        keywords: ["introduction", "c programming", "compiler", "printf"],
        chapter: "Chapter 1",
        file: "chapter1.html",
        available: true
    },
    {
        name: "Variables and Data Types",
        keywords: ["variable", "data type", "datatype", "scanf", "integer", "float", "double", "char"],
        chapter: "Chapter 2",
        file: "chapter2.html",
        available: true
    },
    {
        name: "Operators in C",
        keywords: ["operator", "operators", "arithmetic", "relational", "logical"],
        chapter: "Chapter 3",
        file: "chapter3.html",
        available: true
    },
    {
        name: "Conditional Statements",
        keywords: ["if", "else", "switch", "condition"],
        chapter: "Chapter 4",
        file: "chapter4.html",
        available: true
    },
    {
        name: "Loops in C",
        keywords: ["loop", "loops", "for loop", "while loop", "do while"],
        chapter: "Chapter 5",
        file: "chapter5.html",
        available: true
    },
    {
        name: "Nested Loops and Patterns",
        keywords: ["nested loop", "patterns", "star pattern", "number pattern"],
        chapter: "Chapter 6",
        file: "chapter6.html",
        available: true
    },
    {
        name: "Arrays",
        keywords: ["array", "arrays", "1d array", "2d array", "multidimensional"],
        chapter: "Chapter 7",
        file: "chapter7.html",
        available: true
    },
    {
        name: "Strings",
        keywords: ["string", "strings", "strlen", "strcmp", "strcat", "character array"],
        chapter: "Chapter 8",
        file: "chapter8.html",
        available: true
    },
    {
        name: "Functions",
        keywords: ["function", "functions", "parameters", "return value"],
        chapter: "Chapter 9",
        file: "chapter9.html",
        available: true
    },
    {
        name: "Recursion",
        keywords: ["recursion", "recursive", "recursive function"],
        chapter: "Chapter 10",
        file: "chapter10.html",
        available: true
    },
    {
        name: "Pointers",
        keywords: ["pointer", "pointers", "address", "memory address"],
        chapter: "Chapter 11",
        file: "chapter11.html",
        available: true
    },
    {
        name: "Storage Classes and Scope",
        keywords: ["storage class", "scope", "static", "extern", "auto", "register"],
        chapter: "Chapter 12",
        file: "chapter12.html",
        available: true
    },
    {
        name: "Structures and Unions",
        keywords: ["structure", "structures", "struct", "union", "unions"],
        chapter: "Chapter 13",
        file: "chapter13.html",
        available: true
    },
    {
        name: "Enumerations and Typedef",
        keywords: ["enum", "enumeration", "typedef"],
        chapter: "Chapter 14",
        file: "chapter14.html",
        available: true
    },
    {
        name: "Dynamic Memory Allocation",
        keywords: ["dynamic memory", "memory allocation", "malloc", "calloc", "realloc", "free"],
        chapter: "Chapter 15",
        file: "chapter15.html",
        available: true
    },
    {
        name: "File Handling",
        keywords: ["file", "files", "file handling", "fopen", "fclose", "fprintf", "fscanf"],
        chapter: "Chapter 16",
        file: "chapter16.html",
        available: true
    },
    {
        name: "Preprocessor Directives",
        keywords: ["preprocessor", "directives", "#include", "#define", "macro", "macros"],
        chapter: "Chapter 17",
        file: "chapter17.html",
        available: true
    },
    {
        name: "Command-Line Arguments",
        keywords: ["command line", "command-line", "arguments", "argc", "argv"],
        chapter: "Chapter 18",
        file: "chapter18.html",
        available: true
    },
    {
        name: "Bitwise Operators",
        keywords: ["bitwise", "bit", "bits", "left shift", "right shift", "bitwise and", "bitwise or", "xor"],
        chapter: "Chapter 19",
        file: "chapter19.html",
        available: true
    }
];

    // A single "c" means the C programming course.
    let matches;

    if (input === "c") {
        matches = topics;
    } else {
        matches = topics.filter(topic =>
            topic.name.toLowerCase().includes(input) ||
            topic.keywords.some(keyword =>
                keyword.includes(input) || input.includes(keyword)
            )
        );
    }

    if (matches.length === 0) {
        resultsPanel.innerHTML =
            "<p>No matching topics found. Try variables, compiler, loops, arrays, functions, or pointers.</p>";
    } else {
        resultsPanel.innerHTML = matches.map(topic => {
    if (topic.available) {
        return `
            <div class="search-result">
                <a href="./${topic.file}" style="display:block; position:relative; z-index:10; cursor:pointer;">
                    ${topic.name}
                </a>
                <p>${topic.chapter} · Available</p>
            </div>
        `;
            } else {
                return `
                    <div class="search-result">
                        <strong>${topic.name}</strong>
                        <p>${topic.chapter} · Coming soon</p>
                    </div>
                `;
            }
        }).join("");
    }

    resultsPanel.style.display = "block";
}
// Search C programming chapters
function searchChapters() {
    const input = document.getElementById("chapterSearch");
    const filter = input.value.toLowerCase().trim();
    const chapters = document.querySelectorAll(".chapter-preview");
    const message = document.getElementById("searchMessage");

    let visibleCount = 0;

    chapters.forEach(function (chapter) {
        const text = chapter.textContent.toLowerCase();

        if (text.includes(filter)) {
            chapter.style.display = "";
            visibleCount++;
        } else {
            chapter.style.display = "none";
        }
    });

    if (visibleCount === 0) {
        message.textContent = "No chapters found. Try another keyword.";
    } else if (filter !== "") {
        message.textContent = visibleCount + " chapter(s) found.";
    } else {
        message.textContent = "";
    }
}
/* ===== Scroll Up and Down Buttons ===== */
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

if (scrollTopBtn && scrollBottomBtn) {
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    scrollBottomBtn.addEventListener("click", function () {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
}
/* ===== CodePath MCQ Quiz ===== */

const mcqQuestions = [
    // CHAPTER 1: INTRODUCTION TO C
    {
        chapter: 1,
        question: "Who developed the C programming language?",
        options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
        answer: 1,
        explanation: "Dennis Ritchie developed C at Bell Laboratories in the early 1970s."
    },
    {
        chapter: 1,
        question: "Which extension is commonly used for a C source file?",
        options: [".cpp", ".java", ".c", ".py"],
        answer: 2,
        explanation: "C source files commonly use the .c extension."
    },
    {
        chapter: 1,
        question: "Which header file is needed for printf()?",
        options: ["<string.h>", "<stdio.h>", "<math.h>", "<stdlib.h>"],
        answer: 1,
        explanation: "The standard input/output header, stdio.h, declares printf()."
    },
    {
        chapter: 1,
        question: "Which function is the usual entry point of a hosted C program?",
        options: ["start()", "run()", "main()", "printf()"],
        answer: 2,
        explanation: "In a hosted C program, execution begins at main()."
    },
    {
        chapter: 1,
        question: "Which symbol normally ends a C statement?",
        options: [":", ".", ";", ","],
        answer: 2,
        explanation: "A semicolon terminates most C statements."
    },

    // CHAPTER 2: VARIABLES AND DATA TYPES
    {
        chapter: 2,
        question: "Which data type is commonly used to store a whole number?",
        options: ["int", "char", "void", "double"],
        answer: 0,
        explanation: "The int type is used for integer values."
    },
    {
        chapter: 2,
        question: "Which format specifier is used with printf() to display an int?",
        options: ["%f", "%c", "%d", "%s"],
        answer: 2,
        explanation: "%d is commonly used to print an int value."
    },
    {
        chapter: 2,
        question: "Which declaration creates a variable named age that can store an integer?",
        options: ["age int;", "int age;", "integer age;", "age = int;"],
        answer: 1,
        explanation: "The type is written before the variable name: int age;."
    },
    {
        chapter: 2,
        question: "Which data type is intended to represent a single character?",
        options: ["char", "string", "word", "character"],
        answer: 0,
        explanation: "In C, char is used to store a character-sized value."
    },
    {
        chapter: 2,
        question: "Which operator assigns a value to a variable?",
        options: ["==", "=", "!=", ">"],
        answer: 1,
        explanation: "The single equals sign is the assignment operator."
    },
    {
        chapter: 2,
        question: "What is the value of x after int x = 5; x = x + 3;?",
        options: ["5", "3", "8", "15"],
        answer: 2,
        explanation: "The expression adds 3 to the original value 5, producing 8."
    },
    {
        chapter: 2,
        question: "Which is a valid C identifier?",
        options: ["2marks", "total-marks", "total_marks", "float"],
        answer: 2,
        explanation: "An identifier may contain underscores and cannot begin with a digit. float is a keyword."
    },

    // CHAPTER 3: OPERATORS IN C
    {
        chapter: 3,
        question: "What is the result of 10 / 3 when both operands are int?",
        options: ["3.33", "3", "4", "1"],
        answer: 1,
        explanation: "Integer division discards the fractional part, so the result is 3."
    },
    {
        chapter: 3,
        question: "Which operator finds the remainder of integer division?",
        options: ["/", "%", "*", "//"],
        answer: 1,
        explanation: "The % operator gives the remainder for integer operands."
    },
    {
        chapter: 3,
        question: "What is the value of 4 + 3 * 2?",
        options: ["14", "10", "11", "9"],
        answer: 1,
        explanation: "Multiplication has higher precedence than addition: 4 + 6 = 10."
    },
    {
        chapter: 3,
        question: "Which operator checks whether two values are equal?",
        options: ["=", "==", "<=", "!="],
        answer: 1,
        explanation: "The == operator tests equality; = performs assignment."
    },
    {
        chapter: 3,
        question: "What is the result of 7 % 4?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "Seven divided by four leaves a remainder of 3."
    },
    {
        chapter: 3,
        question: "Which logical operator means AND in C?",
        options: ["||", "!", "&&", "&"],
        answer: 2,
        explanation: "The && operator performs logical AND."
    },
    {
        chapter: 3,
        question: "What is the value of (5 > 2) in a C condition?",
        options: ["False", "True", "5", "2"],
        answer: 1,
        explanation: "The comparison is true because 5 is greater than 2. In C, a true comparison evaluates to 1."
    },

    // CHAPTER 4: CONDITIONAL STATEMENTS
    {
        chapter: 4,
        question: "Which statement runs code when a condition is true?",
        options: ["if", "for", "switch only", "return only"],
        answer: 0,
        explanation: "An if statement executes its controlled statement when its condition is nonzero."
    },
    {
        chapter: 4,
        question: "Which keyword provides an alternative branch when an if condition is false?",
        options: ["then", "otherwise", "else", "next"],
        answer: 2,
        explanation: "The else keyword introduces the alternative branch."
    },
    {
        chapter: 4,
        question: "Which statement is commonly used to select among multiple constant case labels?",
        options: ["while", "switch", "goto only", "continue"],
        answer: 1,
        explanation: "A switch statement selects a branch based on an integer-type expression or an applicable enumeration value."
    },
    {
        chapter: 4,
        question: "What is printed by this code? int x = 4; if (x > 2) printf(\"Yes\");",
        options: ["No", "Yes", "4", "Nothing"],
        answer: 1,
        explanation: "The condition x > 2 is true, so printf() displays Yes."
    },
    {
        chapter: 4,
        question: "Which operator means 'not equal to'?",
        options: ["==", "=", "!=", ">="],
        answer: 2,
        explanation: "The != operator tests whether two values are unequal."
    },
    
    // CHAPTER 5: LOOPS
    {
        chapter: 5,
        question: "Which loop is commonly used when the number of iterations is known?",
        options: ["if", "for", "switch", "return"],
        answer: 1,
        explanation: "A for loop is often convenient when initialization, condition, and update are known."
    },
    {
        chapter: 5,
        question: "What is printed by for(int i=1; i<=3; i++) printf(\"%d\", i);?",
        options: ["012", "123", "1234", "321"],
        answer: 1,
        explanation: "The loop prints 1, then 2, then 3."
    },
    {
        chapter: 5,
        question: "Which loop checks its condition after executing its body?",
        options: ["for", "while", "do-while", "None of these"],
        answer: 2,
        explanation: "A do-while loop evaluates its condition after the body, so the body runs at least once."
    },
    {
        chapter: 5,
        question: "What does break do inside a loop?",
        options: ["Skips one iteration only", "Terminates the nearest enclosing loop", "Restarts the loop", "Pauses the program"],
        answer: 1,
        explanation: "break exits the nearest enclosing loop or switch statement."
    },
    {
        chapter: 5,
        question: "What does continue do in a loop?",
        options: ["Ends the entire program", "Exits the function", "Skips to the next iteration", "Repeats the current statement forever"],
        answer: 2,
        explanation: "continue skips the remainder of the current loop iteration."
    },
    {
        chapter: 5,
        question: "How many times does for(i=0; i<5; i++) execute its body?",
        options: ["4", "5", "6", "Infinite times"],
        answer: 1,
        explanation: "The values of i are 0, 1, 2, 3, and 4: five iterations."
    },
    {
        chapter: 5,
        question: "What is the final value of sum after int sum=0; for(int i=1; i<=4; i++) sum+=i;?",
        options: ["4", "6", "10", "15"],
        answer: 2,
        explanation: "The sum is 1 + 2 + 3 + 4 = 10."
    },

    // CHAPTER 6: NESTED LOOPS AND PATTERNS
    {
        chapter: 6,
        question: "What is a nested loop?",
        options: ["A loop inside another loop", "A loop without a condition", "A function inside main", "A loop that never executes"],
        answer: 0,
        explanation: "A nested loop is a loop placed inside another loop."
    },
    {
        chapter: 6,
        question: "How many times does the inner statement execute in for(i=0;i<3;i++) for(j=0;j<2;j++) count++;?",
        options: ["3", "2", "5", "6"],
        answer: 3,
        explanation: "The inner loop runs twice for each of the three outer iterations: 3 × 2 = 6."
    },
    {
        chapter: 6,
        question: "Which loop is commonly used to control rows in a pattern?",
        options: ["The outer loop", "The innermost statement only", "A switch statement", "A return statement"],
        answer: 0,
        explanation: "In common nested-loop patterns, the outer loop controls rows and the inner loop controls items in each row."
    },
    {
        chapter: 6,
        question: "How many stars are printed by for(i=0;i<3;i++) for(j=0;j<4;j++) printf(\"*\");?",
        options: ["3", "4", "7", "12"],
        answer: 3,
        explanation: "Three outer iterations each print four stars, giving 12 stars."
    },
    {
        chapter: 6,
        question: "What is printed by for(i=1;i<=3;i++) { for(j=1;j<=i;j++) printf(\"*\"); printf(\"\\n\"); }?",
        options: ["Three rows containing 1, 2, and 3 stars", "Three rows of 3 stars each", "One row of 6 stars", "Three rows containing 3, 2, and 1 stars"],
        answer: 0,
        explanation: "The inner loop runs i times, producing rows with 1, then 2, then 3 stars."
    },

    // CHAPTER 7: ARRAYS
    {
        chapter: 7,
        question: "What is the first valid index of an array in C?",
        options: ["1", "-1", "0", "It depends on the array values"],
        answer: 2,
        explanation: "C arrays use zero-based indexing."
    },
    {
        chapter: 7,
        question: "How many elements are in int a[8];?",
        options: ["7", "8", "9", "Depends on the values"],
        answer: 1,
        explanation: "The declaration reserves space for eight int elements."
    },
    {
        chapter: 7,
        question: "For int a[5]={10,20,30,40,50}; what is a[2]?",
        options: ["10", "20", "30", "40"],
        answer: 2,
        explanation: "Index 2 refers to the third element, which is 30."
    },
    {
        chapter: 7,
        question: "Which declaration creates an array of 10 integers?",
        options: ["int a;", "int a(10);", "array int a[10];", "int a[10];"],
        answer: 3,
        explanation: "The declaration int a[10]; creates an array of ten integers."
    },
    {
        chapter: 7,
        question: "What is the value of a[0] after int a[4]={7,8,9,10};?",
        options: ["0", "7", "8", "10"],
        answer: 1,
        explanation: "The first initializer, 7, is stored at index 0."
    },
    {
        chapter: 7,
        question: "What is the usual consequence of accessing a[5] in int a[5];?",
        options: ["It always returns zero", "It automatically expands the array", "It is out-of-bounds and causes undefined behavior if evaluated", "It always causes a compile-time error"],
        answer: 2,
        explanation: "Valid indices are 0 through 4. Accessing index 5 is out of bounds and has undefined behavior."
    },
    {
        chapter: 7,
        question: "How can you calculate the number of elements in a local array int a[6]?",
        options: ["sizeof(a) / sizeof(a[0])", "sizeof(a[0]) / sizeof(a)", "strlen(a)", "sizeof(a) + sizeof(a[0])"],
        answer: 0,
        explanation: "For an actual array, sizeof(a) divided by sizeof(a[0]) gives its element count."
    },

    // CHAPTER 8: STRINGS
    {
        chapter: 8,
        question: "How are C strings terminated?",
        options: ["With a space", "With '\\n' only", "With the null character '\\0'", "With a semicolon"],
        answer: 2,
        explanation: "A C string is a character sequence ending with the null character."
    },
    {
        chapter: 8,
        question: "Which header declares strlen()?",
        options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<ctype.h>"],
        answer: 1,
        explanation: "strlen() is declared in string.h."
    },
    {
        chapter: 8,
        question: "What does strlen(\"CAT\") return?",
        options: ["2", "3", "4", "It depends on the compiler"],
        answer: 1,
        explanation: "strlen counts characters before the terminating null character, so the result is 3."
    },
    {
        chapter: 8,
        question: "Which function compares two strings?",
        options: ["strcat()", "strcpy()", "strlen()", "strcmp()"],
        answer: 3,
        explanation: "strcmp() compares two null-terminated strings."
    },
    {
        chapter: 8,
        question: "Which function appends one string to another?",
        options: ["strcat()", "strcmp()", "strlen()", "strchr()"],
        answer: 0,
        explanation: "strcat() appends the source string to the destination, which must have enough space."
    },
    {
        chapter: 8,
        question: "What is the purpose of fgets(name, sizeof name, stdin)?",
        options: ["It calculates string length", "It reads a line of text with a size limit", "It compares two strings", "It automatically removes every space"],
        answer: 1,
        explanation: "fgets() reads at most one fewer than the buffer size and adds a null terminator when successful."
    },

    // CHAPTER 9: FUNCTIONS
    {
        chapter: 9,
        question: "What is a function in C?",
        options: ["A named block of code that performs a task", "A type of array only", "A preprocessor symbol only", "A loop condition"],
        answer: 0,
        explanation: "Functions organize reusable code into named units."
    },
    {
        chapter: 9,
        question: "Which keyword indicates that a function returns no value?",
        options: ["null", "empty", "void", "none"],
        answer: 2,
        explanation: "A function declared with return type void does not return a value."
    },
    {
        chapter: 9,
        question: "Which statement sends a value back from a non-void function?",
        options: ["break", "return", "continue", "printf"],
        answer: 1,
        explanation: "return ends the function and can provide its result."
    },
    {
        chapter: 9,
        question: "What is a function parameter?",
        options: ["A variable listed in a function definition or declaration", "A header file", "A loop ending condition only", "The program's output"],
        answer: 0,
        explanation: "Parameters are named inputs through which a function receives values."
    },
    {
        chapter: 9,
        question: "In ordinary C function calls, how are int arguments passed?",
        options: ["By reference automatically", "By value", "Only through global variables", "They cannot be passed"],
        answer: 1,
        explanation: "C passes arguments by value. A pointer value can be passed when a function needs access to an object."
    },
    {
        chapter: 9,
        question: "What does int square(int x) { return x*x; } return when called as square(4)?",
        options: ["8", "12", "16", "4"],
        answer: 2,
        explanation: "The function multiplies 4 by itself, returning 16."
    },

    // CHAPTER 10: RECURSION
    {
        chapter: 10,
        question: "What is recursion?",
        options: ["A function calling itself", "A variable changing type", "An array inside a loop", "A program without main"],
        answer: 0,
        explanation: "A recursive function calls itself directly or indirectly."
    },
    {
        chapter: 10,
        question: "Why does a recursive function generally need a base case?",
        options: ["To print every variable", "To stop recursion when the problem is small enough", "To create an array", "To include a header file"],
        answer: 1,
        explanation: "A base case ends the recursive chain and prevents endless recursive calls for valid inputs."
    },
    {
        chapter: 10,
        question: "What does factorial(1) usually return in a factorial implementation?",
        options: ["0", "1", "2", "-1"],
        answer: 1,
        explanation: "Factorial definitions use 1! = 1 as a base case."
    },
    {
        chapter: 10,
        question: "What is the result of factorial(4), where factorial(n) = n * factorial(n-1) and factorial(1) = 1?",
        options: ["10", "16", "24", "12"],
        answer: 2,
        explanation: "4! = 4 × 3 × 2 × 1 = 24."
    },
    {
        chapter: 10,
        question: "What can happen if recursion continues too deeply?",
        options: ["The array always grows", "Stack exhaustion or stack overflow", "The compiler changes C to Python", "The program always returns zero"],
        answer: 1,
        explanation: "Deep recursion can exhaust the available call stack."
    },

    // CHAPTER 11: POINTERS
    {
        chapter: 11,
        question: "What does a pointer store?",
        options: ["Only a character", "A memory address or null pointer value", "Only a decimal number", "A function's printed output"],
        answer: 1,
        explanation: "A pointer can hold an address of an object or function of an appropriate type, or a null pointer value."
    },
    {
        chapter: 11,
        question: "Which operator obtains the address of an ordinary object?",
        options: ["*", "&", "%", "#"],
        answer: 1,
        explanation: "The unary & operator obtains an object's address when the operand permits it."
    },
    {
        chapter: 11,
        question: "Which operator dereferences a valid pointer to an object?",
        options: ["&", "%", "*", "!"],
        answer: 2,
        explanation: "The unary * operator accesses the object designated by a valid pointer."
    },
    {
        chapter: 11,
        question: "What does int *p; declare?",
        options: ["An integer named p", "A pointer to int named p", "An array of integers named p", "A function returning int"],
        answer: 1,
        explanation: "The declaration makes p a pointer to int."
    },
    {
        chapter: 11,
        question: "If int x=10; int *p=&x;, what does *p refer to?",
        options: ["The address of p", "The value 10 stored in x", "The variable name p as text", "A null pointer"],
        answer: 1,
        explanation: "p points to x, so dereferencing p accesses x, whose value is 10."
    },
    {
        chapter: 11,
        question: "Which is a safe way to represent that a pointer currently points to no object?",
        options: ["NULL", "EOF", "0.5", "'A'"],
        answer: 0,
        explanation: "NULL is a macro representing a null pointer constant. A null pointer must not be dereferenced."
    },
    {
        chapter: 11,
        question: "What is a common use of pointers in a function?",
        options: ["Allowing a function to modify an object through its address", "Automatically making every variable global", "Removing all type checks", "Guaranteeing unlimited memory"],
        answer: 0,
        explanation: "Passing a pointer lets a function access the pointed-to object, subject to validity and type rules."
    },

    // CHAPTER 12: STORAGE CLASSES
    {
        chapter: 12,
        question: "Which storage-class specifier is commonly used for a local variable that retains its value between function calls?",
        options: ["auto", "static", "register only", "typedef"],
        answer: 1,
        explanation: "A local static object has static storage duration and retains its value between calls."
    },
    {
        chapter: 12,
        question: "What is the default initial value of a static-storage-duration arithmetic object that has no explicit initializer?",
        options: ["An indeterminate value", "1", "0", "-1"],
        answer: 2,
        explanation: "Objects with static storage duration are initialized to zero when not explicitly initialized."
    },
    {
        chapter: 12,
        question: "Which keyword is used to declare an identifier with linkage to a definition that may be in another source file?",
        options: ["extern", "break", "auto", "sizeof"],
        answer: 0,
        explanation: "extern commonly declares an object or function defined elsewhere, subject to C's linkage rules."
    },
    {
        chapter: 12,
        question: "What is the usual scope of a variable declared inside a function block?",
        options: ["The entire computer", "The entire project automatically", "The block in which it is declared", "Every source file"],
        answer: 2,
        explanation: "A block-scope identifier is visible from its declaration to the end of its scope, subject to nested scopes."
    },

    // CHAPTER 13: STRUCTURES AND UNIONS
    {
        chapter: 13,
        question: "Which keyword defines a structure type in C?",
        options: ["class", "struct", "record", "object"],
        answer: 1,
        explanation: "C uses the struct keyword to define a structure type."
    },
    {
        chapter: 13,
        question: "How do you access a member of a structure variable s?",
        options: ["s->member", "s.member", "s:member", "s#member"],
        answer: 1,
        explanation: "The dot operator accesses a member through a structure object."
    },
    {
        chapter: 13,
        question: "How do you access a member through a pointer p to a structure?",
        options: ["p.member", "p::member", "p->member", "p#member"],
        answer: 2,
        explanation: "The arrow operator accesses a structure member through a pointer."
    },
    {
        chapter: 13,
        question: "What is a key property of a union?",
        options: ["Every member always has separate storage", "Its members share the same storage region", "It can contain only integers", "It cannot contain a character array"],
        answer: 1,
        explanation: "Union members overlap in storage, so typically only one member's stored value is meaningful at a time."
    },
    {
        chapter: 13,
        question: "Which operator returns the size in bytes of a structure object or type?",
        options: ["length", "countof", "sizeof", "size"],
        answer: 2,
        explanation: "The sizeof operator returns the size in bytes, including any padding."
    },

    // CHAPTER 14: ENUMERATIONS AND TYPEDEF
    {
        chapter: 14,
        question: "Which keyword defines an enumeration type?",
        options: ["enum", "typedef", "struct", "union"],
        answer: 0,
        explanation: "The enum keyword defines a type consisting of named integer constants."
    },
    {
        chapter: 14,
        question: "By default, what is the value of the first named enumerator if no value is specified?",
        options: ["-1", "0", "1", "It has no value"],
        answer: 1,
        explanation: "The first enumerator has value 0 by default, and subsequent enumerators increase by one unless specified otherwise."
    },
    {
        chapter: 14,
        question: "What does typedef do?",
        options: ["Creates a preprocessor loop", "Defines an alias for a type name", "Allocates dynamic memory", "Ends a function"],
        answer: 1,
        explanation: "typedef introduces an alias for an existing type."
    },

    // CHAPTER 15: DYNAMIC MEMORY ALLOCATION
    {
        chapter: 15,
        question: "Which header declares malloc() and free()?",
        options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<math.h>"],
        answer: 2,
        explanation: "The standard library header stdlib.h declares malloc(), free(), calloc(), and realloc()."
    },
    {
        chapter: 15,
        question: "What does malloc() return when it cannot allocate the requested memory?",
        options: ["A valid pointer to zero bytes", "NULL", "EOF", "A negative integer"],
        answer: 1,
        explanation: "On allocation failure, malloc() returns a null pointer."
    },
    {
        chapter: 15,
        question: "What is the purpose of free(ptr)?",
        options: ["To release a dynamically allocated memory block", "To print the pointer", "To set every variable to zero", "To allocate more memory"],
        answer: 0,
        explanation: "free() releases a previously allocated block when passed a valid pointer to that allocation."
    },
    {
        chapter: 15,
        question: "What is a memory leak?",
        options: ["A syntax error in printf", "Memory that is no longer needed but remains allocated and inaccessible for reuse", "An array with no elements", "A pointer that stores a character"],
        answer: 1,
        explanation: "A memory leak occurs when allocated memory is no longer useful but is not released and cannot be reached to free."
    },
    {
        chapter: 15,
        question: "What does calloc(n, size) do when allocation succeeds?",
        options: ["Allocates space for n elements and initializes all allocated bytes to zero", "Allocates only one byte", "Always returns NULL", "Frees an existing block"],
        answer: 0,
        explanation: "calloc() allocates space for an array of elements and initializes the allocated bytes to zero."
    },

    // CHAPTER 16: FILE HANDLING
    {
        chapter: 16,
        question: "Which function opens a file in C?",
        options: ["openfile()", "fopen()", "fileopen()", "freadfile()"],
        answer: 1,
        explanation: "fopen() opens a file and returns a FILE pointer on success."
    },
    {
        chapter: 16,
        question: "Which function closes a file stream?",
        options: ["fclose()", "closefile()", "endfile()", "stop()"],
        answer: 0,
        explanation: "fclose() closes a stream and flushes buffered output as required."
    },
    {
        chapter: 16,
        question: "Which file mode opens a text file for reading?",
        options: ["\"w\"", "\"a\"", "\"r\"", "\"x\""],
        answer: 2,
        explanation: "The mode r opens an existing file for reading."
    },
    {
        chapter: 16,
        question: "What should a program check after calling fopen()?",
        options: ["Whether the returned pointer is NULL", "Whether the file name is a number", "Whether printf is available", "Whether the program has a loop"],
        answer: 0,
        explanation: "If fopen() fails, it returns NULL, which should be checked before using the stream."
    },

    // CHAPTER 17: PREPROCESSOR DIRECTIVES
    {
        chapter: 17,
        question: "Which directive includes a standard header file?",
        options: ["#define", "#include", "#ifdef", "#return"],
        answer: 1,
        explanation: "#include directs the preprocessor to include a header or source file."
    },
    {
        chapter: 17,
        question: "What is a common purpose of #define?",
        options: ["Define a macro", "Declare a structure member", "Close a file", "Return from main"],
        answer: 0,
        explanation: "#define defines a macro that is handled by the preprocessor."
    },
    {
        chapter: 17,
        question: "What do header guards help prevent?",
        options: ["All runtime errors", "Repeated inclusion of the same header contents in one translation unit", "Every memory leak", "All compiler warnings"],
        answer: 1,
        explanation: "Header guards prevent a header's contents from being processed repeatedly in the same translation unit."
    },

    // CHAPTER 18: COMMAND-LINE ARGUMENTS
    {
        chapter: 18,
        question: "What does argc represent in the common main(int argc, char *argv[]) form?",
        options: ["The number of command-line arguments including the program name", "The last argument's length", "The number of functions", "The program's return value"],
        answer: 0,
        explanation: "argc counts the argument strings in argv, including argv[0] when provided by the hosted environment."
    },
    {
        chapter: 18,
        question: "What does argv[0] commonly contain?",
        options: ["The first user-supplied argument only", "The program name or invocation path", "The number of arguments", "The program's exit code"],
        answer: 1,
        explanation: "argv[0] commonly identifies the program, though its exact contents are environment-dependent."
    },
    {
        chapter: 18,
        question: "What type of data does argv[i] point to?",
        options: ["An int value", "A floating-point value", "A character string", "A structure object"],
        answer: 2,
        explanation: "Each argv entry points to a null-terminated character string."
    },

    // CHAPTER 19: BITWISE OPERATORS
    {
        chapter: 19,
        question: "Which operator performs bitwise AND?",
        options: ["&&", "&", "|", "^"],
        answer: 1,
        explanation: "The single ampersand performs bitwise AND on integer operands."
    },
    {
        chapter: 19,
        question: "Which operator performs bitwise OR?",
        options: ["||", "&", "|", "~"],
        answer: 2,
        explanation: "The single vertical bar performs bitwise OR."
    },
    {
        chapter: 19,
        question: "Which operator performs bitwise XOR?",
        options: ["^", "&&", "!", "%"],
        answer: 0,
        explanation: "The caret operator performs bitwise exclusive OR."
    },
    {
        chapter: 19,
        question: "What is the result of 5 & 3?",
        options: ["7", "1", "6", "2"],
        answer: 1,
        explanation: "In binary, 5 is 0101 and 3 is 0011; bitwise AND gives 0001, which is 1."
    },
    {
        chapter: 19,
        question: "What is the result of 5 | 3?",
        options: ["1", "6", "7", "8"],
        answer: 2,
        explanation: "Binary 0101 OR 0011 gives 0111, which is 7."
    },
    {
        chapter: 19,
        question: "For a nonnegative integer value with no overflow concerns, what does x << 1 commonly do?",
        options: ["Shifts bits left by one position", "Shifts bits right by one position", "Reverses the bits", "Sets every bit to zero"],
        answer: 0,
        explanation: "The left-shift operator shifts the left operand's bits left by the specified number of positions, subject to C's rules."
    },
    {
        chapter: 19,
        question: "Which operator performs bitwise complement?",
        options: ["!", "~", "^", "&&"],
        answer: 1,
        explanation: "The unary ~ operator flips each bit of its integer operand."
    },
    {
        chapter: 19,
        question: "Which operator is the logical OR operator?",
        options: ["|", "||", "^", "&"],
        answer: 1,
        explanation: "The double vertical bar performs logical OR and produces 0 or 1."
    }
];

/* ===== CodePath Full-Page MCQ Quiz ===== */

let selectedQuestions = [];

function startPractice(mode) {
    if (mode === "chapter") {
        const selectedChapter =
            Number(document.getElementById("chapterSelect").value);

        selectedQuestions = mcqQuestions.filter(function (question) {
            return question.chapter === selectedChapter;
        });
    } else {
        selectedQuestions = [...mcqQuestions];
    }

    if (selectedQuestions.length === 0) {
        alert("No questions are available for this chapter yet.");
        return;
    }

    document.getElementById("resultArea").hidden = true;
    document.getElementById("quizArea").hidden = false;

    document.getElementById("quizTitle").textContent =
        mode === "chapter" ? "Chapter-wise MCQ Practice" : "All Chapters MCQ Practice";

    document.getElementById("questionCounter").textContent =
        "Total Questions: " + selectedQuestions.length;

    const allQuestions = document.getElementById("allQuestions");
    allQuestions.innerHTML = "";

    selectedQuestions.forEach(function (question, questionIndex) {
        const card = document.createElement("div");
        card.className = "mcq-question";

        const heading = document.createElement("h3");
        heading.textContent =
            "Question " + (questionIndex + 1) + ": " + question.question;

        card.appendChild(heading);

        const optionsContainer = document.createElement("div");
        optionsContainer.className = "mcq-options";

        question.options.forEach(function (option, optionIndex) {
            const label = document.createElement("label");
            label.className = "mcq-option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "question-" + questionIndex;
            radio.value = optionIndex;

            const optionText = document.createElement("span");
            optionText.textContent =
                String.fromCharCode(65 + optionIndex) + ". " + option;

            label.appendChild(radio);
            label.appendChild(optionText);
            optionsContainer.appendChild(label);
        });

        card.appendChild(optionsContainer);

        const feedback = document.createElement("p");
        feedback.className = "mcq-feedback";
        feedback.id = "feedback-" + questionIndex;
        feedback.setAttribute("aria-live", "polite");

        card.appendChild(feedback);
        allQuestions.appendChild(card);
    });

    document.getElementById("submitAnswersBtn").disabled = false;
    document.getElementById("submitAnswersBtn").textContent = "Submit Answers";

    document.getElementById("quizArea").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function submitAnswers() {
    let score = 0;
    let unanswered = 0;

    selectedQuestions.forEach(function (question, questionIndex) {
        const selectedOption = document.querySelector(
            'input[name="question-' + questionIndex + '"]:checked'
        );

        const feedback = document.getElementById("feedback-" + questionIndex);
        const radios = document.querySelectorAll(
            'input[name="question-' + questionIndex + '"]'
        );

        radios.forEach(function (radio) {
            radio.disabled = true;
        });

        if (!selectedOption) {
            unanswered++;
            feedback.textContent =
                "Not answered. Correct answer: " +
                question.options[question.answer] +
                ". " + question.explanation;
            return;
        }

        if (Number(selectedOption.value) === question.answer) {
            score++;
            feedback.textContent = "Correct! " + question.explanation;
            feedback.classList.add("correct-feedback");
        } else {
            feedback.textContent =
                "Incorrect. Correct answer: " +
                question.options[question.answer] +
                ". " + question.explanation;
            feedback.classList.add("incorrect-feedback");
        }
    });

    document.getElementById("scoreText").textContent =
        "Your score: " + score + " / " + selectedQuestions.length +
        ". Unanswered: " + unanswered + ".";

    document.getElementById("resultArea").hidden = false;
    document.getElementById("submitAnswersBtn").disabled = true;
    document.getElementById("submitAnswersBtn").textContent = "Answers Submitted";

    document.getElementById("resultArea").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

document.getElementById("submitAnswersBtn").addEventListener(
    "click",
    submitAnswers
);

document.getElementById("retryButton").addEventListener("click", function () {
    startPractice("all");
});