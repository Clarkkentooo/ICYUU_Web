//Navigation Bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}
const questions = [
    {
        question: "What does C# stand for?",
        answers: ["C Sharp", "C Share", "C Slash"],
        correct: 0,
      },
      {
        question: "Which of the following is NOT a data type in C#?",
        answers: ["int", "real", "string"],
        correct: 1,
      },
      {
        question: "Which of the following is string?",
        answers: ["'hello'", "1", "true"],
        correct: 0,
      },
      {
          question: "What is the primary function of the Main method in C#? ",
          answers: ["Entry point of the program", "Declaration of variables ", "Printing output "],
          correct: 0,
      },
      {
          question: "Which keyword is used to declare a number variable in C#? ",
          answers: ["var ", "int ", "declare "],
          correct: 1,
      },
      {
          question: "What is the purpose of the 'using' directive in C#",
          answers: ["To import namespaces ", "To define variables ", "To loop through arrays"],
          correct: 0,
      },
      {
          question: "Which data type is used to store whole numbers in C#? ",
          answers: ["float ", "int ", "string"],
          correct: 1,
      },
      {
          question: "What is the default value of an integer variable in C# if not initialized? ",
          answers: ["0", "1", "null"],
          correct: 0,
      },
      {
          question: "What does the 'Console.WriteLine()' method do in C#? ",
          answers: ["Reads input from the console", "Deletes files ", "Writes output to the console "],
          correct: 2,
      },
      {
          question: "How do you check the equality of two strings in C#? ",
          answers: ["Using the '=' operator ", "Using the '!=' operator ", "Using the '==' operator "],
          correct: 2,
      },
      {
          question: "What symbol is used for single-line comments in C#?",
          answers: ["// ", "/* */", "# "],
          correct: 0,
      },
      {
          question: "What does the 'new' keyword do in C#?",
          answers: [
              "Deletes an object",
              "Allocates memory and creates an instance of a class",
              "Modifies a method"
          ],
          correct: 1,
      },
      {
          question: "Which loop in C# executes the block of code at least once?",
          answers: [
              "for loop",
              "while loop",
              "do-while loop"
          ],
          correct: 2,
      },
      {
          question: "What is the syntax for declaring a method in C#?",
          answers: [
              "method name { }",
              "void method name { }",
              "returnType methodName(parameters) { }"
          ],
          correct: 2,
      },
      {
          question: "What is the purpose of the 'this' keyword in C#?",
          answers: [
              "Refers to the current instance of the class",
              "Declares a new variable",
              "Deletes an object"
          ],
          correct: 0,
      },
      {
          question: "What is the default access modifier for members of a class in C# if no access modifier is specified?",
          answers: [
              "private",
              "public",
              "protected"
          ],
          correct: 0,
      },
      {
          question: "What is the correct way to declare a constant in C#?",
          answers: [
              "const int x = 10;",
              "int const x = 10;",
              "constant int x = 10;"
          ],
          correct: 0,
      },
      {
          question: "What is the purpose of the 'try-catch' block in C#?",
          answers: [
              "To handle exceptions",
              "To declare variables",
              "To perform mathematical operations"
          ],
          correct: 0,
      },
      {
          question: "Which operator is used for exponentiation in C#?",
          answers: [
              "^",
              "**",
              "^^"
          ],
          correct: 1,
      },
      {
          question: "What is the purpose of the 'params' keyword in C#?",
          answers: [
              "Declares optional parameters",
              "Allows a method to accept a variable number of arguments",
              "Specifies access level"
          ],
          correct: 1,
      },
      {
          question: "True or False: C# supports operator overloading.",
          answers: [
              "True",
              "False",
              "Maybe"
          ],
          correct: 0,
      },
      {
          question: "What is the default value of a boolean variable in C# if not initialized?",
          answers: [
              "true",
              "false",
              "null"
          ],
          correct: 1,
      },
      {
          question: "What is the purpose of the 'break' statement in C#?",
          answers: [
              "Terminates the current loop or switch statement",
              "Continues to the next iteration of the loop",
              "Returns a value from a method"
          ],
          correct: 0,
      },
      {
          question: "How do you convert a string to an integer in C#?",
          answers: [
              "int.Parse()",
              "Convert.ToInt32()",
              "Both A and B"
          ],
          correct: 2,
      },
      {
          question: "Which keyword is used to exit from a method in C#?",
          answers: [
              "stop",
              "exit",
              "return"
          ],
          correct: 2,
      },
      {
          question: "What is the purpose of the 'ref' keyword in C#?",
          answers: [
              "Passes arguments by reference",
              "Declares a new variable",
              "References a file"
          ],
          correct: 0,
      },
      {
          question: "C# supports automatic garbage collection?",
          answers: [
              "True",
              "False",
              "Maybe"
          ],
          correct: 0,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x + y);",
          answers: [
              "8",
              "53",
              "35"
          ],
          correct: 0,
      },
      {
          question: "Which access modifier allows a member to be accessed only within its own class and by derived class methods?",
          answers: [
              "private",
              "protected",
              "Internal"
          ],
          correct: 1,
      },
      {
          question: "What is the purpose of the 'finally' block in C#?",
          answers: [
              "It is executed when an exception occurs",
              "It is always executed regardless of whether an exception occurs or not",
              "It is executed before the 'try' block"
          ],
          correct: 1,
      },
      {
          question: "How do you declare a multi-dimensional array in C#?",
          answers: [
              "int[] arr = new int[3,3];",
              "int[,] arr = new int[3,3];",
              "Both A and B"
          ],
          correct: 2,
      },
      {
          question: "Which keyword is used to prevent a method from being overridden in derived classes?",
          answers: [
              "sealed",
              "override",
              "virtual"
          ],
          correct: 0,
      },
      {
          question: "What is the purpose of the 'checked' keyword in C#?",
          answers: [
              "Checks for null values",
              "Enables overflow checking for arithmetic operations",
              "Enables type checking"
          ],
          correct: 1,
      },
      {
          question: "C# supports both single and multi-line comments.",
          answers: [
              "True",
              "False",
              "Maybe"
          ],
          correct: 0,
      },
      {
          question: "Which keyword is used to declare a class that cannot be instantiated and can only be inherited?",
          answers: [
              "abstract",
              "static",
              "final"
          ],
          correct: 0,
      },
      {
          question: "What is the purpose of the 'volatile' keyword in C#?",
          answers: [
              "It prevents the compiler from optimizing code involving the variable",
              "It makes a variable immutable",
              "It declares a variable as thread-safe"
          ],
          correct: 0,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 10;\nint y = x++;\nConsole.WriteLine(y);",
          answers: [
              "10",
              "11",
              "9"
          ],
          correct: 0,
      },
      {
          question: "What is the output of the following code snippet?\nbool a = true;\nbool b = false;\nConsole.WriteLine(a && b);",
          answers: [
              "true",
              "false",
              "Compilation error"
          ],
          correct: 1,
      },
      {
          question: "What is the output of the following code snippet?\nint[] numbers = { 1, 2, 3, 4, 5 };\nConsole.WriteLine(numbers.Length);",
          answers: [
              "5",
              "6",
              "Compilation error"
          ],
          correct: 0,
      },
      {
          question: "What is the output of the following code snippet?\nstring name = \"John\";\nConsole.WriteLine($\"Hello, {name}!\");",
          answers: [
              "Hello, name!",
              "Hello, John!",
              "Compilation error"
          ],
          correct: 1,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x > y ? \"x is greater\" : \"y is greater\");",
          answers: [
              "x is greater",
              "y is greater",
              "Compilation error"
          ],
          correct: 0,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x.CompareTo(y));",
          answers: [
              "1",
              "0",
              "-1"
          ],
          correct: 0,
      },
      {
          question: "Which class is used to read input from the console in C#?",
          answers: [
              "a. ConsoleReader",
              "b. StreamReader",
              "c. Console"
          ],
          correct: 2,
      },
      {
          question: "What is the purpose of the 'is' keyword in C#?",
          answers: [
              "a. Checks if two objects are the same",
              "b. Checks if an object is of a certain type",
              "c. Checks if an object is null"
          ],
          correct: 1,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 10;\nint y = 5;\nConsole.WriteLine(x / y);",
          answers: [
              "a. 2.5",
              "b. 2.0",
              "c. 2"
          ],
          correct: 2,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 5;\nConsole.WriteLine(x++);",
          answers: [
              "a. 5",
              "b. 6",
              "c. 4"
          ],
          correct: 0,
      },
      {
          question: "What is the output of the following code snippet?\nstring name = null;\nConsole.WriteLine(name ?? \"Default\");",
          answers: [
              "a. null",
              "b. Default",
              "c. Compilation error"
          ],
          correct: 1,
      },
      {
          question: "What is the output of the following code snippet?\nstring[] fruits = { \"apple\", \"banana\", \"orange\" };\nforeach (string fruit in fruits)\n{\n Console.WriteLine(fruit);\n}",
          answers: [
              "a. apple, banana, orange",
              "b. apple banana orange",
              "c. Compilation error"
          ],
          correct: 0,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine(x - y);",
          answers: [
              "a. -2",
              "b. 3",
              "c. 2"
          ],
          correct: 2,
      },
      {
          question: "What is the output of the following code snippet?\nint x = 5;\nint y = 1000;\nConsole.WriteLine(x - y);",
          answers: [
              "a. 990",
              "b. 10",
              "c. 995"
          ],
          correct: 2,
      },
      {
          question: "What does IDE stand for in the context of C# development?",
          answers: ["Integrated Development Environment", "Integrated Debugging Environment", "Interactive Design Environment"],
          correct: 0
        },
        {
          question: "Which of the following is not a valid access modifier in C#?",
          answers: ["public", "private", "hidden"],
          correct: 2
        },
        {
          question: "What is the purpose of the 'async' keyword in C#?",
          answers: ["To define a class as asynchronous", "To mark a method as asynchronous", "To enforce thread synchronization"],
          correct: 1
        },
        {
          question: "Which C# feature allows a method to accept a variable number of arguments?",
          answers: ["params keyword", "varargs keyword", "dynamic keyword"],
          correct: 0
        },
        {
          question: "True or False: C# supports multiple inheritance.",
          answers: ["True", "False", "Sometimes"],
          correct: 1
        },
        {
          question: "What is the purpose of the 'yield' keyword in C#?",
          answers: ["To yield control back to the operating system", "To create an iterator", "To pause execution of a method temporarily"],
          correct: 1
        },
        {
          question: "Which C# collection type ensures unique elements and does not allow duplicates?",
          answers: ["List", "Array", "Set"],
          correct: 2
        },
        {
          question: "What is the purpose of the 'using' statement in C#?",
          answers: ["To include namespaces", "To declare variables", "To manage resources and ensure disposal"],
          correct: 2
        },
        {
          question: "What is the output of the following code snippet?\nint x = 10;\nint y = 3;\nConsole.WriteLine(x / y);",
          answers: ["2.5", "2.0", "2"],
          correct: 2
        },
        {
          question: "In C#, what is the purpose of the 'params' keyword in a method parameter list?",
          answers: ["To indicate optional parameters", "To pass parameters by reference", "To allow a variable number of arguments"],
          correct: 2
        },
        {
          question: "What is the purpose of the 'readonly' keyword in C#?",
          answers: ["To declare a variable constant", "To mark a variable as read-only", "To prevent modification of class members"],
          correct: 1
        },
        {
          question: "Which keyword is used to create an instance of a class in C#?",
          answers: ["new", "create", "instance"],
          correct: 0
        },
        {
          question: "What is the purpose of the 'delegate' keyword in C#?",
          answers: ["To define a new data type", "To declare a method", "To create a reference to a method"],
          correct: 0
        },
        {
          question: "Which C# feature is used to ensure that a resource is released after its use, even if an exception occurs?",
          answers: ["finalizers", "destructors", "finally blocks"],
          correct: 2
        },
        {
          question: "What is the purpose of the 'dynamic' keyword in C#?",
          answers: ["To declare dynamic variables", "To enable dynamic binding", "To create dynamic arrays"],
          correct: 1
        },
        {
          question: "What is the output of the following code snippet?\nint x = 5;\nint y = 3;\nConsole.WriteLine($\"{x} plus {y} equals {x + y}\");",
          answers: ["5 plus 3 equals 8", "8", "Compilation error"],
          correct: 0
        },
        {
          question: "Which C# keyword is used to explicitly throw an exception?",
          answers: ["throw", "raise", "exception"],
          correct: 0
        },
        {
          question: "What is the purpose of the 'lock' statement in C#?",
          answers: ["To synchronize access to a shared resource", "To lock a variable's value", "To prevent memory leaks"],
          correct: 0
        },
        {
          question: "In C#, what is the purpose of the 'partial' keyword?",
          answers: ["To define a partial class", "To declare a class as partially abstract", "To enable partial method implementation"],
          correct: 0
        },
        {
          question: "What is the output of the following code snippet?\nstring[] colors = { \"red\", \"green\", \"blue\" };\nConsole.WriteLine(colors[3]);",
          answers: ["blue", "IndexOutOfRangeException", "Compilation error"],
          correct: 1
        },
        {
          question: "You are designing a class in C# to represent a basic calculator. Which principle of object-oriented programming would you apply to encapsulate the calculator's functionalities and data?",
          answers: ["Inheritance", "Encapsulation", "Polymorphism"],
          correct: 1
      },
      {
          question: "In a C# program, you have a requirement to reuse the implementation of a method across multiple classes. Which OOP concept allows you to achieve this without code duplication?",
          answers: ["Inheritance", "Encapsulation", "Polymorphism"],
          correct: 0
      },
      {
          question: "You are implementing a C# program to model a simple banking system with various account types (e.g., savings account, checking account). Which OOP principle would you use to define common characteristics and behaviors shared among different account types?",
          answers: ["Inheritance", "Encapsulation", "Polymorphism"],
          correct: 0
      },
      {
          question: "While designing a C# class to represent a car, you want to restrict direct access to certain internal attributes (e.g., engine temperature) and only allow access through getter and setter methods. Which OOP concept enables this restriction?",
          answers: ["Inheritance", "Encapsulation", "Polymorphism"],
          correct: 1
      },
      {
          question: "In a C# application, you have a base class called `Shape` with methods `CalculateArea()` and `CalculatePerimeter()`. You want to override these methods in derived classes such as `Circle` and `Rectangle` to provide specific implementations. Which OOP feature allows you to achieve this behavior?",
          answers: ["Inheritance", "Encapsulation", "Polymorphism"],
          correct: 2
      },
      {
          question: "Which C# keyword is used to exit from a method?",
          answers: ["stop", "exit", "return"],
          correct: 2
      },
      
      {
      question: "In C#, what is the purpose of the 'using' statement?",
      answers: ["To declare variables", "To define namespaces", "To ensure proper resource disposal"],
      correct: 2
      },
      {
      question: "You want to declare a constant value in C# that cannot be changed during runtime. Which keyword would you use?",
      answers: ["readonly", "static", "const"],
      correct: 2
      },
      {
      question: "What is the difference between '==' and '.Equals()' when comparing two strings in C#?",
      answers: ["There is no difference", "The '==' operator compares reference equality, while '.Equals()' compares value equality", "The '==' operator compares value equality, while '.Equals()' compares reference equality"],
      correct: 2
      },
      {
      question: "You have two classes in a C# program: 'Parent' and 'Child', where 'Child' inherits from 'Parent'. What access modifier in 'Parent' would prevent 'Child' from accessing a member?",
      answers: ["public", "private", "protected"],
      correct: 1
      },
      {
      question: "In C#, what is the purpose of the 'base' keyword?",
      answers: ["To call a method of the base class", "To initialize base class members", "To access the base class instance"],
      correct: 0
      },
      {
      question: "You are implementing a C# program where you want to execute a block of code only if a condition is true. Which control structure would you use?",
      answers: ["if-else", "for loop", "switch"],
      correct: 0
      },
      {
      question: "What does the 'new' keyword do in C#?",
      answers: ["Declares a new variable", "Creates a new instance of a class", "Defines a new method"],
      correct: 1
      },
      {
      question: "What is the default access modifier for members of a class in C# if no access modifier is specified?",
      answers: ["public", "private", "protected internal"],
      correct: 1
      },
      {
      question: "You are designing a C# class that should not be instantiated directly, but only through its derived classes. Which keyword would you use to enforce this behavior?",
      answers: ["static", "abstract", "sealed"],
      correct: 1
      },
  
      {
      question: "In C#, what is the purpose of the 'using' statement?",
      answers: ["To declare variables", "To define namespaces", "To ensure proper resource disposal"],
      correct: 2
      },
      {
      question: "You want to declare a constant value in C# that cannot be changed during runtime. Which keyword would you use?",
      answers: ["readonly", "static", "const"],
      correct: 2
      },
      {
      question: "What is the difference between '==' and '.Equals()' when comparing two strings in C#?",
      answers: ["There is no difference", "The '==' operator compares reference equality, while '.Equals()' compares value equality", "The '==' operator compares value equality, while '.Equals()' compares reference equality"],
      correct: 2
      },
      {
      question: "You have two classes in a C# program: 'Parent' and 'Child', where 'Child' inherits from 'Parent'. What access modifier in 'Parent' would prevent 'Child' from accessing a member?",
      answers: ["public", "private", "protected"],
      correct: 1
      },
      {
      question: "In C#, what is the purpose of the 'base' keyword?",
      answers: ["To call a method of the base class", "To initialize base class members", "To access the base class instance"],
      correct: 0
      },
      {
      question: "You are implementing a C# program where you want to execute a block of code only if a condition is true. Which control structure would you use?",
      answers: ["if-else", "for loop", "switch"],
      correct: 0
      },
      {
      question: "What does the 'new' keyword do in C#?",
      answers: ["Declares a new variable", "Creates a new instance of a class", "Defines a new method"],
      correct: 1
      },
      {
      question: "What is the default access modifier for members of a class in C# if no access modifier is specified?",
      answers: ["public", "private", "protected internal"],
      correct: 1
      },
      {
      question: "You are designing a C# class that should not be instantiated directly, but only through its derived classes. Which keyword would you use to enforce this behavior?",
      answers: ["static", "abstract", "sealed"],
      correct: 1
      },
      {
          question: "What is the purpose of the 'Math.Floor()' method in C#?",
          answers: ["To round a number to the nearest integer", "To find the absolute value of a number", "To calculate the floor division of two numbers"],
          correct: 0
      },
      {
          question: "What does the 'String.Split()' method in C# do?",
          answers: ["Splits a string into substrings based on a specified separator", "Joins multiple strings into a single string", "Reverses the characters in a string"],
          correct: 0
      },
      {
          question: "You want to convert a string to uppercase in C#. Which method would you use?",
          answers: ["String.ToLower()", "String.ToUpper()", "String.Replace()"],
          correct: 1
      },
      {
          question: "What does the 'Array.Sort()' method in C# do?",
          answers: ["Removes duplicate elements from an array", "Sorts the elements of an array in ascending order", "Reverses the order of elements in an array"],
          correct: 1
      },
      {
          question: "You want to find the index of the first occurrence of a substring within a string in C#. Which method would you use?",
          answers: ["String.IndexOf()", "String.Contains()", "String.Trim()"],
          correct: 0
      },
      {
          question: "What does the 'DateTime.Now' property in C# return?",
          answers: ["The current date", "The current time", "The current date and time"],
          correct: 2
      },
      {
          question: "You want to remove leading and trailing whitespace from a string in C#. Which method would you use?",
          answers: ["String.Trim()", "String.ToLower()", "String.Substring()"],
          correct: 0
      },
      {
          question: "What does the 'Console.WriteLine()' method in C# do?",
          answers: ["Reads input from the console", "Writes output to the console with a newline character", "Writes output to the console without a newline character"],
          correct: 1
      },
      {
          question: "You want to convert a string representation of a number to its integer equivalent in C#. Which method would you use?",
          answers: ["String.ToInt32()", "Int32.Parse()", "String.Format()"],
          correct: 1
      },
      {
          question: "What does the 'List<T>.Add()' method in C# do?",
          answers: ["Removes an item from the list", "Adds an item to the end of the list", "Sorts the list"],
          correct: 1
      },
      {
          question: "What is the purpose of a 'for' loop in C#?",
          answers: ["To execute a block of code repeatedly while a condition is true", "To execute a block of code once and then check a condition", "To execute a block of code repeatedly for a specified number of iterations"],
          correct: 2
      },
      {
          question: "In C#, what does the 'break' keyword do when used inside a loop?",
          answers: ["Exits the loop and continues with the next iteration", "Exits the loop completely", "Skips the current iteration and continues with the next iteration"],
          correct: 1
      },
      {
          question: "What is the purpose of a 'while' loop in C#?",
          answers: ["To execute a block of code once and then check a condition", "To execute a block of code repeatedly for a specified number of iterations", "To execute a block of code repeatedly while a condition is true"],
          correct: 2
      },
      {
          question: "You want to execute a block of code at least once and then repeat it as long as a condition is true. Which loop construct would you use in C#?",
          answers: ["for loop", "while loop", "do-while loop"],
          correct: 2
      },
      {
          question: "What does the 'continue' keyword do in C# when used inside a loop?",
          answers: ["Exits the loop and continues with the next iteration", "Exits the loop completely", "Skips the current iteration and continues with the next iteration"],
          correct: 2
      },
      {
          question: "In C#, what is the difference between a 'while' loop and a 'do-while' loop?",
          answers: ["There is no difference", "A 'do-while' loop always executes its block of code at least once, whereas a 'while' loop may not execute at all", "A 'do-while' loop can only be used with integers"],
          correct: 1
      },
      {
          question: "You want to iterate over the elements of an array in C#. Which loop construct would you typically use?",
          answers: ["for loop", "while loop", "do-while loop"],
          correct: 0
      },
      {
          question: "What is the syntax for a 'foreach' loop in C#?",
          answers: ["foreach (int i = 0; i < 10; i++) { }", "foreach (int i in myArray) { }", "foreach (int i = 0; i++; i < 10) { }"],
          correct: 1
      },
      {
          question: "You want to exit from a loop when a specific condition is met. Which keyword would you use in C#?",
          answers: ["break", "continue", "return"],
          correct: 0
      },
      {
          question: "What is an infinite loop in C#?",
          answers: ["A loop that iterates over a finite range of values", "A loop that never terminates under normal conditions", "A loop that only executes once"],
          correct: 1
      },
      {
          question: "What is an array in C#?",
          answers: ["A collection of elements of the same type stored sequentially in memory", "A dynamic list that can hold elements of different types", "A data structure that stores key-value pairs"],
          correct: 0
      },
      {
          question: "Which method in C# is used to find the index of a specific element in an array?",
          answers: ["Array.FindIndex()", "Array.IndexOf()", "Array.Contains()"],
          correct: 1
      },
      {
          question: "What does the 'Array.Sort()' method do in C#?",
          answers: ["Removes duplicate elements from an array", "Sorts the elements of an array in ascending order", "Reverses the order of elements in an array"],
          correct: 1
      },
      {
          question: "You want to add an element to the end of an array in C#. Which method would you use?",
          answers: ["Array.Push()", "Array.Add()", "Arrays cannot be dynamically resized in C#"],
          correct: 2
      },
      {
          question: "What is the purpose of the 'ArrayList' class in C#?",
          answers: ["To create resizable arrays", "To store key-value pairs", "To perform mathematical operations"],
          correct: 0
      },
      {
          question: "Which method in the 'ArrayList' class is used to add an element to the end of the list?",
          answers: ["Add()", "Insert()", "Append()"],
          correct: 0
      },
      {
          question: "You want to check if an element exists in an 'ArrayList' in C#. Which method would you use?",
          answers: ["Contains()", "Exists()", "IndexOf()"],
          correct: 0
      },
      {
          question: "What is the main difference between an array and an ArrayList in C#?",
          answers: ["Arrays can hold elements of different types, while ArrayList can only hold elements of the same type", "ArrayList can dynamically resize itself, while arrays have fixed sizes", "Arrays have built-in methods for sorting and searching, while ArrayList does not"],
          correct: 1
      },
      {
          question: "You want to remove an element from an 'ArrayList' at a specific index in C#. Which method would you use?",
          answers: ["Remove()", "Delete()", "RemoveAt()"],
          correct: 2
      },
      {
          question: "What does the 'ToArray()' method do in C# when called on an 'ArrayList'?",
          answers: ["Converts the ArrayList to an array of the specified type", "Converts the array to an ArrayList", "Copies the elements of the ArrayList to a new ArrayList"],
          correct: 0
      }
      
      
      
  ];

  const form = document.getElementById("quiz-form");
  const submitButton = document.getElementById("submit-btn");
  const resultsContainer = document.getElementById("results");
  const scoreElement = document.getElementById("score");
  const correctsElement = document.getElementById("correct-answers");

  function startQuiz() {
    const shuffledQuestions = questions
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    shuffledQuestions.forEach((question, questionIndex) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      const questionTitle = document.createElement("h3");
      questionTitle.innerText = `${questionIndex + 1}. ${question.question}`;
      questionElement.appendChild(questionTitle);

      question.answers.forEach((answer, answerIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${questionIndex}`;
        input.value = answerIndex;
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        questionElement.appendChild(label);
        questionElement.appendChild(document.createElement("br"));
      });

      form.appendChild(questionElement);
    });

    submitButton.classList.remove("hide");
  }

  function showResults() {
    const formData = new FormData(form);
    let score = 0;
    const userAnswers = [];
    const shuffledQuestions = questions
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    shuffledQuestions.forEach((question, questionIndex) => {
    const userAnswer = formData.get(`question${questionIndex}`);
    userAnswers.push(userAnswer);
    const correctIndex = question.correct;
    const questionDiv =
    document.getElementsByClassName("question")[questionIndex];

      // Highlight correct answer
    const labels = questionDiv.getElementsByTagName("label");
    labels[correctIndex].classList.add("correct-answer");

    if (userAnswer != null && parseInt(userAnswer) === correctIndex) {
        score++;
      }
    });

    resultsContainer.classList.remove("hide");
    scoreElement.innerText = `Your score: ${score}/${shuffledQuestions.length}`;
  }
    // Store score and correct answers in localStorage
    localStorage.setItem('quizScore', `${score}/${shuffledQuestions.length}`);
    localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));

    // Redirect to the results page
    window.location.href = 'results.html';
    
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    showResults();
    submitButton.classList.add("hide");
  });

  document.addEventListener("DOMContentLoaded", startQuiz);