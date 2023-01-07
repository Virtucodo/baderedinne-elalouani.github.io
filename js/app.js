const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};
const recipes = [
  "carne asada",
  "greek ribs",
  "vegetable soup",
  "banana pancakes",
];
const images = document.querySelectorAll(".recipe");
console.log(images);

const links = getElement(".nav-links");
const navBtnDOM = getElement(".nav-btn");
const search = getElement("#search");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

search.addEventListener("input", (e) => {
  const value = e.target.value;
  const regex = new RegExp(value);
  recipes.forEach((recipe, i) => {
    const isVisible = regex.test(recipe);
    images[i].classList.toggle("hide", !isVisible);
  });
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
