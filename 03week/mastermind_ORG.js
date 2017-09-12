'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let hint = '';
let sol = '';
var guessStr = '';

function printBoard() {
  console.log('Your guesses: ');
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint (guess) {
  var bothHit = 0;
  var charHit = 0;
  // console.log('sol first char ' + sol[0]);
  // console.log('guess first char ' + guess[0]);
  for (var i = 0; i < 4; ++i) {
    if (sol[i] === guess[i]) {
      ++bothHit;
    } else if (sol[i] !== guess[i] && guess.includes(sol[i])) {
      ++charHit;
      // board = ('[' + guess + ' ' + bothHit + ' : ' + charHit + ']');
    }
    hint = (bothHit + '-' + charHit);
  }
  // console.log(guessStr + ' ' + hint);
  // console.log(board.length);
  return hint;
}

function mastermind (guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
    // your code here
    // 1) should register a guess and generate hints
    // 2) should be able to detect a win
  // console.log('Your guesses: ');
  // console.log(guessStr + ' ' + hint);
  if (solution === guess) {
    console.log('You guessed it! ' + guess + ' is the answer!');
    return 'You guessed it!';
    return;
  }
    //console.log('Your guesses: ');
    //console.log(guessStr + ' ' + hint);
  //}
  // board[0] = guess;
  //board.push(guessStr + ' ' + hint);
  // console.log(board + ' ' + hint);
    // guess = 'abcd';
  //console.log(guessStr + ' ' + hint);
  //console.log(board.length);
  sol = solution.split('');
  guessStr = guess;
  guess = guess.split('');
  // console.log(sol);
  // console.log(guess);
  generateHint(guess);
  board.push(guessStr + ' ' + hint);
  // console.log(board + ' ' + hint);
// }
}
function getPrompt () {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
