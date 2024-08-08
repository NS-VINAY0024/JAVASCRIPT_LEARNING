const name = "NS VINAY"
const repoCount = 50

// console.log(name + repoCount + " Value"); out dated usage 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is a presize use of using multi variable in one console 

const gameName = new String('vinay-ns-com')
//------------------Methods in String (functions)-------------------------
// console.log(gameName[0]);
// console.log(gameName.__proto__); --> We can use methods directly without using prototype()

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   N S VINAY   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vinay.com/nsvinay%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('vinay'))

console.log(newStringOne.split(' '));