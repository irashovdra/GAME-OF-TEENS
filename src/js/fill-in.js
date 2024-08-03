document.addEventListener("DOMContentLoaded", () => {
  const checkAnswersButton = document.querySelector(".fill-in__check");
  const feedbackMessage = document.querySelector(".fill-in__feedback");

  checkAnswersButton.addEventListener("click", () => {
    const wordInputs = document.querySelectorAll(".sentence__input");
    let correctCount = 0;

    wordInputs.forEach((input) => {
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = input.dataset.answer.toLowerCase();

      if (userAnswer === correctAnswer) {
        input.style.borderColor = "green";
        correctCount++;
      } else {
        input.style.borderColor = "red";
      }
    });

    feedbackMessage.textContent = `You got ${correctCount} out of ${wordInputs.length} correct!`;
  });
});
