import { addPauseGameEventListener, addResumeGameEventListener, setGameToPause } from './pauseGame.js'
import { addCharacterJumpEventListener } from './charcterJump.js'

export const loadEventListeners = () => {
  window.addEventListener('resize', setGameToPause)
  addPauseGameEventListener()
  addResumeGameEventListener()
  addCharacterJumpEventListener()
}
