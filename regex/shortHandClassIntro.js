//very important
// Match All Letters and Numbers

// [] is called character classes
// \w is called shorthand character classes

//[A-Za-z0-9_] === \w
// \w is will eqaul all alphabets caps and samll and numbers

//very important below
// /\w+/g returns words from a string 
// /\w/g returns character by character from a string 

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result); // the length returns 31

