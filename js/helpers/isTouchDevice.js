export const isTouchDevice = () => {
  if ('ontouchstart' in document.documentElement) {
    return true;
  } else {
    return false;
  }
};
