// take in a string and return true if the string is all caps and false else
//P: take in a string(empty, or not, only letters)
//R: return a bolean(true or false)
//E: 

 function isUpperCase(str) {
   // if str = str.upperCase()
   if(str===str.toUpperCase() || str.length===0){
     return true}
   else{
     return false}
}

// isUpperCase("Alpha") => false
// isUpperCase("DELTA") => true
// isUpperCase("betA") => false
