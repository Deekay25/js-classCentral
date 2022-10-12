// Using the Test Method

// the test method test wether a string exists using regular expresion
// returns true if it exists and return false if it does not
// regular expressions are case sensitive

let myString = "Hello, World!";
let myRegex = /Hello/; // /Hello/ means it is a regular expression
let rex = /mine/;
let result = myRegex; // Change this line
//result.test(myString) means that check if the string "Hello" exists in myString
console.log(result.test(myString)); // returns true since the string hello exists in the string
console.log(rex.test(myString)); // returns false
