import { leaderboard, UpdateLocalStorage } from './data.js';
import writeList from './innerhtml.js';

class Leader {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  add() {
    leaderboard.push(this);
    UpdateLocalStorage(leaderboard);
    writeList();
  }

  static refresh() {
    leaderboard = [];
    UpdateLocalStorage(leaderboard);
    writeList();
  }
}

export default Leader;