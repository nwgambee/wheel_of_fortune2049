import chai from 'chai';
const expect = chai.expect;

import Game from '../src/classes/Game'



describe('Game', function() {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should have access to the Game class', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a beginGame method', function() {
    expect(game.beginGame).to.be.a('function');
  });

  it('beginGame() should return true', function() {
    // game.beginGame();
    expect(game.beginGame()).to.equal(true);
  })

});
