import { setPropertyValue } from '../helpers/updateProperties.js'
import { getPropertyValue } from '../helpers/updateProperties.js'
import { groundImage1, groundImage2, SPEED } from './globalVariables.js'
import { setSecondGroundImagePosition } from './setSecondGroundImagePosition.js'
import { getGroundConatinerWidth } from './getGroundContainerWidth.js'

export const updateGround = (delta) => {
  const firstGroundElementCurrentValue = getPropertyValue(groundImage1, 'left')
  const groundElementNewValue = `${firstGroundElementCurrentValue - delta * SPEED - 1}px`
  setPropertyValue(groundImage1, 'left', groundElementNewValue)
  setSecondGroundImagePosition()

  const groundHasLeftScreen = getGroundConatinerWidth() - getGroundConatinerWidth() * 2
  const firstGroundElementNewValue = getPropertyValue(groundImage1, 'left')
  if (firstGroundElementNewValue < groundHasLeftScreen) {
    console.log('groundHasLeftScreen!')
    setPropertyValue(groundImage1, 'left', '0px')
    setSecondGroundImagePosition()
  }
}
