// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/WOD-logo.svg';
import './images/icon.png';

// console.log('This is the JavaScript entry file - your code begins here.');
// console.log('hello');


// logic below is for fetching the puzzles from the API. It will eventually be moved to the Round class probably
const playGameBtn = document.querySelector('#start-game');

playGameBtn.addEventListener('click', fetchPuzzles);

let puzzleBank;

function fetchPuzzles() {
  event.preventDefault();

  fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
    .then(response => response.json())
    .then(data => data.data.puzzles.one_word_answers.puzzle_bank.forEach(puzzle => console.log(puzzle)))

    // The .then() statement below does not work as written, but we need to do something like that I think. I think it doesn't work because of fetch's async rules. 
    // .then(data => data.data.puzzles.one_word_answers.puzzle_bank.forEach(puzzle => puzzleBank.unshift(puzzle)))
}
