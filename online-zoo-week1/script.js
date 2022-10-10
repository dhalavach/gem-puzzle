/*eslint-disable*/
const testimonials = document.querySelectorAll(
  ".section-5__testimonial-element"
);

const pets = [...document.querySelectorAll(".section-3__image-container")];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  loopFillGroupWithBlank: true,
  slidesCentered: true,

  navigation: {
    nextEl: ".section-3__arrow-right",
    prevEl: ".section-3__arrow-left",
  },
  autoHeight: false,
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2,
  },

  spaceBetween: 20,
  //virtual: true,
  breakpoints: {
    1600: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
    },
    1000: {
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
    },
    640: {
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1,
      },
    },

    320: {
      spaceBetween: 5,
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
  },
});

// document.querySelector(".append-slide").addEventListener("click", function (e) {
//   e.preventDefault();

//   let shuffledPets = shuffle(pets);

//   // swiper.appendSlide(shuffledPets[0].outerHTML);
//   // swiper.appendSlide(shuffledPets[1].outerHTML);
//   // swiper.appendSlide(shuffledPets[2].outerHTML);
//   // swiper.appendSlide(shuffledPets[3].outerHTML);
//   // swiper.appendSlide(shuffledPets[4].outerHTML);
//   // swiper.appendSlide(shuffledPets[5].outerHTML);
//   // swiper.appendSlide(shuffledPets[6].outerHTML);
//   // swiper.appendSlide(shuffledPets[7].outerHTML);

//   swiper.appendSlide(pickRandom(pets).outerHTML);
//   swiper.appendSlide(pickRandom(pets).outerHTML);
//   swiper.appendSlide(pickRandom(pets).outerHTML);
//   swiper.appendSlide(pickRandom(pets).outerHTML);
//   swiper.appendSlide(pickRandom(pets).outerHTML);
//   swiper.appendSlide(pickRandom(pets).outerHTML);
// });

const swiperTestimonials = new Swiper(".swiper-testimonials", {
  direction: "horizontal",
  loop: true,
  slidesCentered: true,

  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragClass: "swiper-scrollbar-drag",
    dragSize: "100px",
  },
  //grabCursor: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  // virtual: {
  //   slides: (function () {
  //     const slides = [];
  //     for (let i = 0; i < 100; i++) {
  //       slides.push(pickRandom(testimonials).outerHTML);
  //       slides.push(pickRandom(testimonials).outerHTML);
  //       slides.push(pickRandom(testimonials).outerHTML);
  //       slides.push(pickRandom(testimonials).outerHTML);
  //     }
  //     return slides;
  //   })(),
  // },

  breakpoints: {
    1600: {
      spaceBetween: 20,
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1000: {
      spaceBetween: 10,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    640: {
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    320: {
      spaceBetween: 5,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

// testimonials.addEventListener("copy", preventCopy, false);

// function preventCopy(event) {
//   event.preventDefault();

// }
//testimonials[Math.floor(Math.random() * testimonials.length)]

//popup 1st attempt at realization

// for (let i = 0; i < testimonials.length; i++) {
//   testimonials[i].addEventListener("pointerdown", openPopUp, false);
// }

// function openPopUp() {
//   let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
// width=370,height=380,left=100,top=100`;

//   let content = this.outerHTML;

//   let popup = window.open("", "", params);
//   popup.document.write(
//     `<html><head><link rel="stylesheet" type="text/css" href="/sass/style.css"></head>${content}<body>`
//   );
// }
