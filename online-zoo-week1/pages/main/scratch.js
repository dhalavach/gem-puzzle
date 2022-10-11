//burger and pop-up
function toggle() {
  //burger
  const burgerIcon = document.querySelector(".navigation__burger");
  const burgerBlock = document.querySelector(".burger");
  const background = document.querySelector(".background-color");
  const burgerX = document.querySelector(".burger__close");

  function toggleBurger(e) {
    if (e.target.closest(".navigation__burger")) {
      burgerBlock.classList.add("open-burger");
      background.classList.remove("visibility");
    } else if (!e.target.closest(".burger-container") || e.target === burgerX) {
      burgerBlock.classList.remove("open-burger");
      background.classList.add("visibility");
    }
  }

  burgerIcon.addEventListener("click", toggleBurger);
  document.addEventListener("click", toggleBurger);

  //pop-up
  function popUp() {
    const popUp = document.querySelector(".pop-up");
    const closePopUp = document.querySelector(".close-pop-up");
    const container = document.querySelector(".testimonials-reviews");
    popUp.classList.add("testimonials-reviews-column");

    function showPopUp(e) {
      const reviews = e.target.closest(".testimonials-reviews-column");
      if (reviews) {
        popUp.innerHTML = reviews.innerHTML;
        popUp.style.paddingBottom = 15 + "px";
        popUp.classList.remove("visibility");
        closePopUp.classList.remove("visibility");
        background.classList.remove("visibility");
        document.body.classList.add("stop-scroll");
      } else if (!reviews || e.target === closePopUp) {
        popUp.classList.add("visibility");
        closePopUp.classList.add("visibility");
        background.classList.add("visibility");
        document.body.classList.remove("stop-scroll");
      }
    }

    container.addEventListener("click", showPopUp);
    document.addEventListener("click", showPopUp);
  }
  popUp();
}
toggle();

//slider-pets
const random = {
  card1: {
    img: "../../assets/images/img/card1.png",
    name: "giant Pandas",
    text: "Native to Southwest China",
    icon: "../../assets/images/svg/banana-bamboo_icon.svg",
  },
  card2: {
    img: "../../assets/images/img/card2.png",
    name: "Eagles",
    text: "Native to South America",
    icon: "../../assets/images/svg/meet-fish_icon.svg",
  },
  card3: {
    img: "../../assets/images/img/card3.png",
    name: "Gorillas",
    text: "Native to Congo",
    icon: "../../assets/images/svg/banana-bamboo_icon.svg",
  },
  card4: {
    img: "../../assets/images/img/card4.png",
    name: "Two-toed Sloth",
    text: "Mesoamerica, South America",
    icon: "../../assets/images/svg/banana-bamboo_icon.svg",
  },
  card5: {
    img: "../../assets/images/img/card5.png",
    name: "cheetahs",
    text: "Native to Africa",
    icon: "../../assets/images/svg/banana-bamboo_icon.svg",
  },
  card6: {
    img: "../../assets/images/img/card6.png",
    name: "Penguins",
    text: "Native to Antarctica",
    icon: "../../assets/images/svg/meet-fish_icon.svg",
  },
  card7: {
    img: "../../assets/images/img/Rectangle 5.jpeg",
    name: "Alligators",
    text: "Native to Southeastern U. S.",
    icon: "../../assets/images/svg/meet-fish_icon.svg",
  },
  card8: {
    img: "../../assets/images/img/Tiger1.webp",
    name: "Tiger",
    text: "Native to Bengal",
    icon: "../../assets/images/svg/meet-fish_icon.svg",
  },
};

