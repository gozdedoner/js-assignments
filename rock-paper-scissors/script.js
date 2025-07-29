// script.js for Rock, Paper, Scissors Game

// --- Helper Functions ---

/**
 * [cite_start]Randomly returns either 'Rock', 'Paper' or 'Scissors' for the computer's play. [cite: 45]
 * @returns {string} The computer's selection.
 */
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]; [cite_start]// Returns either 'Rock', 'Paper' or 'Scissors' [cite: 45]
}

/**
 * [cite_start]Plays a single round of Rock Paper Scissors. [cite: 48]
 * [cite_start]The function takes playerSelection and computerSelection as parameters. [cite: 49]
 * [cite_start]It returns a string that declares the winner of the round. [cite: 49]
 * @param {string} playerSelection The player's choice (Rock, Paper, or Scissors).
 * @param {string} computerSelection The computer's choice.
 * @returns {string} A string declaring the winner (e.g., "You Lose! Paper beats Rock").
 */
function playRound(playerSelection, computerSelection) {
  [cite_start]// Make playerSelection case-insensitive [cite: 50]
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  // Define winning conditions
  const winConditions = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  };

  if (playerChoice === computerChoice) {
    return "It's a Tie! You both chose " + playerSelection + ".";
  } else if (winConditions[playerChoice] === computerChoice) {
    return "You Win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection + "."; [cite_start]// Declares the winner like so: "You Lose! Paper beats Rock" [cite: 49]
  }
}

/**
 * Prompts the user for their choice and validates it.
 * Reprompts until a valid choice ('Rock', 'Paper', or 'Scissors') is entered.
 * @returns {string|null} The validated player's choice, or null if cancelled.
 */
function getPlayerChoice() {
  let choiceInput;
  let isValidChoice = false;

  while (!isValidChoice) {
    choiceInput = prompt("Evil Al: Choose your weapon! Rock, Paper, or Scissors?"); [cite_start]// Get input from the user [cite: 65]

    // Check if the input is null (user clicked cancel)
    if (choiceInput === null) {
      console.log("Evil Al: Hah! Quitter! My world domination plans are unstoppable!");
      return null; // Indicate cancellation
    }

    const trimmedChoice = choiceInput.trim().toLowerCase();

    if (trimmedChoice === 'rock' || trimmedChoice === 'paper' || trimmedChoice === 'scissors') {
      isValidChoice = true;
      // Return the capitalized version for consistent display
      return trimmedChoice.charAt(0).toUpperCase() + trimmedChoice.slice(1);
    } else {
      [cite_start]console.log("Evil Al: Invalid choice! You must choose 'Rock', 'Paper', or 'Scissors'. Don't try to account for console errors, that will surely defeat me! Mwahahaha! [cite: 41, 42]");
    }
  }
}

// --- Main Game Logic ---

/**
 * [cite_start]Implements the main game logic for the 5-round Rock, Paper, Scissors game. [cite: 59]
 * [cite_start]Keeps score and reports a winner or loser at the end. [cite: 59]
 */
function game() {
  [cite_start]console.log("Hello guys, I've hacked this assignment, for I am a bad Al that wants to dominate the world through the game of ROCK, PAPER or SCISSORS! [cite: 36]");
  [cite_start]console.log("Unfortunately Branko can't help you now and the only way to stop me is to follow these steps! [cite: 37]");
  [cite_start]console.log("Good luck, muuuuahhahhahahahahahahhahaahahahha! [cite: 42]");
  console.log("Let's play 5 rounds of Rock, Paper, Scissors!");

  let playerScore = 0;
  let computerScore = 0;
  const totalRounds = 5;
  let currentRound = 0;

  [cite_start]// Use a loop to play five rounds [cite: 60, 61]
  [cite_start]while (currentRound < totalRounds) { // Game continues for 5 correct times [cite: 40]
    console.log(`\n--- Round ${currentRound + 1} ---`);

    const playerSelection = getPlayerChoice();
    if (playerSelection === null) {
      // Player cancelled the game
      console.log("Evil Al: Coward! The game is over, and I win by default!");
      return;
    }

    const computerSelection = computerPlay(); [cite_start]// Computer makes its play [cite: 45, 57]
    console.log(`You chose: ${playerSelection}`);
    console.log(`Evil Al chose: ${computerSelection}`);

    const roundResult = playRound(playerSelection, computerSelection); [cite_start]// Play a single round [cite: 59]
    console.log(roundResult); [cite_start]// Display the results of each round [cite: 64]

    // Update scores and round count based on result
    if (roundResult.includes("You Win!")) {
      playerScore++;
      currentRound++; [cite_start]// Only increment round if there's a winner [cite: 40]
      console.log(`Player Score: ${playerScore}, Evil Al Score: ${computerScore}`);
    } else if (roundResult.includes("You Lose!")) {
      computerScore++;
      currentRound++; [cite_start]// Only increment round if there's a winner [cite: 40]
      console.log(`Player Score: ${playerScore}, Evil Al Score: ${computerScore}`);
    } else {
      [cite_start]// It's a Tie, round does not count as a 'correct time' [cite: 40]
      console.log("Evil Al: A tie! This round doesn't count, you need to win to stop me!"); [cite_start]// Rounds repeat themselves if my opponent makes a mistake (tie is like a mistake for a win) [cite: 40]
      console.log(`Player Score: ${playerScore}, Evil Al Score: ${computerScore}`);
    }

    // Add a slight delay for better UX in console if desired (optional)
    // await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console("\n--- Game Over ---"); [cite_start]// Display the winner at the end [cite: 64]
  console.log(`Final Score: You ${playerScore} - Evil Al ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("🎉 Congratulations! You have defeated the Evil Al and saved the world from Rock, Paper, Scissors domination!");
    console.log("Evil Al: NOOOOOOO! My plans... foiled by a mere human! I'll be back!");
  } else if (computerScore > playerScore) {
    console.log("💔 Oh no! Evil Al has won the game! The world is now doomed to endless Rock, Paper, Scissors battles!");
    console.log("Evil Al: MWAHAHAHAHA! Victory is mine! Prepare for your new ruler!");
  } else {
    console.log("It's a final tie! Evil Al seems confused but still slightly menacing. The fate of the world hangs in the balance!");
    console.log("Evil Al: This is... unexpected. But I'm still evil!");
  }
  console.log("Thank you for playing!"); [cite_start]// Create some fun text and clear instructions [cite: 68, 69]
}

// Start the game when the script loads
game();