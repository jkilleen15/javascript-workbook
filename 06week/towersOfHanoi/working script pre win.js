'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
    //  e.stopPropagation();
      moved = { size: e.target.attributes[0].value,
               target: e.target,
               parent: e.target.parentNode,
               last: ''
          };
      e.target.parentNode.removeChild(e.target);
      //debugger;
      console.log(moved.size);
      // this added so tile remains in place until next move
      // it is 'active', but does not disappear
      //moved.parent.appendChild(moved.target);
      e.stopPropagation();
    });
  });

  document.querySelectorAll('[data-stack]').forEach((stack) => {
    stack.addEventListener('click', (e) => {
    e.stopPropagation();
    // if(!e.target.children.length) {
  //  e.target.appendChild(moved.target);
    // } else {
      //if (!e.target.children.length) {
      //  e.target.appendChild(moved.target);
      //  debugger;
      //}
      if (e.target.children.length > 0) {
        console.log(e.target.children.length);
        console.log(e.target.lastChild.attributes[0].value);
        let tileInPlaceSize = e.target.lastChild.attributes[0].value;
        //let tileInPlaceSize2 = e.target.childNodes[0].attributes[0].value;
        console.log('moved size: ' + moved.size);
        console.log('tile in place size: ' + tileInPlaceSize);
      //  let tileInPlaceSize = e.target.lastChild.attributes[0].value;
        if (moved.size > tileInPlaceSize) {
          alert('Nope. this piece is too big!');
          moved.parent.appendChild(moved.target);
          //debugger;
          // return;
        } else {
        // moved.parent.appendChild(moved.target);
          e.target.appendChild(moved.target);
          //debugger;
          // moved.parent.appendChild(moved.target);
          // e.target.appendChild(moved.target);
        }
      } else {
      // moved.parent.appendChild(moved.target);
        e.target.appendChild(moved.target);
        console.log('empty row');
        //debugger;
        // moved.parent.appendChild(moved.target);
        // e.target.appendChild(moved.target);
      }
    });
  });


  //document.querySelectorAll('[data-stack]').forEach((stack) => {
  //stack.addEventListener('click', (e) => {
  // e.target.appendChild(moved.target);

});
//});
//});

/*
console.log(moved.size);
console.log(e.target.lastChild.attributes[0].value);
let tileInPlaceSize = e.target.lastChild.attributes[0].value;
if (moved.size > tileInPlaceSize) {
  alert ('Nope. this piece is too big!');
  moved.parent.appendChild(moved.target);
  //return;
} else {
//moved.parent.appendChild(moved.target);
  e.target.appendChild(moved.target);
}
  e.stopPropagation();
});
});

document.querySelectorAll('.ball').foreach((ball) => {
  ball.addEventListener('click', (e) => {
    moved = {target: e.target, parent: e.target.parentNode};
    e.target.parentNode.removeChild(e.target);
  });
});
  document.querySelectorAll('.basket').addEventListener('click', (e) => {
    if(!e.target.children.length) {
    e.target.appendChild(moved.target);
    } else {
      moved.parent.appendChild(moved.target);
    }
  });

   document.querySelectorAll('.container').addEventListener('click', (e) => {
    e.target.appendChild(moved.target);
});
}); */
