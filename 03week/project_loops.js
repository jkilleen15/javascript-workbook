// for loop
// Use a for loop to console.log each item in the array carsInReverse.

// ARRAY WORK PULLED FROM PREVIOUS PROJECT
var cars = ['Ford', 'Volkswagen', 'Toyota', 'Dodge'];
// console.log(cars.length);

var moreCars = ['Lexus', 'Subaru', 'Kia', 'Honda'];
var totalCars = cars.concat(moreCars);
// console.log(totalCars.length);

var carsInReverse = totalCars.reverse();
// console.log('Cars in Reverse: ' + carsInReverse);

// NEW CODE

function loops1 () {
  console.log('#1 Cars in reverse: ');
  for (var i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
  }
}
loops1();

// for...in loop
// Create an object (an array with keys and values) called persons with the
// following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

var persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
};

// Use a for...in loop to console.log each key.

function loops2 () {
  console.log('#3 All the keys in "person": ');
  for (var key in persons) {
    console.log(key);
  }
}

loops2();

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

function loops3 () {
  for (var key in persons) {
    if (key === 'birthDate') {
      console.log('#4 Birth Date: ' + persons[key]);
    }
  }
}

loops3();

// while loop
// Use a WHILE loop to console.log the numbers 1 to 1000.
// #5
function loops4 () {
  console.log('#5 Logging 1 to 1000 with a while loop: ');
  var i = 1;
  while (i < 1001) {
    console.log(i);
    i++;
  }
}

loops4();

// Use a for loop to console.log the numbers 1 to 1000.
// these instructions appeared under 'while loop section'
// while loop added in previous example

// #5b

function loops5 () {
  console.log('#5b Logging 1 to 1000 with a for loop: ');
  for (var i = 0; i < 1001; i++) {
    console.log(i);
  }
}
loops5();

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
// #6

function loops6 () {
  console.log('#6 Logging 1 to 1000 with a do...while loop: ');
  var i = 1;
  do {
    console.log(i);
    i++;
  } while (i < 1001);
}

loops6();

/* Additional Questions:
//When is a for loop better than a while loop?

function answer1 () {
  console.log('Answer 1');
}

answer1();

/*
//How is the readability of the code affected?
function answer2 () {
  console.log('Answer 2');
}

answer2();

//What is the difference between a for loop and a for...in loop?

function answer3 () {
  console.log('Use a for loop to move thru a defined set of data' +
  + ' (i.e. items in an array)');
}

answer3();

//What is the difference between a while loop and a do...while loop?

function answer4 () {
console.log('A "do...while" function will always run once,' +
  ' while a "while loop" will only run if condition is true');
}

answer4();
*/
