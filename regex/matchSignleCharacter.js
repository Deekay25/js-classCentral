// Match Single Character with Multiple Possibilities

// to match a single character you can use [] then insert the characters

// For example, you want to match bag, big, and bug but not bog.
// You can create the regex /b[aiu]g/ to do this.
// The [aiu] is the character class that will only match the characters a, i, or u.

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result.test(quoteSample))
// console.log(quoteSample.match(result))
console.log(result); //returns all vowels in the string
