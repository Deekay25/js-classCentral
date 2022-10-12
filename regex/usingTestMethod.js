// Using the Test Method

// the test method test wether a string exists using regular expresion
// returns true if it exists and return false if it does not

let myString = "Hello, World!";
let myRegex = /Hello/; // /Hello/ means it is a regular expression
let rex = /mine/;
let result = myRegex; // Change this line
console.log(result.test(myString)); // returns true since the string hello exists in the string
console.log(rex.test(myString)); // returns false
