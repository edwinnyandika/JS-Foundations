//QUICK EXERCISES IN JAVASCRIPT
//Quiz; 1
// Exercise 1: SUM TWO NUMBERS

let x = 5;
let y = 10;
let z = x + y;
console.log(z);

// Exercise 2: DIFFERENCE BETWEEN TWO NUMBERS

let a = 15;
let b = 7;
let c = a - b;
console.log(c);

// Exercise 3: PRODUCT OF TWO NUMBERS

let d = 6;
let e = 8;
let f = d * e;
console.log(f); 

// Exercise 4: DIVISION/QUOTIENT OF TWO NUMBERS

let g = 20;
let h = 4;
let i = g / h;
console.log(i);

//2. Exercise 5: REMAINDER OF TWO NUMBERS

let j = 17;
let k = 5;
let l = j % k;
console.log(l);

//3. Exercise 6: SHORTHAND OPERATORS
let xy = 10;
xy += 5; // x = x + 5; x is now 15
xy *= 3; // x = x * 3; x is now 45
console.log(xy);

//4. Exercise 7: Type Coercion 
let m = "5" + 2; // m is "52" (string concatenation)
let n = "5" - 2; // n is 3 (string "5" is coerced to number 5)
console.log(m);// Output: "52" - actual string not a number (string concatenation joined "5" and 2 as strings)
console.log(n); // Output: 3 - actual number (string "5" is coerced to number 5)

//N/B : In the first case, the + operator is used for string concatenation because one of the operands is a string. In the second case, the - operator is used for subtraction, and the string "5" is coerced to a number before the operation is performed.

// concatenation; is the process of joining two or more strings together. In JavaScript, the + operator is used for string concatenation. When you use the + operator with strings, it combines them into a single string. For example:
let str1 = "Hello, ";
let str2 = "world!";
let result = str1 + str2;
console.log(result); // Output: "Hello, world!" (the two strings are concatenated together)

//interpolation; is the process of embedding expressions within string literals. In JavaScript, you can use template literals (enclosed in backticks ``) to perform string interpolation. Within a template literal, you can include expressions inside ${} which will be evaluated and included in the resulting string. For example:
let name = "Alice";
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: "My name

// 5. Exercise 8: TYPE CONVERSION
let p = "100";
let r = 50;
let q = Number(p); // q is 100 (number)
let ry = String(r);` // r is "50" (string)`
console.log(q); // Output: 100 (number)
console.log(r); // Output: "50" (string)

// 6. Exercise 9: equality and strict equality
let s = 5;
let t = "5";
console.log(s == t); // Output: true (because of type coercion)
console.log(s === t); // Output: false (because they are of different types)

// In the first case, the == operator performs type coercion and considers s and t equal because they have the same value after coercion. In the second case, the === operator does not perform type coercion and considers s and t different because they are of different types (number vs string).
// equality (==) checks for value equality with type coercion, while strict equality (===) checks for both value and type equality without coercion.

//7. Exercise 10: SIMPLE INTEREST
// Simple Interest = (Principal * Rate * Time) / 100
let principal = 1000;
let rate = 5;
let time = 2;
let simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest); // Output: 100