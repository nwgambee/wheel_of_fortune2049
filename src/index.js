// ------------------- Import Files ---------------------- //

import $ from 'jquery';
import Puzzle from '../src/classes/Puzzle'
import './css/base.scss';
import './images/WOD-logo.svg';
import './images/icon.png';
import './images/star.svg';

// ------------------- Variable Declerations ---------------------- //

const app = document.querySelector('.winners-page');
const playGameBtn = document.getElementById('start-game');
const landingPage = document.getElementById('landing-page');
const instructionsPage = document.querySelector('.instructions');
const gameBoardPage = document.querySelector('.game-page');
const loadGameBtn = document.getElementById('load-game');
const titleLogo = document.querySelector('.logo');
const playerOneNameInput = document.getElementById('first-input');
const playerTwoNameInput = document.getElementById('second-input');
const playerThreeNameInput = document.getElementById('third-input');
const pOneName = document.querySelector('.p-one-name');
const pTwoName = document.querySelector('.p-two-name');
const pThreeName = document.querySelector('.p-three-name');

// ------------------- Event Listeners ---------------------- //

playGameBtn.addEventListener('click', showInstructions);
loadGameBtn.addEventListener('click', showGameBoard);

// ------------------- Functionality ---------------------- //
function saveNames() {
  let firstName = playerOneNameInput.value;
  let secondName = playerTwoNameInput.value;
  let thirdName = playerThreeNameInput.value;
  pOneName.innerText = firstName;
  pTwoName.innerText = secondName;
  pThreeName.innerText = thirdName;
}

function showInstructions(event) {
  event.preventDefault();
  saveNames();
  landingPage.classList.add('hidden');
  instructionsPage.classList.remove('hidden');
}

function showGameBoard(event) {
  event.preventDefault();
  instructionsPage.classList.add('hidden');
  gameBoardPage.classList.remove('hidden');
  titleLogo.classList.remove('large-logo');
  titleLogo.classList.add('small-logo');
}

const myRand = () => {
  let r = 50
  while (40 < r && r < 60) {
    r = Math.random() * 100
  }
  return r
}

for (let i = 0; i < 50; i++) {
  const delay = Math.random() + 's';
  const el = document.createElement('img')
  el.src = './images/star.svg'
  el.className = 'glitter-star'
  el.style.top = myRand() + '%'
  el.style.left = myRand() + '%'
  el.style.animationDelay = delay
  el.style.msAnimationDelay = delay
  el.style.webkitAnimationDelay = delay
  el.style.monAnimationDelay = delay
  app.appendChild(el)
}


// ------------------- Fetching Puzzles from API ---------------------- //
// logic below is for fetching the puzzles from the API. It will eventually be moved to the Round class probably

generateRandomInfo();

function generateRandomInfo() {
  let possibleWordLengths = ['one', 'two', 'three', 'four'];
  var puzzleWordLength = possibleWordLengths[Math.floor(Math.random() * possibleWordLengths.length)] + '_word_answers';

  console.log(puzzleWordLength);

  let randomNum = Math.floor((Math.random() * 23) + 0);
  console.log(randomNum);

  fetchPuzzles(randomNum, puzzleWordLength);
}

function fetchPuzzles(num, wordLength) {
  fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
    .then(response => response.json())
    .then(data => createPuzzle(new Puzzle(data.data.puzzles[wordLength].puzzle_bank[num])))
}

function createPuzzle(puzzle) {
  let completedPuzzles = [];

  if (!completedPuzzles.includes(puzzle)) {
    completedPuzzles.push(puzzle);
    puzzle.splitCorrectAnswer();
  } else {
    generateRandomInfo();
  }
}
