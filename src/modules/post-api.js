import createGame from './create-api.js';

const keyGame = createGame();

const addLeader = async (newLeader) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${keyGame}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    cache: 'no-cache',
    body: JSON.stringify(newLeader),
  });
  const data = await response.json();
  return data;
};

export default addLeader;