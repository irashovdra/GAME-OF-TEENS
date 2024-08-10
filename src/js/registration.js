const lessonModal = document.querySelector(".lesson-modal");
const courseModal = document.querySelector(".course-modal");
const lessonBtn = document.querySelector(".lesson-registration__btn");
const courseBtn = document.querySelector(".course-registration__btn");
const lessonCloseBtn = document.querySelector(".lesson-modal__close");
const courseCloseBtn = document.querySelector(".course-modal__close");

lessonBtn.addEventListener("click", () => {
  lessonModal.style.display = "block";
});

courseBtn.addEventListener("click", () => {
  courseModal.style.display = "block";
});

lessonCloseBtn.addEventListener("click", () => {
  lessonModal.style.display = "none";
});

courseCloseBtn.addEventListener("click", () => {
  courseModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("lesson-modal")) {
    lessonModal.style.display = "none";
  } else if (event.target.classList.contains("course-modal")) {
    courseModal.style.display = "none";
  }
});
