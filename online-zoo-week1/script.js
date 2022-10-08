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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
});
