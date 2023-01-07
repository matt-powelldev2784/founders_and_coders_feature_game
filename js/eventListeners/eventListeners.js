import {
  addPauseGameEventListener,
  addResumeGameEventListener,
  setGameToPause,
} from './pauseGame.js';
import { addCharacterJumpEventListener } from './charcterJump.js';
import { displayScore } from './displayScore.js';
import { loadStartGameEventListeners } from './startGame.js';
import { addInstructionsEventListeners } from './instructions.js';

export const loadEventListeners = () => {
  addInstructionsEventListeners();
  window.addEventListener('resize', setGameToPause);
  window.addEventListener('load', displayScore);
  loadStartGameEventListeners();
  addPauseGameEventListener();
  addResumeGameEventListener();
  addCharacterJumpEventListener();
};
