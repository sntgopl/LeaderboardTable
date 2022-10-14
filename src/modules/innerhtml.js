import { leaderboard } from './data.js';
import { list } from './domlist.js';

const writeList = () => {
  list.innerHTML = leaderboard[0]
    .map((data) => `
    <li class="scorer">Name: ${data.user} | Score: ${data.score}</li>
  `)
    .join(' ');
};

export default writeList;