'use strict';

let arrayO = [];
let arrayX = [];

var defaults = {
 backgroundcolor: '#000',
 color: '#fff',
 weekdays: ['sun','mon','tue','wed','thu','fri','sat']
};

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

console.log('this is it: ' + winners[1]);

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
        console.log(arrayO);
        console.log(arrayX);
        // run the checkWin function
        checkForWin();
      } else {
        alert('stop it!');
      }
    });
  });
/*
let checkForWin = function(){
    console.log('made it to check for win');
    winners.winners.forEach(function (e) {
    //console.log(winners.winners);
   if (winners.winners[0].every(arrayO) === true) {
      alert ('Player O Wins!');
    }
    if (winners.winners[0].every(arrayX) === true) {
      alert ('Player X Wins!');
    }
}
)};
*/
let checkForWin = function(){
    console.log('made it to check for win');
    for (let i = 0; i < winners.length; i++) {
    console.log('and this ' + winners[i]);
    console.log(arrayO);
    console.log(arrayX);
    //console.log(winners.winners[i]);
    arrayO = arrayO.sort();
    arrayX = arrayX.sort();

    if (arrayO.join().includes(winners[i].join())){
      alert ('Player O Wins!');
    }

    if (arrayX.join().includes(winners[i].join())){
      alert ('Player X Wins!');
    }

    /*
    if (winners[i].join() == arrayO.join()){
      alert ('Player O Wins!');
    }

    if (winners[i].join() == arrayX.join()){
      alert ('Player X Wins!');
    }
    */
/*
    if (winners.winners[i].includes() === true) {
      alert ('Player O Wins!');
    }
    if (winners.winners[i].includes(arrayX) === true) {
      alert ('Player X Wins!');
    }*/
}
};


    /*
    if (arrayO.includes(0, 1, 2 || 3,4,5 || 6,7,8 || 0,3,6 || 1,4,7 || 2,5,8 ||
    0,4,8 || 2,4,6)){
      alert('Player O Wins!');
    }
    */
    /*
    if (arrayX.includes((0 && 1 && 2) || (3 && 4 && 5) || (6 && 7 && 8) || (0 && 3 && 6) || (1 && 4 && 7) || (2 && 5 && 8) ||
    (0 && 4 && 8) || (2 && 4 && 6)) ){
      alert('Player X Wins!');
    }
    */
    /*
    if (arrayO.includes(("0" && "1" && "2") || ("3" && "4" && "5") || ("6" && "7" && "8") || ("0" && "3" && "6") ||
    ("1" && "4" && "7") || ("2" && "5" && "8") || ("0" && "4" && "8") || ("2" && "4" && "6")) ){
      alert('Player O Wins!');
    }
    if (arrayX.includes(("0" && "1" && "2") || ("3" && "4" && "5") || ("6" && "7" && "8") || ("0" && "3" && "6") ||
    ("1" && "4" && "7") || ("2" && "5" && "8") || ("0" && "4" && "8") || ("2" && "4" && "6")) ){
      alert('Player X Wins!');
    }
    if (arrayO.every)*/

  document.querySelector('button').addEventListener('click', (e) => {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
      arrayO = [];
      arrayX = [];
    });
  });
});

//try every or sum try creating an object of winning combinations

// if O array contains 012, 345, 678, 036, 147, 258, 048, 246
// if X array contains 012, 345, 678, 036, 147, 258, 048, 246
//https://stackoverflow.com/questions/44348092/retrieving-div-value-to-javascript
