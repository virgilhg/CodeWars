function nameShuffler(str){
  // convert the string to array, split the string, reverse and join it back
  return str.split(" ").reverse().join(" ")
}

/*
S: take in a string("Fname lname"), and return a string ("Lname Fname")
P: take in a string (can be uppercase or lowerCase, always be a name string, always have a space between the 2 names)
R: return a string (should be the same as first, just have the lname in first position and the Fname in second)
E:
nameShuffler("Alpha romeo") => "romeo Alpha"
nameShuffler("Dave Rofield") => "Rofield Dave"
nameShuffler("Fiona Everland") => "Fiona Everland"
*/
