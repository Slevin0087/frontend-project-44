import gamesLibrary from '../index.js';
import printRandomNumber from '../random.js';

const gameConditionStringGcd = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (!(a && b)) {
    return b;
  }
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  return nod(max % min, min);
};

const startGcd = () => {
  const randomNumber1 = printRandomNumber(1, 25);
  const randomNumber2 = printRandomNumber(1, 25);
  const result = nod(randomNumber1, randomNumber2);
  const numberNod = `${randomNumber1} ${randomNumber2}`;
  return [numberNod, String(result)];
};

export default () => gamesLibrary(gameConditionStringGcd, startGcd);
