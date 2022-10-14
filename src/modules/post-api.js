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
// async function sendData(name, score) {
//   const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//       user: name,
//       score,
//     }),
//   });
//   const data = await response.json();
//   return data;
// }

// export default sendData;