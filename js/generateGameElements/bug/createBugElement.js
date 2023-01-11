import { createElement } from '../../helpers/createElement.js';
import { bugs } from './generateBug.js';

export const createBugElement = (bugType, uniqueKey) => {
  const { img } = bugType;
  const bg_container = document.getElementById('bg_container');
  const bugNumberString = `bug${uniqueKey}`;
  const bugStringforCssClass = `.bug${uniqueKey}`;
  const bugElement = createElement('img', {
    src: img,
    class: bugNumberString,
    id: bugNumberString,
  });

  bg_container.append(bugElement);

  bugs[uniqueKey].cssString = bugStringforCssClass;
  bugs[uniqueKey].id = bugNumberString;
  bugs[uniqueKey].element = document.getElementById(bugNumberString);
};
