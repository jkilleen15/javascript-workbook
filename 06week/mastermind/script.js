'use strict';

// MY VARIABLES

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let randomAnswer = '';
let answer = [];

let guess = [];

let charHit = 0;
let bothHit = 0;
let hint = '';   // results from checking guess against answer

// INDEX.HTML DOM CREATION

/*
<div id = "goTimeResponse">
<button onclick="generateAnswer()" name = "generateAnswer" class = "generateButton"> Click Here to Start Game! </button><br><br>
</div>
*/

let body = document.body;

let introArea = document.createElement('DIV');
let introAreaHeader = document.createElement('H1');
let introHeader = document.createTextNode('Instructions:');
let introAreaList = document.createElement('UL');
let introList1 = document.createElement('LI');
let introList1Text = document.createTextNode('Click start button to generate a secret solution (random set of four characters between \'a\' and \'h\')');
let introList2 = document.createElement('LI');
let introList2Text = document.createTextNode('Use entry blocks below to enter your guesses');
let introList3 = document.createElement('LI');
let introList3Text = document.createTextNode('Secret characters include: a , b , c , d , e , f , g , h');
let introList4 = document.createElement('LI');
let introList4Text = document.createTextNode('Click \'Check My Guess\' button to test your guess against solution');
let introList5 = document.createElement('LI');
let introList5Text = document.createTextNode('View results in \'My Hints\' section below');
let introList6 = document.createElement('LI');
let introList6Text = document.createTextNode('Enter and check your guesses until you crack the code!');

introAreaHeader.appendChild(introHeader);
introArea.appendChild(introAreaHeader);
body.appendChild(introArea);

introList1.appendChild(introList1Text);
introList2.appendChild(introList2Text);
introList3.appendChild(introList3Text);
introList4.appendChild(introList4Text);
introList5.appendChild(introList5Text);
introList6.appendChild(introList6Text);
introAreaList.appendChild(introList1);
introAreaList.appendChild(introList2);
introAreaList.appendChild(introList3);
introAreaList.appendChild(introList4);
introAreaList.appendChild(introList5);
introAreaList.appendChild(introList6);
introArea.appendChild(introAreaList);

let buttonArea = document.createElement('DIV');
buttonArea.id = 'buttonArea';
body.appendChild(buttonArea);

let startButton = document.createElement('BUTTON');
let startButtonText = document.createTextNode('CLICK TO START GAME');
startButton.className = 'generateButton';
startButton.onclick = function () { // generateAnswer
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    randomAnswer += letters[randomIndex];
  }
  document.getElementById('addReadyHere').innerHTML = 'Secret Solution generated! Enter your guesses below:';
  console.log('New Random Answer: ' + randomAnswer);
};

startButton.appendChild(startButtonText);
buttonArea.appendChild(startButton);

for (let i = 1; i < 4; i++) {
  let space = ('space' + i);
  space = document.createElement('BR');
  body.appendChild(space);
}

// CREATES AREA WHERE THE READY RESPONSE WILL LOAD
// LEAVE AS EDITABLE INNER HTML WITH ID
// relates to generateAnswer button above

let readyResponseArea = document.createElement('DIV');
let readyResponseText = document.createElement('H1');
readyResponseText.id = 'addReadyHere';
readyResponseArea.appendChild(readyResponseText);
body.appendChild(readyResponseArea);

/*
<div class="row">
  <input type=text id="input0">
  <input type=text id="input1">
  <input type=text id="input2">
  <input type=text id="input3">
  </div>

  */

let inputRowsArea = document.createElement('DIV');
inputRowsArea.className = 'row';
body.appendChild(inputRowsArea);

for (var i = 0; i < 4; i++) {
  let inputRow = document.createElement('INPUT');
  // var x = document.createElement("INPUT");
  // x.setAttribute("type", "text");
  inputRow.setAttribute('type', 'text');
  inputRow.id = ('input' + i);
  inputRowsArea.appendChild(inputRow);
}

/*
<button onclick="generateGuess()" name = "generateGuess" class = "checkerButton"> Check Answer </button><br><br><br><br>
  */

