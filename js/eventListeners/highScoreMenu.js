import { setPropertyValue } from '../helpers/updateProperties.js';

export const onHighScoreMenuFocus = (event) => {
  const leftArrow = document.getElementById('high_score__arrow_left');
  const rightArrow = document.getElementById('high_score__arrow_right');

  if (event.type === 'focusin') {
    setPropertyValue(leftArrow, 'display', 'block');
    setPropertyValue(rightArrow, 'display', 'block');
  }

  if (event.type === 'focusout') {
    setPropertyValue(leftArrow, 'display', 'none');
    setPropertyValue(rightArrow, 'display', 'none');
  }
};

export const highScoreArrowsEventListener = () => {
  console.log('a');
  document.addEventListener('keydown', addKeyboardArrowsEvent);
};

const addKeyboardArrowsEvent = (event) => {
  console.log('b');
  const highScoreButton = document.getElementById('high_score__buttons_container');

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    highScoreButton.focus();
  }
};
