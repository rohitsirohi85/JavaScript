// code to write string

let name = "Rohit";
const age =23

// console.log("my name is "+name);  // also work but it's an old way to use 

console.log(`hello my name is ${name} , my age is ${age} how are you ?`);


// we can use string constructor with object by new keyword

const gameName = new String("Mario-pokemon-hero   ");  // here gameName is obj and by new we make string constructor

console.log(gameName[1]);  // print a , coz string has 0 based indexing

console.log(gameName.length);
console.log(gameName.toUpperCase()); // convert to uppercase but not changing the original value coz of heap memory
console.log(gameName.charAt(2));  // char for 2nd index
console.log(gameName.indexOf("r"));  // index for a char
console.log(gameName.substring(2,4));  // substring(start,end) give char between start to end but end not included
console.log(gameName.slice(-4,3)); // can give negative start here
console.log(gameName.trim()); // remove unnecessary spaces start and end

console.log(gameName.replace(`io`,`md`)); // replace the value
console.log(gameName.includes("r")); // if yes return true
console.log(gameName.split("-")); // split string by a separator and store in array

// and there are many more methods on check mdn js string 










