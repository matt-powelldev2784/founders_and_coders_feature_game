import { addCSSRule } from '../helpers/addCssRule.js';

export const addCssRuleForToken = (className) => {
  const bottom = 23.5 + Math.random() * 55;
  const tokenStylesheet = document.styleSheets[2];

  addCSSRule(
    tokenStylesheet,
    className,
    `position: absolute;
     bottom: ${bottom}%;
     left: 2000px;
     width: 10%;
     height: 10%;`
  );
};
