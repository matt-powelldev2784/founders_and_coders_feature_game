import { createElement } from '../helpers/createElement.js';

export const generateScores = (highScores) => {
  const scoresElem = createElement('ol', { class: 'high_score__scores_container' });

  highScores.forEach((scoreDetails, i) => {
    const { name, highScore, newHighScore } = scoreDetails;

    let scoreName = createElement('div', { class: 'high_score__name' }, name);
    let scoreNum = createElement('div', { class: 'high_score__num' }, i + 1);
    let score = createElement('div', { class: 'high_score__score' }, highScore);

    if (newHighScore) {
      scoreName = createElement('input', {
        class: 'high_score__input flashing',
        id: 'high_score__input',
        value: `${name}`,
      });

      scoreNum = createElement('div', { class: 'high_score__num flashing' }, i + 1);
      score = createElement('div', { class: 'high_score__score flashing' }, highScore);
    }

    const scoreListItem = createElement(
      'li',
      { class: 'high_score__li' },
      scoreNum,
      scoreName,
      score
    );

    scoresElem.append(scoreListItem);
  });

  return scoresElem;
};
