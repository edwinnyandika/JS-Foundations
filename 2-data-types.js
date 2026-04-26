// Data types in JavaScript
// 1. String: A sequence of characters enclosed in quotes (e.g., "Hello, World!").
// 2. Number: A numerical value that can be an integer or a floating-point number (e.g., 42, 3.14).
// 3. Boolean: A logical value that can be either true or false (e.g., true, false).
// 4. Null: A special value that represents the absence of any object value (e.g., null).
// 5. Undefined: A variable that has been declared but has not been assigned a value (e.g., undefined).
// 6. Symbol: A unique and immutable primitive value that can be used as a key for object properties (e.g., Symbol('description')).
// 7. BigInt: A numeric data type that can represent integers with arbitrary precision (e.g., 9007199254740991n).
// In JavaScript, there are seven primitive data types: string, number, boolean, null, undefined, symbol, and bigint. Each of these data types represents a different kind of value that can be stored in a variable. Understanding these data types is essential for working with JavaScript effectively.

//STRING DATA TYPE //
//string = a series of characters enclosed in quotes
//for example: let name1 = 'John Doe';, the string is 'John Doe'.
// In let name2 = "John Doe";, the string is "John Doe".
// Both name1 and name2 will contain the same string value "John Doe", and you can use either single or double quotes based on your preference or to avoid conflicts with the content of the string (e.g., using double quotes if the string contains a single quote).
//For example:let name1 = 'John Doe'; let name2 = "John Doe"; console.log(name1); console.log(name2);

//NOTE: Both name1 and name2 will output "John Doe" when printed to the console, demonstrating that single and double quotes can be used interchangeably for defining strings in JavaScript.

//NUMBER DATA TYPE //
//number = a numerical value that can be an integer or a floating-point number
//for example: let x = 500; let y = 500; console.log(x + y); // output: 1000
// In JavaScript, numbers can be represented in various formats, including integers (e.g., 42), floating-point numbers (e.g., 3.14), and even special numeric values like Infinity and NaN (Not-a-Number). JavaScript uses the IEEE 754 standard for representing numbers, which allows for a wide range of values but can also lead to precision issues with very large or very small numbers. Understanding how numbers work in JavaScript is crucial for performing mathematical operations and handling numerical data effectively.

//BOOLEAN DATA TYPE //
//boolean = a logical value that can be either true or false
//for example: let online = true; let offline = false; console.log(online); console.log(offline); // output: true false
// In JavaScript, the boolean data type represents a logical entity that can have one of two values: true or false. Booleans are often used in conditional statements and control flow to determine the execution of code based on certain conditions. For example, you might use a boolean variable to track whether a user is logged in or not, and then use that variable to show or hide certain elements on a webpage. Understanding how to work with booleans is essential for writing effective JavaScript code that can make decisions and respond to user <interactions class=""></interactions>
// In JavaScript, the boolean data type is a fundamental part of the language and is used to represent truth values. It is commonly used in conditional statements (like if statements) and loops to control the flow of the program based on certain conditions. For example, you might have a boolean variable called "isLoggedIn" that is set to true when a user is logged in and false when they are not. This variable can then be used to determine whether to display certain content or allow access to certain features on a website. Understanding how to use booleans effectively is crucial for writing logical and functional JavaScript code.

//NULL DATA TYPE //
//null = a special value that represents the absence of any object value
//for example: let emptyValue = null; console.log(emptyValue); // output: null
// In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property is intentionally left empty. For example, you might use null to initialize a variable that will later hold an object, or to indicate that a function does not return a meaningful value. It's important to note that null is different from undefined; while null represents an intentional absence of value, undefined indicates that a variable has been declared but has not yet been assigned a value. Understanding the difference between null and undefined is crucial for writing clear and effective JavaScript code.
// In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property is intentionally left empty. For example, you might use null to initialize a variable that will later hold an object, or to indicate that a function does not return a meaningful value. It's important to note that null is different from undefined; while null represents an intentional absence of value, undefined indicates that a variable has been declared but has not yet been assigned a value. Understanding the difference between null and undefined is crucial for writing clear and effective JavaScript code.

//UNDEFINED DATA TYPE //
//undefined = a special value that represents the absence of any assigned value
//for example: let undefinedValue; console.log(undefinedValue); // output: undefined
// In JavaScript, undefined is a primitive value that represents the absence of any assigned value. It is often used to indicate that a variable has been declared but has not yet been assigned a value. For example, if you declare a variable without initializing it, it will have the value of undefined. It's important to note that undefined is different from null; while null represents an intentional absence of value, undefined indicates that a variable has been declared but has not yet been assigned a value. Understanding the difference between null and undefined is crucial for writing clear and effective JavaScript code.
// In JavaScript, undefined is a primitive value that represents the absence of any assigned value. It is often used to indicate that a variable has been declared but has not yet been assigned a value. For example, if you declare a variable without initializing it, it will have the value of undefined. It's important to note that undefined is different from null; while null represents an intentional absence of value, undefined indicates that a variable has been declared but has not yet been assigned a value. Understanding the difference between null and undefined is crucial for writing clear and effective JavaScript code.

//SYMBOL DATA TYPE //
//symbol = a unique and immutable primitive value that can be used as a key for object properties
//for example: let sym1 = Symbol('description'); let sym2 = Symbol('description'); console.log(sym1 === sym2); // output: false
// In JavaScript, the symbol data type is a primitive value that represents a unique and immutable identifier. Symbols are often used as keys for object properties to ensure that they are unique and do not conflict with other property keys. For example, you might use a symbol to create a private property on an object that cannot be accessed or modified from outside the object. Symbols can also be used to create constants or to define well-known symbols that have special meaning in the language (e.g., Symbol.iterator). Understanding how to use symbols effectively can help you write more robust and maintainable JavaScript code.
// In JavaScript, the symbol data type is a primitive value that represents a unique and immutable identifier. Symbols are often used as keys for object properties to ensure that they are unique and do not conflict with other property keys. For example, you might use a symbol to create a private property on an object that cannot be accessed or modified from outside the object. Symbols can also be used to create constants or to define well-known symbols that have special meaning in the language (e.g., Symbol.iterator). Understanding how to use symbols effectively can help you write more robust and maintainable JavaScript code.

//BIGINT DATA TYPE //
//bigint = a primitive value that can represent integers larger than the range of the Number data type
//for example: let bigNumber = 123456789012345678901234567890n; console.log(bigNumber); // output: 123456789012345678901234567890n
// In JavaScript, the bigint data type is a primitive value that can represent integers larger than the range of the Number data type. It is often used when you need to perform calculations with very large numbers that exceed the limits of the standard Number type. For example, you might use a bigint to represent the number of atoms in the universe or other extremely large values. Understanding how to use bigints effectively can help you write more robust and maintainable JavaScript code.
// In JavaScript, the bigint data type is a primitive value that can represent integers larger than the range of the Number data type. It is often used when you need to perform calculations with very large numbers that exceed the limits of the standard Number type. For example, you might use a bigint to represent the number of atoms in the universe or other extremely large values. Understanding how to use bigints effectively can help you write more robust and maintainable JavaScript code.

