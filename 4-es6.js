//Summary Card Variables.js, Data-types & Operators.js
// 1. Variables in JavaScript

// Variables are used to store data in JavaScript.
// They can be declared using the var, let, or const keywords.
// The var keyword is function-scoped and can be redeclared and updated, while let and const are block-scoped.
// The let keyword allows you to declare variables that can be updated but not redeclared, while const is used for variables that cannot be updated or redeclared.
// for example: var x = 10; console.log(x); // Output: 10 (x is declared using var)
// for example: let y = 20; console.log(y); // Output: 20 (y is declared using let)
// for example: const z = 30; console.log(z); // Output: 30 (z is declared using const)

// 2. Data Types in JavaScript

// JavaScript has several data types, including:
// - Primitive data types: string, number, boolean, null, undefined, symbol

// string: used to represent text, enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
// number: used to represent numeric values, including integers and floating-point numbers.
// boolean: used to represent logical values, either true or false.
// null: represents the intentional absence of any object value.
// undefined: represents a variable that has been declared but has not been assigned a value.
// symbol: used to create unique identifiers for objects.

// - Non-primitive data types: object, array, function

// object: used to store collections of data and more complex entities, defined using curly braces { }.
// array: a special type of object used to store ordered collections of data, defined using square brackets [ ].
// function: a block of code designed to perform a particular task, defined using the function keyword or as an arrow function.

// It is important to understand the different data types in JavaScript, as they determine how values are stored and manipulated in the language.
// for example: let str = "Hello"; console.log(typeof str); // Output: "string" (str is a string)
// for example: let num = 42; console.log(typeof num); // Output: "number" (num is a number)
// for example: let bool = true; console.log(typeof bool); // Output: "boolean" (bool is a boolean)
// for example: let n = null; console.log(typeof n); // Output: "object" (n is null, but its type is still "object" in JavaScript)
// for example: let u; console.log(typeof u); // Output: "undefined" (u is undefined)
// for example: let sym = Symbol('foo'); console.log(typeof sym); // Output: "symbol" (sym is a symbol)
// for example: let obj = { name: "Alice", age: 30 }; console.log(typeof obj); // Output: "object" (obj is an object)
// for example: let arr = [1, 2, 3]; console.log(typeof arr); // Output: "object" (arr is an array, but its type is still "object" in JavaScript)
// for example: function greet() { return "Hello"; } console.log(typeof greet); // Output: "function" (greet is a function)

// 3. Operators in JavaScript

// Operators are used to perform operations on variables and values in JavaScript.
// They include arithmetic operators, assignment operators, comparison operators, logical operators, bitwise operators, the ternary operator, and type operators.
// for example: let x = 10; let y = 5; console.log(x + y); // Output: 15 (using the addition operator)
// for example: let x = 10; x += 5; console.log(x); // Output: 15 (using the compound assignment operator)
// for example: let x = 10; let y = "10"; console.log(x == y); // Output: true (using the equality operator)

// Steps to setup to variables in JavaScript
// 1. Declare a variable using var, let, or const.
// 2. Assign a value to the variable using the assignment operator (=).
// 3. Use the variable in your code as needed.

// Example:
// Step 1: Declare a variable
let name;
// Step 2: Assign a value to the variable
name = "Alice";
// Step 3: Use the variable
console.log(name); // Output: "Alice" (the variable name is used to store and display the value "Alice")

//Types of Variables in JavaScript
// 1. var: The var keyword is function-scoped and can be redeclared and updated. It is the oldest way to declare variables in JavaScript.
// for example: var x = 10; console.log(x); // Output: 10 (x is declared using var)
// for example: var x = 20; console.log(x); // Output: 20 (x is redeclared and updated using var)
// 2. let: The let keyword is block-scoped and can be updated but not redeclared. It was introduced in ES6 (ECMAScript 2015) to provide better scoping rules for variables.
// for example: let y = 30; console.log(y); // Output: 30 (y is declared using let)
// for example: y = 40; console.log(y); // Output: 40 (y is updated using let)
// 3. const: The const keyword is block-scoped and cannot be updated or redeclared. It is used for variables that should not change after they are assigned a value.
// for example: const z = 50; console.log(z); // Output: 50 (z is declared using const)
// for example: z = 60; // This will throw an error because z is a constant and cannot be updated

//Variable Selection Philosophy
// When selecting variable names in JavaScript, it is important to choose descriptive and meaningful names that accurately represent the data they hold. This helps improve code readability and maintainability. Here are some guidelines for selecting variable names:
// 1. Use camelCase: In JavaScript, it is common practice to use camelCase for variable names, where the first word is lowercase and subsequent words are capitalized (e.g., myVariableName).
// 2. Be descriptive: Choose variable names that clearly indicate the purpose or content of the variable (e.g., let userName = "Alice"; instead of let x = "Alice";).
// 3. Avoid reserved keywords: Do not use JavaScript reserved keywords (e.g., let, const, var, function) as variable names.
// 4. Keep it concise: While being descriptive, try to keep variable names concise and avoid unnecessary words (e.g., let age instead of let userAge).
// 5. Use meaningful abbreviations: If you need to use abbreviations, make sure they are commonly understood and do not sacrifice clarity (e.g., let numItems instead of let nItems).   
// 6. Avoid single-letter variable names: Unless it is a common convention (e.g., i for loop index), avoid using single-letter variable names as they can be unclear and make the code harder to understand.
// Example of good variable naming:
let userName = "Alice"; 
let userAge = 30;
let isLoggedIn = true;

// Example of bad variable naming:
let x = "Alice";
let y = 30;
let z = true;

//Variable Declaration and Initialization

// Variable declaration is the process of creating a variable and giving it a name. In JavaScript, you can declare a variable using the var, let, or const keywords.
// Variable initialization is the process of assigning a value to a variable at the time of declaration. You can also declare a variable without initializing it, and assign a value later.
// for example: let age; // Variable declaration without initialization
// for example: age = 25; // Variable initialization after declaration
// for example: let name = "Alice"; // Variable declaration and initialization in one step

//Variables In Action
// Here is an example of how variables can be used in a simple JavaScript program to calculate the Body Mass Index (BMI):
let weight = 80; // weight in kilograms
let height = 175; // height in centimeters
let bmi = weight / ((height / 100) ** 2); // calculate BMI
console.log(bmi); // Output: 26.122448979591837

// In summary, variables are essential for storing and manipulating data in JavaScript.
// Choosing meaningful variable names and understanding the different types of variables and data types can help you write clearer and more maintainable code.

// BMI Project
// BMI setup tutorial guidance
// 1. Define the variables for weight, height, gender, and BMI category.
// 2. Calculate the BMI using the formula: BMI = weight (kg) / (height (m))^2.
// 3. Determine the BMI category based on the calculated BMI value using standard BMI classification.
// 4. Display the calculated BMI and the corresponding BMI category to the user.
// Example code for BMI calculation:
let weight = 80;
let height = 175;
let gender = `M`;
let bmiCategory = "";
let bmi = weight / ((height / 100) ** 2); // Calculate BMI

// Determine BMI category
if (bmi < 18.5) {
    bmiCategory = "Underweight";
}   
else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
}
else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
}   
else {
    bmiCategory = "Obesity";
}
console.log(`Your BMI is ${bmi.toFixed(2)} and you are classified as ${bmiCategory}.`); // Output: Your BMI is 26.12 and you are classified as Overweight.

