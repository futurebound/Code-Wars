'use strict';

function high(x) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let score = [];
  let words = x.split(' ');
  let winner = 0;
  let winnerOut = '';
  for (let i = 0; i < words.length; i++) {
    score[i] = 0;
    for(let j = 0; j < words[i].length; j++) {
      score[i] += alphabet.indexOf(words[i][j]) + 1;
    }
  }
  for (let k = 0; k < words.length; k++) {
    if (score[k] >  winner) {
      winner = score[k];
      winnerOut = words[k];
    }
  }
  return winnerOut;
}

//*pukes*
