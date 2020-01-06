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
  beginRound(p1Name, p2Name, p3Name) {
    // instantiate 3 new players
    let player1 = new Player(p1Name);
    let player2 = new Player(p2Name);
    let player3 = new Player(p3Name);
    this.players.push(player1, player2, player3);

    // instantiate new Round
    let round = new Round();
    this.rounds++;
    round.startRound(player1);

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
