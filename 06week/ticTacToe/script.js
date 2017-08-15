'use strict';

let arrayO = [];
let arrayX = [];

let winners = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

//console.log('this is it: ' + winners[1]);

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let toggle = true;

  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      //var clickedEl = e.target;
      var cellIndex = e.target.dataset.cell;
      console.log(cellIndex);
      if (!e.target.innerHTML) {
        e.target.innerHTML = toggle ? 'X' : 'O';
        // toggle = !toggle;
        // add the cell value to corresponding player array
        if (e.target.innerHTML === 'X') {
          arrayX.push(parseInt(e.target.dataset.cell));
        }
        if (e.target.innerHTML === 'O') {
          arrayO.push(parseInt(e.target.dataset.cell));
        }
        toggle = !toggle;
        // console.log(arrayO);
        // console.log(arrayX);
        // run the checkWin function
        checkForWin();
      } else {
        alert('Oop! That space has already been selected!');
      }
    });
  });

  let checkForWin = function () {
    // console.log('made it to check for win');
    for (let i = 0; i < winners.length; i++) {
    // console.log('and this ' + winners[i]);
    // console.log(arrayO);
    // console.log(arrayX);

    // sort arrays to match 'winners' format
      arrayO = arrayO.sort();
      arrayX = arrayX.sort();

      // compare x and y array strings with winner array strings

      if (arrayO.join().includes(winners[i].join())) {
        alert('Player O Wins!');
      }

      if (arrayX.join().includes(winners[i].join())) {
      alert('Player X Wins!');
      }
    }
  };

  // clears board and x and y arrays to play new game

  document.querySelector('button').addEventListener('click', (e) => {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
      arrayO = [];
      arrayX = [];
    });
  });
});
