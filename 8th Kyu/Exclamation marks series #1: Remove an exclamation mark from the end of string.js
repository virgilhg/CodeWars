/*
S: Take in a string and from it remove one exclamation mark if it's at the end of the string
P: take in a string(alsways be that, can/ can't have a !, can be separated by spaces in it can be a string of nums, letters etc, the !s can be anywhere in the string)
R: simply return the same string without an exclamation mark at the end if any
E:

remove("Alpha! and Risi are coding!") => "Alpha! and Risi! are coding"
remove("Mickey!Mouse") => "Mickey!Mouse"
remove("Dream On!!") => "Dream On!"

*/

function remove (string) {
  let arr = string.split("")
  if(arr[arr.length-1] == '!'){
     arr.pop()
  }
  return arr.join("")
}
