import { tokens } from './generateToken.js'
import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'
import { SPEED } from '../ground/globalVariables.js'
import { getGroundConatinerWidth } from '../ground/getGroundContainerWidth.js'

export const updateTokens = (delta) => {
  tokens.forEach((token) => {
    const tokenId = token.id
    console.log('tokenId', tokenId)
    const tokenElement = document.getElementById(tokenId)
    const tokenNumber = token.tokenNumber
    console.log('tokenElement', tokenElement)

    const tokenCurrentValue = getPropertyValue(tokenElement, 'right')
    const tokenNewValue = `${tokenCurrentValue + delta * SPEED + 1}px`
    setPropertyValue(tokenElement, 'right', tokenNewValue)
    const tokenHasLeftScreenValue = 2000
    const tokenValueAsNumber = tokenNewValue.slice(0, -2)

    if (tokenValueAsNumber > tokenHasLeftScreenValue) {
      tokenElement.remove()
      tokens.splice(tokenNumber, 1)
    }
  })

  // const token = document.getElementById('token0')
  // if (token) {
  //   const tokenCurrentValue = getPropertyValue(token, 'right')
  //   const tokenNewValue = `${tokenCurrentValue + delta * SPEED + 1}px`
  //   setPropertyValue(token, 'right', tokenNewValue)
  //   const tokenHasLeftScreenValue = getGroundConatinerWidth() * 2
  //   const tokenValueAsNumber = tokenNewValue.slice(0, -2)
  //   if (tokenValueAsNumber > tokenHasLeftScreenValue) {
  //     token.remove()
  //   }
  // }
}
