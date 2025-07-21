/* You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

//Solution is incomplete. Challenge was time restricted, with more time I'll start with the half string -1 instead of the opposite and go from there and use math.ceil for rounding
function getMiddle(s) {

if(s.length%2===0){
return s[(s.length/2),((s.length/2) +2)]
}
else{
return s[(s.length/2)]
}  
}
