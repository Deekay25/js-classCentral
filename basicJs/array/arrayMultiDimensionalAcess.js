//Access Multi-Dimensional Arrays With Indexes
const arr = [1,
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
5];

arrIndex = arr[5]; //prints 5
console.log(arrIndex);

const arr1= [1,
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
5];

arrIndex = arr1[4][0][2]; //prints 12
console.log(arrIndex);

//Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1]; //prints 8

console.log(myData);