export const getGameElementBoundingRects = (gameElementProps) => {
  gameElementProps.forEach((gameElement) => {
    const { uniqueKey, endOfLife, element } = gameElement
    if (endOfLife === true) {
      gameElementProps[uniqueKey].boundingRect = null
      return
    }

    const boundingRect = element.getBoundingClientRect()
    gameElementProps[uniqueKey].boundingRect = boundingRect
  })
}
