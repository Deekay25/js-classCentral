// Ignore Case While Matching
// we use flags to ignore case sensitivity
// the i flag is used to ignore capital and small letters


// Write a regex fccRegex to match freeCodeCamp, no matter its case. 
// Your regex should not match any abbreviations or variations with spaces.
let myString = "freeCodeCamp";
let fccRegex = /freeCodECamp/i; //i flag stands for insensitive
let result = fccRegex.test(myString);
console.log(result); // returns true does not care of capital or small letter