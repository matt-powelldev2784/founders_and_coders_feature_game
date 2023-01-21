import { createElement } from '../helpers/createElement.js';

export const generateScoreBoard = (highScores) => {
  const highScoreBoardElem = createElement('ol', { class: 'high_score__board' });

  const highScoreContainerElem = createElement(
    'section',
    { class: 'high_score__container' },
    highScoreBoardElem
  );

  highScores.map((scoreDetails, i) => {
    const { name, highScore } = scoreDetails;

    const scoreNum = createElement('div', { class: 'high_score__num' }, i + 1);
    const scoreName = createElement('div', { class: 'high_score__name' }, name);
    const score = createElement('div', { class: 'high_score__score' }, highScore);

    const scoreListItem = createElement(
      'li',
      { class: 'high_score__li' },
      scoreNum,
      scoreName,
      score
    );

    highScoreBoardElem.append(scoreListItem);
  });

  const gameOverWrapper = document.getElementById('game_over__wrapper');
  gameOverWrapper.prepend(highScoreContainerElem);
};
