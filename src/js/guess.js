// script.js

const guessClueText = document.querySelector(".guess-clue-text");
const guessInput = document.querySelector(".guess-input");
const guessButton = document.querySelector(".guess-button");
const guessFeedback = document.querySelector(".guess-feedback");
const guessScoreValue = document.querySelector(".guess-score-value");

const words = [
  { word: "apple", clue: "A type of fruit that is often red or green." },
  { word: "elephant", clue: "A large animal with a trunk and tusks." },
  {
    word: "pyramid",
    clue: "A massive structure with a square base and triangular sides.",
  },
];

let currentWordIndex = 0;
let score = 0;

function displayClue() {
  const currentWord = words[currentWordIndex];
  guessClueText.textContent = currentWord.clue;
}

function checkGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();
  const correctWord = words[currentWordIndex].word;

  if (userGuess === correctWord) {
    guessFeedback.textContent = "Correct! Well done.";
    score++;
    guessScoreValue.textContent = score;
  } else {
    guessFeedback.textContent = `Wrong! The correct word was "${correctWord}".`;
  }

  guessInput.value = "";
  currentWordIndex = (currentWordIndex + 1) % words.length;
  displayClue();
}

guessButton.addEventListener("click", checkGuess);

// Initialize the game
displayClue();
