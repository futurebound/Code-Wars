'use strict';

function solution(str) {
    let strSolution = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strSolution += str[i];
    }
    return strSolution;
}