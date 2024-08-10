document.addEventListener("DOMContentLoaded", () => {
  const cardsArray = [
    { word: "happy", match: "joyful" },
    { word: "big", match: "large" },
    { word: "small", match: "tiny" },
    { word: "fast", match: "quick" },
    { word: "angry", match: "furious" },
    { word: "dark", match: "shadowy" },
  ];

  let gameArray = [
    ...cardsArray,
    ...cardsArray.map((card) => ({ word: card.match, match: card.word })),
  ];
  gameArray = gameArray.sort(() => 0.5 - Math.random());

  const gameBoard = document.querySelector(".game__board");
  const resetButton = document.querySelector(".game__reset-button");

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  gameArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("game__card");
    card.dataset.word = item.word;
    card.dataset.match = item.match;
    card.textContent = item.word;

    gameBoard.appendChild(card);

    card.addEventListener("click", () => {
      if (lockBoard) return;
      if (card === firstCard) return;

      card.classList.add("game__card--flipped");

      if (!firstCard) {
        firstCard = card;
        return;
      }

      secondCard = card;
      lockBoard = true;

      checkForMatch();
    });
  });

  function checkForMatch() {
    const isMatch = firstCard.dataset.match === secondCard.dataset.word;

    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.classList.add("game__card--matched");
    secondCard.classList.add("game__card--matched");

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("game__card--flipped");
      secondCard.classList.remove("game__card--flipped");

      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  resetButton.addEventListener("click", () => {
    gameArray = [
      ...cardsArray,
      ...cardsArray.map((card) => ({ word: card.match, match: card.word })),
    ];
    gameArray = gameArray.sort(() => 0.5 - Math.random());

    gameBoard.innerHTML = "";

    gameArray.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("game__card");
      card.dataset.word = item.word;
      card.dataset.match = item.match;
      card.textContent = item.word;

      gameBoard.appendChild(card);

      card.addEventListener("click", () => {
        if (lockBoard) return;
        if (card === firstCard) return;

        card.classList.add("game__card--flipped");

        if (!firstCard) {
          firstCard = card;
          return;
        }

        secondCard = card;
        lockBoard = true;

        checkForMatch();
      });
    });
  });
});
