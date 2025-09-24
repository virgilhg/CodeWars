// take a number x and return its value reversed, if the number or its reversed value are outside the range [-2^31 - 2^31-1], then simply return 0
// take a number(will be a signed 32bit int, )
// return the reserved int, however if the int is not within this range [-2^31 - 2^31-1], return 0
// reverse(765) => 567
// reverse(012) => 21


console.log(`reverse(765), 567`);
console.log(`reverse(012), 0`);
console.log(`reverse (120), 0`);

function reverse(x) {
  const MIN = -(2 ** 31), MAX = 2 ** 31 - 1;
  const sign = x < 0 ? -1 : 1;

  const rev = parseInt(String(Math.abs(x)).split('').reverse().join(''), 10) * sign;

  return (rev < MIN || rev > MAX) ? 0 : rev;
}
