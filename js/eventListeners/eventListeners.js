import { setGameToPause } from '../helpers/pauseGame.js'
import { setSecondGroundImagePosition } from '../ground/setSecondGroundImagePosition.js'

export const loadEventListeners = () => {
  document.addEventListener('resize', setSecondGroundImagePosition)
  document.addEventListener('resize', setGameToPause)
}
