export const boundingRectCollision = []

export const detectBoundingRectCollision = (rect1, rect2) => {
  rect1.left < rect2.right && rect1.top < rect2.bottom && rect1.right > rect2.left && rect1.botom > rect2.top
}
