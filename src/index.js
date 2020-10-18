import menuCardTpl from "./templates/menu-item.hbs";
import cards from './menu.json';



// theme switched

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const themeSwitcher = document.querySelector(".theme-switch__toggle");



themeSwitcher.addEventListener('change', clickHandler);
themeSwitcher.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);


function clickHandler(e) {

  if (themeSwitcher.checked) {
    setDarkTheme()
  } else {
    setLightTheme()
  }
}

function setLocalStorage(e) {
  if (themeSwitcher.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function getThemeFromLocalStorage() {
  const themeInLocalStrg = localStorage.getItem('theme');
  if (themeInLocalStrg === Theme.DARK) {
    body.classList.add(Theme.DARK);
    themeSwitcher.checked = true;
  }
}

function setDarkTheme() {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
}


// themeSwitcher.checked = false;
// function clickHandler() {
//   if (this.checked) {
//     body.classList.remove(Theme.LIGHT);
//     body.classList.add(Theme.DARK)
//     localStorage.setItem("theme", "dark-theme")
//   }

//   else {
//     body.classList.remove(Theme.DARK);
//     body.classList.add(Theme.LIGHT)
//     localStorage.setItem("theme", "light-theme")
//   }
//  };


//  menu-cards


const menuContainer = document.querySelector(".js-menu");
const cardsMarkup = createColorCardsMarkup(cards);
menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);


function createColorCardsMarkup(cards) {
    return menuCardTpl(cards);
}

// console.log(menuCardTpl);
// console.log(cards);