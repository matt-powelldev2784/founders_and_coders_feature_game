import { postScore } from '../highScores/api/postScore.js';
import { generateScoreBoard } from '../gameScreens/generateScoreBoard.js';
import { createElement } from '../helpers/createElement.js';
import { getHighScores } from '../highScores/api/getHighScores.js';

export const addHighScoreEventListener = () => {
  const submitHighScoreButton = document.getElementById('high_score__submit_button');
  submitHighScoreButton.addEventListener('click', postHighScore);
};

const refreshHighScoreBoard = async () => {
  const highScoreContainer = document.getElementById('high_score__container');
  highScoreContainer.remove();
  const highScores = await getHighScores();
  generateScoreBoard(highScores, { newScore: false });
};

const postHighScore = () => {
  const playerName = document.getElementById('high_score__input').value;
  console.log('playerName', playerName);
  postScore(playerName);
  refreshHighScoreBoard();
};
