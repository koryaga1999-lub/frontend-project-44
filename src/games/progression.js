import { runGame } from '../index.js';
const gameDescription = 'What number is missing in the progression?';
//Генерация арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

//Формирование вопроса со скрытым элементом
const generateRound = () => {
  const minLength = 5;
  const maxLength = 10;
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const start = Math.floor(Math.random() * 20) + 1; // от 1 до 20
  const step = Math.floor(Math.random() * 10) + 1; // от 1 до 10
  const progression = generateProgression(start, step, length); 
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[hiddenIndex]);
  // Заменяем скрытый элемент на ".."
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};
const runProgressionGame = () => {
  runGame(gameDescription, generateRound);
};
export default runProgressionGame;