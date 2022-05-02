function prepareScore(difficulty, timeLeft) {
  const scoreToAdd = 10;
  const three = 3;
  let difficultyValue = 0;
  if (difficulty === 'hard') difficultyValue = three;
  if (difficulty === 'medium') difficultyValue = 2;
  if (difficulty === 'easy') difficultyValue = 1;
  return scoreToAdd + (timeLeft * difficultyValue);
}

export default prepareScore;
