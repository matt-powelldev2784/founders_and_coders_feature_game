import { addCSSRule } from '../../helpers/addCssRule.js';

let virusHeight = 6;
export const addCssRuleForVirus = (className) => {
  const bottom = 25;
  virusHeight += 1.5;
  if (virusHeight > 25) virusHeight = 25;

  const virusHeightCssString = virusHeight + 'vh';

  const gameElementsStylesheet = document.styleSheets[2];

  addCSSRule(
    gameElementsStylesheet,
    className,
    `position: absolute;
     height: ${virusHeightCssString};
     width: auto;
     align-items: center;
     bottom: ${bottom}%;
     left: 2000px;
     z-index: 1; 
     `
  );
};
