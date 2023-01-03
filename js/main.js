import { updateGround } from './ground/uppdateGround.js'
import { addPauseGameEventListeners, pauseGame, addStartGameEventListener } from './helpers/pauseGame.js'
import { setSecondGroundImagePosition } from './ground/setSecondGroundImagePosition.js'
import { animateCharacterAtInterval } from './character/animateCharacter.js'
import { SPEED } from './ground/globalVariables.js'
import { updateTokensPosition } from './tokens/updateTokensPosition.js'
import { generateTokens } from './tokens/generateToken.js'
import { loadEventListeners } from './eventListeners/eventListeners.js'

setSecondGroundImagePosition()
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
    updateGround(delta)
    updateTokensPosition(delta)
    lastTime = time
    window.requestAnimationFrame(updateGameFrame)
  }
}
window.requestAnimationFrame(updateGameFrame)

generateTokens()
