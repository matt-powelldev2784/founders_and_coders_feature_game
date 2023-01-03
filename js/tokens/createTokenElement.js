import { createElement } from './createElement.js'
import { tokens } from './generateToken.js'

export const createTokenElement = (img, uniqueKey) => {
  const bg_container = document.getElementById('bg_container')
  const tokenNumberString = `token${uniqueKey}`
  const tokenStringforCSSClass = `.token${uniqueKey}`
  const token = createElement('img', {
    class: tokenNumberString,
    id: tokenNumberString,
    src: img,
  })
  bg_container.append(token)

  tokens[uniqueKey].cssString = tokenStringforCSSClass
  tokens[uniqueKey].id = tokenNumberString
}
