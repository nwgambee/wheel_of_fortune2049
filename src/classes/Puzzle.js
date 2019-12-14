class Puzzle {
  constructor(puzzle) {
    this.category;
    this.numOfWord;
    this.totalLetters;
    this.description;
    this.correctAnswer;
    this.correctLettersRemaining;
  }
  splitCorrectAnswer() {
    // this.correctAnswer.split('')
  }
  displayPuzzle() {
    // add correct answer to DOM
  }
  uncoverLetters() {
    // player.chooseAction
    // uncover letters that have been guessed from the puzzle board
    // run this.checkIfGuessed() to see if this.correctLettersRemaining.length === 0, if so, run round.endRound();
  }
  evaluateLetterGuess() {
    // if guess is correct, run uncoverLetters() which will update this.
    // if not, run round.endTurn()
  }
  evaluateSolution() {

  }
}
