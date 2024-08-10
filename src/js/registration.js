document.addEventListener("DOMContentLoaded", function () {
  const lessonModal = document.querySelector(".lesson-modal");
  const courseModal = document.querySelector(".course-modal");
  const thankYouModal = document.querySelector(".thank-you-modal");

  const lessonBtn = document.querySelector(".lesson-registration__btn");
  const courseBtn = document.querySelector(".course-registration__btn");

  const thankYouClose = document.querySelector(".thank-you-modal__close");

  const lessonForm = document.querySelector(".lesson-modal__form");
  const courseForm = document.querySelector(".course-modal__form");

  // Function to show modal with animation
  const showModal = (modal) => {
    modal.classList.add("show");
    setTimeout(() => {
      modal.querySelector(
        ".lesson-modal__content, .course-modal__content, .thank-you-modal__content"
      ).style.transform = "translateY(0)";
    }, 10);
  };

  // Function to hide modal with animation
  const hideModal = (modal) => {
    modal.querySelector(
      ".lesson-modal__content, .course-modal__content, .thank-you-modal__content"
    ).style.transform = "translateY(-50px)";
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.classList.remove("show");
    }, 300);
  };

  // Open modals
  lessonBtn.addEventListener("click", () => showModal(lessonModal));
  courseBtn.addEventListener("click", () => showModal(courseModal));

  // Close Thank You modal
  thankYouClose.addEventListener("click", () => hideModal(thankYouModal));

  // Form submissions
  lessonForm.addEventListener("submit", function (event) {
    event.preventDefault();
    hideModal(lessonModal);
    setTimeout(() => showModal(thankYouModal), 300);
  });

  courseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    hideModal(courseModal);
    setTimeout(() => showModal(thankYouModal), 300);
  });

  // Close modals when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === lessonModal) hideModal(lessonModal);
    if (event.target === courseModal) hideModal(courseModal);
    if (event.target === thankYouModal) hideModal(thankYouModal);
  });
});
