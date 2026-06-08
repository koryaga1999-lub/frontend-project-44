import { runGame } from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
  case '+':
    return num1 + num2;
  case '-':
    return num1 - num2;
  case '*':
    return num1 * num2;
  default:
    throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 20) + 1; // Числа от 1 до 20
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const runCalcGame = () => {
  runGame(gameDescription, generateRound);
};

export default runCalcGame;
