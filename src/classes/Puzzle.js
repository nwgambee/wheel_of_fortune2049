// import { addPuzzleToBoard, displayFirstWord } from '../index.js'


class Puzzle {
  constructor(puzzle) {
    this.category = puzzle.category;
    this.numOfWords = puzzle.number_of_words;
    this.totalLetters = puzzle.total_number_of_letters;
    this.description = puzzle.description;
    this.correctAnswer = puzzle.correct_answer;
    this.splitAnswer = [];
    this.firstWord = puzzle.first_word;
    // this.correctLettersRemaining;
  }
  splitCorrectAnswer() {
    let upperCaseAnswer = this.correctAnswer.toUpperCase();
    let splitAtSpace = upperCaseAnswer.split(' ');
    splitAtSpace.forEach(word => {
      this.splitAnswer.push(word.split(''));
    });

    this.displayPuzzle();
    return this.splitAnswer;
  }
  displayPuzzle() {
    // add puzzle to DOM
    // if (this.splitAnswer.length === 1) {
    //   displayFirstWord(this.splitAnswer[0]);
    // } else if (this.splitAnswer.length === 2) {
    //   displaySecondWord(this.splitAnswer[1]);
    // } else if (this.splitAnswer.length === 3){
    //   displayThirdWord(this.splitAnswer[2])
    // } else {f{
    //   displayFourth
    // }
    displayFirstWord(this.splitAnswer);
  }
  uncoverLetters() {
    // player.chooseAction
    // uncover letters that have been guessed from the puzzle board
    // run this.checkIfGuessed() to see if this.correctLettersRemaining.length === 0, if so, run round.endRound();
  }
  evaluateLetterGuess(letter) {
    if (this.splitAnswer.includes(letter.toUpperCase())) {
      // this.uncoverLetters();
      return true;
    } else {
      // endTurn()
      return false;
    }
  }
  evaluateSolution(guess) {
    if (guess.toLowerCase() === this.correctAnswer.toLowerCase()) {
      return true;
    } else {
      // endTurn()
      return false;
    }
  }
}

export default Puzzle;
