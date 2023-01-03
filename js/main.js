import { updateGroundPosition } from './ground/updateGroundPosition.js'
import { setSecondGroundImageLeftValue } from './ground/setSecondGroundImageLeftValue.js'
import { generateTokens } from './tokens/generateToken.js'
import { updateTokensPosition } from './tokens/updateTokensPosition.js'
import { addPauseGameEventListeners, pauseGame, addStartGameEventListener } from './helpers/pauseGame.js'
import { animateCharacterAtInterval } from './character/animateCharacter.js'
import { SPEED } from './ground/globalVariables.js'
import { loadEventListeners } from './eventListeners/eventListeners.js'

setSecondGroundImageLeftValue()
loadEventListeners()
addPauseGameEventListeners()
addStartGameEventListener()
animateCharacterAtInterval()

let lastTime
export const updateGameFrame = (time) => {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(updateGameFrame)
    return
  }

  if (pauseGame === false) {
    const delta = time - lastTime
    updateGroundPosition(delta)
    updateTokensPosition(delta)
    lastTime = time
    window.requestAnimationFrame(updateGameFrame)
  }
}
window.requestAnimationFrame(updateGameFrame)

generateTokens()
