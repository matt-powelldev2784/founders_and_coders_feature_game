import { setPropertyValue } from '../helpers/updateProperties.js';

export const addStartScreenEventListeners = () => {
  document.addEventListener('keydown', displayInstructions);

  document.addEventListener('keydown', hideInstructions);
};

export const removeStartScreenEventListeners = () => {
  document.removeEventListener('keydown', displayInstructions);
  document.removeEventListener('keydown', hideInstructions);
};

const displayInstructions = (event) => {
  if (event.key === 'i') {
    const instructions = document.getElementById('instructions__container');
    setPropertyValue(instructions, 'z-index', '1');
  }
};

const hideInstructions = (event) => {
  if (event.key === 'Escape') {
    const instructions = document.getElementById('instructions__container');
    setPropertyValue(instructions, 'z-index', '-1');
  }
};
