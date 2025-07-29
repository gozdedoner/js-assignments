// script.js for Number Guessing Game

// Global game variables
let randomNumber; // The number the player has to guess
let attemptsLeft; // Remaining attempts for the player
const MAX_ATTEMPTS = 10; // Maximum attempts allowed
let hasWon = false; // Flag to check if the player has won

// --- Helper Functions ---

/**
 * Generates a random integer between 1 and 100 (inclusive).
 * @returns {number} A random integer.
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Generates a number from 1 to 100
}

/**
 * Prompts the user to enter a guess and ensures it's a valid number.
 * Reprompts until a valid integer is provided.
 * @returns {number} The player's validated guess.
 */
function getPlayerGuess() {
  let guessInput;
  let isValidInput = false;

  while (!isValidInput) {
    guessInput = prompt("Enter your guess (a number between 1 and 100):"); // Prompts the user for input

    // Check if the input is null (user clicked cancel)
    if (guessInput === null) {
      console.log("Game cancelled by the player.");
      return null; // Indicate cancellation
    }

    // Convert to number and validate
    const parsedGuess = parseInt(guessInput); // Returns the player's input as an integer

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      console.log("Evil Al: That's not a valid number! Try again, Mwahahaha!"); // Handles invalid input
    } else {
      isValidInput = true; // Input is valid
      return parsedGuess;
    }
  }
}

/**
 * Checks the player's guess against the correct number.
 * Returns a string indicating if the guess is too low, too high, or correct.
 * @param {number} playerGuess The guess provided by the player.
 * @param {number} correctNumber The randomly generated correct number.
 * @returns {string} A message indicating the guess status.
 */
function checkGuess(playerGuess, correctNumber) {
  if (playerGuess === correctNumber) {
    return "correct"; // Returns a string indicating whether the guess is correct
  } else if (playerGuess < correctNumber) {
    return "low"; // Returns a string indicating whether the guess is too low
  } else {
    return "high"; // Returns a string indicating whether the guess is too high
  }
}

// --- Main Game Logic ---

/**
 * Implements the main game logic for the Number Guessing Game.
 * This function orchestrates the entire game flow.
 */
function game() {
  console.log(
    "Hello, guys! I am the evil Al once more, and this time I challenge you to a game of wits: a Number Guessing Game."
  );
  console.log(
    "Only by following these instructions can you hope to defeat me!"
  );
  console.log(
    `Guess a number between 1 and 100. You have ${MAX_ATTEMPTS} attempts.`
  );
  console.log("Good luck, and may the best coder win! Mwahahaha!");

  randomNumber = generateRandomNumber(); // Generate the random number
  attemptsLeft = MAX_ATTEMPTS; // Initialize a counter for the number of attempts
  hasWon = false; // Reset win flag for new game

  // Use a loop to repeatedly prompt the player for guesses
  while (attemptsLeft > 0 && !hasWon) {
    const playerGuess = getPlayerGuess();

    // Check if player cancelled the game
    if (playerGuess === null) {
      console.log(
        "Evil Al: Hah! You couldn't even start! My plans for world domination continue unimpeded!"
      );
      return; // Exit the game function
    }

    const guessStatus = checkGuess(playerGuess, randomNumber);

    if (guessStatus === "correct") {
      hasWon = true; // Player guessed correctly
      console.log(
        `🎉 Congratulations! You defeated the Evil Al! You guessed the number ${randomNumber} correctly!`
      ); // Print message indicating player has won
      console.log(`You used ${MAX_ATTEMPTS - attemptsLeft + 1} attempts.`); // Print the number of attempts the player used
    } else {
      attemptsLeft--; // Decrement attempts
      if (guessStatus === "low") {
        console.log(
          `Too low! Evil Al laughs at your weakness. You have ${attemptsLeft} attempts left.`
        );
      } else {
        // guessStatus === "high"
        console.log(
          `Too high! Evil Al scoffs at your futile attempts. You have ${attemptsLeft} attempts left.`
        );
      }
    }
  }

  // After the loop, check if the player lost
  if (!hasWon) {
    console.log("Game over! You failed to defeat the Evil Al."); // Print message indicating player has lost
    console.log(`The correct number was: ${randomNumber}.`);
    console.log(`You used all ${MAX_ATTEMPTS} attempts.`); // Print the number of attempts the player used
    console.log("Evil Al: Mwahahaha! You stood no chance! My reign begins!");
  }
}

// Start the game when the script loads
game();
// Example usage in console: guessNumber(50);
