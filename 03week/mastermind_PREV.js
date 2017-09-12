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
//let guess = '';
let sol = '';
let win = false;
let guessOrg = '';
let hint = '';

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution = solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  //3) should generate hints
  //4) should generate hints if solution has duplicates
  // 0 - 0 left is correct position, correct char
  //solution goes to print board
  //i.e. asfr (solution)l 1-0 (score)
  //var hint;
  var bothHit = 0;
  var charHit = 0;
  console.log(sol[0]);
  console.log(guess[0]);
  for (var i = 0; i < 4; ++i) {
      //console.log(guess.split('').contains(i));
      if (sol[i] === guess[i]) {
          ++bothHit;
          //console.log(bothHit);
      //else if(sol[i] !== guess[i] && guess.split('').contains(i))
      //if(right_answer[i] !== guess[i] && guess.split("").contains(right_answer[i])
    } else if (sol[i] !== guess[i] && guess.includes(sol[i])) {
          ++charHit;
      //board = ('[' + guess + ' ' + bothHit + ' : ' + charHit + ']');
    }
    hint = (bothHit + '-' + charHit);
}
        console.log(hint)
if (bothHit === 4) {
  return true;
  console.log ('You guessed it!');
}
}

function mastermind (guess) {
//solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  // 1) should register a guess and generate hints
  // 2) should be able to detect a win
 //generateSolution();
  //split
 board++;
  console.log(solution);
  //guess = 'abcd';
  if (solution === guess) {
      console.log('You guessed it!');
  }
  sol = solution.split('');
  //guessOrg = guess;
  guess = guess.split('');

  console.log(sol);
  console.log(guess);
  if (generateHint(guess) === true){
  //if (solution === guess) {
      console.log('You guessed it!');
  }
}


function getPrompt() {
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
