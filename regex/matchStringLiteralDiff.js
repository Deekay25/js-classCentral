// Match a Literal String with Different Possibilities

// using alternation or OR operator to search for possibilities ("|")
// the operator works more like /yes|no|maybe/

// Complete the regex petRegex to match the pets dog, cat, bird, or fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);