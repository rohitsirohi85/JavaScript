const coding = ["js", "ruby", "java", "python", "cpp"];

// 1️⃣ Using `.forEach()` with an anonymous function
coding.forEach(function (val) {
    console.log(val); // Prints each value in the array
});
// Output:
// js
// ruby
// java
// python
// cpp

// Explanation:
// - `.forEach()` takes a callback function.
// - The callback function is executed for each element in the array.
// - The `val` parameter holds each value during iteration.


// 2️⃣ Using `.forEach()` with an arrow function
coding.forEach((item) => {
    console.log(item); // Prints each item in the array
});
// Output:
// js
// ruby
// java
// python
// cpp

// Explanation:
// - This is the same as the previous example but uses an **arrow function** for a shorter syntax.


// 3️⃣ Passing a function reference to `.forEach()`
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);
// Output:
// js
// ruby
// java
// python
// cpp

// Explanation:
// - Instead of writing an inline function, we define `printMe()` separately.
// - `.forEach(printMe)` automatically passes each array element to `printMe()`.


// 4️⃣ `.forEach()` with multiple parameters
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
// Output:
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// Explanation:
// - The callback function can take up to **three parameters**:
//   1. `item` → current value
//   2. `index` → index of the current element
//   3. `arr` → the entire array being iterated over


// 5️⃣ Iterating over an array of objects using `.forEach()`
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});
// Output:
// javascript
// java
// python

// Explanation:
// - `myCoding` is an array of objects.
// - `.forEach()` iterates over the array, and `item` represents each object.
// - `item.languageName` accesses the `languageName` property inside each object.
