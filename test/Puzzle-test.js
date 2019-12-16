import chai from 'chai';
const expect = chai.expect;

import Puzzle from '../src/classes/Puzzle'

describe('Puzzle', function() {
  let puzzle;

  beforeEach(() => {
    puzzle = new Puzzle();
  });

  it('should have access to the Puzzle class', function() {
    expect(puzzle).to.be.an.instanceOf(Puzzle);
  });

  it('should have a displayPuzzle method', function() {
    expect(puzzle.displayPuzzle).to.be.a('function');
  })
});
