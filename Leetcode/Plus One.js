// take an array of ints separated by a comma but when combined, form a large digits that needs to be incremented by one and the resulting large digit should be returned in the initial format
// take an array of ints(separated by a comma, should be seen without the commas as they form a large digit)
// return the resulting digit after having been incremented by one but in the separated comma style

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {    // if not 9, just add 1 and finish
      digits[i]++;
      return digits;
    }
    digits[i] = 0;          // was 9 -> becomes 0, carry moves left
  }
  // if we got here, all digits were 9 (e.g., 9, 99, 999)
  digits.unshift(1);
  return digits;
}

//plusOne([1,2,3]) => [1,2,4]
// plusOne([3,4,4]) => [3,4,5]
// plusOne([3]) => [4]

console.log(`plusOne([1,2,3]), [1,2,4]`);
console.log(`plusOne([3,4,4]), [3,4,5]`);
console.log(`plusOne([3]), [4]`);
