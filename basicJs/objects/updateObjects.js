//Updating Object Properties
// Update the myDog object's name property. 
// Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
// console.log(myDog["friends"][0]);
console.log(myDog["friends"].push("I made it"));
console.log(myDog);