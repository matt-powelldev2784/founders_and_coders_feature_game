import { SPEED } from '../globalVariables.js';
import { gameIsPaused } from '../eventListeners/pauseGame.js';
import { getRandomToken } from './token/tokenTypes.js';
import { generateToken } from './token/generateToken.js';
import { getVirus } from './virus/virus.js';
import { generateVirus } from './virus/generateVirus.js';

import { generateRandomNumber } from '../helpers/generateRandomNumber.js';

let gameElementReleaseSpeed = 5000;

//release game elements at decreasing intervals
const releaseGameElement = (generateGameElementFn, gameElement) => {
  const releaseInterval = generateRandomNumber(1000, 2000) + gameElementReleaseSpeed;

  const releaseSetInterval = setInterval(() => {
    generateGameElementFn(gameElement());

    if (gameElementReleaseSpeed > 499) {
      gameElementReleaseSpeed = gameElementReleaseSpeed - 500;
      clearInterval(releaseSetInterval);
      releaseGameElement(generateGameElementFn, gameElement);
    } else {
      clearInterval(releaseSetInterval);
      releaseGameElement(generateGameElementFn, gameElement);
    }
  }, releaseInterval);
};

export const generateGameElements = () => {
  releaseGameElement(generateToken, getRandomToken);
  releaseGameElement(generateVirus, getVirus);
};
