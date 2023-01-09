import { setPropertyValue } from '../helpers/updateProperties.js';
import { getPropertyValue } from '../helpers/updateProperties.js';
import { groundImage1, SPEED } from '../globalVariables.js';
import { setSecondGroundImageLeftValue } from './setSecondGroundImageLeftValue.js';
import { getGroundConatinerWidth } from './getGroundContainerWidth.js';

export const updateGroundPosition = (delta) => {
  const firstGroundElementLeftValue = getPropertyValue(groundImage1, 'left');
  const firstGroudnElementNewLeftValue = `${firstGroundElementLeftValue - delta * SPEED}px`;
  setPropertyValue(groundImage1, 'left', firstGroudnElementNewLeftValue);
  setSecondGroundImageLeftValue();

  const groundHasLeftScreen = getGroundConatinerWidth() - getGroundConatinerWidth() * 2;
  const firstGroundElementNewLeftValue = getPropertyValue(groundImage1, 'left');
  if (firstGroundElementNewLeftValue < groundHasLeftScreen) {
    setPropertyValue(groundImage1, 'left', '0px');
    setSecondGroundImageLeftValue();
  }
};
