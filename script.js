const hamburgerMenuBtn = document.querySelector(".hamburger-menu-button");
const responsiveMenu = document.querySelector(".responsive-menu");
const closeButton = document.querySelector(".close-button");

console.log(hamburgerMenuBtn);

hamburgerMenuBtn.addEventListener("click", function () {
  responsiveMenu.classList.add("open-menu");
});

closeButton.addEventListener("click", function () {
  responsiveMenu.classList.remove("open-menu");
});
