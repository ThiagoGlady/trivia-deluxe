function shuffleArray(array) {
  for (let i = 0; i < array.length; i += 1) {
    const randomPosition = Math.floor(Math.random() * array.length);
    const currentElement = array[i];
    array[i] = array[randomPosition];
    array[randomPosition] = currentElement;
  }
  return array;
}

export default shuffleArray;
