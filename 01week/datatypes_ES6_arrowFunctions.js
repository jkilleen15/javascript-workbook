'use strict';
// Write a JavaScript program to display the current day and time.

const getDate = () => new Date();

getDate();

// Write a JavaScript program to convert a number to a string.

const convertToString = (num) => num.toString();

convertToString(78787878);

// Write a JavaScript program to convert a string to the number.

const convertToNumber = (string) => Number(string);

convertToNumber('787878');

/*
Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String */

const whichType = (thing) => 'Datatype = ' + typeof thing;

whichType(true);

// Write a JavaScript program that adds 2 numbers together.

const addsTwo = (a, b) => a + b;

addsTwo(7, 5);

// Write a JavaScript program that runs only when 2 things are true.

const twoAreTrue = (a, b) => {
  if (a === true && b === true) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } else return 'nope';
};

twoAreTrue(false, true);

// OR

const twoAreTrueShort = (a, b) => {
  if (a && b) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } else return 'nope';
};

twoAreTrueShort(false, true);

// Write a JavaScript program that runs when 1 of 2 things are true

const oneOfTwoTrue = (a, b) => {
  if (a === true || b === true) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } else return 'neither';
};

oneOfTwoTrue(true, false);

// OR

const oneOfTwoTrueShort = (a, b) => {
  if (a || b) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } else return 'neither';
};

oneOfTwoTrueShort(false, true);

// Write a JavaScript program that runs when both things are not true.

const neitherTrue = (a, b) => {
  if (!a === true && !b === true) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } else return 'nope';
};

neitherTrue(false, false);

// OR

const neitherTrueShort = (a, b) => {
  if (!a && !b) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } else return 'nope';
};

neitherTrueShort(false, false);
