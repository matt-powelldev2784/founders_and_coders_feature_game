import { getRandomToken } from './token/tokenTypes.js';
import { generateToken } from './token/generateToken.js';
import { getBug } from './bug/bug.js';
import { generateBug } from './bug/generateBug.js';
import { generateRandomNumber } from '../helpers/generateRandomNumber.js';

let gameElementReleaseSpeed = 4000;

//release game elements at decreasing intervals
const releaseGameElement = (generateGameElementFn, gameElement) => {
  const releaseInterval = generateRandomNumber(600, 1600) + gameElementReleaseSpeed;

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
  releaseGameElement(generateBug, getBug);
};
