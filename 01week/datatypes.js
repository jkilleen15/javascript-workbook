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
  return 'Datatype = ' + typeof thing;
}

whichType('hat');

// Write a JavaScript program that adds 2 numbers together.

function addsTwo (a, b) {
  return a + b;
}

addsTwo(7, 5);

// Write a JavaScript program that runs only when 2 things are true.

function twoAreTrue (a, b) {
  if (a === true && b === true) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } // else {return "nope";}
}

twoAreTrue(true, true);

// OR

function twoAreTrueShort (a, b) {
  if (a && b) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } // else {return "nope";}
}

twoAreTrueShort(true, true);

// Write a JavaScript program that runs when 1 of 2 things are true

function onOfTwoTrue (a, b) {
  if (a === true || b === true) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } // else {return "neither";}
}

onOfTwoTrue(true, false);

// OR

function oneOfTwoTrueShort (a, b) {
  if (a || b) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } // else {return "neither";}
}

oneOfTwoTrueShort(false, true);

// Write a JavaScript program that runs when both things are not true.

function neitherTrue (a, b) {
  if (!a === true && !b === true) {
    return 'Pass! Results: ' + a + ' and ' + b;
  }  // else {return "nope";}
}

neitherTrue(false, false);

function neitherTrueShort (a, b) {
  if (!a && !b) {
    return 'Pass! Results: ' + a + ' and ' + b;
  } // else {return "nope";}
}

neitherTrueShort(false, false);
