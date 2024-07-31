document.addEventListener("DOMContentLoaded", () => {
  const checkAnswersButton = document.querySelector(".check-answers-button");
  const feedbackMessage = document.querySelector(".feedback-message");

  checkAnswersButton.addEventListener("click", () => {
    const wordInputs = document.querySelectorAll(".word-input");
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
