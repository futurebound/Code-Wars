'use strict';

function filter_list(l) { //declare filter_list function accepting l as argument
  return l.filter(function (x) { //call filter method with callback function accept x as argument
    return typeof x === 'number'; //returns x's with a number data type
  });
}