import { groundImage1, groundImage2 } from './globalVariables.js'
import { getGroundConatinerWidth } from './getGroundContainerWidth.js'
import { getPropertyValue, setPropertyValue } from '../helpers/updateProperties.js'

export const setSecondGroundImageLeftValue = () => {
  const groundImageWidth = getGroundConatinerWidth()
  const firstGroundImagePosition = getPropertyValue(groundImage1, 'left')
  const newImagePosition = groundImageWidth - (firstGroundImagePosition - firstGroundImagePosition * 2) - 2
  setPropertyValue(groundImage2, 'left', `${newImagePosition}px`)
}
