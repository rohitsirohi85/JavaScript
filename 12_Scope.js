// scope is a piece of block where a variable can be accessed

// Global Scope  (can be accessed anywhere in the code)
let a=10;;
const b=20; 
var c=30;   // why we can't use var when we can use let and const coz it does not support the rules of block scope

// Block Scope (can be accessed only in the block where it is defined)

if(true){
    let a=40;  // this a is different from the global a coz it is only can be accessed in this if block within {}
    let e=50;  // this is block scope variable so it can be accessed only in this block
    console.log(e);  // 50
    console.log(c);  // global scope can be accessed anywhere in the code
}

console.log(a);  // global scope a will be printed 10
// console.log(e);  // ReferenceError: e is not defined coz it is outside from the block where it is defined


if(true){
    var d=60;  // var does not support block scope so it can be accessed anywhere in the code
    console.log(d);  // 60
}
console.log(d);  // this will print 60 coz var does not support block scope


// scopes inside nested function

function outerFunction(){
    let name ="rohit";
    function innerFunction(){
        let address ="delhi";
        console.log(name);  // rohit coz inner child can call/use parent scope
    }
  //  console.log(address);  // ReferenceError: address is not defined coz parent can't call/use child scope
    innerFunction();
}
outerFunction();  // first outer function will be called and then inner function will be called with line by line execution

// note : in js we can call a function before initializing it but condition is that function should be declared not holding in a variable 

one();

function one(){        // this will work fine coz one is a function
    console.log("one");
}


two();    // can't call this before initializing it
let two = function(){   // this will give error coz two is not a function it is a variable holding a function
    console.log("two");
}
