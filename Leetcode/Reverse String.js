 // take an array and reverse it in place with constant memory complexity
// take an array (composed of printable ASCII characters, upper or lowercase, never empty)
// return the same array in reverse with O(1) space complexity
function reserveString(arr){
  const t = [];
  for (let i = s.length - 1; i >= 0; i--) t.push(s[i]);
  for (let i = 0; i < s.length; i++) s[i] = t[i];   // copy back
  //I'd use s.reverse for the memory optimization with more time
}

// reserveString(['h','e','l','l','o'])=> ['o','l','l','e','h']
// reserveString(['D','e','l','T','A'])=> ['A','T','l','e','D']
// reserveString(['A','D'])=> ['D','A']

console.log(`reserveString(['A','D']), ['D','A']`)
console.log(`reserveString(['h','e','l','l','o']), ['o','l','l','e','h']`)
console.log(`reserveString(['D','e','l','T','A']), ['A','T','l','e','D']`)
