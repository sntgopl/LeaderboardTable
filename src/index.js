import { leaderboard, UpdateLocalStorage } from './modules/data.js';
import {
  addBtn, nameIn, refreshBtn, scoreIn,
} from './modules/domlist.js';
import writeList from './modules/innerhtml.js';
import Leader from './modules/leaders.js';
import './style.css';

writeList();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const leader = new Leader(nameIn.value, scoreIn.value);
  leader.add();
  writeList();
  setTimeout(() => {
    nameIn.value = '';
    scoreIn.value = '';
  }, 1);
});

refreshBtn.addEventListener('click', () => {
  leaderboard.splice(0, leaderboard.length);
  UpdateLocalStorage(leaderboard);
  writeList();
});