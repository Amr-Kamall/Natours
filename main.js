let navigationButton = document.querySelector(".navigation-button");
let navigationNav = document.querySelector(".navigation-nav");
let navigationBackground = document.querySelector(".navigation-background");
let links = document.querySelectorAll(".navigation-link");

links.forEach((link) =>
  link.addEventListener("click", function () {
    navigationNav.classList.remove("active1");
    navigationBackground.classList.remove("active2");
    navigationButton.classList.remove("active");
  })
);

navigationButton.addEventListener("click", function () {
  this.classList.toggle("active");
  navigationNav.classList.toggle("active1");
  navigationBackground.classList.toggle("active2");
});
