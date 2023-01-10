import { SPEED } from '../globalVariables.js';
import { gameIsPaused } from '../eventListeners/pauseGame.js';
import { getRandomToken } from './token/tokenTypes.js';
import { generateToken } from './token/generateToken.js';
import { generateVirus } from './virus/generateVirus.js';
import { virus } from './virus/virus.js';
import { generateRandomNumber } from '../helpers/generateRandomNumber.js';

let virusReleaseSpeed = 5000;

//release virus at decreasing intervals
const releaseVirus = () => {
  const virusReleaseInterval = generateRandomNumber(1, 500) + virusReleaseSpeed;

  const virusReleaseSetInterval = setInterval(() => {
    generateVirus(virus);

    if (virusReleaseSpeed > 1001) {
      virusReleaseSpeed = virusReleaseSpeed - 500;
      clearInterval(virusReleaseSetInterval);
      releaseVirus();
    } else {
      clearInterval(virusReleaseSetInterval);
      releaseVirus();
    }
  }, virusReleaseInterval);
};

export const generateGameElements = () => {
  setInterval(() => {
    if (gameIsPaused === false) {
      const tokenType = getRandomToken();
      generateToken(tokenType);
    }
  }, Math.random() * SPEED + 4000);

  releaseVirus();
};
