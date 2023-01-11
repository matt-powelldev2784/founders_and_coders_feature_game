import { createBugElement } from './createBugElement.js';
import { addCssRuleForBug } from './addCssRuleforBug.js';

let currentBugNumber = 0;

export const bugs = [];

export const generateBug = (bugType) => {
  const { img } = bugType;
  const uniqueKey = currentBugNumber;

  bugs[uniqueKey] = {};
  bugs[uniqueKey].image = img;
  bugs[uniqueKey].uniqueKey = uniqueKey;
  createBugElement(bugType, uniqueKey);
  addCssRuleForBug(bugs[uniqueKey].cssString);
  currentBugNumber++;
};
