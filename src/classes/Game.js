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
    this.players.push(p1, p2, p3);
    // instantiate new Round
    let round = new Round();
    this.rounds++;
    round.startRound(p1);

  }
  endGame() {
    //evaluate the winner
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
