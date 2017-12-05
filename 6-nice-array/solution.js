function isNice(arr) { //declaring function isNice expecting single argument
    let nice = []; //declaring nice as empty array
    let counter = 0; //declaring counter as 0
    if (arr.length === 0) { //if empty array, return false
        return false;
    }
    for (let i = 0; i < arr.length; i++) { //for loop that adds n-1 & n+1 into nice array
        nice.push(arr[i] - 1);
        nice.push(arr[i] + 1);
    }
    for (let j = 0; j < arr.length; j++) { //for loop that checks if nice array contains every item in array argument
        if (nice.includes(arr[j]) === true) { //if nice includes number at each index, add 1 to counter
            counter++;
        }
    }
    if (counter === arr.length) { //if counter is equal to the length of the array, i.e. nice array, return true
        return true;
    }
    return false; //return false if not nice array
}