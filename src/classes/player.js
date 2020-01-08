import { unfreezeButtons, startNewRound, showWheel, wheel, evaluateLetter, showTurnMessage, currentPuzzle, switchPlayer } from '../index.js'

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
      }, 2000);
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
      console.log('correct!');
      // end round display congrats message and then start new round
      startNewRound();
    } else {
      switchPlayer();
      $('.speech-bubble').html(`<p>Gadzooks! That guess is incorrect!</p>`);

      setTimeout(() => {
        unfreezeButtons();
        showTurnMessage();
      }, 2000);
    }
    $('.solve-input').remove();
    $('.solve-btn').remove();
  }
  chooseConsonant() {
    document.querySelectorAll('.consonant-letter').forEach(c => c.classList.remove('dead-mouse'));
    // allow consonants to be clicked and wait for user to choose only one
    // assign clicked letter to a variable and pass it into evaluateLetter();

    // let letter = event.target.innerHTML;
    // console.log(letter);
    // evaluateLetter();
  }
  calculateScore(cardCount) {
    this.roundScore += parseInt(wheel.currentCard) * cardCount;
  }


}

export default Player;
