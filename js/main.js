import { updateGroundPosition } from './ground/updateGroundPosition.js';
import { setSecondGroundImageLeftValue } from './ground/setSecondGroundImageLeftValue.js';
import { updateGameElementsPosition } from './generateGameElements/updateGameElementsPosition.js';
import { animateCharacterAtInterval } from './character/animateCharacter.js';
import { loadEventListeners } from './eventListeners/eventListeners.js';
import { gameIsPaused } from './eventListeners/pauseGame.js';
import { setGlobalDelta } from './globalVariables.js';
import { getGameElementBoundingRects } from './gameElementBoundingRects/getGameElementBoundingRects.js';
import { tokens } from './generateGameElements/token/generateToken.js';
import { bugs } from './generateGameElements/bug/generateBug.js';
import { character } from './character/character.js';
import { handleTokenAndCharacterCollision } from './gameElementBoundingRects/handleTokenAndCharacterCollision.js';
import { handleTokenAndVirusCollision } from './gameElementBoundingRects/handleCharAndVirusCollision.js';
import { setPropertyValue } from './helpers/updateProperties.js';

let lastTime;
export const updateGameFrame = (time) => {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(updateGameFrame);
    return;
  }

  const delta = time - lastTime;
  setGlobalDelta(delta);

  if (gameIsPaused === false) {
    updateGroundPosition(delta);
    updateGameElementsPosition(delta, tokens);
    updateGameElementsPosition(delta, bugs);
    getGameElementBoundingRects(tokens);
    getGameElementBoundingRects(character);
    getGameElementBoundingRects(bugs);
    handleTokenAndCharacterCollision();
    handleTokenAndVirusCollision();
  }

  lastTime = time;
  window.requestAnimationFrame(updateGameFrame);
};

setSecondGroundImageLeftValue();
loadEventListeners();
animateCharacterAtInterval();

const mainGameContainer = document.getElementById('bg_container');
setPropertyValue(mainGameContainer, 'visibility', 'hidden');
