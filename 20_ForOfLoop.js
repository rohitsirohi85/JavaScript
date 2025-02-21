// Using `for...of` to iterate over an array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num); // Prints each number in the array
}

// Iterating over a string using `for...of`
const greetings = "Hello world!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`); // Prints each character in the string
}

// Working with Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // This doesn't create a duplicate, as keys in a Map are unique

// console.log(map); // Logs the entire Map

// Iterating over a Map using `for...of`
for (const [key, value] of map) {
    // console.log(key, ':-', value); // Logs key-value pairs in the Map
}

// Working with an object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// The below loop will throw an error because `for...of` doesn't work on plain objects
// Objects are not iterable directly with `for...of`
// To iterate, use `Object.entries(myObject)` or `for...in`

// Correct way using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value); // Prints key-value pairs of the object
}
