import { setPropertyValue } from '../helpers/updateProperties.js';
import { jumnpOnKeyDown } from '../eventListeners/charcterJump.js';
import { DELTA } from '../globalVariables.js';
import { getBroswerType } from '../helpers/getBrowserType.js';

export const characterJump = () => {
  document.removeEventListener('keydown', jumnpOnKeyDown);
  const character = document.getElementById('main__char');
  const browserType = getBroswerType().type;
  console.log('browserType', browserType);

  let jumpTime;
  if (browserType.includes('mozilla')) {
    jumpTime = 0.03 * DELTA;
  } else {
    jumpTime = 0.06 * DELTA;
  }

  setPropertyValue(character, 'animation', `jump ${jumpTime}s`);

  setTimeout(() => {
    document.addEventListener('keydown', jumnpOnKeyDown);
    character.style.setProperty('animation', 'unset');
  }, jumpTime * 1000);
};
