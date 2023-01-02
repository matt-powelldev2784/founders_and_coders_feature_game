import { createElement } from './createElement.js'
import { tokens } from './generateToken.js'

export const createTokenElement = (img, tokenNumber) => {
  console.log('img', img)
  console.log('tokenNumber', tokenNumber)
  const bg_container = document.getElementById('bg_container')
  const tokenNumberString = `token${tokenNumber}`
  const tokenStringforCSS = `.token${tokenNumber}`
  const token = createElement('img', {
    class: tokenNumberString,
    id: tokenNumberString,
    src: img,
  })
  bg_container.append(token)

  tokens[tokenNumber].cssString = tokenStringforCSS
  tokens[tokenNumber].id = tokenNumberString
}
