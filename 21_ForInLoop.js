// `for...in` is used to iterate over the **keys** of an object (or indexes of an array)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

// `for...in` iterates over the **keys** of the object
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    // Output:
    // js shortcut is for javascript
    // cpp shortcut is for C++
    // rb shortcut is for ruby
    // swift shortcut is for swift by apple
}

// Explanation:
// - `key` holds each property name (js, cpp, rb, swift).
// - `myObject[key]` gives the corresponding value.
// - `for...in` is designed for objects because objects are **not directly iterable** with `for...of`.

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}
// Output:
// js
// rb
// py
// java
// cpp

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Overwrites previous 'IN' key (no duplicate keys in Map)

// `for...in` does NOT work on Map objects
for (const key in map) {
    console.log(key); // ❌ This will NOT output anything
}

for (const [key, value] of map) {
    console.log(key, ":", value);
}
// Output:
// IN : India
// USA : United States of America
// Fr : France
