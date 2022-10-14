import createGame from './create-api.js';
import leaderboard from './data.js';
import writeList from './innerhtml.js';

const keyGame = createGame();

const refreshList = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${keyGame}/scores`);
  const data = await response.json();
  leaderboard.push(data.result);
  writeList();
  return data;
};

export default refreshList;