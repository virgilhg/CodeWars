/* If you can't sleep, just count sheeps!!

Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// Solution is incomplete. Challenge was time restricted, with more time I'll add a concatination system in the loop increasing by the num instead of the repeat method

var countSheep = function (num){
  
  for (let i=0; i=num; i++){
      return `${i} sheep...`.repeat(num)
  }
  return ""
}
