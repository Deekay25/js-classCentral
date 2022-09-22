// difference between let and var (variable can only be declared once with let)

//var allows variable redeclation
// var allows you to to use thesame variable many times while assigning a diff value 
// var myname = "adnan";
// var myname = "adnanNew";
//console.log(myname)

//let stops variable redeclaration
// let stops you from using the same variable twice
let myname = "adnan";
let mynamee = "adnanNew";
console.log(myname)
console.log(mynamee)
//let throws an error and tells you that you have already declared myname as variable


//variable value reassigning
let names = "adnan";
names = "deekay";

console.log(names);