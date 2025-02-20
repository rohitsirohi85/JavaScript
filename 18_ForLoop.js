// Basic for loop that iterates from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;  // Assigning the current loop index to the variable 'element'

    if (element == 5) {
        // When the value of 'element' is 5, this message is intended to be logged.
        // However, it's currently commented out.
        // console.log("5 is best number");
    }

    // This would print each number from 0 to 10, but it's commented out.
    // console.log(element);
}

// This would throw an error because 'element' is block-scoped inside the for loop
// console.log(element); // Uncommenting this line will result in a ReferenceError


// Nested for loop example: multiplication table
for (let i = 1; i <= 10; i++) {
    // This outer loop runs from 1 to 10
    // console.log(`Outer loop value: ${i}`); // Logs the outer loop value

    for (let j = 1; j <= 10; j++) {
        // Inner loop runs from 1 to 10 for each outer loop iteration
        // console.log(`Inner loop value ${j} and inner loop ${i}`);

        // Logs the multiplication of 'i' and 'j'
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Looping through an array
let myArray = ["flash", "batman", "superman"];

// Getting and printing the length of the array
// console.log(myArray.length); // Output: 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];  // Accessing each element in the array

    // This would print each superhero name, but it's commented out.
    // console.log(element);
}

// Using 'break' and 'continue' in loops

// Example of 'break' (stops the loop completely when index == 5)
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`); // This will print when index is 5
//         break; // Stops execution of the loop immediately
//     }
//     console.log(`Value of i is ${index}`); // Prints each value until 5
// }

// Example of 'continue' (skips iteration when index == 5)
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`); // Prints when index is 5
        continue; // Skips the rest of the loop body for index == 5
    }
    console.log(`Value of i is ${index}`); // Prints all values except 5
}
