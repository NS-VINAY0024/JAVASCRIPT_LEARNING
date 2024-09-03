// 'for of' loop
// Synatax : for (variable of iterable) {}
//The for.of statement executes a loop that operates on a sequence of values sourced from an iterable object.
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

