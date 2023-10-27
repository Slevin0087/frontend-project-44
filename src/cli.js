import readlineSync from 'readline-sync';

const readName = () => {
  console.log('Welcome to the Brain Games!');
  const read = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${read}!`);
};

export default readName;
