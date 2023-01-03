import { addPauseGameEventListener, addResumeGameEventListener, setGameToPause } from './pauseGame.js'

export const loadEventListeners = () => {
  window.addEventListener('resize', setGameToPause)
  addPauseGameEventListener()
  addResumeGameEventListener()
}
