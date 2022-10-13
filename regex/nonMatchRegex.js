//negated character sets. denonted by ^

// the program below all that in the string
//except 0-9 and vowels
// [^thingsThatWillNotBeMatched] 
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aioeu]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
let result2 = myRegex.test(quoteSample);
console.log(result);
console.log(result2);

