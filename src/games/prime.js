import {gamesLibrary, random} from '../index.js';

const gameConditionStringProgression = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const falseAndTrue = ()=> {
  const randomPrime = random(2, 31);
  for (let i = 2; i <= randomPrime; i += 1) {
    if (randomPrime % i === 0 && randomPrime !== i) { 
      return [randomPrime, false];      
    }  
  }
  return [randomPrime, randomPrime !== 1];
};

const gameCodePrime = () => {
let result = '';
const value = falseAndTrue();
  if (value[1] === false) {
    result = 'no';
  } else {
    result = 'yes';
  }
return [String(value[0]), result];
};

export default () => gamesLibrary(gameConditionStringProgression, gameCodePrime);