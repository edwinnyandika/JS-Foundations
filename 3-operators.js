// Types of Operators in JavaScript

// 1. Arithmetic Operators: +, -, *, /, %, ++, --

// Arithmetic operators are used to perform mathematical operations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), increment (++), and decrement (--).
//for example: let x = 10; let y = 5; console.log(x + y); // Output: 15 
// for example: let x = 10; let y = 5; console.log(x - y); // Output: 5
// for example: let x = 10; let y = 5; console.log(x * y); // Output: 50
// for example: let x = 10; let y = 5; console.log(x / y); // Output: 2
// for example: let x = 10; let y = 3; console.log(x % y); // Output: 1

// 2. Assignment Operators: =, +=, -=, *=, /=, %=

// Assignment operators are used to assign values to variables. They include the simple assignment operator (=) and compound assignment operators (+=, -=, *=, /=, %=).
// for example: let x = 10; x += 5; console.log(x); // Output: 15 (equivalent to x = x + 5)
// for example: let x = 10; x -= 5; console.log(x); // Output: 5 (equivalent to x = x - 5)
// for example: let x = 10; x *= 5; console.log(x); // Output: 50 (equivalent to x = x * 5)
// for example: let x = 10; x /= 5; console.log(x); // Output: 2 (equivalent to x = x / 5)
// for example: let x = 10; x %= 3; console.log(x); // Output: 1 (equivalent to x = x % 3)

// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

// Comparison operators are used to compare two values and return a boolean result (true or false). They include equality (==), strict equality (===), inequality (!=), strict inequality (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).
// for example: let x = 10; let y = "10"; console.log(x == y); // Output: true (because of type coercion)
// for example: let x = 10; let y = "10"; console.log(x === y); // Output: false (because they are of different types)

// 4. Logical Operators: &&, ||, !

// Logical operators are used to combine or negate boolean expressions. They include logical AND (&&), logical OR (||), and logical NOT (!).    
// for example: let a = true; let b = false; console.log(a && b); // Output: false (because both a and b need to be true for the result to be true)
// for example: let a = true; let b = false; console.log(a || b); // Output: true (because at least one of a or b is true)
// for example: let a = true; console.log(!a); // Output: false (because ! negates the value of a)

// 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>

// Bitwise operators are used to perform operations on the binary representations of numbers. They include bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift (<<), right shift (>>), and unsigned right shift (>>>).
// for example: let x = 5; let y = 3; console.log(x & y); // Output: 1 (binary 0101 & 0011 = 0001)
// for example: let x = 5; let y = 3; console.log(x | y); // Output: 7 (binary 0101 | 0011 = 0111)
// for example: let x = 5; let y = 3; console.log(x ^ y); // Output: 6 (binary 0101 ^ 0011 = 0110)
// for example: let x = 5; let y = 3; console.log(x ~ y); // Output: -4 (binary 0101 ~ 0011 = 1100)

// 6. Ternary Operator: condition ? expressionIfTrue : expressionIfFalse

// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is: condition ? expressionIfTrue : expressionIfFalse.
// for example: let age = 18; let canVote = (age >= 18) ? "Yes" : "No"; console.log(canVote); // Output: Yes (because age is greater than or equal to 18)
// for example: let age = 16; let canVote = (age >= 18) ? "Yes" : "No"; console.log(canVote); // Output: No (because age is less than 18)

// 7. Type Operators: typeof, instanceof

// Type operators are used to determine the type of a value or to check if an object is an instance of a particular class. They include the typeof operator, which returns a string indicating the type of a value, and the instanceof operator, which checks if an object is an instance of a specific class.
// for example: let x = 10; console.log(typeof x); // Output: "number" (because x is a number)
// for example: let str = "Hello"; console.log(typeof str); // Output: "string" (because str is a string)
// for example: let arr = [1, 2, 3]; console.log(typeof arr); // Output: "object" (because arrays are a type of object in JavaScript)
// for example: let date = new Date(); console.log(date instanceof Date); // Output: true (because date is an instance of the Date class)

// 8. Spread Operator: ...

// The spread operator is used to expand an iterable (like an array or a string) into individual elements. It is denoted by three dots (...). The spread operator can be used in various contexts, such as function calls, array literals, and object literals.
// for example: let arr1 = [1, 2, 3]; let arr2 = [...arr1, 4, 5]; console.log(arr2); // Output: [1, 2, 3, 4, 5] (the spread operator expands arr1 into individual elements)
// for example: function sum(a, b, c) { return a + b + c; } let numbers = [1, 2, 3]; console.log(sum(...numbers)); // Output: 6 (the spread operator expands the numbers array into individual arguments for the sum function)
     
// 9. Shorthand Operators
// Shorthand operators are a convenient way to perform an operation and assignment in a single step. They include +=, -=, *=, /=, and %=, which combine the arithmetic operation with assignment.
// for example: let x = 10; x += 5; console.log(x); // Output: 15 (equivalent to x = x + 5)
// for example: let x = 10; x -= 5; console.log(x); // Output: 5 (equivalent to x = x - 5)
// for example: let x = 10; x *= 5; console.log(x); // Output: 50 (equivalent to x = x * 5)
// for example: let x = 10; x /= 5; console.log(x); // Output: 2 (equivalent to x = x / 5)
// for example: let x = 10; x %= 3; console.log(x); // Output: 1 (equivalent to x = x % 3)
 
let x;
x = 10; // assignment operator
x += 5; // equivalent to x = x + 5
