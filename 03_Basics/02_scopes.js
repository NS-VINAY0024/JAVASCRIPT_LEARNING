const a = 10
// let b = 20
if(true){
    const a = 30
    // console.log("innner:",a)
    
    let b = 30
    // var c = 100  // Var will not obey the functional or block scope and it can change values when not required, so these are used less or not used
}
// console.log("outer:",a);
// console.log(b);
// console.log(c);

//+++++++++++   Nested Scpoe    ++++++++++++++++

function one(){
    const username="N S VINAY"
    function two(){
        const Website = "www.nsvinay.com"
        // console.log(username);
    }
    two()
    // console.log(Website)
}
one()
// console.log(username)

if (true) {
    const username = "VINAY"
    if (true) {
        const Website = "www.vinayco.com"
        // console.log(username)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++       INTERESTING       +++++++++++++++++++++++++++++

console.log(addone(5)) // If we create a nnormal function, we can access the function where ever we want
function addone(num1) {
    return num1+1
}


// console.log(addtwo(5)); // if we assign a function to a variable, we ca only access them after there declaration
const addtwo = function(num1){
    return num1+2
}
console.log(addtwo(5))