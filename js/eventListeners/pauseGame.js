import { updateGameFrame } from '../main.js';
import { addCharacterJumpEventListener } from './charcterJump.js';

export let gameIsPaused = false;

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
  gameIsPaused = true;
};

export const setGameToResume = () => {
  console.log('Game Resumed');
  gameIsPaused = false;
};
