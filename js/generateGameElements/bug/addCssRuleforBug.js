import { addCSSRule } from '../../helpers/addCssRule.js';

let bugHeight = 6;
export const addCssRuleForBug = (className) => {
  const bottom = 25;
  bugHeight += 1.5;
  if (bugHeight > 25) bugHeight = 25;

  const bugHeightCssString = bugHeight + 'vh';

  const gameElementsStylesheet = document.styleSheets[2];

  addCSSRule(
    gameElementsStylesheet,
    className,
    `position: absolute;
     height: ${bugHeightCssString};
     width: auto;
     align-items: center;
     bottom: ${bottom}%;
     left: 2000px;
     z-index: 1; 
     `
  );
};
