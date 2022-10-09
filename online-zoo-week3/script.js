/*eslint-disable*/

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
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
      slidesPerView: 3,
      slidesPerGroup: 3,
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

const swiperTestimonials = new Swiper(".swiper-testimonials", {
  direction: "horizontal",
  loop: true,

  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragClass: "swiper-scrollbar-drag",
    dragSize: "120px",
  },
  grabCursor: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
});

const testimonials = document.querySelectorAll(
  ".section-5__testimonial-element"
);
testimonials.addEventListener("copy", preventCopy, false);

function preventCopy(event) {
  event.preventDefault();
}
