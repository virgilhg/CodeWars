// write the function isAnagram
var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};

// Take 2 words and return true if they are anagrams of on another and false if not the case
// anagram => nagaram, silent => listen
// Only getting 2 words as params(all in english, can be upper or lowercase)
// return true if first word can be used to form second word as an anagram and false if not the case
// isAnagram("anagram") => "nagaram"
// isAnagram("silent") => "listen"
// isAnagram("evil") => "vile"

console.log(isAnagram("anagram"), "true")
console.log(isAnagram("be"), "false")
console.log(isAnagram("evil"), "true")
