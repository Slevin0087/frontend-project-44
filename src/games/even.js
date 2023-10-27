import gamesLibrary from '../index.js';
import printRandomNumber from '../random.js';

const gameConditionStringYesAndNo = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startEven = () => {
  const random = printRandomNumber(1, 52);
  if (isEven(random) === true) {
    const answerYes = 'yes';
    return [random, answerYes];
  }
  const answerNo = 'no';
  return [random, answerNo];
};

export default () => gamesLibrary(gameConditionStringYesAndNo, startEven);
