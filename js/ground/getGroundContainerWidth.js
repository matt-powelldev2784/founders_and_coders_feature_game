import { getPropertyValue } from '../helpers/updateProperties.js'
import { groundImage1 } from './globalVariables.js'

export const getGroundConatinerWidth = () => {
  const groundImageWidth = getPropertyValue(groundImage1, 'width')
  return groundImageWidth
}
