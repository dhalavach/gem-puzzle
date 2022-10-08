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
    640: {
      spaceBetween: 10,
    },

    320: {
      spaceBetween: 5,
    },
  },
});
