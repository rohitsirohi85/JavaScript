// Parent class: User
class User {
    constructor(username) {
        // Setting the username for this instance
        this.username = username;
    }

    // Method available to all instances of User (and subclasses like Teacher)
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Child class: Teacher (inherits from User)
class Teacher extends User {
    constructor(username, email, password) {
        // Call the constructor of the parent class (User)
        // Required before using 'this' in a subclass constructor
        super(username); // Sets this.username using User's constructor

        // Teacher-specific properties
        this.email = email;
        this.password = password;
    }

    // Method specific to Teacher class
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create an instance of Teacher
const chai = new Teacher("chai", "chai@teacher.com", "123");

// Call method inherited from User
chai.logMe(); // Output: USERNAME is chai

// Create a separate instance of User
const masalaChai = new User("masalaChai");

// Call method from User class
masalaChai.logMe(); // Output: USERNAME is masalaChai

// Check if 'chai' (which is a Teacher) is also considered a User
console.log(chai instanceof User); // Output: true
