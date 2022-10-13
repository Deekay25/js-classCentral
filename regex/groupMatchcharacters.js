//matches a character that occurs one or more times
// For example, /a+/g would find one match in abc and return ["a"].
//  Because of the +, it would also find a single match in aabc and return ["aa"].

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);