import { updateGroundPosition } from './ground/updateGroundPosition.js'
import { setSecondGroundImageLeftValue } from './ground/setSecondGroundImageLeftValue.js'
import { generateTokens } from './tokens/generateToken.js'
import { updateTokensPosition } from './tokens/updateTokensPosition.js'
import { animateCharacterAtInterval } from './character/animateCharacter.js'
import { loadEventListeners } from './eventListeners/eventListeners.js'
import { gameIsPaused } from './eventListeners/pauseGame.js'
import { setGlobalDelta } from './globalVariables.js'
import { getTokenBoundingRects } from './tokens/getTokensBoudningRects.js'

setSecondGroundImageLeftValue()
loadEventListeners()
animateCharacterAtInterval()

let lastTime
export const updateGameFrame = (time) => {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(updateGameFrame)
    return
  }

  if (gameIsPaused === false) {
    const delta = time - lastTime
    setGlobalDelta(delta)
    updateGroundPosition(delta)
    updateTokensPosition(delta)
    getTokenBoundingRects()
    lastTime = time
    window.requestAnimationFrame(updateGameFrame)
  }
}
window.requestAnimationFrame(updateGameFrame)

generateTokens()
