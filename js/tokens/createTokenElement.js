import { createElement } from './createElement.js';
import { tokens } from './generateTokens.js';

export const createTokenElement = (img, uniqueKey) => {
  const bg_container = document.getElementById('bg_container');
  const tokenNumberString = `token${uniqueKey}`;
  const tokenStringforCssClass = `.token${uniqueKey}`;
  const tokenElement = createElement('img', {
    class: tokenNumberString,
    id: tokenNumberString,
    src: img,
  });
  bg_container.append(tokenElement);

  tokens[uniqueKey].cssString = tokenStringforCssClass;
  tokens[uniqueKey].id = tokenNumberString;
  tokens[uniqueKey].element = document.getElementById(tokenNumberString);
};
