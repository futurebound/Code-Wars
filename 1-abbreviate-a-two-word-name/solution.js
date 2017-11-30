function abbrevName(name){
  let abbrev = name.split(' '); //splits the string into two strings in array
  return `${abbrev[0][0].toUpperCase()}.${abbrev[1][0].toUpperCase()}`; //takes the first string, then the first letter of that string and converts it to upper case, adds a '.' in between, and then does the same for the first letter of the second string using template literal
}
