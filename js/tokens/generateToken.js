import { SPEED } from '../globalVariables.js';
import { gameIsPaused } from '../eventListeners/pauseGame.js';
import { createTokenElement } from './createTokenElement.js';
import { addCssRuleForToken } from './addCSSRuleForToken.js';

let currentTokenNumber = 0;

export const tokens = [];

export const generateTokens = () => {
  setInterval(() => {
    if (gameIsPaused === false) {
      generateToken('./img/logos/youtube_logo_8bit.png', currentTokenNumber);
    }
  }, Math.random() * SPEED + 5000);
};

const generateToken = (img, uniqueKey) => {
  currentTokenNumber++;
  tokens[uniqueKey] = {};
  tokens[uniqueKey].image = img;
  tokens[uniqueKey].uniqueKey = uniqueKey;
  createTokenElement(img, uniqueKey);
  addCssRuleForToken(tokens[uniqueKey].cssString);
};
