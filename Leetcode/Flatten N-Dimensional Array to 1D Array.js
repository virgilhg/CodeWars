// take an N dimensional array and return a 1 dimensional array
// take an N dimensional array (composed of int only, never be empty, will/will not contain nested arrays, ranging from 0-9, N lenght arrays/nested arrays, all separeted by a comma)
// return the array as 1 dimensional array, no sorting needed, all should be separeted by a comma
function flattenArray(array){
  const out =[]
  function dfs(item) {
    if (Array.isArray(item)){
      for(const el of item){
        dfs(el)
      }
    }
    else {
      out.push(item)
    }
  }
  dfs(array)
  return out
}

// flattenArray([1, 2, [2,5, [5,4]]])=> [1, 2, 2, 5, 5, 4])
// flattenArray([2, [2,3], [7,8, [2,6, [4,5]]]])=> [2, 2, 3, 7, 8, 2, 6, 4, 5]
// flattenArray([1, 1])=> [1, 1]

console.log(`flattenArray([1, 2, [2,5, [5,4]]]), [1, 2, 2, 5, 5, 4])`)
console.log(`flattenArray([2, [2,3], [7,8, [2,6, [4,5]]]]), [2, 2, 3, 7, 8, 2, 6, 4, 5]`)
console.log(`flattenArray([1, 1]), [1, 1]`)
