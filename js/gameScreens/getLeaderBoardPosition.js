import { getScore } from '../globalVariables.js';

export const getLeaderBoardPosition = (highScores) => {
  const currentScore = getScore();
  let leaderBoardPosition = null;

  highScores.forEach((scoreDetails, i) => {
    const { highScore } = scoreDetails;
    if (currentScore > highScore && !leaderBoardPosition) {
      leaderBoardPosition = i;
    }
  });

  return leaderBoardPosition;
};
