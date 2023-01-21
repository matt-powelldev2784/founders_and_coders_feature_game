import { bugs } from '../generateGameElements/bug/generateBug.js';
import { character } from '../character/character.js';
import { detectBoundingRectCollision } from './detectBoundingRectCollision.js';
import { setGameToPause } from '../eventListeners/pauseGame.js';
import { displayGameOverScreen } from '../gameScreens/displayGameOverScreen.js';
import { removeResumeGameEventListener } from '../eventListeners/pauseGame.js';
import { loadRestartGameEventListener } from '../eventListeners/restartGame.js';
import { postScore } from '../highScores/api/postScore.js';
import { getHighScores } from '../highScores/api/getHighScores.js';
import { generateScoreBoard } from '../gameScreens/generateScoreBoard.js';

export const handleTokenAndVirusCollision = async () => {
  bugs.forEach(async (bug) => {
    const { endOfLife } = bug;
    if (endOfLife) return;

    const bugBoundingRect = bug.boundingRect;
    const characterBoundingRect = character[0].boundingRect;

    const collision = detectBoundingRectCollision(characterBoundingRect, bugBoundingRect);
    if (collision) {
      bug.endOfLife = true;
      setGameToPause();
      removeResumeGameEventListener();
      //displayGameOverScreen();
      loadRestartGameEventListener();
      const postedScore = await postScore();
      console.log('postedScore', postedScore);
      const highScores = await getHighScores();
      console.log('highScores', highScores);
      setTimeout(() => {
        generateScoreBoard(highScores);
      }, 5000);
    }
  });
};
