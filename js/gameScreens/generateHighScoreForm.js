import { getScore } from '../globalVariables.js';
import { createElement } from '../helpers/createElement.js';

export const generateHighScoreForm = (currentGameLeaderBoardPosition) => {
  const currentScore = getScore();

  const scoreName = createElement('input', { class: 'high_score_input__name' });
  const score = createElement('div', { class: 'high_score_input__score' }, currentScore);
  const scoreFormConatiner = createElement(
    'div',
    { class: 'high_score_input__conatiner' },
    scoreName,
    score
  );

  const highScoreForm = createElement('section', { class: 'high_score_input' }, scoreFormConatiner);

  const gameContainer = document.getElementById('bg_container');
  gameContainer.prepend(highScoreForm);
};
