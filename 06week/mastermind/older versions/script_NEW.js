'use strict';

let charHit = 0;
let bothHit = 0;

let guess = [];
let guessString = '';
let randomAnswer = '';
let answerStr = '';
let answer = [];

let board = [];
//let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let hint = '';
//let sol = '';
//var guessStr = '';
//var solStr = '';
var win = false;

let goResponse = '';
let goTime = '';
// Generate an answer => corresponds to Start Game Button
function generateAnswer() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    randomAnswer += letters[randomIndex];
  }
  var goResponse = document.getElementById("goTimeResponse");
  var goTime = document.createElement("h1");                       // Create a <p> element
  //var goText = document.createTextNode("Great, I've Selected a Set of Letters!");       // Create a text node
  goTime.className = 'goTime';
  //goTime.appendChild(goText);
  goTime.innerHTML = 'Great, I\'ve Selected a Set of Letters!';                                       // Append the text to <p>
  goResponse.appendChild(goTime);
  console.log('randomAnswer: ' + randomAnswer);
}
// Part of Generate Answer process
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//function generateHint

// Combine inputs from 4 user input blocks into guess array

  function generateGuess() {
    for (let i = 0; i < 4; i++ ){
    //console.log(document.getElementById('input' + i).value);
    guess.push(document.getElementById('input' + i).value);
  //  document.querySelectorAll('.row').forEach((input) => {
  //    guessVal = e.target.value;
  //    console.log(guessval);
    //guess.push()
  //});
}
   console.log('guess: ' + guess);
   checkGuess();
}

// Compare generated Answer with User Guess
// Build charHit and bothHit arrays depending on results
  function checkGuess() {
    console.log('guess: ' + guess);
    //guessString = guess.join('');
    //console.log('guessString: ' + guessString);
    answer = randomAnswer.split('');
    //answerArray = answer.split('');
    //console.log('answer: ' + answer);
    console.log('answer: ' + answer);
    charHit = 0;
    bothHit = 0;
    console.log('sol first char ' + answer[0]);
    console.log('guess first char ' + guess[0]);

    for (var i = 0; i < 4; i++) {
      if (answer[i] === guess[i]) {
        bothHit++;
      } else if (answer[i] !== guess[i] && guess.includes(answer[i])) {
        charHit++;
      }
      hint = ('bothHit: ' + bothHit + ' - charHit: ' + charHit);
    }

    if (bothHit === 4) {
      checkForWin();
    } else displayAnswer();
    console.log('hint: ' + hint);
    // return hint;
  //}

 //console.log(guess);
 //guessString = guess.join('');
 //console.log(guessString);
 //displayAnswer();
  }

function displayAnswer() {
  // TO DO NEED TO APPEND THESE TO TOP!
  let hintList = document.getElementById("hintList");
  let hintResultPara = document.createElement("P");                       // Create a <p> element
  let hintResult = document.createTextNode("Your guess: " + guess + " ||  Your Score: " + hint);       // Create a text node
hintResultPara.appendChild(hintResult);
hintList.insertBefore(hintResultPara, hintList.firstChild);                                         // Append the text to <p>
//document.body.appendChild(hintResult);
clearAll();
}

function clearAll() {
guess = [];
charHit = 0;
bothHit = 0;
for (let i = 0; i < 4; i++ ){
  console.log(document.getElementById('input' + i).value);
  document.getElementById('input' + i).value = "";
  console.log(document.getElementById('input' + i).value);
}
}

function checkForWin() {
  console.log('made it to check for win');
  if (bothHit === 4) {
    alert ('You guessed it! The solution is "' + answer + '." Way to Go!');
    document.getElementById('hintList').innerHTML = '';

 //still need to make the headline disappear!!!

    randomAnswer = '';
    answer = '';
    clearAll();

  }
}
