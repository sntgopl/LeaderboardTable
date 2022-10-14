const gameName = { name: 'Fidoxidido' };
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createGame = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    cache: 'no-cache',
    body: JSON.stringify(gameName),
  });
  const data = await response.json();
  return data.result.slice(14, 34);
};

export default createGame;