import gamesLibrary from '../index.js';
import printRandomNumber from '../random.js';

const gameConditionStringProgression = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  for (let i = 2; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0 && randomNumber !== i) {
      return false;
    }
  }
  return randomNumber !== 1;
};

const startPrime = () => {
  const randomPrime = printRandomNumber(2, 31);
  const value = isPrime(randomPrime);
  if (value === false) {
    return [String(randomPrime), 'no'];
  }
  return [String(randomPrime), 'yes'];
};

export default () => gamesLibrary(gameConditionStringProgression, startPrime);
