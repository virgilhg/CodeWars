//Solution is incomplete. Challenge was time restricted, with more time I'll split it, map it and for the element first make it uppercase and add it with the second lowercase while repeating the latter based on its index number.

function accum(s) {
	s= s.toLowerCase()
  for (let i=0; i<s.length; i++){
      s[i].repeat(1).toUpperCase()
      return s
      for(let i=0; i<s.length; i++){
         s[i].repeat(i-1).toLowerCase()
        return s
  }
}
    return s.split("").join("-")
}

/*
S: take in as strings(letters from A-Z, capitalized or not) and return them each letters separated by a dash and for each letter repeat it based on its index number.
P: take in strings(composed of letters of the alphabeths, capitalized or not-capitalized) 
R: return the strings with each eltter repeated based on the number of its index and each distinct letters separated by a dash and each disctinct first letter capitalized
E:
accum("adeh") => "A-Dd-Eee-Hhhh"
accum("ad") =>"A-Dd"
accum("a") => "A"
*/
