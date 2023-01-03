import { setGameToPause } from '../helpers/pauseGame.js'
import { setSecondGroundImageLeftValue } from '../ground/setSecondGroundImageLeftValue.js'

export const loadEventListeners = () => {
  document.addEventListener('resize', setSecondGroundImageLeftValue)
}
