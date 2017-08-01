'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort (arr) {
  // My code here
  var sorted;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        // creates temporary variable to hold first item in pair being compared
        // so we will not lose item value if/when second item is bumped into
        // previous position
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

function mergeSort (arr) {
  // My code here
  if (arr.length < 2) return arr;
  // identifies center position
  var center = Math.floor(arr.length / 2);
  // assigns variable to all items left of center
  var left = arr.slice(0, center);
  // assigns variable to all items right of center
  var right = arr.slice(center, arr.length);

  // initiates merge function below
  return merge(mergeSort(left), mergeSort(right));
}
// added to support mergeSort (arr)
function merge (left, right) {
  var result = [];
  while (left.length && right.length) {
    // if the item in first postion on the left
    // is less than or equal to item in first position on the right
    if (left[0] <= right[0]) {
    // put first item in the left (lesser item) into the results array
      result.push(left.shift());
    // otherwise put the first item on the right (lesser item) results []
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result; // sends it back up to mergeSort
}

var binarySearch = function (arr, item) {
  // it('should return the index of given item if sorted array contains it'
  // , () => {
  // const idx = binarySearch([1, 2, 3, 4], 3);
  // assert.equal(idx, 2);
  // My code here
  var minBin = 0;
  var maxBin = arr.length - 1;
  var guess;
  while (maxBin >= minBin) {
    // assigns average of max and min to guess variable
    guess = Math.floor((minBin + maxBin) / 2);
    // if average/guess is equal to item param, then item is found!
    if (arr[guess] === item) {
      return guess;
    } else if (arr[guess] < item) {
      // if guess is lower than item param, then new min threshold is 1 above guess
      minBin = guess + 1;
    } else {
      // if guess is higher than item param, then new max threshold is 1 below guess
      maxBin = guess - 1;
    }
  }
  // this means max < min and item not found in set
  return false;
};

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
