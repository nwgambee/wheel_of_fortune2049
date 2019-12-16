import chai from 'chai';
const expect = chai.expect;

import Wheel from '../src/classes/Wheel'
describe('Wheel', function() {
  let wheel;

  beforeEach(() => {
    wheel = new Wheel();
  });

  it('should have access to the Wheel class', function() {
    expect(wheel).to.be.an.instanceOf(Wheel);
  });
  it('should have a runBonusWheel method', function() {
    expect(wheel.runBonusWheel).to.be.a('function');
  })
});
