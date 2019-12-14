class Round {
  constructor() {
    // this.round = 0;
    this.currentPlayer = '';
    this.letters = ['A', 'B', 'C'...];
    this.guessedLetters = [];
  }

  evaluateCurrentCard() {
    if(currentCard === 'Bankrupt') {
      player.roundScore = 0;
    }
    if(currentCard === 'Lose A Turn') {
      this.round ++
      this.endTurn();
    }
    if(currentCard === typeof integer) {
      if(puzzle.letters.includes(player.availableLetters())) {
        update score
      }
      player.chooseConsonant();
      this.updateScore();
      let guessedletter = this.letters.splice();
      this.guessedletter.push(guessedLetter);
    }
  }

  updateScore() {

  }

  endTurn() {
    this.currentPlayer.shift().push();

    // new turn with next player
  }
  startRound() {
    // resets round data and starts turn
    // this.loadPuzzle or puzzle.displayPuzzle
  }

  loadPuzzle() {
    // instantiate new Puzzle
    puzzle.displayPuzzle();
  }

}
