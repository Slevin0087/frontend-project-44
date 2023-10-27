import readlineSync from 'readline-sync';

const gamesLibrary = (gameConditionStrin, startGame) => {
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const readUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${readUserName}!`);
  console.log(gameConditionStrin);
  while (i < 3) {
    const [question, correctAnswer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${readUserName}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${readUserName}!`);
};

export default gamesLibrary;
