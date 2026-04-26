// variables = a container that stores a values
// Variables behave as if they were the value they contain
// variable names need to be unique and cannot be reserved keywords
// string = a series of characters enclosed in quotes
// number = a numerical value that can be an integer or a floating-point number
// boolean = a logical value that can be either true or false
// escape characters = a character that is used to represent a special character in a string, such as a newline or a tab

// Common JavaScript Punctuators

// 1. The equal sign "=" in JavaScript is the assignment operator, used to store values in variables.
// 2. The plus sign "+" in JavaScript is the addition operator, used to add numbers or concatenate strings.
// 3. The minus sign "-" in JavaScript is the subtraction operator, used to subtract numbers.
// 4. The asterisk "*" in JavaScript is the multiplication operator, used to multiply numbers.
// 5. The forward slash "/" in JavaScript is the division operator, used to divide numbers.
// 6. The percent sign "%" in JavaScript is the modulus operator, used to find the remainder of a division operation.
// 7. The double equal sign "==" in JavaScript is the equality operator, used to compare two values for equality, performing type coercion if necessary.
// 8. The triple equal sign "===" in JavaScript is the strict equality operator, used to compare two values for equality without performing type coercion.
// 9. The exclamation mark "!" in JavaScript is the logical NOT operator, used to negate a boolean value.
// 10. The double ampersand "&&" in JavaScript is the logical AND operator, used to combine two boolean expressions and returns true if both expressions are true.
// 11. The double vertical bar "||" in JavaScript is the logical OR operator, used to combine two boolean expressions and returns true if at least one of the expressions is true.



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

// If you want to include a single quote (') in your string, you can use double quotes (") to define the string. For example: let quote = "It's a beautiful day!";
// output: It's a beautiful day!
// If you want to include a double quote (") in your string, you can use single quotes (') to define the string. For example: let quote2 = 'She said, "Hello!"';
// output: She said, "Hello!"


//2. Using an escape character

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

//3. Using template literals

// Template literals allow you to include both single and double quotes without the need for escaping them. For example: let quote =    `He said, "I learned from freeCodeCamp!"`;
// output: He said, "I learned from freeCodeCamp!"
// Template Literals are string literals that allow you to embed expressions inside a string, using the syntax ${expression}. They also allow for multi-line strings without the need for escape characters. For example: let message = `This is a multi-line string. It can span multiple lines without the need for escape characters.`; console.log(message);
// output: This is a multi-line string. It can span multiple lines without the need for escape characters.
// In JavaScript, template literals are strings literals that allow use of embed expressions, multi-line strings, and string interpolation features with a more readable syntax. 
// Template literals are enclosed by backticks (`) instead of single or double quotes. 
// They can contain placeholders for variables and expressions, which are indicated by the ${} syntax. 
// For example: let name = "John"; let greeting = `Hello, ${name}!`; console.log(greeting);
// Output: Hello, John!

//Types of variables in JavaScript
// 1. var = a variable that can be redeclared and updated, but has function scope
// 2. let = a variable that can be updated but not redeclared, and has block scope
// 3. const = a variable that cannot be updated or redeclared, and has block scope

//variables selection philosophy
// 1. Use const by default, unless you know that the variable's value needs to change, in which case use let.
// 2. Avoid using var, as it can lead to unexpected behavior due to its function scope and hoisting.
// 3. Choose descriptive variable names that clearly indicate the purpose of the variable, making your code more readable and maintainable.

//VARIABLE NAMING CONVENTIONS

// In JavaScript, variable naming conventions are important for writing clear and maintainable code. Here are some common conventions to follow when naming variables:
// 1. Variable names must begin with a letter, underscore (_), or dollar sign ($). They cannot start with a number.
// 2. Variable names can contain letters, numbers, underscores, and dollar signs, but cannot contain spaces or special characters.
// 3. Variable names are case-sensitive, meaning that "myVariable" and "myvariable" would be considered different variables.
// 4. Use camelCase for variable names, where the first word is lowercase and subsequent words are capitalized (e.g., myVariableName).
// 5. Avoid using reserved keywords as variable names (e.g., let, const, var, if, else, etc.).
// 6. Choose descriptive variable names that clearly indicate the purpose of the variable, making your code more readable and maintainable.
// 7. Avoid using single-letter variable names except for loop counters or when the context is clear (e.g., i for index in a loop).
// By following these conventions, you can improve the readability and maintainability of your JavaScript code, making it easier for yourself and others to understand and work with your code in the future.

//VARIABLE NAMING RULES

// In JavaScript, there are specific rules that govern how variables can be named. These rules include:
// 1. Variable names must begin with a letter, underscore (_), or dollar sign ($). They cannot start with a number.
// 2. Variable names can contain letters, numbers, underscores, and dollar signs, but cannot contain spaces or special characters.
// 3. Variable names are case-sensitive, meaning that "myVariable" and "myvariable" would be considered different variables.
// 4. Variable names cannot be the same as reserved keywords (e.g., let, const, var, if, else, etc.).
// 5. Variable names should be descriptive and meaningful, indicating the purpose of the variable.
// 6. Avoid using single-letter variable names except for loop counters or when the context is clear (e.g., i for index in a loop).
// By following these rules, you can ensure that your variable names are valid and that your code is more readable and maintainable.

