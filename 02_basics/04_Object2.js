const Student = new Object()    //Constructor Method( Singleton variable will will be created )

Student.email = "Someone@google.com"
Student.hobby = "Kabbadi"
Student.best_friends = {
    1:" Goutham",
    2:"Darshan",
    3:"Rohith"
}
// console.log(Student.best_friend)


// +++++++++  Nested Object   +++++++++++

const Someone ={
    DOB : "23/01/2019",
    "Original Name" : {
        "Full Name" : {
            "First Name": "N S",
            "Last Name": " Vinay"
        }
    }
} 
// console.log(Someone["Original Name"]["Full Name"]);

// ++++++++++   Concatinations of two Objects   ++++++++++++
const obj1 = {1:"addEventListener",2:"based"}
const obj2 = {"1a":"caches","2b":"debug"}

//      1   ===> whisch is wrong way
const obj3 = {obj1,obj2}
//      2   ===> Correct way but not frequently used
const Obj4 = Object.assign({} , obj1, obj2)
//      3   ===> Correct way and used everywhere
const obj5 = {...obj1,...obj2,...obj3}

// console.log(obj5);

// +++++++++++++ Data will come from DataBase in the form of Array of Object ++++++++++++++++
// Example
const User = [
    {
        Id : 100,
        email : "1@gmail.com"
    },
    {
        Id : 200,
        email : "2@gmail.com"
    },
    {
        Id : 300,
        email : "3@gmail.com"
    },
    {
        Id : 400,
        email : "4@gmail.com"
    }
]
// To access Data from Array of Object
// console.log(User[1]["Id"]);

// console.log(Object.keys(Student));
// console.log(Object.values(Student));
// console.log(Object.entries(Student));   //  The entries() method converts an object into an array of key-value pairs, represented as strings ==> [[Key,Value],[Key,Value],....]


//++++++++++++++++++++++   Destructuring   ++++++++++++++++++++++
// It is a way to unpack arrays, and objects and assigning to a distinct variable. Destructuring allows us to write clean and readable code. Example ==>
const Student2 ={
    name:"N S VINAY",
    age : 21,
    college : "BIT",
    Dept : "EIE",
    Sem : "6th Sem",
  
} 

const {name,age,college:col,Dept,Sem} = Student2
console.log(name,Sem,Dept,col);

//++++++++++++++++   JSON AIP     ++++++++++++++++





