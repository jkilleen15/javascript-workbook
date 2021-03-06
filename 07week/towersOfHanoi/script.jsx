'use strict';

let ok = false;
let moved = {};

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.selectBlock = this.selectBlock.bind(this);
    this.selectRow = this.selectRow.bind(this);
  }

  // selectBlock summary:
  // onclick each block--becomes 'moved' object':
  // ensures it is the top/right most block
  // becomes the target
  // it's parent becomes the parent
  // it's value becomes the size

  selectBlock (e) {
    // Your code here
    e.stopPropagation();
        // block clicked becomes the target
        // this block's value becomes the size
        // this block's parent becomes the parent
    moved = { size: parseInt(e.target.attributes[0].value),
      target: e.target,
      parent: e.target.parentNode
    };
    // ensures that target block clicked is the top/right most block
    if (moved.target !== moved.parent.lastElementChild) {
      alert('Oops! Please select last/outermost right tile from row.');
      ok = false;
    } else {
      ok = true;
      e.target.parentNode.removeChild(e.target);
      // debugger;
      console.log(moved.size);
      // Command below 'keeps' selected block in place until row selected
      // it is 'active', but does not disappear
      moved.parent.appendChild(moved.target);
    }
  }

    // selectRow Summary - onclick row outside block, becomes destination:
    // checks if row is populated
    // if populated, checks value of block in row (when 1)
    // if populated, checks value of last block in row (when > 1)
    // compares value of last in row to 'moved'
    // if all checks out, moves 'moved' to new row

  selectRow (e) {
    console.log('made it to select row');
    // reminds user they need to select a new tile because not ok (outermost)
    if (!ok === true) {
      alert('Please select a new tile. Select last/outermost right tile from row.');
    } else {
    e.stopPropagation();
        // checks value of block in selected row (when 1 block in row)
        // compares value of last in row to value of 'moved' (selected block)
        // if all checks out, moves 'moved' to outmost position of new row
      if (e.target.children.length) {
        if (e.target.children.length === 1) {
      // console.log(e.target.children.length);
      // console.log(e.target.lastChild.attributes[0].value);
          let tileInPlaceSize2 = parseInt(e.target.children[0].attributes[0].value);
          // console.log('moved size: ' + moved.size);
          // console.log('Only 1 tile size: ' + tileInPlaceSize2);
          if (moved.size > tileInPlaceSize2) {
            alert('Nope. This tile is too big for destination stack!');
            moved.parent.appendChild(moved.target);
            // debugger;
          } else {
            e.target.appendChild(moved.target);
            // debugger;
          }
        }
        // checks value of last block in selected row (when > 1 block in row)
        // compares value of last in row to value of 'moved' (selected block)
        // if all checks out, moves 'moved' to outmost position of new row
        if (e.target.children.length > 1) {
          let tileInPlaceSize = parseInt(e.target.lastElementChild.attributes[0].value);
          // console.log('moved size: ' + moved.size);
          // console.log('tile in place size: ' + tileInPlaceSize);
          if (moved.size > tileInPlaceSize) {
            alert('Nope. This tile is too big for destination stack!');
            moved.parent.appendChild(moved.target);
            // debugger;
          } else {
            e.target.appendChild(moved.target);
         // debugger;
          }
        }
      } else {
      // else no blocks currently in row
      // no value comparison needed
      // 'moved' is added to selected row
        e.target.appendChild(moved.target);
        console.log('empty row');
      }
      // check for win
      // win = stack length is 4, and stack value is '3'
      if (e.target.children.length === 4 && e.target.attributes[0].value === '3') {
        // console.log(e.target.attributes[0].value);
        console.log('You win! Refresh to play again!');
        document.getElementById('announce-game-won').innerHTML = ('You Win!<br>Refresh page to play again!');
      }
    }
  }
  
  render() {
    return (
      <div>
        <h1> Instructions: </h1>
        <ol>
          <li>Your goal is to move the full stack of tiles to <b>the third row down</b> with
          tiles appearing in original order (descending by size to right).</li>
          <li>You will move one tile at a time. You can only move the top/outermost
          right tile in any row. </li>
          <li>Tiles can be be moved up or down within rows, and will be added to the top
            (outermost right position) of stack.</li>
          <li> Tiles can be added to empty rows or on top of larger tiles only.</li>
          <li><b>To begin,</b> click on the tile you would like to move.</li>
          <li>Next, click on the destination row where you would like to move tile.</li>
          <li><b>Reminders</b>:
            <ul><li><b>You can only select and move a tile from top + (outermost right position) of stack in any row.</b><br />
              <i>If you accidently select a different tile from stack, you will be prompted to select a new tile.</i></li>
              <li><b>If row is not empty, tiles can only be added on top (to right) of larger tiles.</b><br />
              <i>If you are trying to move a tile that is larger than the last tile in the destination row, your tile will not be moved from original row.</i></li>
            </ul>
          </li>
        </ol>
        <div id='announce-game-won'></div>
        <div data-stack='1' onClick={this.selectRow}>
          <div data-block='100' onClick={this.selectBlock}></div>
          <div data-block='75' onClick={this.selectBlock}></div>
          <div data-block='50' onClick={this.selectBlock}></div>
          <div data-block='25' onClick={this.selectBlock}></div>
        </div>
        <div data-stack='2' onClick={this.selectRow}>
        </div>
        <div data-stack='3' onClick={this.selectRow}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
