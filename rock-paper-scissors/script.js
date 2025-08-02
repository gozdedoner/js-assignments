// --- Helper Functions ---

/**
 * Randomly returns either 'Rock', 'Paper' or 'Scissors' for the computer's play.
 * @returns {string} The computer's selection.
 */
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/**
 * Plays a single round of Rock Paper Scissors.
 * Takes playerSelection and computerSelection as parameters.
 * Returns a string that declares the winner of the round.
 * @param {string} playerSelection The player's choice (Rock, Paper, or Scissors).
 * @param {string} computerSelection The computer's choice.
 * @returns {string} A string declaring the winner.
 */
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerChoice === computerChoice) {
    return "It's a Tie! You both chose " + playerSelection + ".";
  } else if (winConditions[playerChoice] === computerChoice) {
    return "You Win! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
  }
}

function getPlayerChoice() {
  const validChoices = {
    'r': 'Rock', 'rock': 'Rock',
    'p': 'Paper', 'paper': 'Paper', 
    's': 'Scissors', 'scissors': 'Scissors', 'scissor': 'Scissors'
  };

  let choiceInput;
  let isValidChoice = false;

  while (!isValidChoice) {
    choiceInput = prompt(
      "Evil Al: Choose your weapon! Rock, Paper, or Scissors? (or just r/p/s)"
    );

    if (choiceInput === null) {
      console.log(
        "Evil Al: Hah! Quitter! My world domination plans are unstoppable!"
      );
      return null;
    }

    const trimmedChoice = choiceInput.trim().toLowerCase();

    if (validChoices[trimmedChoice]) {
      isValidChoice = true;
      return validChoices[trimmedChoice];
    } else {
      console.log(
        "Evil Al: Invalid choice! You must choose 'Rock', 'Paper', 'Scissors', or just 'r', 'p', 's'."
      );
    }
  }
}

function askPlayAgain() {
  const playAgain = prompt("Would you like to play again? (yes/no)");
  if (playAgain === null) return false;
  return playAgain.toLowerCase().trim().startsWith('y');
}

// --- Main Game Logic ---

/**
 * Main game function: plays 5 rounds of Rock, Paper, Scissors.
 */
function game() {
  console.log(
    "Hello guys, I've hacked this assignment, for I am a bad Al that wants to dominate the world through the game of ROCK, PAPER or SCISSORS!"
  );
  console.log(
    "Unfortunately Branko can't help you now and the only way to stop me is to follow these steps!"
  );
  console.log("Good luck, muuuuahhahhahahahahahahhahaahahahha!");
  console.log("Let's play 5 rounds of Rock, Paper, Scissors!");

  let playerScore = 0;
  let computerScore = 0;
  const totalRounds = 5;
  let currentRound = 0;

  while (currentRound < totalRounds) {
    console.log(`\n--- Round ${currentRound + 1} ---`);

    const playerSelection = getPlayerChoice();
    if (playerSelection === null) {
      console.log("Evil Al: Coward! The game is over, and I win by default!");
      return;
    }

    const computerSelection = computerPlay();
    console.log(`You chose: ${playerSelection}`);
    console.log(`Evil Al chose: ${computerSelection}`);

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes("You Win!")) {
      playerScore++;
    } else if (roundResult.includes("You Lose!")) {
      computerScore++;
    }

    currentRound++;
    console.log(
      `Player Score: ${playerScore}, Evil Al Score: ${computerScore}`
    );
  }

  console.log("\n--- Game Over ---");
  console.log(`Final Score: You ${playerScore} - Evil Al ${computerScore}`);

  if (playerScore > computerScore) {
    console.log(
      "🎉 Congratulations! You have defeated the Evil Al and saved the world!"
    );
    console.log(
      "Evil Al: NOOOOOOO! My plans... foiled by a mere human! I'll be back!"
    );
  } else if (computerScore > playerScore) {
    console.log(
      "💔 Oh no! Evil Al has won! The world is now doomed to endless Rock, Paper, Scissors battles!"
    );
    console.log(
      "Evil Al: MWAHAHAHAHA! Victory is mine! Prepare for your new ruler!"
    );
  } else {
    console.log(
      "It's a final tie! Evil Al seems confused but still slightly menacing."
    );
    console.log("Evil Al: This is... unexpected. But I'm still evil!");
  }

  console.log("Thank you for playing!");
}

function startGame() {
  let playingGame = true;
  
  while (playingGame) {
    game();
    playingGame = askPlayAgain();
    
    if (playingGame) {
      console.log("\nEvil Al: So you dare challenge me again? EXCELLENT!");
    } else {
      console.log("\nEvil Al: Until we meet again... MWAHAHAHA!");
    }
  }
}

startGame();