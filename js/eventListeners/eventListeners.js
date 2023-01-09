import { addPauseGameEventListener, addResumeGameEventListener } from './pauseGame.js';
import { addCharacterJumpEventListener } from './charcterJump.js';
import { displayScore } from './displayScore.js';
import { loadStartGameEventListeners } from './startGameMenu.js';
import { addInstructionsEventListeners } from './instructions.js';
import { setSecondGroundImageLeftValue } from '../ground/setSecondGroundImageLeftValue.js';
import { setWindowHeightSpeedVar } from '../globalVariables.js';
import { setGameToPause } from './pauseGame.js';

export const loadEventListeners = () => {
  addInstructionsEventListeners();
  window.addEventListener('resize', setSecondGroundImageLeftValue);
  window.addEventListener('resize', setWindowHeightSpeedVar);
  window.addEventListener('resize', setGameToPause);
  window.addEventListener('load', displayScore);
  loadStartGameEventListeners();
  addPauseGameEventListener();
  addResumeGameEventListener();
  addCharacterJumpEventListener();
};
