export const boundingRectCollision = [];

export const detectBoundingRectCollision = (rect1, rect2) => {
  const collision = !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );

  return collision;
};
