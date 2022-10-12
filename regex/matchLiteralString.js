// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

// problem
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /search/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);
// solution
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
let wrong = /aldo/;
console.log(result)
console.log(wrong.test(waldoIsHiding)) // returns true
// it returns true because "aldo" is a match literal in the string WaldoIsHiding