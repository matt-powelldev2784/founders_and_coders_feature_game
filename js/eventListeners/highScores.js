import { postScore } from '../endOfGame/highScoresApi/postScore.js';
import { generateScoreBoard } from '../endOfGame/generateScoreBoard.js';
import { getHighScores } from '../endOfGame/highScoresApi/getHighScores.js';
import { loadRestartGameEventListener } from './restartGame.js';
import { onHighScoreMenuFocus } from './highScoreMenu.js';

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
  console.log('highScores', highScores);
  generateScoreBoard(highScores, { newScore: false });
  loadRestartGameEventListener();
};

const postHighScore = async (event) => {
  event.preventDefault();
  const playerName = document.getElementById('high_score__input').value;
  await postScore(playerName);
  refreshHighScoreBoard();
};
