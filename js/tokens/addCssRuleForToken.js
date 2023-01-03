import { addCSSRule } from '../helpers/addCssRule.js'

export const addCssRuleForToken = (className) => {
  const bottom = 23.5 + Math.random() * 55

  addCSSRule(
    document.styleSheets[2],
    className,
    `position: absolute;
     bottom: ${bottom}%;
     left: 2000px;
     width: 10%;
     height: 10%;
     z-index: 1;`
  )
}
