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

const allNames = document.querySelector('.player-names');
const alphabetBtns = document.querySelectorAll('.alphabet-btn');
const app = document.querySelector('.winners-page');
const errorMessage = document.querySelector('.error-message');
const gameBoardPage = document.querySelector('.game-page');
const instructionsPage = document.querySelector('.instructions');
const landingPage = document.getElementById('landing-page');
const loadGameBtn = document.getElementById('load-game');
const patHost = document.querySelector('.pat-host');
const playGameBtn = document.getElementById('start-game');
const playerOneNameInput = document.getElementById('first-input');
const playerThreeNameInput = document.getElementById('third-input');
const playerTwoNameInput = document.getElementById('second-input');
const pOneName = document.querySelector('.p-one-name');
const pThreeName = document.querySelector('.p-three-name');
const pTwoName = document.querySelector('.p-two-name');
const puzzleBoard = document.querySelector('.puzzle-board');
const puzzleSquares = document.querySelectorAll('.letter');
const spinBtn = document.getElementById('spin-btn');
const titleLogo = document.querySelector('.logo');
const vannaHost = document.querySelector('.vanna-host');
const wheelObject = document.getElementById('canvas');
const wheelWindow = document.querySelector('.wheel-canvas');
let game, player1, player2, player3;
export let currentPlayer;
export let currentPuzzle;
export let round;
export let wheel;
let totalCardCount = 0;


// ------------------- Event Listeners ---------------------- //

loadGameBtn.addEventListener('click', showGameBoard);
playGameBtn.addEventListener('click', checkForError);
setTimeout(() => wheelObject.addEventListener('click', spinDOMWheel), 5000);
for (const btn of alphabetBtns) {
  btn.addEventListener('click', evaluateLetter);
}

// ------------------- Helper Functions ---------------------- //

function showGameBoard(event) {
  event.preventDefault();
  wheel = new Wheel;
  wheel.createWheel();
  animateGameBoard();
  displayScore();
  setTimeout(function() { showTurnMessage(); showCategory() }, 2800);
}

const myRand = () => {
  let r = 50
  while (40 < r && r < 60) { r = Math.random() * 100 }
  return r
}

export function startNewRound() {
  resetScores();
  $('#round-num').html(`<p>Round ${game.rounds}</p>`);
  $('.speech-bubble').html(`<p>${currentPlayer.name}'s Turn to Pick</p>`);
  resetBoard();
  game.beginRound(player1, player2, player3);
  unfreezeButtons();
  displayScore();
  showCategory();
}

// ------------------- Start / Reset Game ---------------------- //

function resetScores() {
  player1.roundScore = 0;
  player2.roundScore = 0;
  player3.roundScore = 0;
}

export function resetBoard() {
  document.querySelectorAll('.consonant-letter').forEach(c => c.classList.remove('used-mouse'));
  document.querySelectorAll('.vowel-letter').forEach(v => v.classList.remove('used-mouse'));
  puzzleSquares.forEach(square => {
    square.innerHTML = '';
    square.classList.remove('active-square');
    square.style.fontSize = '0px';
  });
}

export function unfreezeButtons() {
  $('.choice-button').removeClass('dead-mouse');
}

function freezeButtons() {
  $('.choice-button').addClass('dead-mouse');
}

function takeTurn() {
  freezeButtons();
  if (event.target.classList.contains('spin-choice')) {
    currentPlayer.spinWheel();
  } else if (event.target.classList.contains('buy-choice')) {
    currentPlayer.buyVowel();
  } else if (event.target.classList.contains('solve-choice')) {
    currentPlayer.solvePuzzle();
  }
}

function displayScore() {
  $('#p-1-score').html(`${currentPlayer.roundScore}`);
  $('#p-2-score').html(`${currentPlayer.roundScore}`);
  $('#p-3-score').html(`${currentPlayer.roundScore}`);
}

export function getCurrentPlayer(currentPlayerX) {
   currentPlayer = currentPlayerX;
   const playerChoiceBtns = document.querySelector('.turn-choice');
   playerChoiceBtns.addEventListener('click', takeTurn);
}

