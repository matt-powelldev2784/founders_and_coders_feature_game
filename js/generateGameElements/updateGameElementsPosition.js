import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js';
import { SPEED } from '../globalVariables.js';

export const updateGameElementsPosition = (delta, gameElements) => {
  gameElements.forEach((gameElement) => {
    const { element, endOfLife } = gameElement;

    if (endOfLife) {
      return;
    }

    const elementCurrentLeftPosition = getPropertyValue(element, 'left');
    const elementNewLeftPosition = `${elementCurrentLeftPosition - delta * SPEED}px`;
    setPropertyValue(element, 'left', elementNewLeftPosition);
    const elementHasLeftScreenValue = -50;
    const elementLeftPositionAsNumber = elementNewLeftPosition.slice(0, -2);

    if (elementLeftPositionAsNumber < elementHasLeftScreenValue) {
      gameElement.endOfLife = true;
      element.remove();
    }
  });
};
