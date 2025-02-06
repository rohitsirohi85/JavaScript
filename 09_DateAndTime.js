// we can use date and time in java

let myDate=new Date();   // making date object
console.log(myDate);
console.log(myDate.getTime);
console.log(myDate.getDay);  // and many more
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

`the date is ${myDate}`  // using string interpolation

// type of date
console.log(typeof(myDate));  // date type is object

// we can create a date as well

let createDate=new Date(2023,1,3);  // month start from 0 in js means 0 =jan,1=feb
let createSequence=new Date("2024-01-12");
console.log(createDate.toLocaleString());

let myTime=Date.now();  //give date till current in ms
console.log(myTime);
console.log(createDate.getTime());  // give time in ms from giving date
console.log(createDate.getTime()/1000); // convert in seconds

// we can customize the localeString via

let modified=createDate.toLocaleString('default',{
    day: "2-digit",  // we want day in numeric
    month: "long"  // want month in long 
    // and many more
});
console.log(modified);





