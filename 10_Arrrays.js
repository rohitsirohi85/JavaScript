// declare array

const arr=[0,1,2,"hii",true]  // in js array can have multiple datatypes
console.log(typeof(arr));  // it will return object means type of an array is object so array is an object indirectly

const arr2= new Array(0,1,2,true); // another way of declaring

// accessing array element

console.log(arr[0]);  // array have 0th based indexing
console.log(arr[1]);  // accessing arr 1st index element 

let myArr=[0,1,2,3,4,"hello"];


console.log(myArr.length);  // length of array
console.log(myArr.push(9));  // insert value at end
console.log(myArr.pop()); // delete from end
console.log(myArr.unshift(4));  // insert from start
console.log(myArr.shift()); // delete from start

console.log(myArr.includes(9)); // is array includes 9
console.log(myArr.indexOf(9));  // index of an element if not return -1;


const newArr=myArr.join();
console.log(newArr);  // binds the array and change it's type to string
console.log(typeof(newArr));  // will be string now


// now check slice and splice
const checkArr=[0,1,2,3,4,5,"you",true];
console.log(checkArr.slice(1,3));  // give portion of the array by (start,end) but end not include
console.log(checkArr.splice(1,3));  //  give portion start,end but end included and it effect the original array
console.log(checkArr);  // here the spliced portion will be removed so spliced the original array but slice not


// if we want to merge multiple arrays we can't use push() coz it will make array as an element inside another 
// also remember while we are merging we are also modifying the original array as well
let anime=["DeathNote","OPM"];
let anime2=["Another","SteinsGate"];

// anime.push(anime2)  // it will messup both coz anime2 merge in anime as an element not string
// console.log(anime);

// console.log(anime[2][1]);

// so we use concat

let allAnime=anime.concat(anime2);  // but remember we also pushed our array so that effect would be seen that anime2 as a element inside array
console.log(allAnime); // nicely merge
// Or we can use spread operator(...)

let x = [...anime,...anime2];  // same as concat
console.log(x);


// assume...there is a array inside an array and inside another

const problemArr=[1,2,3,[1,6,7,8,[4,5,6]],5,6,[3,4,6,[68,56]]];
// so if we want to make all these subarray within a single with given depth

const solveArr=problemArr.flat(Infinity);  // solve all subarray
console.log(solveArr);

console.log(Array.isArray("rohit"));  // is this an array (false)
// hot to convert
console.log(Array.from("Rohit")); // convert into array

let score1=100;
let score2=200;
let score3=90;
const score4=32;

console.log(Array.of(score1,score2,score3,score4));  // convert set of elements into array





















