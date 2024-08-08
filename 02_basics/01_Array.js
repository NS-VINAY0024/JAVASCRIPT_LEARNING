// Few point to be remember on Array in JavaScript

//  1.  The Array object, enables storing a collection of multiple items under a single variable name of different DataTypes
//  2.  JavaScript array-copy operations create shallow copies, meaning that changes made to the copied array will also affect the original array.

const MyArr = [0,1,2,3,4,5]
const Arr3 = ["VINAY","ns",0,2]
// const Arr4 = ("VINAY","ns",0,5,"VINAY") --> If we print it, it will give last index's value of that Array
const Arr5 = new Array(0,1,2,3,4)
// console.log(MyArr[4]);
// console.log(Arr3);
// console.log(Arr5);

//---------------- Array Methods----------------

//  MyArr.push(8) // It will add item at the end of the index
//  MyArr.push(7)
//  MyArr.pop() // It will remove item at the end of the Index

// MyArr.unshift(9) // It will add item at the Starting of the index
// MyArr.shift()   //  It will remove item at the Starting of the index

// console.log(MyArr.includes(4));
// console.log(MyArr.indexOf(2));

const NewArr = MyArr.join() // Adds all the elements of an array into a string, separated by the specified separator string
// console.log(MyArr);
// console.log(NewArr);

// Differance Between Slice and Splice

console.log("a ",MyArr);
console.log(" ");

const NewArr1 = MyArr.slice(1,4) // Slice--> It will copy the part of the Array with in the given range ignoring the End range item and does not effect the Original Array
console.log("b ",MyArr);
console.log(NewArr1);

const NewArr2 = MyArr.splice(1,4) //    Splice--> It will copy the part of the Array within the given range and effect the Original Array by remove the items within the Range
console.log("c ",MyArr);
console.log(NewArr2);
