import { apiUrl } from './apiUrl.js';

export const getHighScores = async () => {
  const scores = await fetch(apiUrl);
  const scoresJson = scores.json();
  return scoresJson;
};
