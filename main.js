// nav open and close............
let openButton = document.querySelector(".open-button");
let closeButton = document.querySelector(".close-button");
openButton.addEventListener("click", () => {
  document.querySelector(".nav-bar").classList.remove("close-nav");
  document.querySelector(".shadow").classList.remove("shadow-hide");
});
closeButton.addEventListener("click", () => {
  document.querySelector(".nav-bar").classList.add("close-nav");
  document.querySelector(".shadow").classList.add("shadow-hide");
});

// up-down manipulation ( ^ )
let up = document.querySelectorAll(".up");
let down = document.querySelectorAll(".down");

// feauter link
let feature = document.querySelector(".feature");
let featureList = document.querySelector(".feature-list");

feature.addEventListener("focusin", () => {
  featureList.classList.add("expand");
  up[0].classList.remove("hide");
  down[0].classList.add("hide");
});

feature.addEventListener("focusout", () => {
  featureList.classList.remove("expand");
  up[0].classList.add("hide");
  down[0].classList.remove("hide");
});

// company link
let company = document.querySelector(".company");
let companyList = document.querySelector(".company-list");

company.addEventListener("focusin", () => {
  companyList.classList.add("expand");
  companyList.classList.remove("absolute");
  up[1].classList.remove("hide");
  down[1].classList.add("hide");
});

company.addEventListener("focusout", () => {
  companyList.classList.remove("expand");
  companyList.classList.add("absolute");
  up[1].classList.add("hide");
  down[1].classList.remove("hide");
});

window.addEventListener("click", function (event) {
  if (event.target === document.querySelector(".shadow")) {
    document.querySelector(".nav-bar").classList.add("close-nav");
    document.querySelector(".shadow").classList.add("shadow-hide");
  }
});
