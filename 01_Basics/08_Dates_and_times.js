//--------------------------- Date and Time --------------------

let Mydate = new Date() // type of Object which is non primitive DataType
console.log(Mydate.getMonth());
// console.log(Mydate.toDateString());
// console.log(Mydate.toISOString());
// console.log(Mydate.toJSON());
// console.log(Mydate.toLocaleDateString());
// console.log(Mydate.toLocaleString());
// console.log(Mydate.toLocaleTimeString());
// console.log(Mydate.toString());
// console.log(Mydate.toTimeString());
// console.log(Mydate.toUTCString());

// ------------------------------ Different way of innitializing of Date() -------------------------------
//  1.
const MyDoB_Time = new Date(
    /*data*/2003,11,25
    /*time*/,21,35,27
)
// console.log(MyDoB_Time.toLocaleString());
//  2.
const  myDoB= new Date(
    "12-25-2003"
)
// console.log(myDoB.toLocaleString());


const MyTimeStamp = Date.now()
// console.log(MyTimeStamp);
// console.log(MyDoB_Time.getTime());
// console.log(myDoB.getTime());
// console.log(Math.floor(Date.now()/(1000*60*60*24*365)));
// -----------String Interpolation-----------------

console.log(`Today Date is ${Mydate.toLocaleDateString()} and Time is ${Mydate.toLocaleTimeString()}`);

// -------------------- Special Method to Custamize the Dates and times ------------------

