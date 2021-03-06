import { showSolution, unfreezeButtons, startNewRound, showWheel, wheel, evaluateLetter, showTurnMessage, currentPuzzle, switchPlayer } from '../index.js'

import $ from 'jquery';

class Player {
  constructor(name, order) {
    this.name = name;
    this.totalScore = 0;
    this.roundScore = 0;
    this.playerNumber = order;

  }
  spinWheel() {
    showWheel(event);
  }
  buyVowel() {
    if (this.roundScore >= 100) {
      document.querySelectorAll('.vowel-letter').forEach(v => v.classList.remove('dead-mouse'));
      this.roundScore -= 100;
      $('.speech-bubble').html(`<p>Choose A Vowel!</p>`);
    } else {
      $('.speech-bubble').html(`<p>Zetus Lapetus! You Need $100 To Buy A Vowel!</p>`);
      // Unfreeze Turn Options
      setTimeout(() => {
        unfreezeButtons();
        showTurnMessage();
      }, 3000);
    }
  }

  solvePuzzle() {
    $('.puzzle-board').append('<input class="solve-input"><button class="solve-btn">solve the puzzle!</button>');
    let solveBtn = document.querySelector('.solve-btn')
    solveBtn.addEventListener('click', this.checkGuess);
  }
  checkGuess() {
    let guess = document.querySelector('.solve-input').value;
    if (guess.toLowerCase() === currentPuzzle.correctAnswer.toLowerCase()) {
      showSolution();
      setTimeout(() => {
        startNewRound();
      }, 4000);
    } else {
      switchPlayer();
      $('.speech-bubble').html(`<p>Gadzooks! That guess is incorrect!</p>`);

      setTimeout(() => {
        unfreezeButtons();
        showTurnMessage();
      }, 3000);
    }
    $('.solve-input').remove();
    $('.solve-btn').remove();
  }
  chooseConsonant() {
    setTimeout(() => document.querySelectorAll('.consonant-letter').forEach(c => c.classList.remove('dead-mouse')), 3000);
  }
  calculateScore(cardCount) {
    this.roundScore += parseInt(wheel.currentCard) * cardCount;
  }


}

export default Player;
