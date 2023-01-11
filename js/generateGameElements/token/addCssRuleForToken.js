import { addCSSRule } from '../../helpers/addCssRule.js';

export const addCssRuleForToken = (className) => {
  const bottom = 23.5 + Math.random() * 55;

  const gameElementsStylesheet = document.styleSheets[2];

  addCSSRule(
    gameElementsStylesheet,
    className,
    `position: absolute;
     align-items: center;
     bottom: ${bottom}%;
     left: 1500px;
     z-index: 1; 
     `
  );
};
