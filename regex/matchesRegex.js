//Extract Matches


//.match() method extracts the actual match from a regex
// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

"string".match(/regex/); // extracts the string from the regex, it's index, groups etc
/regex/.test("string");// returns wether the regex exists or not

// Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);
//this is me playing with console.log to extract data from result (my last console.log)
console.log(result[0])
console.log(result.index)
console.log()
console.log(result.input)
console.log(result.groups)