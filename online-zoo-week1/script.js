/*eslint-disable*/

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoHeight: false,
  slidesPerView: 1,
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  slidesPerColumnFill: "row",
  spaceBetween: 20,
});
