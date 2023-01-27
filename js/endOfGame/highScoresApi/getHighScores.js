import { apiUrl } from './apiUrl.js';

export const getHighScores = async () => {
  try {
    fetch(apiUrl); //runs fetch to check server is up, if server is down catch block will execute
    const scores = await fetch(apiUrl);
    const scoresJson = scores.json();
    return scoresJson;
  } catch (err) {
    location.reload();
  }
};
