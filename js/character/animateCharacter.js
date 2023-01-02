import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'

const animateCharacter = () => {
  const character = document.getElementById('main__char')
  const currentCharacter = character.getAttribute('src').slice(6, -4)

  if (currentCharacter === 'charA') {
    character.setAttribute('src', './img/charB.svg')
  } else {
    character.setAttribute('src', './img/charA.svg')
  }
}

export const animateCharacterAtInveral = () => {
  setInterval(() => {
    animateCharacter()
  }, 300)
}
