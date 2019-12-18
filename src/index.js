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

// ------------------- Variable Declerations ---------------------- //

const app = document.querySelector('.winners-page');
const playGameBtn = document.getElementById('start-game');
const landingPage = document.getElementById('landing-page');
const instructionsPage = document.querySelector('.instructions');
const gameBoardPage = document.querySelector('.game-page');
const loadGameBtn = document.getElementById('load-game');
const titleLogo = document.querySelector('.logo');

// ------------------- Event Listeners ---------------------- //

playGameBtn.addEventListener('click', showInstructions);
loadGameBtn.addEventListener('click', showGameBoard);

// ------------------- Functionality ---------------------- //

function showInstructions(event) {
  event.preventDefault();
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

// -------------------- Begin Game ----------------------------- //
beginGame();
function beginGame() {
  let game = new Game();
  game.beginRound('Deckard', 'K', 'Wallace')
}
