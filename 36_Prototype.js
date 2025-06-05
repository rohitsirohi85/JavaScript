// Example variables (commented out)
// let myName = "hitesh     "
// let mychannel = "chai     "
// console.log(myName.trueLength);

// Array of hero names
let myHeros = ["thor", "spiderman"]

// Object representing hero powers
let heroPower = {
    thor: "hammer", // Thor's power
    spiderman: "sling", // Spiderman's power

    // Method to get Spiderman's power using 'this'
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Adding a method to Object's prototype
// Now, all objects (including arrays, functions, etc.) can access hitesh()
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// Adding a method only to Array's prototype
// Only arrays can access heyHitesh()
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// Uncommenting these lines will show prototype inheritance in action
// heroPower.hitesh() // Works, as heroPower is an object
// myHeros.hitesh()   // Works, as arrays are objects
// myHeros.heyHitesh() // Works, as myHeros is an array
// heroPower.heyHitesh() // Error, as heroPower is not an array

// --- Prototype Inheritance Example ---

// Base object User
const User = {
    name: "chai",
    email: "chai@google.com"
}

// Teacher object (will inherit from User)
const Teacher = {
    makeVideo: true
}

// TeachingSupport object (will inherit from Teacher)
const TeachingSupport = {
    isAvailable: false
}

// TASupport object (will inherit from TeachingSupport using old __proto__ syntax)
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Sets prototype to TeachingSupport
}

// Set Teacher's prototype to User (old syntax)
Teacher.__proto__ = User

// Set TeachingSupport's prototype to Teacher (modern syntax)
Object.setPrototypeOf(TeachingSupport, Teacher)

// Now, prototype chain is: TASupport -> TeachingSupport -> Teacher -> User

// Example string with extra spaces
let anotherUsername = "ChaiAurCode     "

// Adding a custom method to String's prototype
// All strings can now use trueLength() to get trimmed length
String.prototype.trueLength = function(){
    console.log(`${this}`); // Logs the original string
    console.log(`True length is: ${this.trim().length}`); // Logs length after trimming spaces
}

// Using the new trueLength() method on different strings
anotherUsername.trueLength() // Logs: "ChaiAurCode     " and "True length is: 11"
"hitesh".trueLength()       // Logs: "hitesh" and "True length is: 6"
"iceTea".trueLength()       // Logs: "iceTea" and "True length is: 6"