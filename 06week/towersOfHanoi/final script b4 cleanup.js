'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  let ok = false;
  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
    e.stopPropagation();
      moved = { size: e.target.attributes[0].value,
               target: e.target,
               parent: e.target.parentNode,
               last: ''
          };
      if (moved.target != moved.parent.lastElementChild) {
        alert('Oops! Please select last/outermost right tile from row.');
        ok = false;
      } else {
        ok = true;
        e.target.parentNode.removeChild(e.target);
        // debugger;
        console.log(moved.size);
        // command below added so tile remains in place until next move
        // it is 'active', but does not disappear
        moved.parent.appendChild(moved.target);
        //e.stopPropagation();
        }
    });
  });

  document.querySelectorAll('[data-stack]').forEach((stack) => {
    stack.addEventListener('click', (e) => {
      if (!ok === true) {
        alert('Please select a new tile. Select last/outermost right tile from row.');
      } else {
    e.stopPropagation();
    // if(!e.target.children.length) {
  //  e.target.appendChild(moved.target);
    // } else {
      //if (!e.target.children.length) {
      //  e.target.appendChild(moved.target);
      //  debugger;
      //}
      if (e.target.children.length) {
          if(e.target.children.length === 1) {
        // console.log(e.target.children.length);
        // console.log(e.target.lastChild.attributes[0].value);
        // let tileInPlaceSize = e.target.lastChild.attributes[0].value;
            let tileInPlaceSize2 = e.target.children[0].attributes[0].value;
            console.log ('tile 1 size: ' + tileInPlaceSize2);
            if (moved.size > tileInPlaceSize2) {
              alert('Nope. this piece is too big!');
              moved.parent.appendChild(moved.target);
              //debugger;
              // return;
            } else {
           //if (moved.size > tileInPlaceSize2) {
        // moved.parent.appendChild(moved.target);
              e.target.appendChild(moved.target);
          // debugger;
          // moved.parent.appendChild(moved.target);
          // e.target.appendChild(moved.target);
            }
          }

        if (e.target.children.length > 1) {
          let tileInPlaceSize = e.target.lastElementChild.attributes[0].value;
          console.log('tile last size: ' + tileInPlaceSize);
          // let tileInPlaceSize2 = e.target.childNodes[0].attributes[0].value;
          console.log('moved size: ' + moved.size);
          console.log('tile in place size: ' + tileInPlaceSize);
        // console.log('tile in place size2: ' + tileInPlaceSize2);
      //  let tileInPlaceSize = e.target.lastChild.attributes[0].value;
          if (moved.size > tileInPlaceSize) {
            alert('Nope. this piece is too big!');
            moved.parent.appendChild(moved.target);
          // debugger;
          // return;
          } else {
          //if (moved.size > tileInPlaceSize) {
          // moved.parent.appendChild(moved.target);
            e.target.appendChild(moved.target);
          // debugger;
          // moved.parent.appendChild(moved.target);
          // e.target.appendChild(moved.target);
          }
        }
      } else {
      // moved.parent.appendChild(moved.target);
          e.target.appendChild(moved.target);
          console.log('empty row');
          //debugger;
        // moved.parent.appendChild(moved.target);
        // e.target.appendChild(moved.target);
      }
}


  //document.querySelectorAll('[data-stack]').forEach((stack) => {
  //stack.addEventListener('click', (e) => {
  // e.target.appendChild(moved.target);
  if (e.target.children.length === 4) {
    console.log('You win! Refresh to play again!');
    //winTarget.appendChild('You Win!');
    document.getElementById('announce-game-won').innerHTML = ('You Win!<br>Refresh page to play again!');
  }

});
});
});
