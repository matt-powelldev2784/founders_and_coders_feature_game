import { bugs } from '../generateGameElements/bug/generateBug.js';
import { character } from '../character/character.js';
import { detectBoundingRectCollision } from './detectBoundingRectCollision.js';
import { setGameToPause } from '../eventListeners/pauseGame.js';
import { removeResumeGameEventListener } from '../eventListeners/pauseGame.js';
import { loadRestartGameEventListener } from '../eventListeners/restartGame.js';
import { getHighScores } from '../endOfGame/highScoresApi/getHighScores.js';
import { generateScoreBoard } from '../endOfGame/generateScoreBoard.js';
import { checkIsNewHighScore } from '../endOfGame/checkIsNewHighScore.js';
import { addEntryToHighScores } from '../endOfGame/addEnrtyToHighScores.js';
import { addHighScoreEventListener } from '../eventListeners/highScores.js';
import { highScoreArrowsEventListener } from '../eventListeners/highScoreMenu.js';
import { pauseForGaveOver } from '../eventListeners/pauseGame.js';

export const handleCharAndVirusCollision = async () => {
  bugs.forEach(async (bug) => {
    const { endOfLife } = bug;
    if (endOfLife) return;

    const bugBoundingRect = bug.boundingRect;
    const characterBoundingRect = character[0].boundingRect;

    const collision = detectBoundingRectCollision(characterBoundingRect, bugBoundingRect);
    if (collision) {
      bug.endOfLife = true;
      pauseForGaveOver();
      removeResumeGameEventListener();
      let highScores = await getHighScores();
      const newHighScore = checkIsNewHighScore(highScores);

      if (newHighScore) {
        highScores = addEntryToHighScores(highScores);
        generateScoreBoard(highScores, { addNewScore: true });
        addHighScoreEventListener();
        highScoreArrowsEventListener();
      } else {
        generateScoreBoard(highScores, { addNewScore: false });
        loadRestartGameEventListener();
        highScoreArrowsEventListener();
      }
    }
  });
};
