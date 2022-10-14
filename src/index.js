import {
  addBtn, nameIn, refreshBtn, scoreIn,
} from './modules/domlist.js';
import Leader from './modules/leaders.js';
import refreshList from './modules/refresh-api.js';
import addLeader from './modules/post-api.js';
import './style.css';

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const leader = new Leader(nameIn.value, scoreIn.value);
  addLeader(leader);
  leader.add();
  setTimeout(() => {
    nameIn.value = '';
    scoreIn.value = '';
  }, 1);
  const msg = document.querySelector('.msg');
  msg.style.display = 'block';
  setTimeout(() => {
    msg.style.display = 'none';
  }, 1000);
});

refreshBtn.addEventListener('click', () => {
  refreshList();
});