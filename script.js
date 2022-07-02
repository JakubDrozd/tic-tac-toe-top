const createPlayer = (name) => {
  let _score = 0;
  (getScore = () => {
    console.log(_score);
  }),
    (setScore = (newScore) => {
      _score = newScore;
    });
  return { name, getScore, setScore };
};

const p1 = createPlayer("Jakub");

const p2 = createPlayer("Piotr");

const gameBoard = {
  space: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  newSpace() {
    gameBoard.space = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  },
};
