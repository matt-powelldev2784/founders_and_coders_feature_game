import { updateGround } from './ground/uppdateGround.js'
import { setSecondGroundImagePosition } from './ground/setSecondGroundImagePosition.js'
import { animateCharacterAtInveral } from './character/animateCharacter.js'

setSecondGroundImagePosition()
document.addEventListener('resize', setSecondGroundImagePosition)

animateCharacterAtInveral()

let lastTime
const updateGameFrame = (time) => {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(updateGameFrame)
    return
  }
  const delta = time - lastTime

  updateGround(delta)

  lastTime = time
  window.requestAnimationFrame(updateGameFrame)
}
window.requestAnimationFrame(updateGameFrame)
