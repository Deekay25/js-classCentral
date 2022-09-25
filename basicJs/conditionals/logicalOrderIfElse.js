// This is important
// Start with the smallest if not the code will not execute the next condition
// as soons as it gets satisfied with the first condition it will run
//Logical Order in If Else Statements

//Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//Correct code
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
