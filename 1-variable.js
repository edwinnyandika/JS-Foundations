// variables = a container that stores a values
// Variables behave as if they were the value they contain
// variable names need to be unique and cannot be reserved keywords
// string = a series of characters enclosed in quotes
// number = a numerical value that can be an integer or a floating-point number
// boolean = a logical value that can be either true or false
// escape characters = a character that is used to represent a special character in a string, such as a newline or a tab

// There is two steps to setup a variable
// 1. Declare a variable[Declaration]
// 2. Assign a value to the variable[Assignment]

// 1. Declare a variable[Declaration]
// for example:  [let x; let x;] - this is wrong because we cannot declare a variable with the same name twice
// for example:  [let x; let y;] - this is correct because we are declaring variables named x and y
// for example:  [let x;] - this is correct because we are declaring a variable named x
// for example: let x; x = 100; - this is correct because we are declaring a variable named x and then assigning it a value of 100
// for example: let x = 100; - this is correct because we are declaring a variable named x and assigning it a value of 100 in one step

// 2. Assign a value to the variable[Assignment]
// for example: let x; x = 100; - this is correct because we are declaring a variable named x and then assigning it a value of 100
// for example: let x = 100; - this is correct because we are declaring a variable named x and assigning it a value of 100 in one step           

// In Javascript, template literals are strings literals that allow use of embed expressions, multi-line strings, and string interpolation features with a more readable syntax. 
// Template literals are enclosed by backticks (`) instead of single or double quotes. 
// They can contain placeholders for variables and expressions, which are indicated by the ${} syntax. 
// For example: let name = "John"; let greeting = `Hello, ${name}!`; console.log(greeting);
// Output: Hello, John!

// Template literals also allow for multi-line strings without the need for escape characters.
// For example: let message = `This is a multi-line string. It can span multiple lines without the need for escape characters.`; console.log(message);
// Output: This is a multi-line string. It can span multiple lines without the need for escape characters.
// escape characters examples; 
// \n = newline
// \t = tab
// \\ = backslash
// \" = double quote
// \' = single quote

// strings //
// string is a data type representing a sequence of characters that may consist of letters, numbers, symbols, words, or sentences.
// Strings are used to represent text-based data and are mostly defined using either single quotes (') or double quotes (").
// Both single quotes (' ') and double quotes (" ") work identically in JavaScript to define a string.
// for example: let name = `John Doe`; let name = "John Doe"; The string "John Doe" can be defined using either single quotes or double quotes, and both will produce the same result when printed to the console.
// In let name1 = 'John Doe';, the string is 'John Doe'.
// In let name2 = "John Doe";, the string is "John Doe".
// Both name1 and name2 will contain the same string value "John Doe", and you can use either single or double quotes based on your preference or to avoid conflicts with the content of the string (e.g., using double quotes if the string contains a single quote).

// In JavaScript, if you need to include quotes or apostrophes within a string, there are three major ways to fix the error. These methods are:

//1. By using the opposite string syntax

//2. Using an escape character

//3. Using template literals

//1. By using the opposite string syntax
// If you want to include a single quote (') in your string, you can use double quotes (") to define the string. For example: let quote = "He said, "I learned from freeCodeCamp!""; 
// output: Uncaught SyntaxError: Unexpected identifier 'I' 
// To fix this error, you can use single quotes to define the string instead: let quote = 'He said, "I learned from freeCodeCamp!"';
// output: He said, "I learned from freeCodeCamp!"

//This means if you use double quotes to wrap your string, you can use an apostrophe within the string. Also if you wrap your string in single quotes, then you can use double quotes within the string.
// For example: let quote2 = 'He said, "I learned from codeacademy!"';
// output: He said, "I learned from codeacademy!"
// But there are limitations to this because what if you have to use a quote and an apostrophe within the same string? Then you can use an escape character (\).
// for example: let quote3 = "He said, \"I learned from freeCodeCamp!\"";
// output: He said, "I learned from freeCodeCamp!"
