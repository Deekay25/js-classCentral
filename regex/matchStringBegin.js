//Match Beginning String Patterns

// a caret is used to achieve this
//this means that check the string only at the beginning  if it matches then return it
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // returns true | returns Cal
//it also matches any string in ascending order as seen below
// let calRegex = /^Cal and/; // returns true | returns Cal and
let result = calRegex.test(rickyAndCal);
console.log(result);
