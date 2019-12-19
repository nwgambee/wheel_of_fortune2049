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
const allNames = document.querySelector('.player-names');
const pOneName = document.querySelector('.p-one-name');
const pTwoName = document.querySelector('.p-two-name');
const pThreeName = document.querySelector('.p-three-name');
const patHost = document.querySelector('.pat-host');
const vannaHost = document.querySelector('.vanna-host');
const errorMessage = document.querySelector('.error-message');

// ------------------- Event Listeners ---------------------- //

playGameBtn.addEventListener('click', checkForError);
loadGameBtn.addEventListener('click', showGameBoard);

// ------------------- Functionality ---------------------- //
function checkForError(event) {
  event.preventDefault();
  if(playerOneNameInput.value === '') {
    console.log(pOneName.value);
    errorMessage.classList.remove('hidden');
  } else {
    showInstructions();
    playGameBtn.classList.remove('disabled');
  }
}

function saveNames() {
  let firstName = playerOneNameInput.value;
  let secondName = playerTwoNameInput.value;
  let thirdName = playerThreeNameInput.value;
  allNames.innerHTML = `${firstName}, ${secondName}, & ${thirdName}`;
  pOneName.innerText = firstName;
  pTwoName.innerText = secondName;
  pThreeName.innerText = thirdName;
}

function showInstructions() {
  saveNames();
  landingPage.classList.add('hidden');
  instructionsPage.classList.remove('hidden');
  patHost.classList.add('slide-top');
}

function showGameBoard(event) {
  event.preventDefault();
  titleLogo.classList.add('scale-down-top');
  instructionsPage.classList.add('hidden');
  gameBoardPage.classList.add('fade-in-fwd');
  gameBoardPage.classList.remove('hidden');
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

// ------------------- Add Puzzle to Game Board -----------------

export function displayFirstWord(words) {
  if (words.length >= 1) {
    if(words.length  >= 2) {
      if(words.length >= 3) {
        if(words.length === 4) {
          displayFourthWord();
        }
        displayThirdWord();
      }
      displaySecondWord();
    }
    displayFirstWord();
  }
}









// export function addPuzzleToBoard(words) {
//   if (words.length < 3) {
//     let startingRow = document.querySelector('.second-row')
//     words.forEach(word => {
//       for (var i = 0; i < word.length; i++) {
//         let n = i + 201;
//         let letterSquare = document.getElementById(`${n}`)
//         // console.log(letterSquare);
//         console.log(letterSquare.firstChild);
//         letterSquare.firstChild.innerText = 'Z';
//       }
//     })
//   } else {
//     let startingRow = document.querySelector('.first-row')
//     words.forEach(word => {
//       for (var i = 0; i < word.length; i++) {
//         let n = i + 101;
//         let letterSquare = document.getElementById(`${n}`)
//         // console.log(letterSquare);
//         console.log(letterSquare.firstChild);
//         letterSquare.firstChild.innerText = 'Z';
//       }
//     })
//   }
// }


// this is the syntax for exporting index.js functions into class methods

// export const testFunc = () => {
//   console.log('adding puzzle to dom');
// }

// OR

// export function testFunc() {
//   console.log('hello');
// }
