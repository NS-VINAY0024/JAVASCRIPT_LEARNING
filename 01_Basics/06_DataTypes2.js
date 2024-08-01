//      PRIMITIVE DATATYPE

//  7 tpes ----> String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // Symbols will keep the variables unique from others. If the two variables have same value as shown below, but the symbol datatype will keep both as unique value
const anotherId = Symbol('123')
console.log(id === anotherId);

//--------------------------------------------------------------------------------------------------
//   REFERENCE(NON PRIMITIVE)
// Three:-> Array, objects, Functions

// 1. Arrays--> anything b/w square brackets'[]' are arrays
const heros = ["shaktiman", "naagraj", "doga"];

// 2. Object--> anything b/w curly brackets'{}' are Objects and it can be stored inside a varaiable as a data.
let myObj = {
    name: "hitesh",
    age: 22,
}

// 3. Functions--> 
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3