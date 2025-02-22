// syntax of reduce

// array.reduce((accumulator, currentValue) => {   // current value is the value where we are currently and accumulator is firstly the initial value and then accumulator value will be changed to the sum result and again change when again some value is added to it 
//     // operation
// }, initialValue);
 

// example

// Define an array of numbers
const myNums = [1, 2, 3];

// Using .reduce() to sum up all elements in the array
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);   

// Output the total sum
console.log(myTotal); // Output: 6

// more example

// Define an array of objects representing a shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// Using .reduce() to calculate the total price of all items in the cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// Output the total price
console.log(priceToPay); // Output: 22996

