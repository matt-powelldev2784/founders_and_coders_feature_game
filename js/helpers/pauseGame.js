import { updateGameFrame } from '../main.js'

export let pauseGame = false

export const addPauseGameEventListeners = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'p' && pauseGame === false) {
      setGameToPause()
    }
  })
}

export const addStartGameEventListener = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'r' && pauseGame === true) {
      setGameToResume()
      window.requestAnimationFrame(updateGameFrame)
    }
  })
}

export const setGameToPause = () => {
  console.log('Game Paused')
  pauseGame = true
}

export const setGameToResume = () => {
  console.log('Game Resumed')
  pauseGame = false
}
