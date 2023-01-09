export const goToFullScreen = (element, options) => {
  element = element || document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen(options);
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(options);
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(options);
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen(options);
  }
};
