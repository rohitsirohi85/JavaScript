// stack and heap memory 

// stack use for primitive datatype and in stack we receive a copy means if we change copy original will not effect

let x="rohit";  // in stack coz it's a string (primitive)
let y=x;
y="sirohi"   // try to change a value which is in stack but we have a copy right so original will not effect

console.log(x);  // still "Rohit"
console.log(y);  // "sirohi"  .. so y will be changed but original x will remain same


// heap  used for non primitive datatype and we receive a reference of original value so it will be changed


let me = {   // object non primitive so in heap
    name:"Rohit",
    Age:20,
}

// value will change if we try to change this coz of heap

let anotherMe=me;

anotherMe.name="Rahul";  // it will effect original value

console.log(me.name);


