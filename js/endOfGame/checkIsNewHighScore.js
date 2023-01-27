import { getScore } from '../globalVariables.js';

export const checkIsNewHighScore = (highScores) => {
  const currentScore = getScore();
  let newHighScore = null;

  highScores.forEach((scoreDetails, i) => {
    const { highScore } = scoreDetails;
    if (currentScore > highScore) {
      newHighScore = true;
    }
  });

  return newHighScore;
};
