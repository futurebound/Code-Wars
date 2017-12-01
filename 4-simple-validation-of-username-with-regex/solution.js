'use strict';

function validateUsr(username) { //creates function that accepts a username to check
  return /^[0-9a-z_]{4,16}$/.test(username); //utilizes regex to test for required conditions being met
}

