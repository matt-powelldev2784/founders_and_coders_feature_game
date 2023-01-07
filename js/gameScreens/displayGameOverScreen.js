import { createElement } from '../helpers/createElement.js';

export const displayGameOverScreen = () => {
  const gameOverImg = createElement('img', {
    class: 'game_over__img',
    src: './img/game_over2.svg',
  });

  const restartGameButton = createElement('img', {
    class: 'game_over__restart_game_button',
    src: './img/restart_button.svg',
  });
  const arrowLeft = createElement('img', {
    class: 'restart_game__arrow',
    src: './img/left_arrow.svg',
  });
  const arrowRight = createElement('img', {
    class: 'restart_game__arrow',
    src: './img/right_arrow.svg',
  });
  const buttonContainer = createElement(
    'div',
    { class: 'game_over__button_container' },
    arrowRight,
    restartGameButton,
    arrowLeft
  );
  const gameOverElement = createElement(
    'div',
    { class: 'game_over__screen' },
    gameOverImg,
    buttonContainer
  );
  const gameOverWrapper = createElement('div', { class: 'game_over__wrapper' }, gameOverElement);

  const gameContainer = document.getElementById('bg_container');
  gameContainer.prepend(gameOverWrapper);
};
