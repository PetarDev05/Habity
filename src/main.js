const icon = document.querySelector(".js-burger-menu-icon");
const line1 = document.querySelector(".js-line-1");
const line2 = document.querySelector(".js-line-2");
const line3 = document.querySelector(".js-line-3");
const menu = document.querySelector(".js-burger-menu");

icon.addEventListener("click", () => {
  line1.classList.toggle("top-2");
  line1.classList.toggle("top-5");
  line1.classList.toggle("rotate-45");

  line2.classList.toggle("hidden");

  line3.classList.toggle("top-8");
  line3.classList.toggle("top-5");
  line3.classList.toggle("-rotate-45");

  menu.classList.toggle("right-[-310px]");
  menu.classList.toggle("right-0");
});
