// we can explicitly define number

const bal=new Number(100);  // now this is necessary a number

console.log(bal.toString());  // now this number convert into a string adn i can use string properties on this after converting
console.log(bal.toString().length);

console.log(bal.toFixed(2));  // how many values we need to show after decimal

// want precision value
const num=23.899;
console.log(num.toPrecision(2));  // inside 2 mean 2 precise value i want 24
console.log(num.toPrecision(3)); // means three digit precise value 23.9

// change number standard

const rupees=1000000;
console.log(rupees.toLocaleString('en-In'));  // change to local standard('en-in) means india


// ******************* MATHS *******************//



console.log(Math.abs(-4));  // give the absolute value
console.log(Math.sqrt(25));  // square root of 25
console.log(Math.PI*2);  // 3.14*2
console.log(Math.min(2,3,4,5));  // find min between these
console.log(Math.max(2,3,4,5));
console.log(Math.round(4.6));  // round off the value

console.log(Math.random());  // give random val between 0 and 1 
// but if we want that val should be in 1 to 9 
console.log((Math.floor().random()*10)+1);  // use floor() to round off the value













