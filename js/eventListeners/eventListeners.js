import {
  addPauseGameEventListener,
  addResumeGameEventListener,
  setGameToPause,
} from './pauseGame.js';
import { addCharacterJumpEventListener } from './charcterJump.js';
import { displayScore } from './displayScore.js';

export const loadEventListeners = () => {
  window.addEventListener('resize', setGameToPause);
  window.addEventListener('load', displayScore);
  addPauseGameEventListener();
  addResumeGameEventListener();
  addCharacterJumpEventListener();
};
