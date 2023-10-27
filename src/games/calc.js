import gamesLibrary from '../index.js';
import printRandomNumber from '../random.js';

const gameConditionStringCalc = 'What is the result of the expression?';

const calc = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`unknown sign: '${sign}'!`);
  }
};

const startCalc = () => {
  const randomNumber1 = printRandomNumber(0, 10);
  const randomNumber2 = printRandomNumber(0, 10);
  const signs = ['+', '-', '*'];
  const randonSign = signs[printRandomNumber(0, signs.length - 1)];
  const question = `${randomNumber1} ${randonSign} ${randomNumber2}`;
  const result = calc(randomNumber1, randomNumber2, randonSign);

  return [question, String(result)];
};

export default () => gamesLibrary(gameConditionStringCalc, startCalc);
