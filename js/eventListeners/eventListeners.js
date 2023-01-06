import {
  addPauseGameEventListener,
  addResumeGameEventListener,
  setGameToPause,
} from './pauseGame.js';
import { addCharacterJumpEventListener } from './charcterJump.js';
import { displayScore } from './displayScore.js';
import { loadStartGameEventListner } from './loadStartGameEventListner.js';
import { addStartScreenEventListeners } from './startScreen.js';

export const loadEventListeners = () => {
  loadStartGameEventListner();
  addStartScreenEventListeners();
  window.addEventListener('resize', setGameToPause);
  window.addEventListener('load', displayScore);
  addPauseGameEventListener();
  addResumeGameEventListener();
  addCharacterJumpEventListener();
};
