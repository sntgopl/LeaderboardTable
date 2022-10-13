import { leaderboard, UpdateLocalStorage } from './data.js';

class Leader {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  add() {
    leaderboard.push(this);
    UpdateLocalStorage(leaderboard);
  }

  static refresh() {
    leaderboard = [];
    UpdateLocalStorage(leaderboard);
  }
}

export default Leader;