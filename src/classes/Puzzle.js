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
    this.splitAnswer = upperCaseAnswer.split('');
    return this.splitAnswer;
  }
  displayPuzzle() {
    // add correct answer to DOM
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

module.exports = Puzzle;
