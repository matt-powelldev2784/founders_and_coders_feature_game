import { tokens } from './generateToken.js'

export const getTokenBoundingRects = () => {
  tokens.forEach((token) => {
    const { uniqueKey, endOfLife, element } = token
    if (endOfLife === true) {
      tokens[uniqueKey].boundingRect = null
      return
    }

    const boundingRect = element.getBoundingClientRect()
    tokens[uniqueKey].boundingRect = boundingRect
  })
  console.log('tokens', tokens)
}
