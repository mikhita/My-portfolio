let slider = document.querySelector(".sliderMainDiv");
let slides = slider.getElementsByClassName("slide");
let currentSlide = 0;

document.getElementById("left-arrow").addEventListener("click", function () {
  currentSlide--;
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  if (mediaQuery.matches) {
    slider.style.marginLeft = "-" + currentSlide * (540 + 50) + "px";
  } else {
    slider.style.marginLeft = "-" + currentSlide * (270 + 50) + "px";
  }
});

document.getElementById("right-arrow").addEventListener("click", function () {
  currentSlide++;
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  if (mediaQuery.matches) {
    slider.style.marginLeft = "-" + currentSlide * (540 + 50) + "px";
  } else {
    slider.style.marginLeft = "-" + currentSlide * (270 + 50) + "px";
  }
});
