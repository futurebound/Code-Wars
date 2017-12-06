'use strict';

function disemvowel(str) { //declare function disemvowel expecting single str parameter
  return str.replace(/[aeiou]/ig, ''); //return str with replace method called using regex to target all values, case insensitive, globally and replacing them with nothing
}