import { createElement } from '../helpers/createElement.js';

export const displayGameOverScreen = () => {
  const gameOverImg = createElement('img', { class: 'game_over_img', src: './img/game_over2.svg' });
  const gameOverScreen = createElement('div', { class: 'game_over_screen' }, gameOverImg);

  const gameContainer = document.getElementById('main__game_container');
  gameContainer.append(gameOverScreen);
};
