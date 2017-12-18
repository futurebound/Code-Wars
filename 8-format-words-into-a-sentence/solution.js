'use strict';

function formatWords(words) {
    if (words.length === 0) {
        return '';
    }
    if (words[0] === '') {
        return '';
    }
    let onlyWords = words.filter(word => word.length > 0);
    let formatted = '';
    for (let i = 0; i < onlyWords.length; i++) {
        if (i <= onlyWords.length - 3) {
            formatted += onlyWords[i] + ', ';
        }
        if (i === onlyWords.length - 2) {
            formatted += onlyWords[i];
        }
        if (i === onlyWords.length - 1) {
            formatted += ' and ' + onlyWords[i];
        }
    }
    return formatted;
}

describe("Solution", function () {
    it("test", function () {
        Test.assertEquals(formatWords([""]), "");
        Test.assertEquals(formatWords(["capital", "dondo", "requiem", "", "red", "", "coral"]), "capital, dondo, requiem, red and coral");
        Test.assertEquals(formatWords(['ninja', 'samurai', 'ronin']), "ninja, samurai and ronin")
    });
});


formatWords(["capital", "dondo", "requiem", "", "red", "", "coral"])
formatWords(["samurai", "ronin", "shank"])
formatWords(["", ""])
