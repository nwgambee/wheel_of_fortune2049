// ------------------- Import Files ---------------------- //

import $ from 'jquery';
import Puzzle from '../src/classes/Puzzle'
import Game from '../src/classes/Game'
import Player from '../src/classes/Player'
import Round from '../src/classes/Round'
import Wheel from '../src/classes/Wheel'
import './css/base.scss';
import './images/WOD-logo.svg';
import './images/w.png';
import './images/star.svg';
import './images/vanna.png';
import './images/pat.png';
import './images/spin.png';
import './images/solve.png';
import './images/buy-vowel.png';

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
const wheelWindow = document.querySelector('.wheel-canvas');
const wheelObject = document.getElementById('canvas');
const spinBtn = document.getElementById('spin-btn');
const puzzleBoard = document.querySelector('.puzzle-board');
const alphabetBtns = document.querySelectorAll('.alphabet-btn');
const puzzleSquares = document.querySelectorAll('.letter');
let game, player1, player2, player3;
export let currentPlayer;
export let wheel;
export let round;
export let currentPuzzle;

// ------------------- Event Listeners ---------------------- //

playGameBtn.addEventListener('click', checkForError);
loadGameBtn.addEventListener('click', showGameBoard);
setTimeout(() => wheelObject.addEventListener('click', spinDOMWheel), 5000); 
for (const btn of alphabetBtns) {
  btn.addEventListener('click', evaluateLetter);
}

// ------------------- Functionality ---------------------- //

function takeTurn() {
  freezeButtons();
  if (event.target.id === 'spin-btn') {
    currentPlayer.spinWheel();
  } else if (event.target.id === 'buy-btn') {
    currentPlayer.buyVowel();
  } else if (event.target.id === 'solve-btn') {
    currentPlayer.solvePuzzle();
  }
}

function freezeButtons() {
  $('.choice-button').addClass('dead-mouse');
}

export function unfreezeButtons() {
  $('.choice-button').removeClass('dead-mouse');
}

export function getCurrentPlayer(currentPlayerX) {
   currentPlayer = currentPlayerX;
   const playerChoiceBtns = document.querySelector('.turn-choice');
   playerChoiceBtns.addEventListener('click', takeTurn);
}

