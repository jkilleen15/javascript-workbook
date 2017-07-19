'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin (answer) {
  var word = answer.toLowerCase().trim();
  for (var i = 0; i < word.length; i++) {
    var vowel;
    var firstPart;
    var secondPart;
    if (word.indexOf('a') === i) {
      vowel = word.indexOf('a');
      firstPart = word.slice(0, vowel);
      secondPart = word.slice(vowel);
      if (vowel === 0) {
        return secondPart + firstPart + 'yay';
      } else {
        return secondPart + firstPart + 'ay';
      }
    } else if (word.indexOf('e') === i) {
      vowel = word.indexOf('e');
      firstPart = word.slice(0, vowel);
      secondPart = word.slice(vowel);
      if (vowel === 0) {
        return secondPart + firstPart + 'yay';
      } else {
        return secondPart + firstPart + 'ay';
      }
    } else if (word.indexOf('i') === i) {
      vowel = word.indexOf('i');
      firstPart = word.slice(0, vowel);
      secondPart = word.slice(vowel);
      if (vowel === 0) {
        return secondPart + firstPart + 'yay';
      } else {
        return secondPart + firstPart + 'ay';
      }
    } else if (word.indexOf('o') === i) {
      vowel = word.indexOf('o');
      firstPart = word.slice(0, vowel);
      secondPart = word.slice(vowel);
      if (vowel === 0) {
        return secondPart + firstPart + 'yay';
      } else {
        return secondPart + firstPart + 'ay';
      }
    } else if (word.indexOf('u') === i) {
      vowel = word.indexOf('u');
      firstPart = word.slice(0, vowel);
      secondPart = word.slice(vowel);
      if (vowel === 0) {
        return secondPart + firstPart + 'yay';
      } else {
        return secondPart + firstPart + 'ay';
      }
    }
// var firstPart = word.slice(0, vowel);
// var secondPart = word.slice(vowel);
// return secondPart + firstPart + "ay";
  }
}

// pigLatin("array");

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

 //Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
