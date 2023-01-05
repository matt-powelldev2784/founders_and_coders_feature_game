import { SPEED } from '../globalVariables.js';
import { gameIsPaused } from '../eventListeners/pauseGame.js';
import { getRandomToken } from './tokenTypes.js';
import { generateToken } from './generateToken.js';

export const generateGameElements = () => {
  setInterval(() => {
    if (gameIsPaused === false) {
      const tokenType = getRandomToken();
      generateToken(tokenType);
    }
  }, Math.random() * SPEED + 5000);
};

const generateVirus = (virusType) => {};
