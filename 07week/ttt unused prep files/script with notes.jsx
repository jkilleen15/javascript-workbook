'use strict';

let arrayO = [];
let arrayX = [];
//let toggle = true;

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

let winner = false;
let refresh = false;

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xTurn : 'X'};
    //this.state = {playerTurn: 'X'};
    this.makeMove = this.makeMove.bind(this);
    //this.refresh = this.refresh.bind(this);
}

makeMove(e) {
    var cellIndex = e.target.dataset.cell;
    //console.log(e.target.dataset.cell);
    //console.log('made it to makeMove');
    //e.target.innerHTML = (xTurn ? 'X' : 'O');
    e.target.innerHTML = (this.state.xTurn ? 'X' : 'O');
    //e.target.innerHTML = (this.state.playerTurn);
    //if(e.target.innerHTML =) {
      if (e.target.innerHTML === 'X') {
        arrayX.push(parseInt(cellIndex));
      } else if (e.target.innerHTML === 'O') {
        arrayO.push(parseInt(cellIndex));
      }
      //} else {
      //  alert('Oop! That space has already been selected!');
    //  }
    checkForWin();
    this.setState({
    //this.setState((oldState) => {
    //return oldState.playerTurn = (oldState.playerTurn === 'X') ? "O" : "X";
    xTurn : !this.state.xTurn
    });

  //checkForWin();
  //if (refesh === true) {
  //  e.target.innerHTML = '';
  // }
}

refresh() {
      refresh = true;
      document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
      });
      console.log ('arrayO: ' + arrayO);
      console.log ('arrayX: ' + arrayX);
      arrayO = [];
      arrayX = [];
      winner = false;
      console.log ('arrayO: ' + arrayO);
      console.log ('arrayX: ' + arrayX);
      // console.log ('playerTurn' + playerTurn);
      //console.log('this state:');
      //console.log (this.state);
      // this.state = this.oldState.playerTurn;    */
}

  render() {
    //if (!winner === true) {
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
        <div className="row" onClick = {this.makeMove}>
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
//}
}

let checkForWin = function () {
  //var cellIndex = e.target.dataset.cell;
  console.log('made it to check for win');
  for (let i = 0; i < winners.length; i++) {
  // console.log('and this ' + winners[i]);
  // console.log(arrayO);
  // console.log(arrayX);

  // sort arrays to match 'winners' format
    arrayO = arrayO.sort();
    arrayX = arrayX.sort();

    // compare x and y array strings with winner array strings

    if (arrayO.join().includes(winners[i].join())) {
      alert('Player O Wins! \nClick \'Start New Game\' to play again!');
      winner = true;
    }

    else if (arrayX.join().includes(winners[i].join())) {
      alert('Player X Wins! \nClick \'Start New Game\' to play again!');
      winner = true;
    }
  }
};


ReactDOM.render(<TicTacToe />, document.getElementById('container'));
