// Welcome message
console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 1 and 100. You have 10 attempts.");

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

// Main guessing function
function guessNumber(userGuess) {
  if (attempts === 0) {
    console.log(
      "You've run out of attempts. The correct number was: " + randomNumber
    );
    return;
  }

  if (userGuess === randomNumber) {
    console.log("🎉 Congratulations! You guessed the number!");
  } else if (userGuess < randomNumber) {
    attempts--;
    console.log(`Too low. You have ${attempts} attempts left.`);
  } else if (userGuess > randomNumber) {
    attempts--;
    console.log(`Too high. You have ${attempts} attempts left.`);
  }

  if (attempts === 0 && userGuess !== randomNumber) {
    console.log("Game over. The correct number was: " + randomNumber);
  }
}

// Example usage in console: guessNumber(50);
