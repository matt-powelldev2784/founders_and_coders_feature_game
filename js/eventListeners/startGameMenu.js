import { setPropertyValue } from '../helpers/updateProperties.js';
import { removeInstructionsEventListeners } from './instructions.js';
import { updateGameFrame } from '../main.js';
import { generateGameElements } from '../generateGameElements/generateGameElements.js';

export const loadStartGameEventListeners = () => {
  const startButton = document.getElementById('start_game__button_start');
  startButton.addEventListener('click', startGame);
  document.addEventListener('keydown', handleChangeCurrentMenuItem);
  document.addEventListener('keydown', handleMenuItemSelected);
};

export const removeStartGameEventListeners = () => {
  const startButton = document.getElementById('start_game__button_start');
  startButton.removeEventListener('click', startGame);
  document.removeEventListener('keydown', handleChangeCurrentMenuItem);
  document.removeEventListener('keydown', handleMenuItemSelected);
};

export const startGame = () => {
  removeInstructionsEventListeners();
  removeStartGameEventListeners();
  const startScreen = document.getElementById('start_game__bg');
  startScreen.remove();
  window.requestAnimationFrame(updateGameFrame);
  generateGameElements();
};

const displayInstructions = () => {
  const instructions = document.getElementById('instructions__container');
  console.log('instructions', instructions);
  ``;
  const startScreenMenuInfo = document.getElementById('start_screen__text');
  setPropertyValue(startScreenMenuInfo, 'opacity', '0');
  setPropertyValue(instructions, 'z-index', '1');
};

const startButton = document.getElementById('start_game__button_start');
const instructionButton = document.getElementById('start_game__button_instructions');
const menuItems = [
  { button: instructionButton, onSelect: displayInstructions },
  { button: startButton, onSelect: startGame },
];

const getCurrentMenuItem = () => {
  const menuItem = menuItems[0];
  return menuItem;
};

const handleChangeCurrentMenuItem = (event) => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    const firstMenuItem = menuItems.shift();
    menuItems.push(firstMenuItem);

    const currentMenuItem = getCurrentMenuItem();
    const currentElement = currentMenuItem.button;

    const currentElementRigthArrow = currentElement.previousElementSibling;
    const currentElementLeftArrow = currentElement.nextElementSibling;
    const allArrowElements = document.getElementsByClassName('start_game__arrow');
    [...allArrowElements].forEach((arrowElement) => {
      setPropertyValue(arrowElement, 'display', 'none');
    });

    setPropertyValue(currentElementRigthArrow, 'display', 'block');
    setPropertyValue(currentElementLeftArrow, 'display', 'block');
  }
};

const handleMenuItemSelected = (event) => {
  if (event.key === 'Enter') {
    const currentMenuItem = getCurrentMenuItem();
    const { onSelect } = currentMenuItem;
    onSelect();
  }
};
