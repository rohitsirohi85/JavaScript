// IIFE (Immediately Invoked Function Expression) 
// is a function that executes immediately after its definition.
// It helps in avoiding global scope pollution and creating private scopes.

// Named IIFE (Function with a name)
(function chai(){  
    // This function gets executed immediately when the script runs.
    console.log(`DB CONNECTED`); // Output: DB CONNECTED
})();  // The function is defined and immediately invoked using () and we can pass the parameters as well in this

// Arrow Function IIFE (Anonymous function)
( (name) => {  
    // This function also executes immediately and accepts an argument.
    console.log(`DB CONNECTED TWO ${name}`); // Output: DB CONNECTED TWO hitesh
} )('hitesh');  // Function is invoked with 'hitesh' as the parameter


// conclusion = IIFE does not need to be called explicitly, it will be called automatically when the script runs.