function checkForError(event) {
  event.preventDefault();
  if (playerOneNameInput.value === '' || playerTwoNameInput.value === '' || playerThreeNameInput.value === '') {
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

// ---------------- GameBoard Display Functions --------------------

  beginGame(firstName, secondName, thirdName);
  allNames.innerHTML = `${firstName}, ${secondName}, & ${thirdName}!`;
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

function animateGameBoard(event) {
  titleLogo.classList.add('scale-down-top');
  instructionsPage.classList.add('hidden');
  gameBoardPage.classList.add('fade-in-fwd');
  gameBoardPage.classList.remove('hidden');
  vannaHost.classList.remove('hidden');
  vannaHost.classList.add('slide-in-fwd-right');
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
  $('.speech-bubble').html(`<p>Lunarious! Click Wheel To Spin!`);
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

export function getCurrentPuzzle(puzzle) {
  currentPuzzle = puzzle;
}

// ------------------- evaluate letter -----------------

export function evaluateLetter(event) {
  let cardCount = 0;
  let letter = event.target;
  puzzleSquares.forEach(square => {
    if (square.innerText === letter.innerHTML) {
      cardCount++;
      totalCardCount++;
      square.style.backgroundColor = 'deeppink';
      setTimeout(function() {
        square.style.backgroundColor = '';
        square.style.fontSize = '65px';
      }, 2000);
      setTimeout(() => unfreezeButtons(), 3000);
      if (cardCount === 1) {
        $('.speech-bubble').html(`Bazinga! There is ${cardCount} ${letter.innerHTML} on the Board!`);
      } else {
        $('.speech-bubble').html(`Stellar! There Are ${cardCount} ${letter.innerHTML}'s on the Board!`);
      }
    }
  });
  if (currentPuzzle.totalLetters === totalCardCount) {
    totalCardCount = 0;
    updateScore(currentPlayer);
    startNewRound();
  }
  if (cardCount === 0) {
    $('.speech-bubble').html(`Data Zap! There Are No ${letter.innerHTML}'s on the Board`)
    switchPlayer();
  }
  updateLetterBank(letter, cardCount);
}

function updateLetterBank(letter, cardCount) {
  letter.classList.contains('consonant-letter') && currentPlayer.calculateScore(cardCount);
  document.querySelectorAll('.consonant-letter').forEach(c => c.classList.add('dead-mouse'));
  document.querySelectorAll('.vowel-letter').forEach(v => v.classList.add('dead-mouse'));
  letter.classList.add('used-mouse');
  $(`#p-${currentPlayer.playerNumber}-score`).html(`${currentPlayer.roundScore}`);
  setTimeout(function() {
    showTurnMessage();
  }, 1600);
}

function updateScore(player) {
  player.totalScore = player.roundScore;
  player.roundScore = 0;
}

// ------------------- switch players -----------------

export function switchPlayer() {
  if (currentPlayer === player1) {getCurrentPlayer(player2)}
  else if (currentPlayer === player2) {getCurrentPlayer(player3)}
  else {getCurrentPlayer(player1)};
  setTimeout(() => unfreezeButtons(), 2000);
}

// ------------------- end game -----------------

export function showSolution() {
  currentPlayer.totalScore = currentPlayer.roundScore;
  currentPlayer.roundScore = 0;
  console.log(currentPlayer);
  puzzleSquares.forEach(square => {
    if(square.classList.contains('active-square')) {
      square.style.fontSize = '65px';
    }
  });
  $('.speech-bubble').html(`Zoom Zoom Zoom! ${currentPlayer.name} Wins This Round!`);
}

export function showWinnerNames() {
  let playerScores = [player1, player2, player3];
  playerScores.sort((a,b) => b.totalScore - a.totalScore)
  let firstPlace = playerScores[0];
  let secondPlace = playerScores[1];
  let thirdPlace = playerScores[2];
  $('.winner-name').html(`${firstPlace.name}`);
  $('#first-place').html(`${firstPlace.totalScore} Credits`);
  $('.second-name').html(`${secondPlace.name}`);
  $('#second-place').html(`${secondPlace.totalScore} Credits`);
  $('.third-name').html(`${thirdPlace.name}`);
  $('#third-place').html(`${thirdPlace.totalScore} Credits`);
}
