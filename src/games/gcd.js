import {gamesLibrary, random} from '../index.js';

const gameConditionStringGcd = 'Find the greatest common divisor of given numbers.';


const nod = (a, b) => {
  if (!(a && b)) {
      return b;
  }
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  return nod(max % min, min)
}

  const gameCodeGcd = () => {
    const randomNumber1 = random(0, 25);
    const randomNumber2 = random(0, 25);
    let result = nod(randomNumber1, randomNumber2);
    const numberNod = randomNumber1 + ' ' + randomNumber2;
    
    return [numberNod, String(result)];
  };

export default () => gamesLibrary(gameConditionStringGcd, gameCodeGcd);