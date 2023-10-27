import gamesLibrary from '../index.js';
import printRandomNumber from '../random.js';

const gameConditionStringYesAndNo = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const startEven = () => {
  const random = printRandomNumber(1, 52);
  if (isEven(random) === true) {
    return [random, 'yes'];
  }
  return [random, 'no'];
};

export default () => gamesLibrary(gameConditionStringYesAndNo, startEven);
