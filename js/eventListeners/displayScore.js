import { setPropertyValue } from '../helpers/updateProperties.js';

export const displayScore = () => {
  const scoreContainer = document.getElementById('main__score_container');
  setPropertyValue(scoreContainer, 'display', 'flex');
};
