// objects can be declared by two ways
// 1. Constructor (which create the singleton(means only one instance))

  const obj=new Object();

  obj.name="rohit";
  obj.age=23;
  console.log(obj);
  

//2. By literals


const mySym=Symbol("key1")

const mySelf={  // we can object values even datatype is const
    name:"Rohit",   // these keys are defined as a string but no need to use ""
    study:"BCA",
    Age:23,
   // mySym : "symbol",  // this is a symbol which makes field unique but this is not correct way to declare symbol in object coz it refer string here not symbol
   [mySym]:"symbol used", // correct way coz now it's type is symbol
    "sirName":"Sirohi"  // yes we can also define keys like string  so the only way to access this using [""]
};

// accessing objects

  console.log(mySelf.Age);  // by . operator

  console.log(mySelf["name"]);  // another way to access objects
  console.log(mySelf["sirName"]);  // this is only way to access this type of key's value
  //console.log(mySelf.mySym);  // wil work but it's type is string now not symbol so for converting into symbol
  console.log(mySelf[mySym]); // now it's correct this type is symbol

  // changing the value for a specific field in object

  mySelf.Age=34;  // change the value 34 for key age
  console.log(mySelf.Age); // age value changed

  // if we want that no changes can be happen in  an object so we can freeze that object

 // Object.freeze(mySelf);  // now changes from now on will not change 


  mySelf.Age=45;  // trying to change age
  mySelf.name="rohan";
  console.log(mySelf);  // anything will not change

  // declare function in object

  mySelf.greeting=function(){
    console.log("hello from me");
  }

  mySelf.greetingTwo=function(){
    console.log(`hello user , ${this.name}`); 
  }

  console.log(mySelf.greeting()); // but before calling the function we need to unfreeze the object otherwise function will even not created in object coz it's freezed
  console.log(mySelf.greetingTwo());  // calling the function
  
  
  
// talk about object and json......**********

// Creating an empty object using object literal syntax
const tinderUser = {}

// Adding properties to the object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // Uncomment to see the output

// Creating a nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing nested object properties
// console.log(regularUser.fullname.userfullname.firstname); // Output: hitesh

// Creating objects with numerical keys
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merging objects using the spread operator
const obj3 = {...obj1, ...obj2, ...obj4} // Combines all properties into one object

// console.log(obj3); // Uncomment to see merged object

// Array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

// Accessing an object inside an array
users[1].email // Accessing the email of the second user

// Object methods to retrieve keys, values, and entries
// console.log(Object.keys(tinderUser)); // Returns an array of keys
// console.log(Object.values(tinderUser)); // Returns an array of values
// console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs

// Checking if an object has a specific property
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Returns true

// Object destructuring example
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring with renaming
const {courseInstructor: instructor} = course

// console.log(courseInstructor); // This would cause an error because we renamed it
console.log(instructor); // Output: hitesh

// JSON structure example
// JSON looks similar to objects but has strict syntax rules
// JSON keys must be in double quotes, and it does not support functions
const jsonExample = {
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

// JSON can also represent arrays of objects
const jsonArray = [
    {},
    {},
    {}
]

  
  
  


  
  
  