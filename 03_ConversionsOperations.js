// now with conversions we can convert one datatype to another

let x="23";   // this is a string

let valInNum=Number(x);   // with the write function with datatype format we can change any datatype to one .. same for String() and all others

console.log(typeof(valInNum));  // x converted to number and saved in valInNum

// but remember

let y = "23abc";  // it can't be a number but if we convert it , it will but when we check it's type that is Nan(not a number)
let valY=Number(y);
console.log(valY);  // give the Nan coz this can't ba a number

console.log(typeof(valY)); // will print the number coz type  has been converted even if that value not a number 

// if convert null to number
let z=null;
let f= Number(z);
console.log(f); // 0

// if convert boolean so 1 for true and 0 for false
let t = true;
let valBool=Number(t);
console.log(valBool);

// if convert number to boolean
let boolLogged=1;
let bool=Boolean(boolLogged);  // true coz true for 1 and false for 0
console.log(bool);

// if convert empty string to boolean
let emp="";
let boolEmp=Boolean(emp);  // false coz string is empty but if string contains anything true 
console.log(boolEmp);


// ******OPERATIONS*******//

let pos=3;
let negValue=-pos;  // convert positive to negative
console.log(negValue); // -3

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 2*2*2
console.log(2/2);  // 1
console.log(2%2); // 0

// add two strings

let one="hello";
let two="rohit";
let mix=one+two;

console.log(mix);


// note if use add operation between number and string
console.log("1"+2);  // 12 coz string add with number
console.log(1+"2");  // 12 same reason
// but
console.log(1+2+"2");  // here 1+2 then join with string = 32
console.log("1"+2+2);  // here 1 join with 2 and next 2 join with that 2 = 122

console.log(+true); // 1 coz true is 1
console.log(+""); // 0 coz empty string
console.log(+"kjaff");  // Nan(not a number)

// postfix

let a=1;
let b=a++; // first store then increment
console.log(b+","+a); // 1,2

// prefix

let q=1;
let w=++q;  // first incr then store
console.log(w+","+q); // 2,2
















