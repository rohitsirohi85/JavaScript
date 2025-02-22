// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


// Array of book objects with properties like title, genre, publish year, and edition year
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Using filter() to find all books with the genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');
// The .filter() method creates a new array with elements that satisfy the given condition.
// Here, we check if `bk.genre` is exactly equal to "History" and return only those objects.

// Now filtering books that are in the 'History' genre and were published in or after 1995
userBooks = books.filter((bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";
});
// .filter() loops through each object in the `books` array.
// The callback function takes each book object (`bk`) and checks two conditions:
// 1. If `bk.publish` is greater than or equal to 1995 (meaning the book was published in 1995 or later).
// 2. If `bk.genre` is equal to "History".
// If both conditions are true, that book object is included in the `userBooks` array.

console.log(userBooks); // Logs the filtered array of books
