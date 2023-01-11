import { addCSSRule } from '../../helpers/addCssRule.js';
import { generateRandomNumber } from '../../helpers/generateRandomNumber.js';

export const addCssRuleForBug = (className) => {
  const bugHeight = generateRandomNumber(4, 12);
  const bottom = 25;
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
     left: 1500px;
     z-index: 1; 
     `
  );
};
