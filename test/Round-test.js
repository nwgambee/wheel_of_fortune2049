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

  it('should have a evaluateCurrentCard method', function() {
    expect(round.evaluateCurrentCard).to.be.a('function');
  })
});
