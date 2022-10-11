// Use class Syntax to Define a Constructor Function
// ES6 provides a new syntax to create objects, using the class keyword.

// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

// var SpaceShuttle = function(targetPlanet){
//   this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');
// The class syntax simply replaces the constructor function creation:

// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
// }
// const zeus = new SpaceShuttle('Jupiter');
// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

// Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

// The constructor method is a special method for creating and initializing an object created with a class. 
// You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

// Use the class keyword and write a constructor to create the Vegetable class.

// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.


// Only change code below this line
class Vegetable {
  constructor(name) {
    //_name is  used to denote private variable by convention
    //but it does not make a variable private
    //private variables in this case should only be used inside the class by convention
    //I used it wrongly here by using it after the class
    this._name = name;
  }
}
// Only change code above this line

//new vegetable means creates an instance of Vegetable
const carrot = new Vegetable('carrot');//carrot here is an object of vegetable
console.log(carrot._name); // Should display 'carrot'
// Only change code above this line


//explanation 1
class BananBread {
    constructor(){
        this.taste = "Yummy";
    }
    eat(){
        console.log("mm ", this.taste)
    }
}
const bread = new BananBread(); // returns mm Yummy
const anotherBread = new BananBread();// returns mm Yummy

console.log(bread === anotherBread); //returns false
//they are not equal becasue they are different instances of bananbaread
//they are two objects


//explanation 2
class BananaBread {
    constructor(taste){
        //_taste is a private variable
        //this.taste = taste they are not the same, = taste is the paramter passed to the function
        this._taste = taste;
    }
    eat(){
        console.log("mm ", this._taste)
    }
}
const breadd = new BananaBread("passed to a parameter"); // returns mm Yummy
const anotherBreadd = new BananaBread("passed second");// returns mm Yummy
console.log(breadd.eat())
console.log(anotherBreadd.eat())
console.log(bread === anotherBread); //returns false
//they are not equal becasue they are different instances of bananbaread
//they are two objects