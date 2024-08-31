//  Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})
();

( (name) => {   // 'Name' is a Prameter
    console.log(`DB CONNECTED TO ${name}`);
} )
('vinay'); //   Passing an Argument