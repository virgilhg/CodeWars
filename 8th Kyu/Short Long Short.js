/* 
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/


//SOLUTION
// take in 2 strings and return a string in this conbination "short+long+short"

// P: take in 2 strings(can be numbers, letters in upper or lowerCase, empty) of different lengths

// R: return a string on this combination "short+long+short", 

//E:

// function solution(a, b){

//   // if conditional to conpare the length of both

//   if(a.length<b.length){

//    // if a then return a+b+a

//     return a+b+a

//   }

//   // else 

//   else{

//   // return b+a+b

//     return b+a+b

// }}

function solution(a, b){

  return a.length<b.length? a+b+a:b+a+b

}

// solution('a', 'delta') => adeltaa

// solution('', 'alpha') => " alpha " 

// solution('4', 'beta') => "4beta4"

