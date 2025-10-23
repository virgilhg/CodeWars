// take a signed 32 bit int and return but reversed, if its reverse throws it out of the -2^31 & (2^31 -1) range, return 0
// take a signed 32 bits int(no funny business like letters etc)
// return the reversed version of that signed 32 bits int and return 0 if outside of the afromentioned range

function reverse(x) {
  const MIN = -(2 ** 31), MAX = 2 ** 31 - 1;
  const sign = x < 0 ? -1 : 1;

  const rev = parseInt(String(Math.abs(x)).split('').reverse().join(''), 10) * sign;

  return (rev < MIN || rev > MAX) ? 0 : rev;
}

//reverse(123) => 321
// reverse(-1) => -1
// reverse(-12) => -21

console.log(`reverse(123), 321`);
console.log(`reverse(-1), -1`);
console.log(`reverse(-12), -21`);