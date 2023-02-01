import { generateRandomNumber } from '../../helpers/generateRandomNumber.js';

export const tokenTypes = [
  {
    key: 0,
    img: './img/tokens/html_icon_8bit.svg',
    text: 'HTML',
    points: 100,
  },
  {
    key: 1,
    img: './img/tokens/css_logo_8bit.svg',
    text: 'CSS',
    points: 100,
  },
  {
    key: 2,
    img: './img/tokens/js_logo_8bit.svg',
    text: 'JAVASCRIPT',
    points: 300,
  },
  {
    key: 3,
    img: './img/tokens/react_logo_8bit.svg',
    text: 'REACT',
    points: 500,
  },
  {
    key: 4,
    img: './img/tokens/node_js_8bit.svg',
    text: 'NODEJS',
    points: 1000,
  },
];

const tokenTypesArrayLength = tokenTypes.length - 1;
export const getRandomToken = () => {
  const randomTokenNumber = generateRandomNumber(0, tokenTypesArrayLength);
  return tokenTypes[randomTokenNumber];
};
