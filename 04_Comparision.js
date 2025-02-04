// compare values


// console.log(2<=1);   // false
// console.log(2>=1);   // true
// console.log(2!=1);   // true
// console.log(2==1);    // false
// console.log(2<1);    // false
// console.log(2>1);   // true

// but if we compare diff datatypes to each other

console.log("2">=1);  // true js convert "2" to number
console.log("02"<=1); // false


// if we make conversion with null and 0

console.log(null==0); // false coz null is empty not 0
console.log(null>=0); // true coz here null treated as 0
console.log(null<0); // false

// but if we want that diff datatype can't be checked use(===)
console.log("2"===2); //  false



