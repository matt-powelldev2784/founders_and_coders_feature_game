import { tokens } from '../tokens/generateToken.js';
import { character } from '../character/character.js';
import { detectBoundingRectCollision } from './detectBoundingRectCollision.js';

export const handleTokenAndCharacterCollision = () => {
  tokens.forEach((token) => {
    const { endOfLife, element } = token;
    if (endOfLife) return;

    const tokenBoundingRect = token.boundingRect;
    const characterBoundingRect = character[0].boundingRect;

    const collision = detectBoundingRectCollision(characterBoundingRect, tokenBoundingRect);
    if (collision) {
      token.endOfLife = true;
      element.remove();
    }
  });
};
