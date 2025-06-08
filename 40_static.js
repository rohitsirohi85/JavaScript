// Base class: User
class User {
    constructor(username) {
        this.username = username;
    }

    // Instance method (called on object instances)
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static method (called on the class itself, NOT on instances)
    static createId() {
        return `123`; // Example static return value
    }
}

// Creating an instance of User
const hitesh = new User("hitesh");

// ❌ This will throw an error because createId is static:
// console.log(hitesh.createId()); // TypeError: hitesh.createId is not a function

// ✅ Correct way to call a static method:
console.log(User.createId()); // Output: 123

// Subclass: Teacher extends User
class Teacher extends User {
    constructor(username, email) {
        // Call the parent constructor to initialize username
        super(username);
        this.email = email;
    }
}

// Creating an instance of Teacher
const iphone = new Teacher("iphone", "i@phone.com");

// ❌ This will also fail: static methods are not available on instances
// console.log(iphone.createId()); // TypeError

// ✅ But since Teacher extends User, it inherits the static method:
console.log(Teacher.createId()); // Output: 123
