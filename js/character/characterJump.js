import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'
import { SPEED } from '../globalVariables.js'

export const characterJump = () => {
  const character = document.getElementById('main__char')
  const bottomPosition = '23.5%'

  const characterCurrentBottomPosition = getPropertyValue(character, 'bottom')
  console.log('characterCurrentBottomPosition', characterCurrentBottomPosition)
  const characterNewBottomPosition = `${characterCurrentBottomPosition + 20}px`
  setPropertyValue(character, 'bottom', characterNewBottomPosition)
}
