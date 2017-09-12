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

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xTurn : 'X'};
    this.makeMove = this.makeMove.bind(this);
}

// when any square is clicked:
// checks if it is popuplated
// square populated with symbol of current player turn (xTurn)
// cell value of selected cell sent to corresponding player array
// check for win is called
// player turn is switched in anticipation of next square selection

  makeMove (e) {
    var cellIndex = e.target.dataset.cell;
    // console.log('made it to makeMove');
    // checks if square is already populated to complete any action
    if (!e.target.innerHTML) {
      e.target.innerHTML = (this.state.xTurn ? 'X' : 'O');
      if (e.target.innerHTML === 'X') {
        arrayX.push(parseInt(cellIndex));
      } else if (e.target.innerHTML === 'O') {
        arrayO.push(parseInt(cellIndex));
      }
      checkForWin();
      this.setState({
        xTurn: !this.state.xTurn
      });
      // playerturn will not change until valid square selected
      // message to user when square is already populated (invalid)
    } else {
      alert('Oops! That space has already been selected!');
    }
  }

  // refresh() is connected to 'start new game' button, rendered below
  // clickable option instead of hard refresh (player x always starts)
  // potential TO DO - change code to have winner start

  refresh () {
      // refresh = true;
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
    });
    // console.log('arrayO: ' + arrayO);
    // console.log('arrayX: ' + arrayX);
    arrayO = [];
    arrayX = [];
    // console.log('arrayO: ' + arrayO);
    // console.log('arrayX: ' + arrayX);
  }

  render () {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick = {this.makeMove}></div>
          <div data-cell="1" onClick = {this.makeMove}></div>
          <div data-cell="2" onClick = {this.makeMove}></div>
        </div>
        <div className="row">
          <div data-cell="3" onClick = {this.makeMove}></div>
          <div data-cell="4" onClick = {this.makeMove}></div>
          <div data-cell="5" onClick = {this.makeMove}></div>
        </div>
        <div className="row">
          <div data-cell="6" onClick = {this.makeMove}></div>
          <div data-cell="7" onClick = {this.makeMove}></div>
          <div data-cell="8" onClick = {this.makeMove}></div>
        </div>
        <div> <br /> <br /> <br /> <br /> <br /> <br /><br /></div>
        <div>
          <button id = "clear" onClick = {this.refresh}>Start New Game!</button>
        </div>
      </div>
    );
  }
}

// checks for win
// displays win message with prompt to begin new game

let checkForWin = function () {
  // console.log('made it to check for win');
  for (let i = 0; i < winners.length; i++) {
    // sort arrays to match 'winners' format
    arrayO = arrayO.sort();
    arrayX = arrayX.sort();

    // compare x and y array strings with winner array strings
    if (arrayO.join().includes(winners[i].join())) {
      alert('Player O Wins! \nClick \'Start New Game\' to play again!\n' +
      'Loser begins next game!');

    } else if (arrayX.join().includes(winners[i].join())) {
      alert('Player X Wins! \nClick \'Start New Game\' to play again!\n' +
      'Loser begins next game!');

    }
  }
};

// renders html components to page

ReactDOM.render(<TicTacToe />, document.getElementById('container'));
