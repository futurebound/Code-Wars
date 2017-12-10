'use strict';

function find_average(array) { //declare function find_average
    let reducer = (a, b) => a + b; //declare reducer as parameters a representing the accumulator and b representing the current value to accumulate on at each index
    return ((array.reduce(reducer)) / array.length); //return array with reduce method being called with argument reducer, all divided by the length of the array
}