// Rock Paper Scissors Game

// Define the options
const choices = ["rock", "paper", "scissors"];

// Function to get computer's choice randomly
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Main game loop
for (let round = 1; round <= 5; round++) {
  const playerChoice = prompt(
    `Round ${round} - Enter rock, paper, or scissors:`
  ).toLowerCase();
  const computerChoice = getComputerChoice();
  console.log(`You: ${playerChoice} | Computer: ${computerChoice}`);
  console.log(determineWinner(playerChoice, computerChoice));
}
