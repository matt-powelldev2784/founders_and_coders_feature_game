import { tokens } from './generateToken.js'
import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'
import { SPEED } from '../globalVariables.js'
import { getGroundConatinerWidth } from '../ground/getGroundContainerWidth.js'

export const updateTokensPosition = (delta) => {
  tokens.forEach((token) => {
    const { element, endOfLife } = token

    if (endOfLife) {
      return
    }

    const tokenCurrentLeftPosition = getPropertyValue(element, 'left')
    const tokenNewLeftPosition = `${tokenCurrentLeftPosition - delta * SPEED - 1}px`
    setPropertyValue(element, 'left', tokenNewLeftPosition)
    const tokenHasLeftScreenValue = -100
    const tokenLeftPositionAsNumber = tokenNewLeftPosition.slice(0, -2)

    if (tokenLeftPositionAsNumber < tokenHasLeftScreenValue) {
      token.endOfLife = true
      element.remove()
    }
  })
}
