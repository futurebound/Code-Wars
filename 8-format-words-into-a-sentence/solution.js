'use strict';

function formatWords(words) {
    if (words.length === 0) {
        return '';
    }
    if (words[0] === '') {
        return '';
    }
    let formatted = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            if ((words.length - 2) === i) {
                formatted += ' and ' + words[i];
            if ((words.length - 1) === i) {
                formatted += ' and ' + words[i];
            } else {
                formatted += words[i] + ', ';
            }
            }
        }
        return formatted;
    }
}