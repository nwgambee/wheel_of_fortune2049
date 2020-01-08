import chai from 'chai';
const expect = chai.expect;

import Player from '../src/classes/Player'

describe('Player', function() {

  let player;

  beforeEach(() => {
    player = new Player();
  });

  it('should have access to the Player class', function() {
    expect(player).to.be.an.instanceOf(Player);
  });

  it('should have a spinWheel method', function() {
    expect(player.spinWheel).to.be.a('function');
  })
  it('should have a buyVowel method that updates the round score', function() {
    player.buyVowel();
    expect(player.roundScore).to.deep.equal(-100);
  });
  it('should have a calculateScore method that updates player.roundScore', function() {
    player.calculateScore(8);
    expect(player.roundScore).to.deep.equal(player.roundScore * 8);
  }

});
