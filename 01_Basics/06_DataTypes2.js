//      PRIMITIVE DATATYPE

//  7 tpes ----> String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // Symbols will keep the variables unique from others. If the two variables have same value as shown below, but the symbol datatype will keep both as unique value
const anotherId = Symbol('123')
//console.log(id === anotherId);

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
  //  console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// -------------------------------------------------------------------------

/*
 In memory Allocation for variables and data, there are two types
    1. Stack for Primitive Datatypes
    2. Heap for non Primitive Datatypes
*/

let myaccount1 = "vinay1@gmail.com"
let myaccount2 = myaccount1
myaccount2 = "Vinay2@google.com"
console.log(myaccount1);
console.log(myaccount2);
/*
    In stack memory allocation, variables are organized in a last-in, first-out manner, similar to a stack data structure. When a variable is assigned the value of another variable, a copy of the original variable is created on the stack, and this copy is then assigned to the new variable. As a result, the two variables operate independently.
*/

let vinay={
    email : "vinay@google.com",
    phone_no: 1234567890
}

let NSvinay=vinay
NSvinay.email="NSvinay@google.com"

console.log(vinay.email);
console.log(NSvinay.email);
/*
    In heap memory allocation, no copy of the first variable is created. Therefore, if we modify the object, the original value changes, and both variables will reflect the same value.
    In stack memory allocation, the variables are placed like a stack in bottom-up approach. If the first variable is assigned to second Variable as a value, then a copy of first variable is created by the stack and then assigined to the second variable. If we try to change the value of second variable, the copy of the first variable will get changed but not effects the original Variable
*/