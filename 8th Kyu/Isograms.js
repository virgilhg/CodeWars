function isIsogram(str){
  let arr = []
  let strToArr= str.toLowerCase().split("")
  for(let i=0; i<strToArr.length; i++){
      if(!arr.includes(strToArr[i])){
         arr.push(strToArr[i])
     }
      else {
         return false
      }
  }
  return true
}

/*
S: taking a string and if it has repeating leeters return true that it's an isogram else return false.
P: taking a string (could be upper or lowerCase, and only strings of letters or empry strings)
R: return true if it has no repeating characters or is empty and fasle if yes 
E:
isIsogram("alpha") => "false"
isIsogram("true") => "true"
isIsogram("") => "true"
*/
