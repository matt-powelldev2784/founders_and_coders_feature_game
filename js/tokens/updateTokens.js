import { tokens } from './generateToken.js'
import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'
import { SPEED } from '../ground/globalVariables.js'
import { getGroundConatinerWidth } from '../ground/getGroundContainerWidth.js'

export const updateTokens = (delta) => {
  tokens.forEach((token) => {
    const tokenId = token.id
    const tokenElement = document.getElementById(tokenId)
    const tokenNumber = token.tokenNumber

    if (!tokenElement) {
      return
    }

    const tokenCurrentValue = getPropertyValue(tokenElement, 'right')
    const tokenNewValue = `${tokenCurrentValue + delta * SPEED + 1}px`
    setPropertyValue(tokenElement, 'right', tokenNewValue)
    const tokenHasLeftScreenValue = 2000
    const tokenValueAsNumber = tokenNewValue.slice(0, -2)

    if (tokenValueAsNumber > tokenHasLeftScreenValue) {
      tokens.splice(tokenNumber, 1)
      tokenElement.remove()
    }
  })
}
