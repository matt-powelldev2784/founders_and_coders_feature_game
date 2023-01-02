import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'
import { SPEED } from '../ground/globalVariables.js'
import { getGroundConatinerWidth } from '../ground/getGroundContainerWidth.js'
import { pauseGame } from '../helpers/pauseGame.js'
import { createTokenElement } from './createTokenElement.js'
import { addCssRuleForToken } from './addCSSRuleForToken.js'

let currentTokenNumber = 0

export const tokens = []

export const generateTokens = () => {
  setInterval(() => {
    if (pauseGame === false) {
      console.log('Math.random() * SPEED', Math.random() * SPEED + 5000)
      generateToken('./img/logos/youtube_logo.svg', currentTokenNumber)
    }
  }, Math.random() * SPEED + 5000)
}

const generateToken = (img, tokenNumber) => {
  currentTokenNumber++
  tokens[tokenNumber] = {}
  tokens[tokenNumber].image = img
  tokens[tokenNumber].tokenNumber = tokenNumber
  createTokenElement(img, tokenNumber)
  addCssRuleForToken(tokens[tokenNumber].cssString)
}
