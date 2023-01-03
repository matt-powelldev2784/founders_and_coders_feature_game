import { setSecondGroundImageLeftValue } from '../ground/setSecondGroundImageLeftValue.js'
import { addPauseGameEventListener, addResumeGameEventListener } from './pauseGame.js'

export const loadEventListeners = () => {
  document.addEventListener('resize', setSecondGroundImageLeftValue)
  addPauseGameEventListener()
  addResumeGameEventListener()
}
