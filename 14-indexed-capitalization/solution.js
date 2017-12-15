'use strict';

function capitalize(s, arr) {
    let string = s.split('');
    arr.map((i) => {
        string.splice(i, 1, s.charAt(i).toUpperCase());
    });
    return string.reduce((a, b) => a + b);
}

