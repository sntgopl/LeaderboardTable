// import { leaderboard } from './modules/data.js';
import {
  addBtn, nameIn, refreshBtn, scoreIn,
} from './modules/domlist.js';
import Leader from './modules/leaders.js';
import refreshList from './modules/refresh-api.js';
import addLeader from './modules/post-api.js';
import './style.css';

// setInterval(() => {
//   console.log(leaderboard[0][0]);
// },3000);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const leader = new Leader(nameIn.value, scoreIn.value);
  addLeader(leader);
  leader.add();
  setTimeout(() => {
    nameIn.value = '';
    scoreIn.value = '';
  }, 1);
});

refreshBtn.addEventListener('click', refreshList());