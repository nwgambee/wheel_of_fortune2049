import Puzzle from './Puzzle'
import {
 getCurrentPlayer
} from '../index.js'

class Round {
  constructor() {
    this.round = 0;
    this.currentPlayer = '';
    this.letters = ['A', 'B', 'C'];
    this.guessedLetters = [];
  }

  evaluateCurrentCard() {
    // if(currentCard === 'Bankrupt') {
    //   player.roundScore = 0;
    // }
    // if(currentCard === 'Lose A Turn') {
    //   this.round ++
    //   this.endTurn();
    // }
    // if(currentCard === typeof integer) {
    //   if(puzzle.letters.includes(player.availableLetters())) {
    //     // update score
    //   }
    //   player.chooseConsonant();
    //   this.updateScore();
    //   let guessedletter = this.letters.splice();
    //   this.guessedletter.push(guessedLetter);
    // }
  }

  updateScore() {

  }

  endTurn() {
    this.currentPlayer.shift().push();

    // new turn with next player
  }
  startRound(player) {
    this.currentPlayer = player;
    console.log(this.currentPlayer);
    this.generateRandomInfo();
  }

  generateRandomInfo() {
    let possibleWordLengths = ['one', 'two', 'three', 'four'];
    var puzzleWordLength = possibleWordLengths[Math.floor(Math.random() * possibleWordLengths.length)] + '_word_answers';

    let randomNum = Math.floor((Math.random() * 23) + 0);
    this.fetchPuzzles(randomNum, puzzleWordLength);
    return randomNum;
  }
  fetchPuzzles(num, wordLength) {
    fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
      .then(response => response.json())
      .then(data => this.createPuzzle(new Puzzle(data.data.puzzles[wordLength].puzzle_bank[num])))
  }
  createPuzzle(puzzle) {
    let completedPuzzles = [];

    if (!completedPuzzles.includes(puzzle)) {
      completedPuzzles.push(puzzle);
      puzzle.splitCorrectAnswer();
      puzzle.displayWords(puzzle);
    } else {
      this.generateRandomInfo();
    }
    getCurrentPlayer(this.currentPlayer);
  }

  allowTurnSelection() {
    console.log('allow it');
    const playerChoiceBtns = document.querySelector('.turn-choice');
    playerChoiceBtns.addEventListener('click', takeTurn());
  }

}


export default Round;
