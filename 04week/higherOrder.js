'use strict';

const assert = require('assert');

// FOREACH
// My code here
// Create a forEach() function that takes an array of items and
// a function that runs the function arr.length number of times.
let forEach = (arr, callback) => {
  // for each item in the array
  for (let i = 0; i < arr.length; i++) {
  // call the callback function
    callback(arr);
  }
};

// MAP
// My Code Here
let map = (arr, callback) => {
  // create empty array in which you will store mutated items
  let newArr = [];
  // for each item in the array
  for (let i = 0; i < arr.length; i++) {
  // add result of callback function to newArray
    newArr.push(callback(arr[i]));
  }
  // return new (result) array
  return newArr;
};

// FILTER
// My code here
let filter = (arr, callback) => {
  // create new array in which you will store items which
  // match filter/pass condition
  let filteredArr = [];
  // for each item in the array
  for (let i = 0; i < arr.length; i++) {
  // if the callback function returns true
    if (callback(arr[i])) {
  // add (passing) results to array
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// SOME
// My code here
// Create a some() function that takes an array of items and a function that
// returns true or false if any of the items return true in the function.

function some (arr, callback) {
  // for each item in the array
  for (let i = 0; i < arr.length; i++) {
    // console.log(callback(arr[i]));
    // if callback function returns true, return true to end loop
    if (callback(arr[i])) {
      return true;
    }
  }
  // else loop completes with no true result, then return false
  return false;
}

// EVERY
// My code here

function every (arr, callback) {
  // for each item in array
  for (let i = 0; i < arr.length; i++) {
    // console.log(callback(arr[i]));
    // if callback function returns false, return false to end loop
    if (!callback(arr[i])) {
      return false;
    }
  }
  // else loop completes with no false result, then return true
  return true;
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
