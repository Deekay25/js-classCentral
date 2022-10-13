// Match from Ending of a String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegext = /caboose$/; //returns true
let lastRegex = /the caboose$/; // returns true
let result = lastRegex.test(caboose);
console.log(result);