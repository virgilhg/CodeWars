/*
Complete the function that accepts a string parameter, and reverses each word In the string. All spaces in the string should be retained.
Examples
"This is an example!" => "siht si na lelpmaxe"
"double spaces" ==> "elbuod secaps"
*/

function reverseWords(str) {
return str.split(' ').map(function(word){
   return word.split('').reverse().join('')
   }).join(' ');
