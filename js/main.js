import { updateGround } from './ground.js'
import { setSecondGroundImagePosition } from './ground.js'

let lastTime

setSecondGroundImagePosition()
document.addEventListener('resize', setSecondGroundImagePosition)

const updateGameFrame = (time) => {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(updateGameFrame)
    return
  }
  const delta = time - lastTime

  updateGround(delta)

  lastTime = time

  // setTimeout(() => {
  //   window.requestAnimationFrame(updateGameFrame)
  // }, 0.0000000000000000001)

  window.requestAnimationFrame(updateGameFrame)
}
window.requestAnimationFrame(updateGameFrame)
