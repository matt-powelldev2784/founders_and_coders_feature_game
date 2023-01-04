import { SPEED } from '../globalVariables.js';
import { gameIsPaused } from '../eventListeners/pauseGame.js';
import { createTokenElement } from './createTokenElement.js';
import { addCssRuleForToken } from './addCSSRuleForToken.js';
import { getRandomToken } from './tokenTypes.js';

let currentTokenNumber = 0;

export const tokens = [];

export const generateTokens = () => {
  setInterval(() => {
    if (gameIsPaused === false) {
      const tokenType = getRandomToken();
      generateToken(tokenType, currentTokenNumber);
    }
  }, Math.random() * SPEED + 5000);
};

const generateToken = (tokenType, uniqueKey) => {
  const { img } = tokenType;

  currentTokenNumber++;
  tokens[uniqueKey] = {};
  tokens[uniqueKey].image = img;
  tokens[uniqueKey].uniqueKey = uniqueKey;
  createTokenElement(tokenType, uniqueKey);
  addCssRuleForToken(tokens[uniqueKey].cssString);
};
