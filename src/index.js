import menuCardTpl from './templates/menu-item.hbs';
import cards from './menu.json';



// theme switched
const body = document.querySelector('body');
const themeSwitcher = document.querySelector(".theme-switch__toggle");
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

console.log(Theme.DARK)
themeSwitcher.addEventListener('click', clickHandler);

themeSwitcher.checked = false;
function clickHandler() {
  if (this.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK)
    localStorage.setItem("theme", "dark-theme")
  }

  else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT)
    localStorage.setItem("theme", "light-theme")
  }
 };


//  menu-cards
const menuContainer = document.querySelector(".js-menu");
const cardsMarkup = createColorCardsMarkup(cards);
menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);
// menuContainer.addEventListener('click', onCardsContainerClick);

function createColorCardsMarkup(cards) {
  return menuCardTpl(cards);
}

// console.log(menuCardTpl);
// console.log(cards);