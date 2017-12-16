'use strict';

function cubeOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return undefined;
        }
    }
    let cubed = arr.map(x => x * x * x);
    let filtered = cubed.filter(integer => integer % 2 === 1 || integer % 2 === -1);
    if (filtered.length === 0) {
        return 0;
    }
    if (filtered.length >= 1) {
        return filtered.reduce((a, b) => a + b);
    }
}