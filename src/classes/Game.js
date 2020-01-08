// import Round from './classes/Round'
// import Round from '../src/classes/Round'
import { showWinnerNames } from '../index.js'
import Round from './Round'
import Player from './Player'
import $ from 'jquery';


class Game {
  constructor() {
    this.winner;
    this.rounds = 1;
    this.players = [];
  }
  evaluateLeaderboard() {

  }
  beginRound(p1, p2, p3) {
    console.log('new round');
    this.players.push(p1, p2, p3);
    this.rounds++;
    if (this.rounds < 5) {
      console.log('starting new round');
      let round = new Round();
      round.startRound(this.players[0]);
    } else {
      this.endGame();
    }
  }
  endGame() {
    //evaluate the winner
    console.log('game is over');
    $('.game-page').addClass('hidden');
    $('.winners-page').removeClass('hidden');
    showWinnerNames();
  }
}


export default Game;
