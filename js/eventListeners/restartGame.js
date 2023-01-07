export const loadRestartGameEventListener = () => {
  document.addEventListener('keydown', restartGame);
};

const restartGame = (event) => {
  if (event.key === 'Enter') location.reload();
};
