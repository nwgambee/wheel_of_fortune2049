import { showWheel } from '../index.js'

class Player {
  constructor(name, order) {
    this.name = name;
    this.totalScore = 0;
    this.roundScore = 0;
    this.playerNumber = order;

  }

  spinWheel() {
    // round.evaluateCurrentCard();
    // round.availableLetters = [];
    showWheel(event)
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
