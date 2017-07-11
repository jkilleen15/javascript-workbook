// Write a JavaScript program to display the current day and time.
function getDate () {
  return new Date();
}

getDate();

// Write a JavaScript program to convert a number to a string.
function convertToString (num) {
  return num.toString();
}

convertToString(78787878);

// Write a JavaScript program to convert a string to the number.

function convertToNumber (string) {
  return Number(string);
}

convertToNumber('787878');

/*
Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String */

function whichType (thing) {
  return typeof thing;
}

whichType(true);

// Write a JavaScript program that adds 2 numbers together.
function addsTwo (a, b) {
  return a + b;
}

addsTwo(7, 5);

// Write a JavaScript program that runs only when 2 things are true.
function twoAreTrue () {
  var a = true;
  var b = false;
  if ((a === true) && (b === true)) {
    return a + ' and ' + b;
  } // else {return "nope";}
}

twoAreTrue();

// OR

function twoAreTrueShort () {
  var a = true;
  var b = true;
  if (a && b) {
    return a + ' and ' + b;
  } // else {return "nope";}
}

twoAreTrueShort();

// Write a JavaScript program that runs when 1 of 2 things are true
function onOfTwoTrue () {
  var a = true;
  var b = true;
  if ((a === true) || (b === true)) {
    return a + ' and ' + b;
  } // else {return "neither";}
}

onOfTwoTrue();

// OR

function oneOfTwoTrueShort () {
  var a = true;
  var b = false;
  if (a || b) {
    return a + ' and ' + b;
  } // else {return "neither";}
}

oneOfTwoTrueShort();

// Write a JavaScript program that runs when both things are not true.

function neitherTrue () {
  var a = false;
  var b = false;
  if (!a && !b) {
    return a + ' and ' + b;
  } // else {return "nope";}
}

neitherTrue();
