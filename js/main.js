import { updateGroundPosition } from './ground/updateGroundPosition.js';
import { setSecondGroundImageLeftValue } from './ground/setSecondGroundImageLeftValue.js';
import { generateGameElements } from './generateGameElements/generateGameElements.js';
import { updateGameElementsPosition } from './generateGameElements/updateGameElementsPosition.js';
import { animateCharacterAtInterval } from './character/animateCharacter.js';
import { loadEventListeners } from './eventListeners/eventListeners.js';
import { gameIsPaused } from './eventListeners/pauseGame.js';
import { setGlobalDelta } from './globalVariables.js';
import { getGameElementBoundingRects } from './gameElementBoundingRects/getGameElementBoundingRects.js';
import { tokens } from './generateGameElements/token/generateToken.js';
import { viruses } from './generateGameElements/virus/generateVirus.js';
import { character } from './character/character.js';
import { handleTokenAndCharacterCollision } from './gameElementBoundingRects/handleTokenAndCharacterCollision.js';

setSecondGroundImageLeftValue();
loadEventListeners();
animateCharacterAtInterval();

let lastTime;
export const updateGameFrame = (time) => {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(updateGameFrame);
    return;
  }

  if (gameIsPaused === false) {
    const delta = time - lastTime;
    setGlobalDelta(delta);
    updateGroundPosition(delta);
    updateGameElementsPosition(delta, tokens);
    updateGameElementsPosition(delta, viruses);
    getGameElementBoundingRects(tokens);
    getGameElementBoundingRects(character);
    handleTokenAndCharacterCollision();
    lastTime = time;
    window.requestAnimationFrame(updateGameFrame);
  }
};
window.requestAnimationFrame(updateGameFrame);

generateGameElements();
