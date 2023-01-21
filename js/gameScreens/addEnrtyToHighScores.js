import { getScore } from '../globalVariables.js';

export const addEntryToHighScores = (highScores) => {
  console.log('highScores', highScores);
  const currentScore = getScore();

  highScores.pop();
  const newHighScore = { name: 'type name here...', highScore: currentScore };
  highScores.push(newHighScore);
  highScores.sort((a, b) => {
    return b.highScore - a.highScore;
  });

  const newScoreboard = [...highScores];

  console.log('newScoreboard', newScoreboard);
  return newScoreboard;
};
