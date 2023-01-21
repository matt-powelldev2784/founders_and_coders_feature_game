export const loadRestartGameEventListener = () => {
  const restartGameButton = document.getElementById('high_score__restart_game_button');
  restartGameButton.addEventListener('click', restartGame);
  document.addEventListener('keydown', restartGame);
};

const restartGame = (event) => {
  if (event.key === 'Enter' || event.type === 'click') location.reload();
};
