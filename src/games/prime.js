import { runGame } from '../index.js';
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// Функция-предикат для проверки, является ли число простым
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  // Проверяем делители от 2 до корня из числа
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
};
const generateRound = () => {
  // Генерируем случайное число от 1 до 100
  const number = Math.floor(Math.random() * 100) + 1;
  
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return [question, correctAnswer];
};
const runPrimeGame = () => {
  runGame(gameDescription, generateRound);
};
export default runPrimeGame;