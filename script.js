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

const gameBoard = (function () {
  const space = ["O", "O", "O", "O", "O", "O", "O", "O", "O"];
  const render = function (content) {
    const board = document.querySelector(".board");
    const cell = document.createElement("div");
    board.appendChild(cell);
    cell.textContent = content;
  };
  const renderSpace = space.forEach(render);
  return { renderSpace };
})();
