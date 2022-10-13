// The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

//difference between "+" and "*"
// + matches one or more
//* matches zero or more
// "Argg" /Aa+/  returns null from the string "Argg" there is no pattern that starts with "Aa"
// "Argg" /Aa*/ retuns A because zero or more characters have been found to match the pattern
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
// Only change code below this line
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line
// Aaaaaaaaaaaaaaaarrrgh!
let result = chewieQuote.match(chewieRegex);
console.log(result)