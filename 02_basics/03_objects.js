// Singleton method --> Singleton will be created only when we use constructor method in creating Object
// Example --> object.create

//=================>   Oject based on Literals     <======================//
let USN = Symbol()
let phone_no = Symbol()
const Student ={
    name:"N S VINAY",
    age : 21,
    [USN] : "1BI21EI022",
    college : "BIT",
    Dept : "EIE",
    Sem : 6,
    [phone_no] : 8618514681,
    Greeting : function(){  // one way of adding Function inside an Object
        console.log("Hello!, I'm "+this.name+" Student of "+this.Dept+" Dept at "+this.college);
    }
} 

// Different ways for accessing the object and it's keys
// console.log(Student.name);  // one way of accessing the Object key's and its values
// console.log(Student["name"]);   // actual way of Accessing the Objects
// console.log(Student[USN],Student[phone_no]);  //  this is how we access the symbol datatype keys in an object
// console.log([typeof Student[USN] ,typeof Student[phone_no]]);
// console.log(Student);


//  how to change the values of object
Student.Sem = 7
// Object.freeze(Student) // after compiling this line, it won't allow any changes in the object 
Student.age = 22
// console.log(Student);

//++++++++++++++++++++++    Adding Fuction inside an Object    ++++++++++++

// Student.Greeting = function(){ // one way of adding Function inside an Object
//     console.log("Hello World");
// }
console.log(Student);
console.log(Student.Greeting());