function checkForError(event) {
  event.preventDefault();
  if (playerOneNameInput.value === '') {
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

// beginning of game logic
  beginGame(firstName, secondName, thirdName);
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
  wheel = new Wheel;
  wheel.createWheel();
  titleLogo.classList.add('scale-down-top');
  instructionsPage.classList.add('hidden');
  gameBoardPage.classList.add('fade-in-fwd');
  gameBoardPage.classList.remove('hidden');
  vannaHost.classList.remove('hidden');
  vannaHost.classList.add('slide-in-fwd-right');
  $('#p-1-score').html(`${currentPlayer.roundScore}`);
  $('#p-2-score').html(`${currentPlayer.roundScore}`);
  $('#p-3-score').html(`${currentPlayer.roundScore}`);
  setTimeout(function() {
    showTurnMessage();
    showCategory();
  }, 2800);
}

export function showTurnMessage() {
  $('.speech-bubble').removeClass('hidden');
  $('.speech-bubble').html(`
    <p>${currentPlayer.name}'s Turn to Pick</p>
  `);
}

function showCategory() {
  $('.category').html(`${currentPuzzle.category}`);
}

export function showWheel(event) {
  event.preventDefault();
  wheelWindow.classList.remove('hidden');
  wheelWindow.classList.remove('slide-out-bottom');
  wheelWindow.classList.add('slide-in-bottom');
  puzzleBoard.classList.add('invisible');
}

function spinDOMWheel(event) {
  event.preventDefault();
  if(wheelObject.classList.contains('rotate-out')) {
    wheelObject.classList.add('rotate-center');
    wheelObject.classList.remove('rotate-out');
  } else {
    wheelObject.classList.add('rotate-out');
    wheelObject.classList.remove('rotate-center');
  }
  hideWheel(event);
  wheel.chooseWheelElement();
}

function hideWheel(event) {
  event.preventDefault();
  wheelWindow.classList.remove('slide-in-bottom');
  wheelWindow.classList.add('slide-out-bottom');
  setTimeout(function() {
    puzzleBoard.classList.remove('invisible')
  }, 2800);
  setTimeout(function() {
    showMoneyAmount();
  }, 2800);
}

function showMoneyAmount() {
  if (wheel.currentCard !== 'Lose A Turn' && wheel.currentCard !== 'Bankrupt') {
    $('.money-card').html(`<p>$${wheel.currentCard}</p>`);

    $('.speech-bubble').html(`<p>Choose A Consonant!</p>`);
  } else if (wheel.currentCard === 'Lose A Turn') {
    $('.speech-bubble').html(`<p>Oh No! You ${wheel.currentCard}</p>`);
    $('.money-card').html(`<p></p>`);
    setTimeout(() => showTurnMessage(), 2000);
  } else if (wheel.currentCard === 'Bankrupt') {
    $('.speech-bubble').html(`<p>Oh No! You Are Now ${wheel.currentCard}</p>`);
    $('.money-card').html(`<p></p>`);
    setTimeout(() => showTurnMessage(), 2000);
  }
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

function beginGame(p1, p2, p3) {
  game = new Game();
  // instantiate 3 new players
  player1 = new Player(p1, 1);
  player2 = new Player(p2, 2);
  player3 = new Player(p3, 3);
  game.beginRound(player1, player2, player3)
}

// ------------------- Add Puzzle to Game Board -----------------
export function combineAmpersand(answerArr) {
  for(var i = 0; i < answerArr.length; i++) {
    if (answerArr[i] === '&') {
      answerArr[i+1] = '&' + answerArr[i+1]
      answerArr.splice(i, 1);
    }
  }
  return answerArr
}

export function displayPuzzleOnBoard(words) {
  // display first word
  if (words.length === 2) {
    displaySecondWord()
  }
}

export function getCurrentPuzzle(puzzle) {
  currentPuzzle = puzzle;
}

// ------------------- evaluate letter -----------------

export function evaluateLetter(event) {
  // if letter is contained within puzzle, display it on the DOM. If not, it is the next players turn.
  let cardCount = 0;
  let letter = event.target;
  puzzleSquares.forEach(square => {
    if (square.innerText === letter.innerHTML) {
      cardCount++;
      square.style.backgroundColor = 'deeppink';
      setTimeout(function() {
        unfreezeButtons();
        square.style.backgroundColor = 'white';
        square.style.fontSize = '65px';
      }, 1200);
      if (cardCount === 1) {
        $('.speech-bubble').html(`Bazinga! There is ${cardCount} ${letter.innerHTML} on the Board!`);
      } else {
        $('.speech-bubble').html(`Stellar! There Are ${cardCount} ${letter.innerHTML}'s on the Board!`);
      }
    }
  });
  if (cardCount === 0) {
    $('.speech-bubble').html(`Data Zap! There Are No ${letter.innerHTML}'s on the Board`)
    switchPlayer();
  }
  letter.classList.contains('consonant-letter') && currentPlayer.calculateScore(cardCount);
  document.querySelectorAll('.consonant-letter').forEach(c => c.classList.add('dead-mouse'));
  document.querySelectorAll('.vowel-letter').forEach(v => v.classList.add('dead-mouse'));
  letter.classList.add('used-mouse');
  $(`#p-${currentPlayer.playerNumber}-score`).html(`${currentPlayer.roundScore}`);
  setTimeout(function() {
    showTurnMessage();
  }, 1600);
}

// ------------------- switch players -----------------

export function switchPlayer() {
  if (currentPlayer === player1) {getCurrentPlayer(player2)}
  else if (currentPlayer === player2) {getCurrentPlayer(player3)}
  else {getCurrentPlayer(player1)};
  setTimeout(() => unfreezeButtons(), 1200);
}
