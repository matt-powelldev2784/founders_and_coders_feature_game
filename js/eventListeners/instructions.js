import { setPropertyValue } from '../helpers/updateProperties.js';

export const addInstructionsEventListeners = () => {
  const instructionsButton = document.getElementById('instructions_button');
  instructionsButton.addEventListener('click', displayInstructions);
  document.addEventListener('keydown', displayInstructions);
  document.addEventListener('keydown', hideInstructions);
};

export const removeInstructionsEventListeners = () => {
  document.removeEventListener('keydown', displayInstructions);
  document.removeEventListener('keydown', hideInstructions);
};

const displayInstructions = (event) => {
  if (event.key === 'i' || event.type === 'click') {
    const instructions = document.getElementById('instructions__container');
    instructions.addEventListener('click', hideInstructions);
    const startScreenMenuInfo = document.getElementById('start_screen__text');
    setPropertyValue(startScreenMenuInfo, 'opacity', '0');
    setPropertyValue(instructions, 'z-index', '1');
  }
};

const hideInstructions = (event) => {
  if (event.key === 'Escape' || event.type === 'click') {
    const instructions = document.getElementById('instructions__container');
    const startGameScreen = document.getElementById('start_game__wrapper');
    setPropertyValue(instructions, 'z-index', '-1');
    setPropertyValue(startGameScreen, 'display', 'block');
  }
};
