import { tokens } from './token/generateToken.js';
import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js';
import { SPEED } from '../globalVariables.js';

export const updateGameElementsPosition = (delta, gameElements) => {
  gameElements.forEach((gameElement) => {
    const { element, endOfLife } = gameElement;

    if (endOfLife) {
      return;
    }

    const tokenCurrentLeftPosition = getPropertyValue(element, 'left');
    const tokenNewLeftPosition = `${tokenCurrentLeftPosition - delta * SPEED}px`;
    setPropertyValue(element, 'left', tokenNewLeftPosition);
    const tokenHasLeftScreenValue = -100;
    const tokenLeftPositionAsNumber = tokenNewLeftPosition.slice(0, -2);

    if (tokenLeftPositionAsNumber < tokenHasLeftScreenValue) {
      gameElement.endOfLife = true;
      element.remove();
    }
  });
  console.log('gameElements', gameElements);
};
