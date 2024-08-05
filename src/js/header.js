document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".header-menu-icon");
  const headerList = document.querySelector(".header-list");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active");
    headerList.classList.toggle("active");
  });
});
