import { addCSSRule } from '../helpers/addCssRule.js'

export const addCssRuleForToken = (className) => {
  const bottom = 23.5 + Math.random() * 55
  console.log('bottom', bottom)

  addCSSRule(
    document.styleSheets[2],
    className,
    `position: absolute;
     bottom: ${bottom}%;
     right: -200px;
     width: 10%;
     height: 10%;
     z-index: 1;`
  )
}
