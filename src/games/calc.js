import {gamesLibrary, random} from '../index.js';

const gameConditionStringCalc = 'What is the result of the expression?';
  
const gameCodeCalc = () => {    
  let result = 0;
  const number1 = random(100);
  const number2 = random(100);
  const signs = ['+', '-', '*'];
  const sign = signs[random(signs.length)];
  let question = number1 + sign + number2;
    switch (sign) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
      result = null;
  }
  return [question, String(result)];
};
export default () => gamesLibrary(gameConditionStringCalc, gameCodeCalc);