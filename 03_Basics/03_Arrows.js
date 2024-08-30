const user = {
    username : "N S VINAY",
    id : 22,
    welcomemessage : function(){
        console.log(`${this.username}, Welcome to website`); // 'this' keyword will represents the object that called the function. Here this keyword represents object "user" which will calls the function "welcomemessage".
        console.log(this); //  it will print the all variable inside the current scope or current context
    }
}
// user.welcomemessage()
// user.username = "Vinay"
// user.welcomemessage()
// console.log(this); // it will refers the global object


function test_this(){
    let user = "Name"
    console.log(this.user);
}
const test_this1 = function(){
    let user = "Name"
    console.log(this.user);
}
// test_this()

//      In conclusion, "this" keyword will only work under object context/scope and will not work under function context/scope


//+++++++++++++++++++ Arrow function +++++++++++++++++++

const test_this2 = ()=>{ // this is an arrow funtion
    let user = "Name"
    console.log(this);
}
// test_this()

// -----------EXPLICIT RETURN
// const addtwoNum=(num1,num2) => {
//     return num1+num2
// }

// -----------Implicit return
// const addtwoNum=(num1,num2) => num1+num2   
// const addtwoNum=(num1,num2) => (num1+num2)
const addtwoNum=(num1,num2) => ({name:"Ns vinay"})  // this is how to return object implicitly
console.log(addtwoNum(4,5));

//
