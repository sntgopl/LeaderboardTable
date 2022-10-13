const UpdateLocalStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

const leaderboard = JSON.parse(localStorage.getItem('data')) || [{ name: 'Santiago', score: '10' }, { name: 'Drak', score: '7' }, { name: 'Igor', score: '5' }];

export { UpdateLocalStorage, leaderboard };