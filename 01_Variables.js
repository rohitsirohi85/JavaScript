const accId=123;   
let accHolderName="Rohit sirohi";
var accBranchState="Jaipur";
accBank="BOB";    
let accState;  // if we initialize a variable but not give any value in it so it will undefined
console.log(accId); // to print the values


// want to change the values..

// accId=34;  // values which initialize with const can't be changed  (give error)

accHolderName="Rohit singh sirohi";  // can changed
accBranchState = "mathura";   // can be changed but var variable does'nt follow the rules of scope block so this is deprecated we will not use this anywhere
accBank="bank of Baroda";   // it will work but not a god practice coz you need to give the variable before declaring

// and if we want to print all values within a table so..

console.table([accId,accHolderName,accBranchState,accBank,accState]);

