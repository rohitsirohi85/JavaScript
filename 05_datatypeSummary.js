//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

let fu  =  function(){    // way to create function
    console.log("happy");
}

console.log(typeof fu);  // function


console.log(typeof anotherId);

// note the type of array is object so indirectly array is an object

let x =["my","me"];  // array

let y={   // object
     name:"Rohit singh sirohi",
}

console.log(typeof x);  // object
console.log(typeof y);  // object
// so array is an object



// https://262.ecma-international.org/5.1/#sec-11.4.3