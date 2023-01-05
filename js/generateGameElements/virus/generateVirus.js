import { createVirusElement } from './createVirusElement.js';
import { addCssRuleForVirus } from './addCssRuleforVirus.js';

let currentVirusNumber = 0;

export const viruses = [];

export const generateVirus = (virusType) => {
  console.log('viruses', viruses);
  const { img } = virusType;
  const uniqueKey = currentVirusNumber;

  viruses[uniqueKey] = {};
  viruses[uniqueKey].image = img;
  viruses[uniqueKey].uniqueKey = uniqueKey;
  createVirusElement(virusType, uniqueKey);
  addCssRuleForVirus(viruses[uniqueKey].cssString);
  currentVirusNumber++;
};