function slider() {
  const container = document.querySelector(".pets-container");
  const btns = document.querySelectorAll(".pets__button");
  const cards = document.querySelectorAll(".pets-container-item");

  function landing() {
    cards.forEach((card) => card.remove());
    getRandomCards(6);
  }

  function createCard(i) {
    const card = document.createElement("figure");
    card.classList.add("pets-container-item");
    card.innerHTML = cards[i - 1].innerHTML;
    card.children[0].children[0].src = random[`card${i}`].img;
    card.children[1].children[1].src = random[`card${i}`].icon;
    card.children[1].children[0].innerHTML = random[`card${i}`].name;
    const span = document.createElement("span");
    span.innerHTML = random[`card${i}`].text;
    card.children[1].children[0].appendChild(span);
    container.appendChild(card);
  }

  function getRandomCards(num) {
    let arr = [];
    for (let i = 1; i < 9; i++) {
      arr.push(i);
    }
    for (let i = 0; i < num; i++) {
      let randomNum = Math.floor(Math.random() * arr.length);
      createCard(arr[randomNum]);
      arr.splice(randomNum, 1);
    }
    arr = [];
  }

  function moveSlider(e) {
    if (window.innerWidth < 641 && container.children.length === 8) {
      container.lastChild.remove();
      container.lastChild.remove();
    }
    if (e.target.closest(".pets__button_left")) {
      getRandomCards(6);
      container.classList.add("move-slider-pets__left");
      btns[1].classList.add("move-slider-pets-button__right");
      btns[2].classList.add("move-slider-pets-button__right");
      btns.forEach((btn) => btn.removeEventListener("click", moveSlider));
    } else if (e.target.closest(".pets__button_right")) {
      if (window.innerWidth > 640) {
        getRandomCards(6);
        getRandomCards(6);
      } else {
        getRandomCards(8);
      }
      container.classList.add("move-slider-pets__right");
      btns[1].classList.add("move-slider-pets-button__left");
      btns[2].classList.add("move-slider-pets-button__left");
      btns.forEach((btn) => btn.removeEventListener("click", moveSlider));
    }
  }

  function animation(e) {
    if (e.animationName === "left") {
      renameCard(container.children);
      container.classList.remove("move-slider-pets__left");
      removeCard(container.children);
      btns[1].classList.remove("move-slider-pets-button__right");
      btns[2].classList.remove("move-slider-pets-button__right");
      btns.forEach((btn) => btn.addEventListener("click", moveSlider));
    }
    if (e.animationName === "right") {
      renameCard(container.children);
      container.classList.remove("move-slider-pets__right");
      removeCard(container.children);
      btns[1].classList.remove("move-slider-pets-button__left");
      btns[2].classList.remove("move-slider-pets-button__left");
      btns.forEach((btn) => btn.addEventListener("click", moveSlider));
    }
  }

  function removeCard(arr) {
    for (let i = arr.length - 1; i > 7; i--) {
      arr[i].remove();
    }
  }

  function renameCard(arr) {
    let num;
    window.innerWidth > 640 ? (num = 8) : (num = 6);
    if (container.classList.contains("move-slider-pets__left")) {
      for (let i = 2; i < num; i++) {
        arr[i].innerHTML = arr[i + 6].innerHTML;
      }
    }
    if (container.classList.contains("move-slider-pets__right")) {
      if (window.innerWidth > 640) {
        for (let i = 2; i < 8; i++) {
          arr[i].innerHTML = arr[i + 12].innerHTML;
        }
      } else {
        for (let i = 2; i < 4; i++) {
          arr[i].innerHTML = arr[i + 4].innerHTML;
          arr[i + 2].innerHTML = arr[i + 10].innerHTML;
        }
      }
    }
  }

  btns.forEach((btn) => btn.addEventListener("click", moveSlider));
  container.addEventListener("animationend", animation);
  document.addEventListener("DOMContentLoaded", landing);
}
slider();

//slider-testimates
function sliderRow() {
  const input = document.querySelector(".testimonials__range");
  const container = document.querySelector(".testimonials-reviews");
  const column = document.querySelector(".testimonials-reviews-column");

  input.addEventListener("input", moveRow);
  window.addEventListener("resize", moveRow);

  function moveRow() {
    const value = input.value;
    const width = column.offsetWidth * 11 + 310 - container.offsetWidth;
    container.style.right = (value * width) / 100 + "px";
  }
}
sliderRow();
