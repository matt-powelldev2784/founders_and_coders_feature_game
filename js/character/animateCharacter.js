import { gameIsPaused } from '../eventListeners/pauseGame.js';

const animateCharacter = () => {
  const character = document.getElementById('main__char');
  const currentCharacter = character.getAttribute('src').slice(6, -4);

  if (currentCharacter === 'charA') {
    character.setAttribute('src', './img/charB.svg');
  } else {
    character.setAttribute('src', './img/charA.svg');
  }
};

export const animateCharacterAtInterval = () => {
  setInterval(() => {
    if (!gameIsPaused) animateCharacter();
  }, 300);
};
