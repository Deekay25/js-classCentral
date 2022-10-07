//very important concept

// The spread operator makes this syntax much better to read and maintain.

// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr);
// maximus would have a value of 89.

// ...arr returns an unpacked array. In other words, it spreads the array. 
// However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
// The following code will not work:

// const spreaded = ...arr;

// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
console.log(...arr1)//returns JAN FEB MAR APR MAY
//above line exracts or spreads the contents of the array
arr2 = [...arr1]; // Change this line
//above line extracts the contents of arr1 and  copies the contents of the array1 into arr2
//this transforms them into two seprates arrays 
//altering arr1 will not affect arr2
arr2 = arr1;
//the above method when arr1 is altered arr2  will be altered as well.

console.log(arr2);