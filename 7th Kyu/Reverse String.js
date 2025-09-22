// take an array of string letters and reverse it with 0(1) 
// take an array of string letters(which are individual letters each seperated by a comma all the time, case insensitive)
// return the same array with everything reversed in place 

function reverseString(arr){
  let arr1 = []
  for(let i=(arr.length-1); i>=0; i--){
    arr1.push(arr[i])
  }
  return arr1
}

// reverseString(["h","b","o"])=> ["o", "b", "h"]
// reverseString(["T","k","o"])=> ["o", "k", "T"]
// reverseString(["V","i","r"])=> ["r", "i", "V"]

console.log(`reverseString(["h","b","o"]), ["o", "b", "h"]`);
console.log(`reverseString(["T","k","o"]), ["o", "k", "T"]`);
console.log(`reverseString(["V","i","r"]), ["r", "i", "V"]`);
