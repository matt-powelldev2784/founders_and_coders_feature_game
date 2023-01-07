import { setPropertyValue } from '../helpers/updateProperties.js';
import { jumnpOnKeyDown } from '../eventListeners/charcterJump.js';
import { DELTA } from '../globalVariables.js';

export const characterJump = () => {
  document.removeEventListener('keydown', jumnpOnKeyDown);
  const character = document.getElementById('main__char');

  const jumpTime = 0.11 * DELTA;
  setPropertyValue(character, 'animation', `jump ${jumpTime}s`);

  setTimeout(() => {
    document.addEventListener('keydown', jumnpOnKeyDown);
    character.style.setProperty('animation', 'unset');
  }, jumpTime * 1000);
};
