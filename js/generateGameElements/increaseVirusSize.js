import { addCSSRule } from '../helpers/addCssRule.js';

let virusHeight = 8;

export const increaseVirusSize = () => {
  const gameElementsStylesheet = document.styleSheets[2];
  const gameElementsStylesheetRules = gameElementsStylesheet.cssRules;
  console.log('gameElementsStylesheetRules', gameElementsStylesheetRules);
  [...gameElementsStylesheetRules].forEach((cssRule, i) => {
    if (cssRule.selectorText === '.virus') {
      console.log('cssRule', cssRule);
      console.log('i', i);
      gameElementsStylesheet.deleteRule(i);
    }
  });
  virusHeight += 2;
  const virusHeightCSSString = virusHeight + 'vh';
  console.log('virusHeightCSSString', virusHeightCSSString);

  console.log('gameElementsStylesheet', gameElementsStylesheet);

  addCSSRule(
    gameElementsStylesheet,
    '.virus',
    ` position: absolute;
      height: ${virusHeightCSSString};
      width: auto;
      bottom: 25%;
      right: -2000px;
      z-index: 1;
     `
  );
};
