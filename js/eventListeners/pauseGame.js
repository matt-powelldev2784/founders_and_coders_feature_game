import { updateGameFrame } from '../main.js'

export let gameIsPaused = false

export const addPauseGameEventListener = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'p' && pauseGame === false) {
      setGameToPause()
    }
  })
}

export const addResumeGameEventListener = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'r' && pauseGame === true) {
      setGameToResume()
      window.requestAnimationFrame(updateGameFrame)
    }
  })
}

export const setGameToPause = () => {
  console.log('Game Paused')
  gameIsPaused = true
}

export const setGameToResume = () => {
  console.log('Game Resumed')
  gameIsPaused = false
}
