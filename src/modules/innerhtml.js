import { leaderboard } from './data.js';
import { list } from './domlist.js';

const writeList = () => {
  list.innerHTML = leaderboard
    .map((data) => `
    <li class="scorer">Name: ${data.name} | Score: ${data.score}</li>
  `)
    .join(' ');
    console.log('hi');
};

export default writeList;