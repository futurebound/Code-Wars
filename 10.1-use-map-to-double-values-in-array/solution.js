'use strict';

function double(array) { //declared function double accepting array as argument
    return array.map(x => x * 2); //invoke .map Array method with lexical arrow notation to pass a function argument x, in this case the number in the index of the array, and multiply that value by 2
}