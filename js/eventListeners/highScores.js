import { postScore } from '../highScores/api/postScore.js';
import { generateScoreBoard } from '../gameScreens/generateScoreBoard.js';
import { createElement } from '../helpers/createElement.js';
import { getHighScores } from '../highScores/api/getHighScores.js';
import { loadRestartGameEventListener } from './restartGame.js';
import { onHighScoreMenuFocus } from './highScoreMenuFocus.js';

export const addHighScoreEventListener = () => {
  const submitHighScoreButton = document.getElementById('high_score__buttons_container');
  submitHighScoreButton.addEventListener('focusin', onHighScoreMenuFocus);
  submitHighScoreButton.addEventListener('focusout', onHighScoreMenuFocus);
  const nameInput = document.getElementById('high_score__input');
  nameInput.focus();
  submitHighScoreButton.addEventListener('click', postHighScore);
};

const refreshHighScoreBoard = async () => {
  const highScoreContainer = document.getElementById('high_score__container');
  highScoreContainer.remove();
  const highScores = await getHighScores();
  generateScoreBoard(highScores, { newScore: false });
  loadRestartGameEventListener();
};

const postHighScore = () => {
  const playerName = document.getElementById('high_score__input').value;
  console.log('playerName', playerName);
  postScore(playerName);
  refreshHighScoreBoard();
};
