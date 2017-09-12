'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors (hand1, hand2) {
  console.log('Hand2 played ' + hand2);
  // Write code here
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();
  if (hand1 === hand2) {
    return 'It\'s a tie!';
  } else if (hand1 === 'rock') {
    if (hand2 === 'paper') {
      return 'Hand two wins!';
    } else {
      return 'Hand one wins!';
    }
  } else if (hand1 === 'paper') {
    if (hand2 === 'scissors') {
      return 'Hand two wins!';
    } else {
      return 'Hand one wins!';
    }
  } else {
    if (hand2 === 'rock') {
      return 'Hand two wins!';
    } else {
      return 'Hand one wins!';
    }
  }
}


function getPrompt () {
  rl.question('hand1: ', (answer1) => {
    //rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, getRandom()));
      getPrompt();
    //});
  });
}

function getRandom () {
  var wordList = ['rock', 'paper', 'scissors'];
  var number = Math.floor(Math.random() * 3);
  return wordList[number];
}
/*
*/
/* function getPrompt2 () {
  rl.question('Select rock, paper or scissors: ', (answer1) => {
    answer2 = Math.floor(Math.random() * 3) + 1 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
} */

// function getPrompt () {
//   var answer1 = prompt('Select rock, paper or scissors: ');
//   var answer2 = Math.floor(Math.random() * 3) + 1;
// //console.log(answer2);
// if (answer2 === 1) {
// 	answer2 = "rock";
// } else if(answer2 === 2) {
// 	answer2 = "paper";
// } else {
// 	answer2 = "scissors";
// } // console.log("Harold the computer selected: " + answer2);
// console.log(rockPaperScissors(answer1, answer2));
// getPrompt();
// }

//answer1 = Math.floor(Math.random() * 3) + 1;
//answer2 = Math.floor(Math.random() * 3) + 1;

// Tests

if (typeof describe === 'function') {
  describe ('#rockPaperScissors()', () => {
    it ('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
}
else {

  getPrompt();

}
