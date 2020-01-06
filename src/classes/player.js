import { showWheel, wheel } from '../index.js'

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
    wheel.evaluateCurrentCard();
  }

  buyVowel() {
    console.log('buying vowel');
  }

  solvePuzzle() {
    // player.choose
    console.log('solving puzzle');
  }

}

export default Player;
