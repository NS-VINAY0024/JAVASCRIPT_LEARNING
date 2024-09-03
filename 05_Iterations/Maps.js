//+++++++++++++++++++    Maps   +++++++++++++

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject1) {
//     console.log(key, ':-', value);
    
// }// By using for_of loop we can not iterate the objects 




//  ++++++ for-in loop ++++++++
//  for (variable in object)
//   statement

const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject2) {
    //console.log(`${key} shortcut is for ${myObject2[key]}`);
}// By using for in loop we can iterate the Objects

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } // Maps can not be iterated using For_in loop