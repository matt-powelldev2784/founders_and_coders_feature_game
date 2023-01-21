import { createElement } from '../helpers/createElement.js';

export const generateScoreBoard = (highScores, newScore) => {
  const { addNewScore } = newScore;

  const highScoreH1 = createElement('h1', { class: 'high_score__title' }, 'HIGH SCORES');

  const submitScoreButton = createElement('img', {
    class: 'high_score__submit_button',
    id: 'high_score__submit_button',
    src: './img/submit_score_button.svg',
  });
  const restartGameButton = createElement('img', {
    class: 'high_score__restart_game_button',
    id: 'high_score__restart_game_button',
    src: './img/restart_button.svg',
  });
  const button = addNewScore ? submitScoreButton : restartGameButton;

  const buttonsContainer = createElement('div', { class: 'high_score__buttons_container' }, button);

  const scoresElem = createElement('ol', { class: 'high_score__scores_container' });

  highScores.map((scoreDetails, i) => {
    const { name, highScore } = scoreDetails;

    let scoreName = createElement('div', { class: 'high_score__name' }, name);
    if (scoreDetails.name === 'type name here...') {
      scoreName = createElement('input', {
        class: 'high_score__input',
        id: 'high_score__input',
        value: `${name}`,
      });
    }

    const scoreNum = createElement('div', { class: 'high_score__num' }, i + 1);
    const score = createElement('div', { class: 'high_score__score' }, highScore);

    const scoreListItem = createElement(
      'li',
      { class: 'high_score__li' },
      scoreNum,
      scoreName,
      score
    );

    scoresElem.append(scoreListItem);
  });

  const highScoreBoardElem = createElement(
    'form',
    { class: 'high_score__board' },
    highScoreH1,
    scoresElem,
    buttonsContainer
  );

  const highScoreContainerElem = createElement(
    'section',
    { class: 'high_score__container', id: 'high_score__container' },
    highScoreBoardElem
  );

  const gameContainer = document.getElementById('bg_container');
  gameContainer.prepend(highScoreContainerElem);
};
