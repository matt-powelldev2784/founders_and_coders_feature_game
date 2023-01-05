export const tokenTypes = [
  {
    key: 0,
    img: './img/tokens/html_icon_8bit.png',
    text: 'HTML',
    points: 100,
  },
  {
    key: 1,
    img: './img/tokens/css_logo_8bit.png',
    text: 'CSS',
    points: 100,
  },
  {
    key: 2,
    img: './img/tokens/js_logo_8bit.png',
    text: 'JAVASCRIPT',
    points: 300,
  },
  {
    key: 3,
    img: './img/tokens/react_logo_8bit.png',
    text: 'REACT',
    points: 500,
  },
  {
    key: 4,
    img: './img/tokens/node_js_8bit.png',
    text: 'NODEJS',
    points: 1000,
  },
  {
    key: 5,
    img: './img/tokens/virus.svg',
    text: '',
    points: 0,
  },
];

const getRandomWholeNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
const tokenTypesArrayLength = tokenTypes.length - 1;
export const getRandomToken = () => {
  const randomTokenNumber = getRandomWholeNumber(0, tokenTypesArrayLength);
  return tokenTypes[randomTokenNumber];
};
