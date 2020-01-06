import { showWheel, wheel, evaluateLetter } from '../index.js'

import Round from './Round'

class Player {
  constructor(name, order) {
    this.name = name;
    this.totalScore = 0;
    this.roundScore = 0;
    this.playerNumber = order;

  }

  spinWheel() {
    // round.availableLetters = [];
    showWheel(event);
    // round.evaluateCurrentCard();
  }

  buyVowel() {
    console.log('buying vowel');
  }

  solvePuzzle() {
    // player.choose
    console.log('solving puzzle');
  }
  chooseConsonant() {
    console.log('choosing consonant');
    document.querySelectorAll('.consonant-letter').forEach(c => c.classList.remove('dead-mouse'));
    // consonants.for
    // consonants.classList.remove('dead-mouse');
    // allow consonants to be clicked and wait for user to choose only one
    // assign clicked letter to a variable and pass it into evaluateLetter();

    // let letter = event.target.innerHTML;
    // console.log(letter);
    // evaluateLetter();
  }

}

export default Player;
