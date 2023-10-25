import {gamesLibrary, random} from '../index.js';

const gameConditionStringYesAndNo = 'Answer "yes" if the number is even, otherwise answer "no".';

export const gameCodeYesAndNo = () => {
  let result = '';
  const ansverYes = 'yes';
  const ansverNo = 'no';
  const randomNumber = random(0, 52);
  if (randomNumber % 2 === 0) {
    result = ansverYes;
  } else {
    result = ansverNo;
  }
  return [randomNumber, result];
};

export default () => gamesLibrary(gameConditionStringYesAndNo, gameCodeYesAndNo);
