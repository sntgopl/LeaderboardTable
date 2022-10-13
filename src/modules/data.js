const UpdateLocalStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

const leaderboard = JSON.parse(localStorage.getItem('data')) || [];

export { UpdateLocalStorage, leaderboard };