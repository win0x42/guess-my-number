'use strict';

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

const number = document.querySelector('.number');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let resetBtn = document.querySelector('.reset');
let randomInt = Math.trunc(Math.random() * 20) + 1;
console.log(randomInt);

let score = 20;
let highScore = 0;

guessInput.value = 0;
scoreEl.textContent = score;
highScoreEl.textContent = highScore;

resetBtn.style.display = 'none';

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 20) {
    message.textContent = 'Please enter a valid number between 1 and 20!';
  } else if (guess === randomInt) {
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = '#60b347';
    number.textContent = randomInt;
    message.textContent = 'You win !';
    console.log(randomInt);
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
      console.log(highScore);
    }
    if (highScore === 20) {
      message.textContent = 'Congratulation, you win the game !';
      resetBtn.style.display = 'block';
      againBtn.style.display = 'none';
    }
  } else {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      message.textContent = guess > randomInt ? 'Too high !' : 'Too low !';
    } else {
      scoreEl.textContent = 0;
      message.textContent = 'Game over !';
      document.body.style.backgroundColor = '#FF0000';
      resetBtn.style.display = 'block';
      againBtn.style.display = 'none';
    }
  }
});

againBtn.addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  score = 20;
  randomInt = Math.trunc(Math.random() * 20) + 1;
  console.log(randomInt);
  guessInput.value = 0;
  number.textContent = '?';
  scoreEl.textContent = score;
  message.textContent = 'start guessing...';
  document.body.style.backgroundColor = '#222';
});

resetBtn.addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  score = 20;
  highScore = 0;
  randomInt = Math.trunc(Math.random() * 20) + 1;
  console.log(randomInt);
  guessInput.value = 0;
  number.textContent = '?';
  scoreEl.textContent = score;
  highScoreEl.textContent = highScore;
  message.textContent = 'start guessing...';
  document.body.style.backgroundColor = '#222';
  resetBtn.style.display = 'none';
  againBtn.style.display = 'block';
});
