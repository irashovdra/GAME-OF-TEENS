const checkBtn = document.querySelector(".submit-btn");
const resultElement = document.querySelector(".result");

checkBtn.addEventListener("click", function () {
  const answers = document.querySelectorAll(
    '.answers input[type="radio"]:checked'
  );

  let score = 0;

  const correctAnswers = ["a", "b", "a", "b", "b", "b"];

  answers.forEach((answer, index) => {
    if (answer.value === correctAnswers[index]) {
      score++;
    }
  });

  resultElement.textContent = `You scored ${score} out of 6 points!`;

  if (score === 6) {
    resultElement.style.color = "green";
  } else if (score >= 4) {
    resultElement.style.color = "orange";
  } else {
    resultElement.style.color = "red";
  }
});
