'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let start = '';
let end = '';

function printStacks () {
  console.log('a: ' + stacks.a);
  console.log('b: ' + stacks.b);
  console.log('c: ' + stacks.c);
}

function movePiece (end, start) {
  // Your code here
  // console.log('we made it to move piece!');
  stacks[end].push(stacks[start].pop());
  checkForWin();
// }
}

function isLegal (start, end) {
  // Your code here
  if (start === '' || end === '') {
    console.log('Please enter start and end stacks - a, b or c');
    return false;
    // if (end.length > 0) {
      // compare disc values
  } else if (stacks[end][(stacks[end].length - 1)] < stacks[start][(stacks[start].length - 1)]) {
      // console.log(end[end.length-1]);
      // console.log(start[start.length-1]);
    console.log('Sorry, this move is illegal. Please try again!');
    return false;
  } else return true;
}

function checkForWin () {
  // Your code here
  //console.log('we made it to checking win');
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('You\'ve done it! Congrats on the win!');
    return true;
  } else return false;
}

function towersOfHanoi (startStack, endStack) {
  // Your code here
 // declare start end variables
 // check legal
 // var startStack = startStack;
 // var endStack = endStack;
 start = startStack;
 end = endStack;
 //console.log('start: ' + start);
 //console.log('end: ' + end);
 //console.log(startStack);
 //console.log(endStack);
 //console.log((end.length)-1);
 //console.log((start.length)-1);
 //console.log(stacks[end].length);
 //console.log(stacks[start].length);
 //console.log(end.length);
 //console.log(start.length);
 if (isLegal(start, end) === true) {
   movePiece(end, start);
 } else return false;
}

function getPrompt () {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
