//very very important

// Use Recursion to Create a Range of Numbers
// Continuing from the previous challenge, we provide you another opportunity to create a recursive
// function to solve a problem.

// We have defined a function named rangeOfNumbers with two parameters.
// The function should return an array of integers which begins with a number
// represented by the startNum parameter and ends with a number represented by the endNum parameter.
// The starting number will always be less than or equal to the ending number. Your function must use
// recursion by calling itself and not use loops of any kind. It should also work for cases where both
// startNum and endNum are the same.

//sample output

// rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
// Waiting:rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
// Waiting:rangeOfNumbers(4, 4) should return [4].

//using forloop

function rangeOfNumbers(startNum, endNum) {
  const result = [];
  for (let i = startNum; i <= endNum; i++) {
    result.push(i);
  }
  return result;
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(1, 1));

//while loop
function rangeOfNumbers(startNum, endNum) {
  const arr = [];
  // let result = startNum;
  while (startNum <= endNum) {
    let result = startNum;
    result++;
    arr.push(result);
  }
  return result;
}

console.log("while loop: ", rangeOfNumbers(1, 5));
console.log("while loop: ", rangeOfNumbers(1, 1));
//using recusion
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log("new one: ", rangeOfNumbers(2, 5));
console.log("new one: ", rangeOfNumbers(5, 5));
