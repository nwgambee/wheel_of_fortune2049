import chai from 'chai';
const expect = chai.expect;

import Puzzle from '../src/classes/Puzzle'

describe('Puzzle', function() {
  let puzzle;

  beforeEach(() => {
    let puzzleObj = {
      category: "The 90s",
      correct_answer: "Scrunchies",
      description: "Puzzles pertaining to the decade in question.",
      first_word: 10,
      number_of_words: 1,
      total_number_of_letters: 10
    }

    puzzle = new Puzzle(puzzleObj);
  });

  it('should have access to the Puzzle class', function() {
    expect(puzzle).to.be.an.instanceOf(Puzzle);
  });

  it('should have a displayPuzzle method', function() {
    expect(puzzle.displayPuzzle).to.be.a('function');
  });

  describe('Puzzle properties', function() {

    it('should have a category', function() {
      expect(puzzle.category).to.equal("The 90s");
    });
    it('should have a correct answer', function() {
      expect(puzzle.correctAnswer).to.equal("Scrunchies");
    });
    it('should have a description', function() {
      expect(puzzle.description).to.equal("Puzzles pertaining to the decade in question.");
    });
    it('should have the length of the first word of the answer ', function() {
      expect(puzzle.firstWord).to.equal(10);
    });
    it('should have the total number of words', function() {
      expect(puzzle.numOfWords).to.equal(1);
    });
    it('should have the amount of total letters', function() {
      expect(puzzle.totalLetters).to.equal(10);
    });
  });
  describe('splitCorrectAnswers method', function() {

    it('should split the correct answer into an array', function() {
      expect(puzzle.splitCorrectAnswer()).to.deep.equal(['S','C','R','U','N','C','H','I','E','S'])
    })
  })
});
