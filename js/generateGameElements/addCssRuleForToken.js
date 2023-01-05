import { addCSSRule } from '../helpers/addCssRule.js';

export const addCssRuleForToken = (className) => {
  const bottom = 23.5 + Math.random() * 55;

  const tokenStylesheet = document.styleSheets[2];

  addCSSRule(
    tokenStylesheet,
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
