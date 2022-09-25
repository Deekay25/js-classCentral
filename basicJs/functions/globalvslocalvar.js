//Global vs. Local Scope in Functions
//Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt"; //global variable

function myOutfit() {
  // Only change code below this line
  const outerWear = "Shirt" //local variable
  // Only change code above this line
  return outerWear;
}

myOutfit();
console.log(myOutfit()); // returns  shirt
console.log(outerWear); //returns T-shirt

//the above happened because of order of precedence