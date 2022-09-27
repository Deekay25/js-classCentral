//important exercise
//learning hasOwnProperty
//It returns true or false
//Testing Objects for Properties
// Modify the function checkObj to test if an object passed to the function (obj) 
// contains a specific property (checkProp). If the property is found, return that property's value. 
// If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}

//solution

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")); // returns pony
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") // returns not found

