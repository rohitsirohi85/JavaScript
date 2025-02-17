// in js we can use this keyword to access the object properties and context
// conclusion: this keyword is used to access the object properties and context of parent object
function user(){
   let Myname="rohit";
    //console.log(this);  // this will print the window object
    console.log(this.Myname);  // this will print undefined coz Myname is not a property of this parent object

    // but

    address="rohit";  // it can be printed now coz it is a global variable in this function address type is "any" here not variable
    console.log(this.address);  
    
}

 user();  // this will print the window object

// console.log(this);   // this will return the empty object in ide but in browser it will return the window object

// now let's look the main context of this

 let me={
    name:"rohit",
    age:25,
    detail:function(){
        console.log(`my name is ${this.name}`);  // using string interpolation to access the object property but using this keyword we tell that take the context of parent object
        console.log(this);  // this will print the user object (parent object)       
    }
 }
 me.detail();  // this will print the object properties
 // user();  // this will print the window object coz it has no parent object

 me.name="rahul"; // changing the name
me.detail();  // this will print the object properties

// now let's see the arrow function***************************************

// arrow function works just like the normal function but it has different context
()=>{  // works just like the normal function in () we can pass the parameters
    console.log("arrow function");  // basic concept of arrow function
}

// also we can hold the value just like the normal function
const arrow=(one,two)=>{
    console.log("arrow function");
    console.log(one+two);  // addition of two numbers 
}
arrow(10,20);  // this will print 30


// also when we have to return the single line of code we can use Implicit return

const add=(a,b) => a+b;  // this will return the addition of two numbers (single line arrow function statement)
const sub=(a,b) => (a-b);  // when we wrap the statement in () then don't need to use return keyword but in {} we have to use return keyword
const obj=(a,b) => ({user:"rohit"});  // when we have to return the object then we have to wrap the object in () as well
console.log(add(10,20));  
console.log(sub(10,20));

// note : when we use arrow function in () a single line we call that Implicit return but when we forcefully use return keyword and {} then it is called explicit return



