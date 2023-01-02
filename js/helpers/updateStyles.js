export const getPropertyValue = (element, prop) => {
  return parseFloat(getComputedStyle(element).getPropertyValue(prop)) || 0
}

export const setPropertyValue = (element, prop, value) => {
  element.style.setProperty(prop, value)
}

export const incrementProperty = (element, prop, increment) => {
  setPropertyValue(element, prop, getPropertyValue(element, prop) + increment)
}
