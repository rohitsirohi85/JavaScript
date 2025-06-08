// ES6 class-based syntax (introduced in ES6/ES2015)
class User {
    // Constructor runs when a new object is created using 'new'
    constructor(username, email, password) {
        this.username = username;    // setting instance property
        this.email = email;
        this.password = password;
    }

    // Method attached to the prototype (NOT duplicated per object)
    encryptPassword() {
        // Just appending 'abc' for example encryption logic
        return `${this.password}abc`;
    }

    // Another prototype method to return username in uppercase
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

// Creating a new instance of the User class
const chai = new User("chai", "chai@gmail.com", "123");

// Logging the results of calling class methods
console.log(chai.encryptPassword());   // Output: 123abc
console.log(chai.changeUsername());    // Output: CHAI


// Old-school constructor function (before ES6 classes)

function User(username, email, password) {
    // 'this' refers to the new object being created
    this.username = username;
    this.email = email;
    this.password = password;
}

// Adding methods to the prototype so all instances share them
User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

// Creating a new object using the function constructor
const tea = new User("tea", "tea@gmail.com", "123");

// Calling the prototype methods
console.log(tea.encryptPassword());    // Output: 123abc
console.log(tea.changeUsername());     // Output: TEA
