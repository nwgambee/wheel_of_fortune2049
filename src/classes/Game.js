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

  beginRound(p1, p2, p3) {
    this.players.push(p1, p2, p3);
    this.rounds++;
    if (this.rounds < 5) {
      let round = new Round();
      round.startRound(this.players[0]);
    } else {
      this.endGame();
    }
  }
  endGame() {
    $('.game-page').addClass('hidden');
    $('.winners-page').removeClass('hidden');
    showWinnerNames();
  }
}


export default Game;
