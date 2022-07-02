const playerFactory = (name) => {
  let score = 0;
  const getScore = () => {
    console.log(score);
  };
  return { name, getScore };
};

const p1 = playerFactory("jakub");
