function capitalizeWord(word) {
  let arr = word.slice(0, 1).toUpperCase();
  
  
  return arr + word.slice(1,word.length)
}

/* 
S: take a string and return the string with the first letter capitalized
P: take in a string(never empty, always letters, can be upper or lowercase)
R: return the string with the first letter capitalized
E: 
capitalizedWord("Alpha") => "Alpha"
capitalizedWord("beta") => "Beta"
capitalizedWord("d") => "D"
*/
