import { tokens } from './generateToken.js';
import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js';
import { SPEED } from '../globalVariables.js';

export const updateTokensPosition = (delta) => {
  tokens.forEach((token) => {
    const { element, endOfLife } = token;

    if (endOfLife) {
      return;
    }

    const tokenCurrentLeftPosition = getPropertyValue(element, 'left');
    const tokenNewLeftPosition = `${tokenCurrentLeftPosition - delta * SPEED}px`;
    setPropertyValue(element, 'left', tokenNewLeftPosition);
    const tokenHasLeftScreenValue = -100;
    const tokenLeftPositionAsNumber = tokenNewLeftPosition.slice(0, -2);

    if (tokenLeftPositionAsNumber < tokenHasLeftScreenValue) {
      token.endOfLife = true;
      element.remove();
    }
  });
};
