import { SPEED } from '../globalVariables.js';
import { gameIsPaused } from '../eventListeners/pauseGame.js';
import { getRandomToken } from './token/tokenTypes.js';
import { generateToken } from './token/generateToken.js';
import { generateVirus } from './virus/generateVirus.js';
import { virus } from './virus/virus.js';

export const generateGameElements = () => {
  setInterval(() => {
    if (gameIsPaused === false) {
      const tokenType = getRandomToken();
      generateToken(tokenType);
      generateVirus(virus);
    }
  }, Math.random() * SPEED + 5000);
};
