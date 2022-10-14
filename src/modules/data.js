const UpdateLocalStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

const leaderboard = [];

export { UpdateLocalStorage, leaderboard };