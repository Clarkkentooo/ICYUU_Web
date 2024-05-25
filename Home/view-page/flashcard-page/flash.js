//Navigation Bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}

//Functionality
const allQuestions  = [
    {
      question: "What does C# stand for?",
      choices: ["C Sharp", "C Share", "C Slash"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is NOT a data type in C#?",
      choices: ["int", "real", "string"],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is string?",
      choices: ["'hello'", "1", "true"],
      correctAnswer: 0,
    },
    {
        question: "What is the primary function of the Main method in C#? ",
        choices: ["Entry point of the program", "Declaration of variables ", "Printing output "],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used to declare a number variable in C#? ",
        choices: ["var ", "int ", "declare "],
        correctAnswer: 1,
    },
    {
        question: "What is the purpose of the 'using' directive in C#",
        choices: ["To import namespaces ", "To define variables ", "To loop through arrays"],
        correctAnswer: 0,
    },
    {
        question: "Which data type is used to store whole numbers in C#? ",
        choices: ["float ", "int ", "string"],
        correctAnswer: 1,
    },
    {
        question: "What is the default value of an integer variable in C# if not initialized? ",
        choices: ["0", "1", "null"],
        correctAnswer: 0,
    },
    {
        question: "What does the 'Console.WriteLine()' method do in C#? ",
        choices: ["Reads input from the console", "Deletes files ", "Writes output to the console "],
        correctAnswer: 2,
    },
    {
        question: "How do you check the equality of two strings in C#? ",
        choices: ["Using the '=' operator ", "Using the '!=' operator ", "Using the '==' operator "],
        correctAnswer: 2,
    },
    {
        question: "What symbol is used for single-line comments in C#?",
        choices: ["// ", "/* */", "# "],
        correctAnswer: 0,
    },
    {
        question: "What does the 'new' keyword do in C#?",
        choices: [
            "Deletes an object",
            "Allocates memory and creates an instance of a class",
            "Modifies a method"
        ],
        correctAnswer: 1,
    },
    {
        question: "Which loop in C# executes the block of code at least once?",
        choices: [
            "for loop",
            "while loop",
            "do-while loop"
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the syntax for declaring a method in C#?",
        choices: [
            "method name { }",
            "void method name { }",
            "returnType methodName(parameters) { }"
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the purpose of the 'this' keyword in C#?",
        choices: [
            "Refers to the current instance of the class",
            "Declares a new variable",
            "Deletes an object"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the default access modifier for members of a class in C# if no access modifier is specified?",
        choices: [
            "private",
            "public",
            "protected"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the correct way to declare a constant in C#?",
        choices: [
            "const int x = 10;",
            "int const x = 10;",
            "constant int x = 10;"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of the 'try-catch' block in C#?",
        choices: [
            "To handle exceptions",
            "To declare variables",
            "To perform mathematical operations"
        ],
        correctAnswer: 0,
    },
    {
        question: "Which operator is used for exponentiation in C#?",
        choices: [
            "^",
            "**",
            "^^"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the purpose of the 'params' keyword in C#?",
        choices: [
            "Declares optional parameters",
            "Allows a method to accept a variable number of arguments",
            "Specifies access level"
        ],
        correctAnswer: 1,
    },
    {
        question: "True or False: C# supports operator overloading.",
        choices: [
            "True",
            "False",
            "Maybe"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the default value of a boolean variable in C# if not initialized?",
        choices: [
            "true",
            "false",
            "null"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the purpose of the 'break' statement in C#?",
        choices: [
            "Terminates the current loop or switch statement",
            "Continues to the next iteration of the loop",
            "Returns a value from a method"
        ],
        correctAnswer: 0,
    },
    {
        question: "How do you convert a string to an integer in C#?",
        choices: [
            "int.Parse()",
            "Convert.ToInt32()",
            "Both A and B"
        ],
        correctAnswer: 2,
    },
    {
        question: "Which keyword is used to exit from a method in C#?",
        choices: [
            "stop",
            "exit",
            "return"
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the purpose of the 'ref' keyword in C#?",
        choices: [
            "Passes arguments by reference",
            "Declares a new variable",
            "References a file"
        ],
        correctAnswer: 0,
    },
    {
        question: "C# supports automatic garbage collection?",
        choices: [
            "True",
            "False",
            "Maybe"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x + y);",
        choices: [
            "8",
            "53",
            "35"
        ],
        correctAnswer: 0,
    },
    {
        question: "Which access modifier allows a member to be accessed only within its own class and by derived class methods?",
        choices: [
            "private",
            "protected",
            "Internal"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the purpose of the 'finally' block in C#?",
        choices: [
            "It is executed when an exception occurs",
            "It is always executed regardless of whether an exception occurs or not",
            "It is executed before the 'try' block"
        ],
        correctAnswer: 1,
    },
    {
        question: "How do you declare a multi-dimensional array in C#?",
        choices: [
            "int[] arr = new int[3,3];",
            "int[,] arr = new int[3,3];",
            "Both A and B"
        ],
        correctAnswer: 2,
    },
    {
        question: "Which keyword is used to prevent a method from being overridden in derived classes?",
        choices: [
            "sealed",
            "override",
            "virtual"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of the 'checked' keyword in C#?",
        choices: [
            "Checks for null values",
            "Enables overflow checking for arithmetic operations",
            "Enables type checking"
        ],
        correctAnswer: 1,
    },
    {
        question: "C# supports both single and multi-line comments.",
        choices: [
            "True",
            "False",
            "Maybe"
        ],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used to declare a class that cannot be instantiated and can only be inherited?",
        choices: [
            "abstract",
            "static",
            "final"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the purpose of the 'volatile' keyword in C#?",
        choices: [
            "It prevents the compiler from optimizing code involving the variable",
            "It makes a variable immutable",
            "It declares a variable as thread-safe"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 10;\nint y = x++;\nConsole.WriteLine(y);",
        choices: [
            "10",
            "11",
            "9"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following code snippet?\nbool a = true;\nbool b = false;\nConsole.WriteLine(a && b);",
        choices: [
            "true",
            "false",
            "Compilation error"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the output of the following code snippet?\nint[] numbers = { 1, 2, 3, 4, 5 };\nConsole.WriteLine(numbers.Length);",
        choices: [
            "5",
            "6",
            "Compilation error"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following code snippet?\nstring name = \"John\";\nConsole.WriteLine($\"Hello, {name}!\");",
        choices: [
            "Hello, name!",
            "Hello, John!",
            "Compilation error"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x > y ? \"x is greater\" : \"y is greater\");",
        choices: [
            "x is greater",
            "y is greater",
            "Compilation error"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x.CompareTo(y));",
        choices: [
            "1",
            "0",
            "-1"
        ],
        correctAnswer: 0,
    },
    {
        question: "Which class is used to read input from the console in C#?",
        choices: [
            "a. ConsoleReader",
            "b. StreamReader",
            "c. Console"
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the purpose of the 'is' keyword in C#?",
        choices: [
            "a. Checks if two objects are the same",
            "b. Checks if an object is of a certain type",
            "c. Checks if an object is null"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 10;\nint y = 5;\nConsole.WriteLine(x / y);",
        choices: [
            "a. 2.5",
            "b. 2.0",
            "c. 2"
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 5;\nConsole.WriteLine(x++);",
        choices: [
            "a. 5",
            "b. 6",
            "c. 4"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following code snippet?\nstring name = null;\nConsole.WriteLine(name ?? \"Default\");",
        choices: [
            "a. null",
            "b. Default",
            "c. Compilation error"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the output of the following code snippet?\nstring[] fruits = { \"apple\", \"banana\", \"orange\" };\nforeach (string fruit in fruits)\n{\n Console.WriteLine(fruit);\n}",
        choices: [
            "a. apple, banana, orange",
            "b. apple banana orange",
            "c. Compilation error"
        ],
        correctAnswer: 0,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x - y);",
        choices: [
            "a. -2",
            "b. 3",
            "c. 2"
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the output of the following code snippet?\nint x = 5;\nint y = 1000;\nConsole.WriteLine(x - y);",
        choices: [
            "a. 990",
            "b. 10",
            "c. 995"
        ],
        correctAnswer: 2,
    },
    {
        question: "What does IDE stand for in the context of C# development?",
        choices: ["Integrated Development Environment", "Integrated Debugging Environment", "Interactive Design Environment"],
        correctAnswer: 0
      },
      {
        question: "Which of the following is not a valid access modifier in C#?",
        choices: ["public", "private", "hidden"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of the 'async' keyword in C#?",
        choices: ["To define a class as asynchronous", "To mark a method as asynchronous", "To enforce thread synchronization"],
        correctAnswer: 1
      },
      {
        question: "Which C# feature allows a method to accept a variable number of arguments?",
        choices: ["params keyword", "varargs keyword", "dynamic keyword"],
        correctAnswer: 0
      },
      {
        question: "True or False: C# supports multiple inheritance.",
        choices: ["True", "False", "Sometimes"],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of the 'yield' keyword in C#?",
        choices: ["To yield control back to the operating system", "To create an iterator", "To pause execution of a method temporarily"],
        correctAnswer: 1
      },
      {
        question: "Which C# collection type ensures unique elements and does not allow duplicates?",
        choices: ["List", "Array", "Set"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of the 'using' statement in C#?",
        choices: ["To include namespaces", "To declare variables", "To manage resources and ensure disposal"],
        correctAnswer: 2
      },
      {
        question: "What is the output of the following code snippet?\nint x = 10;\nint y = 3;\nConsole.WriteLine(x / y);",
        choices: ["2.5", "2.0", "2"],
        correctAnswer: 2
      },
      {
        question: "In C#, what is the purpose of the 'params' keyword in a method parameter list?",
        choices: ["To indicate optional parameters", "To pass parameters by reference", "To allow a variable number of arguments"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of the 'readonly' keyword in C#?",
        choices: ["To declare a variable constant", "To mark a variable as read-only", "To prevent modification of class members"],
        correctAnswer: 1
      },
      {
        question: "Which keyword is used to create an instance of a class in C#?",
        choices: ["new", "create", "instance"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the 'delegate' keyword in C#?",
        choices: ["To define a new data type", "To declare a method", "To create a reference to a method"],
        correctAnswer: 0
      },
      {
        question: "Which C# feature is used to ensure that a resource is released after its use, even if an exception occurs?",
        choices: ["finalizers", "destructors", "finally blocks"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of the 'dynamic' keyword in C#?",
        choices: ["To declare dynamic variables", "To enable dynamic binding", "To create dynamic arrays"],
        correctAnswer: 1
      },
      {
        question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine($\"{x} plus {y} equals {x + y}\");",
        choices: ["5 plus 3 equals 8", "8", "Compilation error"],
        correctAnswer: 0
      },
      {
        question: "Which C# keyword is used to explicitly throw an exception?",
        choices: ["throw", "raise", "exception"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the 'lock' statement in C#?",
        choices: ["To synchronize access to a shared resource", "To lock a variable's value", "To prevent memory leaks"],
        correctAnswer: 0
      },
      {
        question: "In C#, what is the purpose of the 'partial' keyword?",
        choices: ["To define a partial class", "To declare a class as partially abstract", "To enable partial method implementation"],
        correctAnswer: 0
      },
      {
        question: "What is the output of the following code snippet?\nstring[] colors = { \"red\", \"green\", \"blue\" };\nConsole.WriteLine(colors[3]);",
        choices: ["blue", "IndexOutOfRangeException", "Compilation error"],
        correctAnswer: 1
      },
      {
        question: "You are designing a class in C# to represent a basic calculator. Which principle of object-oriented programming would you apply to encapsulate the calculator's functionalities and data?",
        choices: ["Inheritance", "Encapsulation", "Polymorphism"],
        correctAnswer: 1
    },
    {
        question: "In a C# program, you have a requirement to reuse the implementation of a method across multiple classes. Which OOP concept allows you to achieve this without code duplication?",
        choices: ["Inheritance", "Encapsulation", "Polymorphism"],
        correctAnswer: 0
    },
    {
        question: "You are implementing a C# program to model a simple banking system with various account types (e.g., savings account, checking account). Which OOP principle would you use to define common characteristics and behaviors shared among different account types?",
        choices: ["Inheritance", "Encapsulation", "Polymorphism"],
        correctAnswer: 0
    },
    {
        question: "While designing a C# class to represent a car, you want to restrict direct access to certain internal attributes (e.g., engine temperature) and only allow access through getter and setter methods. Which OOP concept enables this restriction?",
        choices: ["Inheritance", "Encapsulation", "Polymorphism"],
        correctAnswer: 1
    },
    {
        question: "In a C# application, you have a base class called `Shape` with methods `CalculateArea()` and `CalculatePerimeter()`. You want to override these methods in derived classes such as `Circle` and `Rectangle` to provide specific implementations. Which OOP feature allows you to achieve this behavior?",
        choices: ["Inheritance", "Encapsulation", "Polymorphism"],
        correctAnswer: 2
    },
    {
        question: "Which C# keyword is used to exit from a method?",
        choices: ["stop", "exit", "return"],
        correctAnswer: 2
    },
    
    {
    question: "In C#, what is the purpose of the 'using' statement?",
    choices: ["To declare variables", "To define namespaces", "To ensure proper resource disposal"],
    correctAnswer: 2
    },
    {
    question: "You want to declare a constant value in C# that cannot be changed during runtime. Which keyword would you use?",
    choices: ["readonly", "static", "const"],
    correctAnswer: 2
    },
    {
    question: "What is the difference between '==' and '.Equals()' when comparing two strings in C#?",
    choices: ["There is no difference", "The '==' operator compares reference equality, while '.Equals()' compares value equality", "The '==' operator compares value equality, while '.Equals()' compares reference equality"],
    correctAnswer: 2
    },
    {
    question: "You have two classes in a C# program: 'Parent' and 'Child', where 'Child' inherits from 'Parent'. What access modifier in 'Parent' would prevent 'Child' from accessing a member?",
    choices: ["public", "private", "protected"],
    correctAnswer: 1
    },
    {
    question: "In C#, what is the purpose of the 'base' keyword?",
    choices: ["To call a method of the base class", "To initialize base class members", "To access the base class instance"],
    correctAnswer: 0
    },
    {
    question: "You are implementing a C# program where you want to execute a block of code only if a condition is true. Which control structure would you use?",
    choices: ["if-else", "for loop", "switch"],
    correctAnswer: 0
    },
    {
    question: "What does the 'new' keyword do in C#?",
    choices: ["Declares a new variable", "Creates a new instance of a class", "Defines a new method"],
    correctAnswer: 1
    },
    {
    question: "What is the default access modifier for members of a class in C# if no access modifier is specified?",
    choices: ["public", "private", "protected internal"],
    correctAnswer: 1
    },
    {
    question: "You are designing a C# class that should not be instantiated directly, but only through its derived classes. Which keyword would you use to enforce this behavior?",
    choices: ["static", "abstract", "sealed"],
    correctAnswer: 1
    },

    {
    question: "In C#, what is the purpose of the 'using' statement?",
    choices: ["To declare variables", "To define namespaces", "To ensure proper resource disposal"],
    correctAnswer: 2
    },
    {
    question: "You want to declare a constant value in C# that cannot be changed during runtime. Which keyword would you use?",
    choices: ["readonly", "static", "const"],
    correctAnswer: 2
    },
    {
    question: "What is the difference between '==' and '.Equals()' when comparing two strings in C#?",
    choices: ["There is no difference", "The '==' operator compares reference equality, while '.Equals()' compares value equality", "The '==' operator compares value equality, while '.Equals()' compares reference equality"],
    correctAnswer: 2
    },
    {
    question: "You have two classes in a C# program: 'Parent' and 'Child', where 'Child' inherits from 'Parent'. What access modifier in 'Parent' would prevent 'Child' from accessing a member?",
    choices: ["public", "private", "protected"],
    correctAnswer: 1
    },
    {
    question: "In C#, what is the purpose of the 'base' keyword?",
    choices: ["To call a method of the base class", "To initialize base class members", "To access the base class instance"],
    correctAnswer: 0
    },
    {
    question: "You are implementing a C# program where you want to execute a block of code only if a condition is true. Which control structure would you use?",
    choices: ["if-else", "for loop", "switch"],
    correctAnswer: 0
    },
    {
    question: "What does the 'new' keyword do in C#?",
    choices: ["Declares a new variable", "Creates a new instance of a class", "Defines a new method"],
    correctAnswer: 1
    },
    {
    question: "What is the default access modifier for members of a class in C# if no access modifier is specified?",
    choices: ["public", "private", "protected internal"],
    correctAnswer: 1
    },
    {
    question: "You are designing a C# class that should not be instantiated directly, but only through its derived classes. Which keyword would you use to enforce this behavior?",
    choices: ["static", "abstract", "sealed"],
    correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'Math.Floor()' method in C#?",
        choices: ["To round a number to the nearest integer", "To find the absolute value of a number", "To calculate the floor division of two numbers"],
        correctAnswer: 0
    },
    {
        question: "What does the 'String.Split()' method in C# do?",
        choices: ["Splits a string into substrings based on a specified separator", "Joins multiple strings into a single string", "Reverses the characters in a string"],
        correctAnswer: 0
    },
    {
        question: "You want to convert a string to uppercase in C#. Which method would you use?",
        choices: ["String.ToLower()", "String.ToUpper()", "String.Replace()"],
        correctAnswer: 1
    },
    {
        question: "What does the 'Array.Sort()' method in C# do?",
        choices: ["Removes duplicate elements from an array", "Sorts the elements of an array in ascending order", "Reverses the order of elements in an array"],
        correctAnswer: 1
    },
    {
        question: "You want to find the index of the first occurrence of a substring within a string in C#. Which method would you use?",
        choices: ["String.IndexOf()", "String.Contains()", "String.Trim()"],
        correctAnswer: 0
    },
    {
        question: "What does the 'DateTime.Now' property in C# return?",
        choices: ["The current date", "The current time", "The current date and time"],
        correctAnswer: 2
    },
    {
        question: "You want to remove leading and trailing whitespace from a string in C#. Which method would you use?",
        choices: ["String.Trim()", "String.ToLower()", "String.Substring()"],
        correctAnswer: 0
    },
    {
        question: "What does the 'Console.WriteLine()' method in C# do?",
        choices: ["Reads input from the console", "Writes output to the console with a newline character", "Writes output to the console without a newline character"],
        correctAnswer: 1
    },
    {
        question: "You want to convert a string representation of a number to its integer equivalent in C#. Which method would you use?",
        choices: ["String.ToInt32()", "Int32.Parse()", "String.Format()"],
        correctAnswer: 1
    },
    {
        question: "What does the 'List<T>.Add()' method in C# do?",
        choices: ["Removes an item from the list", "Adds an item to the end of the list", "Sorts the list"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of a 'for' loop in C#?",
        choices: ["To execute a block of code repeatedly while a condition is true", "To execute a block of code once and then check a condition", "To execute a block of code repeatedly for a specified number of iterations"],
        correctAnswer: 2
    },
    {
        question: "In C#, what does the 'break' keyword do when used inside a loop?",
        choices: ["Exits the loop and continues with the next iteration", "Exits the loop completely", "Skips the current iteration and continues with the next iteration"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of a 'while' loop in C#?",
        choices: ["To execute a block of code once and then check a condition", "To execute a block of code repeatedly for a specified number of iterations", "To execute a block of code repeatedly while a condition is true"],
        correctAnswer: 2
    },
    {
        question: "You want to execute a block of code at least once and then repeat it as long as a condition is true. Which loop construct would you use in C#?",
        choices: ["for loop", "while loop", "do-while loop"],
        correctAnswer: 2
    },
    {
        question: "What does the 'continue' keyword do in C# when used inside a loop?",
        choices: ["Exits the loop and continues with the next iteration", "Exits the loop completely", "Skips the current iteration and continues with the next iteration"],
        correctAnswer: 2
    },
    {
        question: "In C#, what is the difference between a 'while' loop and a 'do-while' loop?",
        choices: ["There is no difference", "A 'do-while' loop always executes its block of code at least once, whereas a 'while' loop may not execute at all", "A 'do-while' loop can only be used with integers"],
        correctAnswer: 1
    },
    {
        question: "You want to iterate over the elements of an array in C#. Which loop construct would you typically use?",
        choices: ["for loop", "while loop", "do-while loop"],
        correctAnswer: 0
    },
    {
        question: "What is the syntax for a 'foreach' loop in C#?",
        choices: ["foreach (int i = 0; i < 10; i++) { }", "foreach (int i in myArray) { }", "foreach (int i = 0; i++; i < 10) { }"],
        correctAnswer: 1
    },
    {
        question: "You want to exit from a loop when a specific condition is met. Which keyword would you use in C#?",
        choices: ["break", "continue", "return"],
        correctAnswer: 0
    },
    {
        question: "What is an infinite loop in C#?",
        choices: ["A loop that iterates over a finite range of values", "A loop that never terminates under normal conditions", "A loop that only executes once"],
        correctAnswer: 1
    },
    {
        question: "What is an array in C#?",
        choices: ["A collection of elements of the same type stored sequentially in memory", "A dynamic list that can hold elements of different types", "A data structure that stores key-value pairs"],
        correctAnswer: 0
    },
    {
        question: "Which method in C# is used to find the index of a specific element in an array?",
        choices: ["Array.FindIndex()", "Array.IndexOf()", "Array.Contains()"],
        correctAnswer: 1
    },
    {
        question: "What does the 'Array.Sort()' method do in C#?",
        choices: ["Removes duplicate elements from an array", "Sorts the elements of an array in ascending order", "Reverses the order of elements in an array"],
        correctAnswer: 1
    },
    {
        question: "You want to add an element to the end of an array in C#. Which method would you use?",
        choices: ["Array.Push()", "Array.Add()", "Arrays cannot be dynamically resized in C#"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'ArrayList' class in C#?",
        choices: ["To create resizable arrays", "To store key-value pairs", "To perform mathematical operations"],
        correctAnswer: 0
    },
    {
        question: "Which method in the 'ArrayList' class is used to add an element to the end of the list?",
        choices: ["Add()", "Insert()", "Append()"],
        correctAnswer: 0
    },
    {
        question: "You want to check if an element exists in an 'ArrayList' in C#. Which method would you use?",
        choices: ["Contains()", "Exists()", "IndexOf()"],
        correctAnswer: 0
    },
    {
        question: "What is the main difference between an array and an ArrayList in C#?",
        choices: ["Arrays can hold elements of different types, while ArrayList can only hold elements of the same type", "ArrayList can dynamically resize itself, while arrays have fixed sizes", "Arrays have built-in methods for sorting and searching, while ArrayList does not"],
        correctAnswer: 1
    },
    {
        question: "You want to remove an element from an 'ArrayList' at a specific index in C#. Which method would you use?",
        choices: ["Remove()", "Delete()", "RemoveAt()"],
        correctAnswer: 2
    },
    {
        question: "What does the 'ToArray()' method do in C# when called on an 'ArrayList'?",
        choices: ["Converts the ArrayList to an array of the specified type", "Converts the array to an ArrayList", "Copies the elements of the ArrayList to a new ArrayList"],
        correctAnswer: 0
    }
    
    
    
  
   
  ];
  const numberOfQuestionsToAnswer = 20;
  let questions = [];
  
  for (let i = 0; i < numberOfQuestionsToAnswer; i++) {
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    questions.push(allQuestions[randomIndex]);
    allQuestions.splice(randomIndex, 1); // This Remove the selected question from allQuestions array to avoid repetition
  }
  
  let currentQuestion = 0;
  let score = 0;
  let originalBackgroundColor;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const containerElement = document.querySelector('.back-container');
  
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
  
    questions[currentQuestion].choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => {
        if (index === questions[currentQuestion].correctAnswer) {
          score++;
          containerElement.style.backgroundColor = "#14CD3C";
        } else {
          containerElement.style.backgroundColor = "#F12525";
        }
        // Disable all buttons after user's answer
        choicesElement.querySelectorAll("button").forEach((button) => {
          button.disabled = true;
        });
      });
      choicesElement.appendChild(button);
    });
  }
  
  function nextQuestion() {
    const containerElement = document.querySelector('.back-container');
    containerElement.style.backgroundColor = originalBackgroundColor;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }
  
  function displayScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Your score: ${score} / ${numberOfQuestionsToAnswer}`;
  }
  
  // Shuffle the questions array to randomize the order of questions
  questions.sort(() => Math.random() - 0.5);
  
  document.addEventListener('DOMContentLoaded', () => {
    const containerElement = document.querySelector('.back-container');
    originalBackgroundColor = getComputedStyle(containerElement).backgroundColor;
  });
  
  displayQuestion();
  document.getElementById("nextButton").addEventListener("click", nextQuestion);

  function exit(){
    alert("Need to exit? Exiting will prompt a restart")
}