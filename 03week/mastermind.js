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
var solStr = '';
var win = false;

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
    }
    hint = (bothHit + '-' + charHit);
    if (bothHit === 4) {
      win = true;
    }
  }
  return hint;
}

function mastermind (guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
    // 1) should register a guess and generate hints
    // 2) should be able to detect a win
  // console.log('solution: ' + solution); // uncomment line start for quick test
  solStr = solution;
  sol = solution.split('');
  guessStr = guess;
  guess = guess.split('');
  // console.log(sol);
  // console.log(guess);
  generateHint(guess);
  board.push(guessStr + ' ' + hint);
  if (solStr === guessStr) {
    console.log('\nYou guessed it! The solution is: ' + guessStr + '!\n');
    console.log('Want to play again?\n');
    return 'You guessed it!';
  }
}

// Notes from Jessica:
// I updated my getPrompt() to:
// 1. Print board guesses and continue only if there is no win
// 2. If win, clear variables and prompt new game

function getPrompt () {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    if (!win === true) {
      printBoard();
      getPrompt();
    } else {
      board = [];
      solution = '';
      letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      hint = '';
      sol = '';
      guessStr = '';
      solStr = '';
      win = false;
      generateSolution();
      getPrompt();
    }
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
