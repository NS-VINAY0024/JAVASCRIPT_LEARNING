//+++++++++++++++++++++++++++   Functions   +++++++++++++++++++++++++++++
//  Definition
function My_Name(){
    console.log("N")
    console.log(" ")
    console.log("S")
    console.log(" ")
    console.log("V")
    console.log("I")
    console.log("N")
    console.log("A")
    console.log("Y")
}
// My_Name()   //  Execution
// My_Name    //  reference



// function Addnum(num1,num2){        
//     console.log(num1+num2);
// }

function Addnum(num1,num2){         // parameters
    let result = num1+num2
    return result
    // return num1+num2                // After executing return statement, the compiler will come out of the function by ignoring rest
    console.log(num1+num2);
}

let Result = Addnum(5,6)            // Passing Arguments
// console.log("Result:",Result)

// other ways to take parameters and return it

//function Office(username){      
function Office(username = "Vinay"){      // we can also give direct parameter. It will be be over return if we give parameters through arguments
if(!username){
    console.log("Enter the correct username");
        return
    }
    return `${username} is looged in`
}
// console.log(Office(" NS Vinay"))

// Different ways of writing parameters

function CalCartPrice(...num1){ // `...` --> is known as a rest operator, which will collect all value and make a array of one variable
    return  num1
}
// console.log(CalCartPrice(2000,300,400));



// passing object as a argument
let user ={
    username:"NS VINAY",
    item:"Milk",
    quantity: 2,
    price:300
}
function show_item1(anyobj){
    return `${anyobj.username} bought ${anyobj.quantity} liters of ${anyobj.item} worth of ${anyobj.quantity*anyobj.price}`
}

// console.log(show_item(user)) 
// console.log(show_item1({
//     username:"N S VINAY",
//     item:"Curd",
//     quantity: 4,
//     price:289
// }));       // we can directly pass the object without creating an actual one



// passing Array as Argument
const myarray = ["N S Vinay","curd",5,356]
function show_item2(item_details){
    return `${item_details[0]} bought ${item_details[2]} liters of ${item_details[1]} worth of ${item_details[2]*item_details[3]}`
}
// console.log(show_item2(myarray));
// console.log(show_item2(["N S Vinay","curd",6,356]));        // we can directly pass the array without creating an actual one


