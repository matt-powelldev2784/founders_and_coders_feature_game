import { tokens } from './generateToken.js'
import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'
import { SPEED } from '../ground/globalVariables.js'
import { getGroundConatinerWidth } from '../ground/getGroundContainerWidth.js'

export const updateTokens = (delta) => {
  tokens.forEach((token) => {
    if (token.endOfLife) {
      console.log('token', token)
      return
    }

    const tokenId = token.id
    const tokenElement = document.getElementById(tokenId)
    const tokenNumber = token.tokenNumber

    const tokenCurrentValue = getPropertyValue(tokenElement, 'left')
    const tokenNewValue = `${tokenCurrentValue - delta * SPEED - 1}px`
    setPropertyValue(tokenElement, 'left', tokenNewValue)
    const tokenHasLeftScreenValue = -100
    const tokenValueAsNumber = tokenNewValue.slice(0, -2)

    if (tokenValueAsNumber < tokenHasLeftScreenValue) {
      token.endOfLife = true
      document.getElementById(tokenId).remove()
    }
  })
}
