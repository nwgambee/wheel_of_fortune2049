import chai from 'chai';
const expect = chai.expect;


import Round from '../src/classes/Round'

describe('Round', function() {
  let round;

  beforeEach(() => {
    round = new Round();
  });

  it('should have access to the Round class', function() {
    expect(round).to.be.an.instanceOf(Round);
  });
  describe.skip('generateRandomInfo() method tests', function() {
    it('should generate a random number', function() {
      expect(round.generateRandomInfo()).to.be.a('number');
    })
  })
});
