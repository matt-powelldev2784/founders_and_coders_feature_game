import { viruses } from '../generateGameElements/virus/generateVirus.js';
import { character } from '../character/character.js';
import { detectBoundingRectCollision } from './detectBoundingRectCollision.js';
import { setGameToPause } from '../eventListeners/pauseGame.js';
import { displayGameOverScreen } from '../gameScreens/displayGameOverScreen.js';
import { removeResumeGameEventListener } from '../eventListeners/pauseGame.js';

export const handleTokenAndVirusCollision = () => {
  viruses.forEach((virus) => {
    const { endOfLife } = virus;
    if (endOfLife) return;

    const virusBoundingRect = virus.boundingRect;
    const characterBoundingRect = character[0].boundingRect;

    const collision = detectBoundingRectCollision(characterBoundingRect, virusBoundingRect);
    if (collision) {
      virus.endOfLife = true;
      setGameToPause();
      removeResumeGameEventListener();
      displayGameOverScreen();
    }
  });
};
