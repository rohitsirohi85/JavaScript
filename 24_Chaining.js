// Define an array of numbers
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using method chaining: first map(), then another map(), then filter()
const newNums = myNumers
    .map((num) => num * 10)  // First .map() - Multiplies each number by 10
    .map((num) => num + 1)   // Second .map() - Adds 1 to each transformed number
    .filter((num) => num >= 40); // .filter() - Keeps only numbers greater than or equal to 40

console.log(newNums);
