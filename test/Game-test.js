import chai from 'chai';
const expect = chai.expect;

import Game from '../src/classes/Game'

describe.skip('Game', function() {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should have access to the Game class', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  describe('beginRound() method tests', function() {

    it('should should increment game.rounds', function() {
      expect(game.rounds).to.deep.equal(0);
      game.beginRound('me','myself','I');
      expect(game.rounds).to.deep.equal(1);
    });
    it('should instantiate 3 new players', function() {
      expect(game.players).to.deep.equal([]);
      game.beginRound('me','myself','I');
      expect(game.players.length).to.deep.equal(3)
    });
  });


});
