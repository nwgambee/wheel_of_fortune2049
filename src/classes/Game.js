// import Round from './classes/Round'
// import Round from '../src/classes/Round'
import Round from './Round.js'


class Game {
  constructor() {
    this.winner;
  }
  evaluateLeaderboard() {

  }
  beginRound() {
    // pass in => p1Name, p2Name, p3Name
    // instantiate 3 new players
    // let player1 = new Player(p1Name);
    // let player2 = new Player(p2Name);
    // let player3 = new Player(p3Name);
    // instantiate new Round
    // let round = new Round();
    console.log(Round);
    // round.startRound()
    return true; //this is a test return statement for testing
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