let checkerButton = document.createElement('BUTTON');
let checkerButtonText = document.createTextNode('CHECK MY GUESS');
checkerButton.className = 'checkerButton';
checkerButton.onclick = function () {   // generateGuess()
  // Combine inputs from 4 user input blocks into guess array
  for (let i = 0; i < 4; i++) {
  // console.log(document.getElementById('input' + i).value);
    guess.push(document.getElementById('input' + i).value);
  }
  console.log('guess: ' + guess);
  checkGuess();
};

checkerButton.appendChild(checkerButtonText);
body.appendChild(checkerButton);

  /*
  <div>
    <br><br>
    <h1>Your Hints (appearing most recent first): </h1>
  </div>
  <div id = "hintList">
  </div>
  */

for (let i = 1; i < 7; i++) {
  let space = ('space' + i);
  space = document.createElement('BR');
  body.appendChild(space);
}

let hintsArea = document.createElement('DIV');
var hintsHeader = document.createElement('H1');
var hintsHeaderText = document.createTextNode('My Hints (latest guess will appear on top):');
hintsArea.className = 'formatSpace';
hintsHeader.appendChild(hintsHeaderText);
hintsArea.appendChild(hintsHeader);
body.appendChild(hintsArea);

let hintsList = document.createElement('DIV');
hintsList.id = 'hintList';
body.appendChild(hintsList);

// MY STANDALONE FUNCTIONS

// Called within startButton generateAnswer function above
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// checkGuess() called out in generate guess function on checkerButton
// Compares generated Answer with User Guess
// Builds charHit and bothHit arrays depending on results

function checkGuess () {
  console.log('guess_doubleCheck: ' + guess);
  // guessString = guess.join('');
  // console.log('guessString: ' + guessString);
  answer = randomAnswer.split('');
  // answerArray = answer.split('');
  // console.log('answer: ' + answer);
  console.log('answer: ' + answer);
  charHit = 0;
  bothHit = 0;
  // console.log('answer first char ' + answer[0]);
  // console.log('guess first char ' + guess[0]);

  for (var i = 0; i < 4; i++) {
    if (answer[i] === guess[i]) {
      bothHit++;
    } else if (answer[i] !== guess[i] && guess.includes(answer[i])) {
      charHit++;
    }
    hint = (bothHit + ' Correct Letter & Positon || ' + charHit + ' Correct Letter Only');
  }

  if (bothHit === 4) {
    checkForWin();
  } else displayHints();
  console.log('hint: ' + hint);
}

// displayHints() displays results of comparison between guess and answer
// stored as hints
// InsertBefore ensures latest guess appears first for user convenience

function displayHints () {
    // RESULTS APPEAR LAST GUESS ON TOP
  guess = guess.join(' , ');
  answer = answer.join(' , ');
  let hintList = document.getElementById('hintList');
  let hintResultPara = document.createElement('H3');
  let hintResult = document.createTextNode('Your Guess: ' + guess + ' -->  Your Hint: ' + hint);
  hintResultPara.appendChild(hintResult);
  hintList.insertBefore(hintResultPara, hintList.firstChild);
  clearAll();
}

// clears guess related data so user can enter fresh guess

function clearAll () {
  guess = [];
  charHit = 0;
  bothHit = 0;
  for (let i = 0; i < 4; i++) {
    // console.log(document.getElementById('input' + i).value);
    document.getElementById('input' + i).value = '';
    // console.log(document.getElementById('input' + i).value);
  }
}

  // Called out in checkGuess when bothHit === 4
  // conditional here is ~redundant but double checks result for true win

function checkForWin () {
  // console.log('made it to check for win');
  if (bothHit === 4) {
    alert('You guessed it! The solution is "' + answer.join(' , ') + '." Way to Go!');
      // clears the hintList
    document.getElementById('hintList').innerHTML = '';
      // clears the ready header
    document.getElementById('addReadyHere').innerHTML = '';
      // clears variables not covered in clearAlL, then clearAll
    randomAnswer = '';
    answer = '';
    clearAll();
  }
}
