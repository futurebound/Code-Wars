function capitalize(s) { //declaring function capitalize expecting one argument
    let firstString = ''; //declaring firstString as empty string
    let altString = ''; //declaring altString as empty string
    for (let i = 0; i < s.length; i++) { //for loop iterating over length of argument
        if (i % 2 === 0) { //conditional executing if 0 or an even index
            firstString += s[i].toUpperCase(); //transforming letter at current index to upper case and adds to firstString
        } else { //conditional executing if other than an even index
            firstString += s[i]; //adds current index to firstString
        }
    } //end of for loop
    for (let i = 0; i < s.length; i++) { //for loop iterating over length of argument 
        if (i % 2 === 1) { //conditonal executing if current index is odd
            altString += s[i].toUpperCase(); //transforms current index to upper case and adds to altString
        } else { //conditional executing if other than odd index
            altString += s[i]; //adds current index to altString
        }
    } //end of for loop
    return [firstString, altString]; //returns an array with firstString and altString
};