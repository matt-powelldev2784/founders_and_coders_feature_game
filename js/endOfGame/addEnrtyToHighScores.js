import { getScore } from '../globalVariables.js';

export const addEntryToHighScores = (highScores) => {
  const currentScore = getScore();

  highScores.pop();
  const newHighScore = { name: '', highScore: currentScore, newHighScore: true };
  highScores.push(newHighScore);
  highScores.sort((a, b) => {
    return b.highScore - a.highScore;
  });

  const newScoreboard = [...highScores];

  return newScoreboard;
};
