/*
Given two strings of equal length, calculate and return the the hamming distance. E.g
hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(a, b) {
  if (a.length !== b.length) {
    throw new Error("Strings do not have equal length");
  }

  let result = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() !== b[i].toLowerCase()) {
      result++;
    }
  }

  return result;
}