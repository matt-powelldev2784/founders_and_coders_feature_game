import { onHighScoreMenuFocus } from './highScoreMenu.js';

export const loadRestartGameEventListener = () => {
  const restartGameButton = document.getElementById('high_score__buttons_container');
  restartGameButton.addEventListener('click', restartGame);
  restartGameButton.addEventListener('focusin', onHighScoreMenuFocus);
  restartGameButton.addEventListener('focusout', onHighScoreMenuFocus);
  document.addEventListener('keydown', restartGame);
};

const restartGame = (event) => {
  if (event.key === 'Enter' || event.type === 'click') location.reload();
};
