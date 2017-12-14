'use strict';

function mutateMyStrings(stringOne, stringTwo) {
    let makeOne = stringOne.split('');
    let makeTwo = stringTwo.split('');
    let mutate = stringOne.concat('\n');
    for (let i = 0; i < makeOne.length; i++) {
        if (makeOne[i] !== makeTwo[i]) {
            makeOne[i] = makeTwo[i];
            mutate = mutate.concat(`${makeOne.join('')}\n`);
        }
    }
    return mutate;
}