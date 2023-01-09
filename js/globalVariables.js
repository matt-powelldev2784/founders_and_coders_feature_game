let windowHeightSpeedVar = innerHeight / 800;
export const setWindowHeightSpeedVar = () => {
  windowHeightSpeedVar = innerHeight / 800;
};

export const SPEED = 0.6 * windowHeightSpeedVar;

export let DELTA;
export const setGlobalDelta = (delta) => {
  DELTA = delta;
};

export let score = 0;
export const setScore = (newScore) => {
  score = newScore;
};

export const groundImage1 = document.getElementsByClassName('main__tree_bg1')[0];
export const groundImage2 = document.getElementsByClassName('main__tree_bg2')[0];
