import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js  '

export const characterJump = () => {
  const character = document.getElementById('main__char')
  const bottomPosition = '23.5%'

  const characterCurrentBottomPosition = getPropertyValue(character, 'bottom')
  const characterNewBottomPosition = `${characterCurrentBottomPosition - delta * SPEED + 5}%`
  setPropertyValue(character, 'bottom', characterNewBottomPosition)
}
