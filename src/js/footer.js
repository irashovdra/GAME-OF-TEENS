document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("thankYouModal");
  const closeBtn = document.querySelector(".modal-close");

  function showModal() {
    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
  }

  document
    .querySelector(".newsletter form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      showModal();
    });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
