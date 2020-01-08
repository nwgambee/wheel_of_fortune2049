import chai from 'chai';
const expect = chai.expect;

import Wheel from '../src/classes/Wheel';

describe('Wheel', function() {

  let wheel;

  beforeEach(() => {
    let wheelData = [900, "BANKRUPT", 2500, 600, 700, 600, 650, 500, 700, "BANKRUPT", 600, 550, 500, 600, "BANKRUPT", "LOSE A TURN", 700, 800, 500, 650, 500, 900];
    wheel = new Wheel(wheelData);
  });

  it('should have access to the Wheel class', function() {
    expect(wheel).to.be.an.instanceOf(Wheel);
  });

  describe('Wheel properties', function() {

    it('should have an elements property', function() {
      expect(wheel.elements).to.deep.equal([900, "BANKRUPT", 2500, 600, 700, 600, 650, 500, 700, "BANKRUPT", 600, 550, 500, 600, "BANKRUPT", "LOSE A TURN", 700, 800, 500, 650, 500, 900]);
    })
  })

  it('should have a runBonusWheel method', function() {
    expect(wheel.runBonusWheel).to.be.a('function');
  })
  it('should have a deg2rad method', function() {
    expect(wheel.deg2rad(45)).to.equal(45 * Math.PI/180)
  })
});
