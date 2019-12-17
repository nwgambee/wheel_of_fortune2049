class Puzzle {
  constructor(puzzle) {
    this.category = puzzle.category;
    this.numOfWords = puzzle.number_of_words;
    this.totalLetters = puzzle.total_number_of_letters;
    this.description = puzzle.description;
    this.correctAnswer = puzzle.correct_answer;
    this.firstWord = puzzle.first_word;
    // this.correctLettersRemaining;
  }
  splitCorrectAnswer() {
    console.log('splitting');
    console.log(this.correctAnswer);
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

module.exports = Puzzle;
