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
      generateToken('./img/logos/youtube_logo.svg', currentTokenNumber)
    }
  }, Math.random() * SPEED + 5000)
}

const generateToken = (img, uniqueKey) => {
  currentTokenNumber++
  tokens[uniqueKey] = {}
  tokens[uniqueKey].image = img
  tokens[uniqueKey].uniqueKey = uniqueKey
  createTokenElement(img, uniqueKey)
  addCssRuleForToken(tokens[uniqueKey].cssString)
}
