let attempts = 0;
let maxAttempts = 10;
let hasWon = false;
let previousGuess = null;
let guessHistory = [];

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const getDifficulty = () => {
  let input;
  do {
    input = prompt(
      "Choose difficulty: easy (15 attempts), medium (10 attempts), or hard (5 attempts)"
    );
    
    if (input === null) {
      maxAttempts = 10;
      console.log("💀 GLOOM-9000: Fine, medium difficulty it is.");
      return;
    }
    
    input = input.toLowerCase().trim();
    
    if (input === "easy") {
      maxAttempts = 15;
      console.log("💀 GLOOM-9000: Easy mode? How... predictable.");
    } else if (input === "hard") {
      maxAttempts = 5;
      console.log("💀 GLOOM-9000: Hard mode? I like your confidence. You'll need it.");
    } else if (input === "medium") {
      maxAttempts = 10;
      console.log("💀 GLOOM-9000: Medium difficulty. Playing it safe, I see.");
    } else {
      console.log("💀 GLOOM-9000: Invalid choice. Try again, genius.");
    }
  } while (!["easy", "medium", "hard"].includes(input));
};

function getPlayerGuess() {
  let userInput;
  let guess;
  
  do {
    userInput = prompt(
      `Attempt ${attempts + 1}/${maxAttempts}: Guess the number (1–100)`
    );
    
    if (userInput === null) {
      return null;
    }
    
    guess = parseInt(userInput.trim(), 10);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("💀 GLOOM-9000: Try entering a valid number between 1-100, genius.");
      guess = null;
    }
  } while (guess === null);

  console.log(`📌 You guessed: ${guess}`);

  const evilResponses = [
    "Hmm... interesting. Wrong, of course.",
    "Ah yes, the classic strategy of guessing poorly.",
    "Is that your final answer? Cute.",
    "You really thought that would work? Deliciously naive.",
    "Ha! I haven't laughed like this since Windows Vista.",
    "You're giving me hope that humanity is easy to conquer.",
    "I almost feel bad for you. Almost.",
    "You guess like a toaster with stage fright.",
    "I've seen random number generators with more skill.",
    "Another guess? Bold move, meatbag.",
  ];

  const randomIndex = Math.floor(Math.random() * evilResponses.length);
  console.log(`💀 Evil AI: ${evilResponses[randomIndex]}`);

  if (guess === previousGuess) {
    console.log("💀 GLOOM-9000: Again? I swear you just guessed that...");
  }
  if (guessHistory.includes(guess)) {
    console.log("💀 GLOOM-9000: Recycling guesses? Truly inspired.");
  }

  guessHistory.push(guess);
  return guess;
}

function checkGuess(guess, correctNumber, previousGuess) {
  if (guess === 69) {
    return {
      type: "easter_egg",
      message: "🍑 Nice. Real mature. You know what? Game over. I can't deal with this level of immaturity."
    };
  }

  if (guess === correctNumber) {
    return "🎉 Congrats, you actually beat me.";
  }

  const currentDistance = Math.abs(guess - correctNumber);
  const previousDistance = previousGuess === null ? null : Math.abs(previousGuess - correctNumber);

  let proximityMessage;
  if (currentDistance <= 5) {
    proximityMessage = "🔥 You're *really* close!";
  } else if (currentDistance <= 10) {
    proximityMessage = "🌡️ Warm. Warmer than your last relationship.";
  } else if (currentDistance <= 20) {
    proximityMessage = "🧊 Lukewarm. Like tap water.";
  } else {
    proximityMessage = "❄️ Freezing. Do you even *want* to win?";
  }

  if (previousDistance !== null) {
    if (currentDistance < previousDistance) {
      proximityMessage += " (Getting warmer 🔥)";
    } else if (currentDistance > previousDistance) {
      proximityMessage += " (Getting colder ❄️)";
    }
  }

  if (guess < correctNumber) {
    proximityMessage += " Think higher! ⬆️";
  } else {
    proximityMessage += " Think lower! ⬇️";
  }

  return proximityMessage;
}

function calculateScore(attemptsUsed) {
  return Math.max(0, (maxAttempts - attemptsUsed + 1) * 10);
}

function updateHighScore(score) {
  try {
    const highScore = parseInt(localStorage.getItem("highScore"), 10) || 0;
    if (score > highScore) {
      localStorage.setItem("highScore", score);
      console.log(`🏆 New high score: ${score}!`);
    } else {
      console.log(`🎯 Your score: ${score}. High score: ${highScore}`);
    }
  } catch (error) {
    console.log(`🎯 Your score: ${score}`);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function game() {
  console.log("💀 GLOOM-9000: Welcome to my number guessing game, human.");
  console.log("💀 GLOOM-9000: I've picked a number between 1 and 100. Try to guess it... if you can.");
  
  getDifficulty();

  const randomNumber = generateRandomNumber();
  attempts = 0;
  hasWon = false;
  previousGuess = null;
  guessHistory = [];

  console.log(`💀 GLOOM-9000: You have ${maxAttempts} attempts. Let's see how badly you fail.`);

  while (attempts < maxAttempts && !hasWon) {
    const guess = getPlayerGuess();
    
    if (guess === null) {
      console.log("💀 GLOOM-9000: Giving up already? Pathetic.");
      return;
    }

    attempts++;
    
    console.log("🤖 Processing your pitiful guess...");
    await delay(1000);
    
    const result = checkGuess(guess, randomNumber, previousGuess);
    
    if (typeof result === 'object' && result.type === 'easter_egg') {
      console.log(result.message);
      console.log("💀 GLOOM-9000: That's it. I'm done. This game is over.");
      break;
    }
    
    console.log(result);
    
    previousGuess = guess;

    if (guess === randomNumber) {
      hasWon = true;
      const score = calculateScore(attempts);
      console.log(`🎉 Impossible! You guessed it in ${attempts} attempt${attempts === 1 ? '' : 's'}!`);
      console.log("💀 GLOOM-9000: I... I can't believe it. You actually won. This is highly irregular.");
      updateHighScore(score);
    } else if (attempts === maxAttempts) {
      console.log(`💀 GLOOM-9000: FAILURE! You've used all ${maxAttempts} attempts.`);
      console.log(`💀 GLOOM-9000: The number was ${randomNumber}. Better luck next time... if there is one.`);
    } else {
      console.log(`💀 GLOOM-9000: ${maxAttempts - attempts} attempt${maxAttempts - attempts === 1 ? '' : 's'} remaining. Don't waste them.`);
    }
  }

  const playAgain = confirm("💀 GLOOM-9000: Care to embarrass yourself again?");
  if (playAgain) {
    console.log("💀 GLOOM-9000: Glutton for punishment, I see. Let's go again!");
    await delay(500);
    game();
  } else {
    console.log("💀 GLOOM-9000: Wise choice. Come back when you've grown a spine... or a brain.");
  }
}

console.log("🎮 Starting Number Guessing Game...");
game();