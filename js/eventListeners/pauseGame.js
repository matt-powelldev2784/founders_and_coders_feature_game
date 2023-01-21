import { createElement } from '../helpers/createElement.js';
import { isTouchDevice } from '../helpers/isTouchDevice.js';
import { generateGameElements } from '../generateGameElements/generateGameElements.js';

export let gameIsPaused = false;
export const getPauseStatus = () => {
  return gameIsPaused;
};

export const addPauseGameEventListener = () => {
  document.addEventListener('keydown', pauseGame);
};

export const addResumeGameEventListener = () => {
  document.addEventListener('keydown', resumeGame);
};

const pauseGame = (event) => {
  if (event.key === 'p' && gameIsPaused === false) {
    setGameToPause();
  }
};

const resumeGame = (event) => {
  if (event.key === 'r' && gameIsPaused === true) {
    setGameToResume();
  }
};

export const removeResumeGameEventListener = () => {
  document.removeEventListener('keydown', resumeGame);
};

export const setGameToPause = () => {
  console.log('Game Paused');
  addGameIsPausedText();
  gameIsPaused = true;
};

export const setGameToResume = () => {
  console.log('Game Resumed');
  removeGameIsPausedText();
  gameIsPaused = false;
};

const addGameIsPausedText = () => {
  const bgContainer = document.getElementById('bg_container');

  if (!isTouchDevice() && !gameIsPaused) {
    const pausedText = createElement(
      'p',
      { class: 'main__paused', id: 'main__paused' },
      'Game Paused...Press R to resume'
    );

    bgContainer.append(pausedText);
  }

  if (isTouchDevice() && !gameIsPaused) {
    const pausedText = createElement(
      'p',
      { class: 'main__paused', id: 'main__paused' },
      'Game Paused...click here to resume'
    );

    bgContainer.append(pausedText);
  }

  const pausedTextElement = document.getElementById('main__paused');
  pausedTextElement.addEventListener('click', setGameToResume);
};

const removeGameIsPausedText = () => {
  const pausedText = document.getElementById('main__paused');
  pausedText.remove();
};
