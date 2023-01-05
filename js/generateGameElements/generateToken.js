import { createTokenElement } from './createTokenElement.js';
import { addCssRuleForToken } from './addCSSRuleForToken.js';

let currentTokenNumber = 0;

export const tokens = [];

export const generateToken = (tokenType) => {
  const { img } = tokenType;
  const uniqueKey = currentTokenNumber;

  tokens[uniqueKey] = {};
  tokens[uniqueKey].image = img;
  tokens[uniqueKey].uniqueKey = uniqueKey;
  createTokenElement(tokenType, uniqueKey);
  addCssRuleForToken(tokens[uniqueKey].cssString);
  currentTokenNumber++;
};
