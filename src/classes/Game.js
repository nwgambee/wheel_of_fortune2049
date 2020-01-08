// import Round from './classes/Round'
// import Round from '../src/classes/Round'
import Round from './Round'
import Player from './Player'


class Game {
  constructor() {
    this.winner;
    this.rounds = 0;
    this.players = [];
  }
  evaluateLeaderboard() {

  }
  beginRound(p1, p2, p3) {
    console.log('new round');
    this.players.push(p1, p2, p3);
    this.rounds++;
    if (this.rounds < 4) {
      console.log('starting new round');
      // instantiate new Round
      let round = new Round();
      round.startRound(this.players[0]);
    } else {
      this.endGame();
    }
  }
  endGame() {
    //evaluate the winner
    console.log('game is over');
  }
  endRound() {
    // instantiate new Round
    this.startRound();
    this.round++
  }

  startBonus() {

  }
}


export default Game;
