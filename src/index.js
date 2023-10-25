import readlineSync from 'readline-sync';

export const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const gamesLibrary = (gameConditionStrin, gameCode) => {
  const result = 'Correct!';
  let i = 0;
  const welcomeString = 'Welcome to the Brain Games!';
  console.log(welcomeString);
  const nameQuestion = 'May I have your name? ';
  const read = readlineSync.question(nameQuestion);
  const playerGreeting = 'Hello, ' + read + '!';
  console.log(playerGreeting);
  console.log(gameConditionStrin);
  while (i < 3) {
    const gameConditionAndSolution = gameCode();
    console.log('Question: ' + gameConditionAndSolution[0]);
    const ansver = readlineSync.question('Your answer: ');
    const correctAnswer = gameConditionAndSolution[1];
    if (ansver === correctAnswer) {
      console.log(result);
    } else {
      return console.log("'" + ansver + "'" + " is wrong answer ;(. Correct answer was " + "'" + correctAnswer + "'.\n Let's try again, " + read + '!');
    }
    i += 1;
  }
  return console.log('Congratulations, ' + read + '!');
};
