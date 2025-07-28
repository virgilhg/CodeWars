// take in a string and a single char, return  the number of time the char is used in the string
// P: string(empty, letters of the alphabet), a single char(from the aphabeth, never empty)
//R: count of occurence of the char in the string(return as a num)
// E:

function strCount(str, char){
  let  count = 0
  if (str.length===0){
     count = 0
  }
  
  // for loop combined with a search method
  for (let i=0; i<str.length; i++){
     // increase the count
     if(str[i] ===char){
        count++
     }
}
    return count
}
