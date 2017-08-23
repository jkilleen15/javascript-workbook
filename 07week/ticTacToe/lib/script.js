'use strict';

let arrayO = [];
let arrayX = [];

let winners = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//let winner = false;
//let refresh = false;

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xTurn: 'X' };
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(e) {
    var cellIndex = e.target.dataset.cell;
    //console.log('made it to makeMove');
    if (!e.target.innerHTML) {
      e.target.innerHTML = this.state.xTurn ? 'X' : 'O';
      if (e.target.innerHTML === 'X') {
        arrayX.push(parseInt(cellIndex));
      } else if (e.target.innerHTML === 'O') {
        arrayO.push(parseInt(cellIndex));
      }
      checkForWin();
      this.setState({
        xTurn: !this.state.xTurn
      });
    } else {
      alert('Oops! That space has already been selected!');
    }
  }

  refresh() {
    // refresh = true;
    document.querySelectorAll('[data-cell]').forEach(div => {
      div.innerHTML = '';
    });
    // console.log('arrayO: ' + arrayO);
    // console.log('arrayX: ' + arrayX);
    arrayO = [];
    arrayX = [];
    // winner = false;
    // console.log('arrayO: ' + arrayO);
    // console.log('arrayX: ' + arrayX);
  }

  render() {
    // if (!winner === true) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { 'data-cell': '0', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '1', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '2', onClick: this.makeMove })
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { 'data-cell': '3', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '4', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '5', onClick: this.makeMove })
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('div', { 'data-cell': '6', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '7', onClick: this.makeMove }),
        React.createElement('div', { 'data-cell': '8', onClick: this.makeMove })
      ),
      React.createElement(
        'div',
        null,
        ' ',
        React.createElement('br', null),
        ' ',
        React.createElement('br', null),
        ' ',
        React.createElement('br', null),
        ' ',
        React.createElement('br', null),
        ' ',
        React.createElement('br', null),
        ' ',
        React.createElement('br', null),
        React.createElement('br', null)
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { id: 'clear', onClick: this.refresh },
          'Start New Game!'
        )
      )
    );
  }
}

let checkForWin = function () {
  // console.log('made it to check for win');
  for (let i = 0; i < winners.length; i++) {
    // sort arrays to match 'winners' format
    arrayO = arrayO.sort();
    arrayX = arrayX.sort();

    // compare x and y array strings with winner array strings
    if (arrayO.join().includes(winners[i].join())) {
      alert('Player O Wins! \nClick \'Start New Game\' to play again!\n' + 'Loser begins next game!');
      // winner = true;
      // return true;
    } else if (arrayX.join().includes(winners[i].join())) {
      alert('Player X Wins! \nClick \'Start New Game\' to play again!\n' + 'Loser begins next game!');
      // winner = true;
      // return true;
    }
  }
};

ReactDOM.render(React.createElement(TicTacToe, null), document.getElementById('container'));