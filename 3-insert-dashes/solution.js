function insertDash(num) { //declaring function
    let numString = ''; //setting numString to empty string
    let numArr = num.toString().split(''); //setting numArr to take argument, convert it to string, then split it by every character
    for (let i = 0; i < numArr.length; i++) { // for loop to iterate over length of numArr
        if (numArr[i] % 2 === 1 && numArr[i + 1] % 2 === 1) { //conditional logic to see if numArr[i] is odd AND the next in line is also odd, if so add both numArr[i] and a '-' to numString
            numString += numArr[i] + '-';
        } else { //otherwise, just add numArr[i] to numString
            numString += numArr[i];
        }
    }
    return numString; //return numString
}