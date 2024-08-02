class WordScrambleGame {
  constructor(words) {
    this.words = words;
    this.currentWordIndex = 0;
    this.correctGuesses = 0;
    this.scrambledWordElement = document.querySelector(".word-scramble__word");
    this.hintElement = document.querySelector(".word-scramble__hint span");
    this.guessInputElement = document.querySelector(".word-scramble__input");
    this.scoreElement = document.querySelector(".word-scramble__score");
    this.refreshButton = document.querySelector(".refresh-word");
    this.checkButton = document.querySelector(".check-word");

    this.init();
  }

  init() {
    this.refreshButton.addEventListener("click", () => this.refreshWord());
    this.checkButton.addEventListener("click", () => this.checkGuess());

    this.nextWord();
  }

  scrambleWord(word) {
    return word
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
  }

  nextWord() {
    if (this.currentWordIndex >= this.words.length) {
      this.showFinalScore();
      return;
    }

    const current = this.words[this.currentWordIndex];
    this.scrambledWordElement.textContent = this.scrambleWord(current.word);
    this.hintElement.textContent = current.hint;
    this.guessInputElement.value = "";
    this.currentWordIndex++;
  }

  refreshWord() {
    const current = this.words[this.currentWordIndex - 1];
    this.scrambledWordElement.textContent = this.scrambleWord(current.word);
    this.guessInputElement.value = "";
  }

  checkGuess() {
    const guess = this.guessInputElement.value.trim().toLowerCase();
    const currentWord =
      this.words[this.currentWordIndex - 1].word.toLowerCase();

    if (guess === currentWord) {
      this.correctGuesses++;
      this.displayMessage("Correct!", true);
    } else {
      this.displayMessage(
        `Wrong! The correct word was "${currentWord}".`,
        false
      );
    }

    this.updateScore();
    this.nextWord();
  }

  updateScore() {
    this.scoreElement.textContent = this.correctGuesses;
  }

  displayMessage(message, isCorrect) {
    // Simple alert message for displaying feedback
    if (isCorrect) {
      alert(message);
    } else {
      alert(message);
    }
  }

  showFinalScore() {
    this.scrambledWordElement.textContent = "Game Over!";
    this.hintElement.textContent = "";
    this.guessInputElement.style.display = "none";
    this.refreshButton.style.display = "none";
    this.checkButton.style.display = "none";
    alert(
      `You guessed ${this.correctGuesses} out of ${this.words.length} words correctly!`
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const words = [
    {
      word: "addition",
      hint: "The process of adding numbers",
    },
    {
      word: "meeting",
      hint: "Event in which people come together",
    },
    {
      word: "number",
      hint: "Math symbol used for counting",
    },
    {
      word: "exchange",
      hint: "The act of trading",
    },
    {
      word: "canvas",
      hint: "Piece of fabric for oil painting",
    },
    {
      word: "garden",
      hint: "Space for planting flower and plant",
    },
    {
      word: "position",
      hint: "Location of someone or something",
    },
    {
      word: "feather",
      hint: "Hair-like outer covering of bird",
    },
    {
      word: "comfort",
      hint: "A pleasant feeling of relaxation",
    },
    {
      word: "tongue",
      hint: "The muscular organ of mouth",
    },
    {
      word: "expansion",
      hint: "The process of increase or grow",
    },
    {
      word: "country",
      hint: "A politically identified region",
    },
    {
      word: "group",
      hint: "A number of objects or persons",
    },
    {
      word: "taste",
      hint: "Ability of tongue to detect flavour",
    },
    {
      word: "store",
      hint: "Large shop where goods are traded",
    },
    {
      word: "field",
      hint: "Area of land for farming activities",
    },
    {
      word: "friend",
      hint: "Person other than a family member",
    },
    {
      word: "pocket",
      hint: "A bag for carrying small items",
    },
    {
      word: "needle",
      hint: "A thin and sharp metal pin",
    },
    {
      word: "expert",
      hint: "Person with extensive knowledge",
    },
    {
      word: "statement",
      hint: "A declaration of something",
    },
    {
      word: "second",
      hint: "One-sixtieth of a minute",
    },
    {
      word: "library",
      hint: "Place containing a collection of books",
    },
  ];

  new WordScrambleGame(words);
});
