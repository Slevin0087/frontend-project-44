import gamesLibrary from '../index.js';
import printRandomNumber from '../random.js';

const gameConditionStringYesAndNo = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startEven = () => {
  const random = printRandomNumber(1, 52);
  const answer = isEven(random) === true ? 'yes' : 'no';
  return [random, answer];
};

export default () => gamesLibrary(gameConditionStringYesAndNo, startEven);
