'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  let ok = false;
  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
    e.stopPropagation();
      moved = { size: parseInt(e.target.attributes[0].value),
               target: e.target,
               parent: e.target.parentNode
          };
      if (moved.target != moved.parent.lastElementChild) {
        alert('Oops! Please select last/outermost right tile from row.');
        ok = false;
      } else {
        ok = true;
        e.target.parentNode.removeChild(e.target);
        // debugger;
        // console.log(moved.size);
        // command below added so tile remains in place until next move
        // it is 'active', but does not disappear
        moved.parent.appendChild(moved.target);
      }
    });
  });

  document.querySelectorAll('[data-stack]').forEach((stack) => {
    stack.addEventListener('click', (e) => {
      if (!ok === true) {
        alert('Please select a new tile. Select last/outermost right tile from row.');
      } else {
        e.stopPropagation();
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
          e.target.appendChild(moved.target);
          console.log('empty row');
          //debugger;

      }
}

  if (e.target.children.length === 4 && e.target.attributes[0].value === "3") {
    //console.log(e.target.attributes[0].value);
    console.log('You win! Refresh to play again!');
    document.getElementById('announce-game-won').innerHTML = ('You Win!<br>Refresh page to play again!');
}
});
});
});
