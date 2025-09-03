// return masked string
function maskify(cc) {
  if (cc.length<=4){
    return cc
  }
  let cc1= cc.slice(0, cc.length-4)
  return cc1.replace(/./g, '#')+ cc.slice(cc.length-4, cc.length)
}

/*
S: Take a string of characters and return a # in place of every character except the last 4 which should remain the same.
P: Take a string of characters(can be numbers, letters/words, which can come with spaces in between, can be empty)
R: return the string with # in place of every character except the last 4, and include the last 4 in the string concat to the #s
E: 
maskify("Alpha")=> "#lpha"
maskify("Str ing !")=>"#####ng !"
maskify("123")=> "123"
*/
