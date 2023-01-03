import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'
import { jumnpOnKeyDown } from '../eventListeners/charcterJump.js'
import { SPEED, DELTA } from '../globalVariables.js'

export const characterJump = () => {
  document.removeEventListener('keydown', jumnpOnKeyDown)
  const character = document.getElementById('main__char')
  const bottomPosition = '23.5%'

  const characterCurrentBottomPosition = getPropertyValue(character, 'bottom')
  console.log('characterCurrentBottomPosition', characterCurrentBottomPosition)
  const characterNewBottomPosition = `${characterCurrentBottomPosition + 20}px`

  const jumpTime = DELTA * SPEED - 1
  const jumpTimePositive = jumpTime * -1
  console.log('jumpTime', jumpTime)
  console.log('jumpTimePositive', jumpTimePositive)

  character.style.setProperty('animation', `jump ${jumpTimePositive}s`)
  setTimeout(() => {
    document.addEventListener('keydown', jumnpOnKeyDown)
    character.style.setProperty('animation', 'unset')
  }, 1000)

  //setPropertyValue(character, 'animation', 'jump 1s')
}
