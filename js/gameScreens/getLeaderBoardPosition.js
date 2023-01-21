import { getScore } from '../globalVariables.js';

export const getLeaderBoardPosition = (highScores) => {
  const currentScore = getScore();
  let leaderBoardPosition = null;

  highScores.forEach((scoreDetails, i) => {
    const { highScore } = scoreDetails;
    if (currentScore > highScore && !leaderBoardPosition) {
      console.log('i', i);
      leaderBoardPosition = i;
    }
  });

  console.log('leaderBoardPosition', leaderBoardPosition);
  return leaderBoardPosition;
};
