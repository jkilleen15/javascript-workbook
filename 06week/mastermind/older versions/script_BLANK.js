'use strict';

/*
<div id = "goTimeResponse">
<button onclick="generateAnswer()" name = "generateAnswer" class = "generateButton"> Click Here to Start Game! </button><br><br>
</div>
*/
let body = document.body;
let buttonArea = document.createElement("div");
buttonArea.id = 'buttonArea';                                       // Append the text to <p>
body.appendChild(buttonArea);

let startButton = document.createElement("BUTTON");        // Create a <button> element
let startButtonText = document.createTextNode("CLICK TO START GAME");       // Create a text node
startButton.className = 'generateButton';
startButton.onclick = 'generateAnswer()';
/*
button.onclick = function(){
   alert('here be dragons');return false;
 };
*/
startButton.appendChild(startButtonText);                                // Append the text to <button>
buttonArea.appendChild(startButton);

// TO DO
///// CREATE AREA WHERE THE READY RESPONSE WILL LOAD
// LEAVE AS EDITABLE INNER HTML WITH ID
// END TO DO

/*
<div class="row">
  <input type=text id="input0">
  <input type=text id="input1">
  <input type=text id="input2">
  <input type=text id="input3">
  </div>

  */

let inputRowsArea = document.createElement("div");
inputRowsArea.className = 'row';
body.appendChild(inputRowsArea);

for (var i = 0; i < 4; i++) {
  let inputRow = document.createElement("INPUT");
  // var x = document.createElement("INPUT");
  // x.setAttribute("type", "text");
  inputRow.setAttribute("type", "text");
  inputRow.id = ("input" + i);
  inputRowsArea.appendChild(inputRow);
}

/*
<button onclick="generateGuess()" name = "generateGuess" class = "checkerButton"> Check Answer </button><br><br><br><br>

  */

  let checkerButton = document.createElement("BUTTON");        // Create a <button> element
  let checkerButtonText = document.createTextNode("CHECK MY GUESS");       // Create a text node
  checkerButton.className = 'checkerButton';
  checkerButton.onclick = 'generateGuess()';
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

for (let i = 1; i < 7; i++){
let space = ('space' + i);
space = document.createElement("BR");
body.appendChild(space);
}

  let hintsArea = document.createElement("div");
  var hintsHeader = document.createElement("H1");
  var hintsHeaderText = document.createTextNode("Your Hints (appearing most recent first):");
  hintsArea.className = 'formatSpace';
  hintsHeader.appendChild(hintsHeaderText);
  hintsArea.appendChild(hintsHeader);
  body.appendChild(hintsArea);

  let hintsList = document.createElement("div");
  hintsList.id = 'hintList';
  body.appendChild(hintsList);
