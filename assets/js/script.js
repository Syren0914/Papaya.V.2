const header = document.querySelector("header");

window.addEventListener( "scroll", () =>{
    header.classList.toggle("sticky", window.scrollY > 0);

})

const headerMenu = document.querySelector(".header__menu"),
    menuBtn = document.querySelector(".menu-btn"),
headerMenuItems = headerMenu.querySelectorAll("li a");

menuBtn.addEventListener('click', ()=> {
    headerMenu.classList.toggle("show");
});
headerMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        headerMenu.classList.remove("show");
    });
});




// SLIDE ANIMATION 

'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}







/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);






// Redirect
function redirectToMenu(){
  window.location.href = 'menu.html#noodle';
}
function redirectToMenu1(){
  window.location.href = 'menu.html#entree';
}
function redirectToMenu2(){
  window.location.href = 'menu.html#drinks';
}
function redirectToContact(){
  window.location.href = 'index.html#reservation';
}
function redirectToEvents(){
  window.location.href = 'index.html#events';
}
function redirectToAbout(){
  window.location.href = 'index.html#about';
}





