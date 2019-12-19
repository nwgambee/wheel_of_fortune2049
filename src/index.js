// ------------------- Import Files ---------------------- //

import $ from 'jquery';
import Puzzle from '../src/classes/Puzzle'
import Game from '../src/classes/Game'
import Player from '../src/classes/Player'
import Round from '../src/classes/Round'
import Wheel from '../src/classes/Wheel'
import './css/base.scss';
import './images/WOD-logo.svg';
import './images/icon.png';
import './images/star.svg';
import './images/vanna.png';
import './images/pat.png';

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
const patHost = document.querySelector('.pat-host');
const vannaHost = document.querySelector('.vanna-host');

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
  patHost.classList.add('slide-top');
}

function showGameBoard(event) {
  event.preventDefault();
  instructionsPage.classList.add('hidden');
  gameBoardPage.classList.remove('hidden');
  titleLogo.classList.remove('large-logo');
  titleLogo.classList.add('small-logo');
  vannaHost.classList.remove('hidden');
  vannaHost.classList.add('slide-in-fwd-right');
  // vannaHost.classList.add('slide-left');
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

// -------------------- Begin Game ----------------------------- //
beginGame(); // call on 'start game' button click

function beginGame() {
  let game = new Game();
  game.beginRound('Deckard', 'K', 'Wallace')
  // pass in player names from user inputs
}


// syntax for exporting index.js functions into class methods

// export const testFunc = () => {
//   console.log('adding puzzle to dom');
// }

// OR

// export function testFunc() {
//   console.log('hello');
// }
