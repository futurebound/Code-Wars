function abbrevName(name){
  let abbrev = name.split(' ');
  return `${abbrev[0][0].toUpperCase()}.${abbrev[1][0].toUpperCase()}`;
}
