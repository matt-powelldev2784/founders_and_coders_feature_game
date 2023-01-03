import { gameIsPaused } from './pauseGame.js'
import { characterJump } from '../character/characterJump.js'

export const addCharacterJumpEventListener = () => {
  document.addEventListener('keydown', jumnpOnKeyDown)
}

export const jumnpOnKeyDown = (event) => {
  if (event.key === ' ' && gameIsPaused === false) {
    characterJump()
  }
}
