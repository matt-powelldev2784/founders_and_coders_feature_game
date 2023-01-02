import { incrementProperty } from './helpers/updateStyles.js'
import { setPropertyValue } from './helpers/updateStyles.js'
import { getPropertyValue } from './helpers/updateStyles.js'

const SPEED = 1.5
const groundImage1 = document.getElementsByClassName('main__tree_bg1')[0]
const groundImage2 = document.getElementsByClassName('main__tree_bg2')[0]

export const setSecondGroundImagePosition = () => {
  const groundImageWidth = getGroundConatinerWidth()
  const firstGroundImagePosition = getPropertyValue(groundImage1, 'left')
  const newImagePosition = groundImageWidth - (firstGroundImagePosition - firstGroundImagePosition * 2) - 1
  setPropertyValue(groundImage2, 'left', `${newImagePosition}px`)
}

export const getGroundConatinerWidth = () => {
  const groundImageWidth = getPropertyValue(groundImage1, 'width')
  return groundImageWidth
}

export const updateGround = (delta) => {
  const firstGroundElementCurrentValue = getPropertyValue(groundImage1, 'left')
  const groundElementNewValue = `${firstGroundElementCurrentValue - 1 * SPEED}px`
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

// export const updateGround = (delta) => {
//   groundElements.forEach((ground) => {
//     const currentPosition = getComputedStyle(ground).getPropertyValue('--left')
//     console.log('currentPosition', currentPosition)

//     const currentGroundWidth = getComputedStyle(ground).getPropertyValue('width').slice(0, -2)
//     const backgroundOffScreen = currentGroundWidth - currentGroundWidth * 2
//     console.log('backgroundOffScreen', backgroundOffScreen)

//     // if (currentPosition > backgroundOffScreen) {
//     //   setPropertyValue(ground, '--left', '0')
//     //   return
//     // }

//     //incrementProperty(ground, '--left', delta * SPEED - 1)
//   })
// }
