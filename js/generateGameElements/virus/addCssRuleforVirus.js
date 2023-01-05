import { addCSSRule } from '../../helpers/addCssRule.js';

export const addCssRuleForVirus = (className) => {
  const bottom = 25;

  const gameElementsStylesheet = document.styleSheets[2];

  addCSSRule(
    gameElementsStylesheet,
    className,
    `position: absolute;
     width: fit-content;
     align-items: center;
     bottom: ${bottom}%;
     left: 2000px;
     z-index: 1; 
     `
  );
};
