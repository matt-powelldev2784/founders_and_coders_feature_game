import { createElement } from '../helpers/createElement.js';
import { getScore } from '../globalVariables.js';

export const generateScoreBoard = (highScores, currentGameLeaderBoardPosition) => {
  const currentScore = getScore();

  if (currentGameLeaderBoardPosition) {
    highScores.pop();
    const newHighScore = { name: 'type name here...', highScore: currentScore };
    highScores.push(newHighScore);
    highScores.sort((a, b) => {
      return b.highScore - a.highScore;
    });
  }

  let leaderBoardScores = [...highScores];

  const highScoreH1 = createElement('h1', { class: 'high_score__title' }, 'HIGH SCORES');
  const highScoreBoardElem = createElement('ol', { class: 'high_score__board' }, highScoreH1);
  const submitScoreButton = createElement('img', {
    class: 'high_score__submit_button',
    id: 'high_score__submit_button',
    src: './img/submit_score_button.svg',
  });
  const restartGameButton = createElement('img', {
    class: 'high_score__restart_game_button',
    id: 'high_score__restart_game_button',
    src: './img/restart_button.svg',
  });

  const highScoreContainerElem = createElement(
    'section',
    { class: 'high_score__container' },

    highScoreBoardElem
  );

  leaderBoardScores.map((scoreDetails, i) => {
    const { name, highScore } = scoreDetails;

    let scoreName = createElement('div', { class: 'high_score__name' }, name);
    if (scoreDetails.name === 'type name here...') {
      scoreName = createElement('input', { class: 'high_score__input', value: `${name}` });
    }

    const scoreNum = createElement('div', { class: 'high_score__num' }, i + 1);
    const score = createElement('div', { class: 'high_score__score' }, highScore);

    const scoreListItem = createElement(
      'li',
      { class: 'high_score__li' },
      scoreNum,
      scoreName,
      score
    );

    highScoreBoardElem.append(scoreListItem);
  });

  highScoreBoardElem.append(submitScoreButton);
  highScoreBoardElem.append(restartGameButton);

  const gameContainer = document.getElementById('bg_container');
  gameContainer.prepend(highScoreContainerElem);
};
