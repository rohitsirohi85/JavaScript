// Function declaration: multiplies the input number by 5
function multipleBy5(num){
    return num * 5
}

// Adding a custom property 'power' to the function object itself
multipleBy5.power = 2

// Calling the function with argument 5, logs 25
console.log(multipleBy5(5));

// Accessing the custom property 'power' on the function, logs 2
console.log(multipleBy5.power);

// Every function in JS has a 'prototype' property (used for inheritance in constructor functions)
console.log(multipleBy5.prototype);

// Constructor function to create user objects with username and score
function createUser(username, score){
    // 'this' refers to the new object being created (when used with 'new')
    this.username = username
    this.score = score
}

// Adding a method to the prototype of createUser
// All objects created with createUser will share this method
createUser.prototype.increment = function(){
    this.score++ // Increments the score property of the object
}

// Another method added to the prototype to print the score
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // Logs the score of the object
}

// Creating a new user object using the 'new' keyword
// 1. A new object is created
// 2. The prototype is linked
// 3. The constructor is called with 'this' bound to the new object
// 4. The new object is returned
const chai = new createUser("chai", 25)

// This line does NOT use 'new', so 'this' inside createUser refers to the global object (or undefined in strict mode)
// It does NOT create a new object, so 'tea' will be undefined
const tea = createUser("tea", 250)

// Calling the printMe method on the 'chai' object, logs "price is 25"
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/