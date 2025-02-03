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





