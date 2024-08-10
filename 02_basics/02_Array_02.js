const First_sem = ["PCS","ECE","EME"]
const Second_sem = ["PHY","EEE","CIVIL"]

// First_sem.push(Second_sem)
// console.log(First_sem); // this is not the correct way to merge two array

// This is the one way of merging the Array
const First_year1 = First_sem.concat(Second_sem)
// console.log(First_year1);

//Second way is called as spreading method
const First_year2 = [...First_sem,...Second_sem]
// console.log(First_year2);

//-------------------------concatinatin of sub Array in an array------------------------------
const Uniq_Array = [1,2,3,[3,2,1,[45,56,67,[23,34],2,3],96],100,"All IN ONE"] 
// console.log(Uniq_Array)
// console.log(Uniq_Array.flat(Infinity))// it will make entire subarray into one whole Array

console.log(Array.isArray("Vinay"));
console.log(Array.from("Vinay"));
console.log(Array.from({name:"Vinay"}));    // Iteresting topic in Array

const Usn1 = "1B121EI022"
const Usn2 = "1B121EI023"
const Usn3 = "1B121EI024"

console.log(Array.of(Usn1, Usn2, Usn3))
