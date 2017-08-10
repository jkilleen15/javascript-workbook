'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Checker (color) {
  // Your code here
  if (color === 'red') {
    this.symbol = String.fromCharCode(0x125CB); // fix this color
  } else {
    this.symbol = String.fromCharCode(0x125CF);
  }
}

function Board () {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function () {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function () {
    // add our column numbers
    let string = '  0 1 2 3 4 5 6 7\n';
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += '\n';
    }
    console.log(string);
  };

  // Your code here

// create a master list of checkers
  this.checkers = [];

// create checker instances
// add instances to checkers[] using loop, then add to grid
  this.createCheckers = function () {
    const redCheckers = [[0, 1], [0, 3], [0, 5], [0, 7],
[1, 0], [1, 2], [1, 4], [1, 6],
[2, 1], [2, 3], [2, 5], [2, 7]];

    const blackCheckers = [[5, 0], [5, 2], [5, 4], [5, 6],
[6, 1], [6, 3], [6, 5], [6, 7],
[7, 0], [7, 2], [7, 4], [7, 6]];

    for (let i = 0; i < redCheckers.length; i++) {
  // add checkers to array
      this.checkers.push(this.grid[redCheckers[i][0]][redCheckers[i][1]] = new Checker('red'));
      this.checkers.push(this.grid[blackCheckers[i][0]][blackCheckers[i][1]] = new Checker('black'));
  // this.checkers.push(redCheckers[i]);
  // this.checkers.push(blackCheckers[i]);
    }
  };
// Select a specific checker
  this.selectChecker = function (row, column) {
    return this.grid[row][column];
  };
// Killing a checker with jump
  this.killChecker = function (position) {
    const targetChecker = this.selectChecker(position[0], position[1]);
    const index = this.checkers.indexOf(targetChecker);
    this.checkers.splice(index, 1);
    this.grid[position[0]][position[1]] = null;
  };
}

function Game () {
  // printing board / beginning game
  this.board = new Board();
  this.start = function () {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };

  // move the checker

  this.moveChecker = function (start, end) {
    const startX = parseInt(start[0]);
    const startY = parseInt(start[1]);
    const endX = parseInt(end[0]);
    const endY = parseInt(end[1]);

    const checker = this.board.selectChecker(start[0], start[1]);

    this.board.grid[ endX ][ endY ] = checker;
    this.board.grid[startX][startY] = null;

    // check for inhabited blocks/ kill
    // review more in depth
    if (Math.sqrt((endX - startX) ^ 2 + (endY - startY) ^ 2) >= 2) {
      this.board.killChecker([(endX + startX) / 2, (endY + startY) / 2]);
    }
  };
}

function getPrompt () {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
