import { startGame } from '../main.js';

export const loadStartGameEventListner = () => {
  const startButton = document.getElementById('start_game__button');
  startButton.addEventListener('click', startGame);
};
