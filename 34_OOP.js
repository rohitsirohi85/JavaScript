// Creating a user object using object literal syntax
const user = {
    username: "hitesh", // Property: username of the user
    loginCount: 8,      // Property: number of times user has logged in
    signedIn: true,     // Property: is the user signed in?

    // Method: getUserDetails, prints details about the user
    getUserDetails: function(){
        // console.log("Got user details from database"); // Example of a log statement
        // console.log(`Username: ${this.username}`); // 'this' refers to the current object
        console.log(this); // Logs the entire user object itself
    }

}

// Accessing properties and methods of the user object
// console.log(user.username) // Would print the username property
// console.log(user.getUserDetails()); // Would call the getUserDetails method
// console.log(this); // In global scope, 'this' refers to the global object (window in browsers)


// Constructor function to create multiple user objects
function User(username, loginCount, isLoggedIn){
    // Assigning values to the new object's properties
    this.username = username; // 'this' refers to the new object being created
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // Adding a method to each object created by this constructor
    this.greeting = function(){
        console.log(`Welcome ${this.username}`); // Personalized greeting
    }

    return this // Explicitly returning 'this' (not required when using 'new', but doesn't hurt)
}

/*
Explanation:
- If you call User() without 'new', 'this' refers to the global object (or undefined in strict mode),
  so properties will be set on the global object, not a new user object.
- If you use 'new User()', a new object is created and 'this' refers to that new object.
- Each call to 'new User()' creates a separate user object.
*/

// Example without 'new' (commented out):
// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false)
// console.log(userOne);  // This would actually log userTwo's data, because both calls modify the same (global) object

// Correct way: using 'new' to create separate instances
const userOne = new User("hitesh", 12, true) // Creates a new user object
const userTwo = new User("ChaiAurCode", 11, false) // Creates another new user object

// The constructor property points to the function that created the instance
console.log(userOne.constructor); // Logs the constructor function (User)
// console.log(userTwo); // Would log the userTwo object