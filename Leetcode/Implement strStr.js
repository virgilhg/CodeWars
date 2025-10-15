// take two strings haystack and needle and return the index of the first occurrence of needle in haystack. If mone, return -1
// take 2 strings haystack and needle(letters in each are stuck together: no separation at all, all lowercase, all letters in english from a-z)
// return as a number the first index of the first occurrence of all the elements from needle in haystack, if none return the number -1

function strStr(haystack, needle){
  return haystack.search(needle)
  }

//strStr("strno", "str") => 0
// strStr("delta", "delco") => -1
// strStr("dre", "re") => 1

console.log(`strStr("strno", "str"), 0`);
console.log(`strStr("delta", "delco"), -1`);
console.log(`strStr("dre", "re"), 1`);
