import { tokens } from '../generateGameElements/token/generateToken.js';
import { character } from '../character/character.js';
import { detectBoundingRectCollision } from './detectBoundingRectCollision.js';
import { score, setScore } from '../globalVariables.js';

export const handleTokenAndCharacterCollision = () => {
  tokens.forEach((token) => {
    const { endOfLife, element, points } = token;
    if (endOfLife) return;

    const tokenBoundingRect = token.boundingRect;
    const characterBoundingRect = character[0].boundingRect;

    const collision = detectBoundingRectCollision(characterBoundingRect, tokenBoundingRect);
    if (collision) {
      token.endOfLife = true;
      element.remove();
      setScore(score + points);
      const scoreElement = document.getElementById('main__score');
      scoreElement.textContent = score;
    }
  });
};
