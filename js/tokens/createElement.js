export const createElement = (htmlTag, htmlProps, ...childElements) => {
  let element = document.createElement(htmlTag)

  if (htmlProps) {
    for (const [htmlProp, value] of Object.entries(htmlProps)) {
      element.setAttribute(htmlProp, value)
    }
  }

  if (childElements && childElements.length) {
    element.append(...childElements)
  }

  return element
}
