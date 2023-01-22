import { createElement } from '../helpers/createElement.js';
import { generateScores } from './generateScores.js';

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

  const leftNavArrow = createElement('img', {
    src: './img/left_arrow.svg',
    class: 'high_score__arrow',
    id: 'high_score__arrow_left',
  });
  const rightNavArrow = createElement('img', {
    src: './img/right_arrow.svg',
    class: 'high_score__arrow',
    id: 'high_score__arrow_right',
  });

  const buttonsContainer = createElement(
    'button',
    { class: 'high_score__buttons_container', id: 'high_score__buttons_container' },
    rightNavArrow,
    button,
    leftNavArrow
  );

  const scoresElem = generateScores(highScores);

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
