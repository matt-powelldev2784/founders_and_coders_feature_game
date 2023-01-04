import { createElement } from './createElement.js';
import { tokens } from './generateTokens.js';

export const createTokenElement = (tokenType, uniqueKey) => {
  const { img, text, points } = tokenType;
  const bg_container = document.getElementById('bg_container');
  const tokenNumberString = `token${uniqueKey}`;
  const tokenStringforCssClass = `.token${uniqueKey}`;
  const imgElement = createElement('img', { src: img, class: 'token_img' });
  const textElement = createElement('p', { class: 'token__text' }, text);
  const tokenElement = createElement(
    'div',
    {
      class: tokenNumberString,
      id: tokenNumberString,
    },
    imgElement,
    textElement
  );

  bg_container.append(tokenElement);

  tokens[uniqueKey].cssString = tokenStringforCssClass;
  tokens[uniqueKey].id = tokenNumberString;
  tokens[uniqueKey].points = points;
  tokens[uniqueKey].element = document.getElementById(tokenNumberString);
};
