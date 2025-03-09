// Projects related to DOM

//project link
//  (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


// ## project 1  (bg-Color changer)



const buttons = document.querySelectorAll('.button');  // first select all the buttons which include it's class name and also i has id
buttons.forEach(function (item) {    // use for each loop to select and apply event listener on each button
  item.addEventListener('click', function (event) {   // add click event listener on each button so we can do something when click happen
     console.log(event.target);    // it will give the clicked button with classname and id
     if(event.target.id=='grey'){    // if clicked button was grey then change the background color to grey
       document.body.style.backgroundColor='grey'
     }
     if(event.target.id=='white'){
      document.body.style.backgroundColor='white'
    }
    if(event.target.id=='blue'){
      document.body.style.backgroundColor='blue'
    }
    if(event.target.id=='yellow'){
      document.body.style.backgroundColor='yellow'
    }
  });
});

// project 2    bmi calculator with weight and height

const form = document.querySelector('form');
form.addEventListener('submit',function(event){
  event.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(weight == '' || weight<0 || isNaN(weight)){
    alert("invalid weight");
  }else if(height == '' || height<0 || isNaN(height)){
    alert("invalid height");
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){
      result.innerHTML=`you are underweight your bmi : ${bmi}`
    }else if (bmi<=24.9 && bmi>=18.6){
      result.innerHTML=`you have normal bmi ${bmi}`
    }else if(bmi>24.9){
      result.innerHTML=`over weight bmi ${bmi}`
    }
  }
})

// project 3 .. digital clock

// const clock = document.querySelector('#clock');   // getting the clock element id by query selector , or we can use getElementById
const clock = document.getElementById('clock')      // getting the clock element id by getElementById

setInterval(function(){    // for set the time interval to update the time
  const dateAndTime = new Date().toLocaleTimeString()   // getting the current time and date
  clock.innerHTML=dateAndTime;  //  set the current time and date to the clock element
},1000)  // 1000 means 1 second

// project 4 .. number guessing

// Selecting required DOM elements
const guessInput = document.querySelector('#guessField'); // Input field where user enters their guess
const submit = document.querySelector('#subt'); // Submit button to check the guess
const lowOrhi = document.querySelector('.lowOrHi'); // Element to display hints (Too high, Too low, Correct)
const remainingGuesses = document.querySelector('.lastResult'); // Element to show remaining attempts
const guessedSlots = document.querySelector('.guesses'); // Element to display previous guesses

let guessCnt = 1; // Counter to track the number of guesses
let p = document.createElement('p'); // Creating a paragraph element to hold "Start New Game" button

// Generating a random number between 1 and 100
const random = parseInt(Math.random() * 100 + 1);

const startAgain = document.querySelector('.resultParas'); // Parent element where the new game button will be appended

let playGame = true; // Boolean flag to track if the game is active

// Adding event listener to the submit button if the game is active
if (playGame) {
   submit.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent form submission (in case it's inside a form)
      const guessedNumber = guessInput.value; // Get the user input
      console.log(guessedNumber); // Logging for debugging purposes
      validateGuessesInput(guessedNumber); // Call function to validate input and process the guess
   });
}

// Function to validate the user's input
function validateGuessesInput(guess) {
   if (isNaN(guess)) {
      alert(`Please enter a valid number`); // Alert if input is not a number
   } else if (guess < 1) {
      alert(`Please enter a valid number greater than or equal to 1`); // Alert if number is below the range
   } else if (guess > 100) {
      alert(`Please enter a valid number less than or equal to 100`); // Alert if number is above the range
   } else {
      // If the number of guesses reaches 10, end the game
      if (guessCnt >= 10) {
         guessedSlots.innerHTML += `${guess}, `; // Display the last guess
         guessInput.value = ''; // Clear input field
         remainingGuesses.innerHTML = `${10 - guessCnt}`; // Update remaining guesses
         message(`Game over, the number was: ${random}`); // Show game over message
         endGame(); // Call function to handle game over scenario
      } else {
         // Update guessed numbers and remaining guesses
         guessedSlots.innerHTML += `${guess}, `;
         guessInput.value = ''; // Clear input field
         remainingGuesses.innerHTML = `${10 - guessCnt}`;
         guessCnt++; // Increment guess counter
         checkGuess(guess); // Check if the guess is correct, too high, or too low
      }
   }
}

// Function to update hint message
function message(msg) {
   lowOrhi.innerHTML = `${msg}`;
}

// Function to handle game over scenario
function endGame() {
   guessInput.value = ''; // Clear input field
   guessInput.setAttribute('disabled', ''); // Disable input field to prevent further guesses
   playGame = false; // Set game status to false
   p.classList.add('button'); // Add class to new game button
   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // Create button to restart game
   startAgain.append(p); // Append new game button to DOM
   newGame(); // Call function to set up new game event listener
}

// Function to check if the guess is correct or not
function checkGuess(guess) {
   if (guess == random) {
      message(`You guessed it right! The number is: ${random}`); // Display success message
      endGame(); // End the game as user guessed correctly
   } else if (guess < random) {
      message(`Too low`); // Give hint if guess is too low
   } else if (guess > random) {
      message(`Too high`); // Give hint if guess is too high
   }
}

// Function to handle new game setup
function newGame() {
   const newGame = document.querySelector('#newGame'); // Select "New Game" button
   newGame.addEventListener('click', function (e) {
      guessCnt = 1; // Reset guess counter
      guessInput.innerHTML = ''; // Clear input field
      guessedSlots.innerHTML = ''; // Clear guessed numbers display
      lowOrhi.innerHTML = ''; // Clear hint message
      remainingGuesses.innerHTML = `${10 - guessCnt}`; // Reset remaining guesses display
      playGame = true; // Set game status back to active
      guessInput.removeAttribute('disabled'); // Enable input field
      startAgain.removeChild(p); // Remove "New Game" button from DOM
   });
}











