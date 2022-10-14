import { leaderboard } from './data.js';
import { list } from './domlist.js';

class Leader {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  add() {
    leaderboard[0].push(this);
    list.innerHTML = leaderboard[0]
      .map((data) => `
      <li class="scorer">Name: ${data.user} | Score: ${data.score}</li>
      `)
      .join(' ');
  }
}

export default Leader;