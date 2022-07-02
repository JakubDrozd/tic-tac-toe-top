const grid = document.querySelector(".gameDiv");

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

class Gameboard {
  constructor() {
    this.space = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
  getSpace() {
    console.log(this.space);
  }
  newGame() {
    this.space = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
}

const newBoard = new Gameboard();
