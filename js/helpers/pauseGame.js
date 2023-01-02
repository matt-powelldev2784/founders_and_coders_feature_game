import { updateGameFrame } from '../main.js'

export let pauseGame = false

export const addPauseGameEventListeners = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'p' && pauseGame === false) {
      pauseGame = true
    }
  })
}

export const addStartGameEventListener = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'r' && pauseGame === true) {
      pauseGame = false
      window.requestAnimationFrame(updateGameFrame)
    }
  })
}
