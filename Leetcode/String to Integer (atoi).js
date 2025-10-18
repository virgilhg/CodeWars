// take a string contains ints and letters in english and convert it to an int(accounting for - signs at the start of the string, ignoring 0s or leading 0s or whitespace, stop the conversion and return 0 if you find a leading letter or stop and return the current converted string soon as you find a letter in between)
// tske a string(might only contain a-z letters, ints from 0-9, + & - signs, whitespaces, and dots) which can be empty
// return an int in 32bit size(with - & + if leading) or 0 if a charater or letter is leading. 

function myAtoi_short(s) {
  const MIN = -(2 ** 31), MAX = 2 ** 31 - 1;
  let i = 0, n = s.length;

  while (i < n && s[i] === ' ') i++;
  let sign = 1;
  if (i < n && (s[i] === '+' || s[i] === '-')) { sign = s[i] === '-' ? -1 : 1; i++; }

  const start = i;
  while (i < n && s[i] >= '0' && s[i] <= '9') i++;
  if (i === start) return 0; // no digits

  let val = parseInt(s.slice(start, i), 10) * sign;
  if (val < MIN) return MIN;
  if (val > MAX) return MAX;
  return val;
}

//myAtoi("65)w") => 65
// myAtoi(.-567) => 0
// myAtoi(" -021") => -21

console.log(`myAtoi("65)w"), 65`);
console.log(`myAtoi(.-567), 0`);
console.log(`myAtoi(" -021"), -21`);
