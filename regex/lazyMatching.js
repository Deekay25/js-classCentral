// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/; // Change this line
// let result = text.match(myRegex);
// console.log(result)
//result retuns the entire string stored in text
//this is becasue regex is greedy it will match all the way down
// from <h1... to > it will stop at "<h1>"



//To changes the above to lazy add ? operator
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; //meaning return the first match you encounter don;t go all the way
// let myRegex = /<.*?>/g; //returns <h1>, </h1>
let result = text.match(myRegex);
console.log(result); // returns <h1>