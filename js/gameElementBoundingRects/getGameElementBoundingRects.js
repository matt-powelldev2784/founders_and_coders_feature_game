import { setGameToPause } from '../eventListeners/pauseGame.js';

export const getGameElementBoundingRects = (gameElementProps) => {
  gameElementProps.forEach((gameElement) => {
    const { uniqueKey, endOfLife, element } = gameElement;
    if (endOfLife) {
      gameElementProps[uniqueKey].boundingRect = null;
      return;
    }

    const boundingRect = element.getBoundingClientRect();
    gameElementProps[uniqueKey].boundingRect = boundingRect;
  });
};
