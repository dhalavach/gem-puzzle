/*eslint-disable*/

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".section-3__arrow-right",
    prevEl: ".section-3__arrow-left",
  },
  // autoHeight: false,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerGroup: 1,
  //slidesPerColumnFill: "row",
  spaceBetween: 20,
});
