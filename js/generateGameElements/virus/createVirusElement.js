import { createElement } from '../../helpers/createElement.js';
import { viruses } from './generateVirus.js';

export const createVirusElement = (virusType, uniqueKey) => {
  const { img } = virusType;
  const bg_container = document.getElementById('bg_container');
  const virusNumberString = `virus${uniqueKey}`;
  const virusStringforCssClass = `.virus${uniqueKey}`;
  const virusElement = createElement('img', { src: img, class: 'virus', id: virusNumberString });

  bg_container.append(virusElement);

  viruses[uniqueKey].cssString = virusStringforCssClass;
  viruses[uniqueKey].id = virusNumberString;
  viruses[uniqueKey].element = document.getElementById(virusNumberString);
};
