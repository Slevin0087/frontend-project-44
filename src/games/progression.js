import gamesLibrary from '../index.js';
import printRandomNumber from '../random.js';

const gameConditionStringProgression = 'What number is missing in the progression?';

const arrProgression = () => {
  const minNumberProgression = printRandomNumber(1, 10);
  const result = [minNumberProgression];
  const lengthProgression = printRandomNumber(5, 10);
  const stepProgression = printRandomNumber(2, 8);
  for (let i = 0, j = stepProgression; i < lengthProgression; i += 1, j += stepProgression) {
    const progression = minNumberProgression + j;
    result.push(progression);
  }
  return result;
};

const startProgression = () => {
  let result = [];
  let i = 0;
  const arr = arrProgression();
  const randomNumber = arr[printRandomNumber(0, arr.length - 1)];
  while (i < arr.length) {
    if (randomNumber === arr[i]) {
      result.push('..');
    } else {
      result.push(arr[i]);
    }
    i += 1;
  }
  const innerValue = result.join(' ');
  result = innerValue;
  return [result, String(randomNumber)];
};

export default () => gamesLibrary(gameConditionStringProgression, startProgression);
