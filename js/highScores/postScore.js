import { getScore } from '../globalVariables.js';
import { apiUrl } from './apiUrl.js';

export const postScore = async () => {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'test', highScore: getScore() }),
  };

  const addScore = await fetch(apiUrl, options);
  const addScoreJson = addScore.json();
  return addScoreJson;
};
