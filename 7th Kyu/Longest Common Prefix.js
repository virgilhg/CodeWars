// Find the longest common prefix string and return it or return "" in no common prefeix or original string was empty
// take an array(of words composed only of letters, all lowercase)
// return the longest common prefix string we can find

function longestCommonPrefix(strs){
  let pref = strs[0];
  let prefLen = pref.length;

  for (let i = 1; i < strs.length; i++) {
      let s = strs[i];
      while (pref !== s.substring(0, prefLen)) {
          prefLen--;
          if (prefLen === 0) {
              return "";
          }
          pref = pref.substring(0, prefLen);
      }
  }

  return pref;  

}

// longestCommonPrefix(["Alpha", "Ali", "Alps"]) => "Al"
// longestCommonPrefix(["Elf", "Elephant", "Elmo"]) => "El"
// longestCommonPrefix([]) => ""

console.log(`longestCommonPrefix(["Alpha", "Ali", "Alps"]), "Al"`);
console.log(`longestCommonPrefix(["Elf", "Elephant", "Elmo"]), "El"`);
console.log(`longestCommonPrefix([]), ""`);
