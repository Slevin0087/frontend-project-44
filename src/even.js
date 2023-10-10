import readlineSync from 'readline-sync';

 /*export const userName = () => {
    console.log('Welcome to the Brain Games!');
    const read = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + read + '!');
    return read;
  };*/

export const yesAndNo = (min = 0, max = 52) => {
  let result = 'Correct!';
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const read = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + read + '!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (i < 3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Question: ' + randomNumber);
    const ansver = readlineSync.question('Your answer: ');
    if (randomNumber % 2 ===0 && ansver === 'yes') {
     console.log(result);    
    } else if (randomNumber % 2 !== 0 && ansver === 'no') {
     console.log(result);
    } else {
      return console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, " + read);
    }
    i += 1;
  }
    return console.log('Congratulations, ' + read);
};
    //const readNumber = readlineSync.question('Your answer: ');
    
    //for (let i = 0; i < 3; i += 1) {
     // if (randomNumber % =) {

    //  }
    //}
   // return ;

//export default userName;
//console.log('Welcome to the Brain Games!');
//export const userName = readlineSync.question('May I have your name? ');
//console.log('Hello, ' + userName + '!');

/*export const number = (n) => {
  if (n % 2 === 0) {
    console.log('Correct!');
  } else {
    console.log('NoCorrect!'); 
  }

};*/



