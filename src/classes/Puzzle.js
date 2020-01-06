// import { addPuzzleToBoard, displayFirstWord } from '../index.js'

class Puzzle {
  constructor(puzzle) {
    this.category = puzzle.category;
    this.numOfWords = puzzle.number_of_words;
    this.totalLetters = puzzle.total_number_of_letters;
    this.description = puzzle.description;
    this.correctAnswer = puzzle.correct_answer;
    this.splitAnswer = [];
    this.firstWord = puzzle.first_word;
  }
  splitCorrectAnswer() {
    let upperCaseAnswer = this.correctAnswer.toUpperCase();
    let splitAtSpace = upperCaseAnswer.split(' ');
    splitAtSpace.forEach(word => {
      this.splitAnswer.push(word.split(''));
    });
    return this.splitAnswer;
  }

  displayWords(words) {
    console.log(words.numOfWords);
    if (words.numOfWords === 1) {
      this.displayOneWord(words)
    } else if (words.numOfWords === 2) {
      this.displayTwoWord(words)
    } else if (words.numOfWords === 3) {
      this.displayThreeWord(words)
    } else if (words.numOfWords === 4) {
      this.displayFourWord(words)
    }
  }

  displayOneWord(words) {
    let letterSquare;
    let firstWord = this.splitAnswer[0]
    for(var i = 201; i < (firstWord.length + 201); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = firstWord[i - 201];
        letterSquare.classList.add('active-square');
    }
  }

  displayTwoWord(words) {
    let letterSquare;
    let firstWord = this.splitAnswer[0];
    let secondWord = this.splitAnswer[1];
    for(var i = 201; i < (firstWord.length + 201); i++) {
        letterSquare = document.getElementById(`${i}`).firstChild;
        letterSquare.innerText = firstWord[i - 201];
        letterSquare.classList.add('active-square');
    }
    for(var i = 301; i < (secondWord.length + 301); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = secondWord[i - 301];
        letterSquare.classList.add('active-square');
    }
  }

  displayThreeWord(words) {
    let letterSquare;
    let firstWord = this.splitAnswer[0];
    let secondWord = this.splitAnswer[1];
    let thirdWord = this.splitAnswer[2];
    for(var i = 101; i < (firstWord.length + 101); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = firstWord[i - 101];
        letterSquare.classList.add('active-square');
    }
    for(var i = 201; i < (secondWord.length + 201); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = secondWord[i - 201];
        letterSquare.classList.add('active-square');
    }
    for(var i = 301; i < (thirdWord.length + 301); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = thirdWord[i - 301];
        letterSquare.classList.add('active-square');
    }
  }

  displayFourWord(words) {
    let letterSquare;
    let firstWord = this.splitAnswer[0];
    let secondWord = this.splitAnswer[1];
    let thirdWord = this.splitAnswer[2];
    let fourthWord = this.splitAnswer[3];
    for(var i = 101; i < (firstWord.length + 101); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = firstWord[i - 101];
        letterSquare.classList.add('active-square');
    }
    for(var i = 201; i < (secondWord.length + 201); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = secondWord[i - 201];
        letterSquare.classList.add('active-square');
    }
    for(var i = 301; i < (thirdWord.length + 301); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = thirdWord[i - 301];
        letterSquare.classList.add('active-square');
    }
    for(var i = 401; i < (fourthWord.length + 401); i++) {
        letterSquare = document.getElementById(`${i}`);
        letterSquare.innerText = fourthWord[i - 401];
        letterSquare.classList.add('active-square');
    }
  }








  uncoverLetters() {
    // player.chooseAction
    // uncover letters that have been guessed from the puzzle board
    // run this.checkIfGuessed() to see if this.correctLettersRemaining.length === 0, if so, run round.endRound();
  }
  evaluateLetterGuess(letter) {
    if (this.splitAnswer.includes(letter.toUpperCase())) {
      // this.uncoverLetters();
      return true;
    } else {
      // endTurn()
      return false;
    }
  }
  evaluateSolution(guess) {
    if (guess.toLowerCase() === this.correctAnswer.toLowerCase()) {
      return true;
    } else {
      // endTurn()
      return false;
    }
  }
}

export default Puzzle;
