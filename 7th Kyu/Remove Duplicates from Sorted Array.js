// take an array nums sorted from the smallest to the highest number and return k (the number of unique elements in nums) and don't return nums, but it should be nums(with its first elements being its unique numbers with the same sorting style)
// take nums(will be come sorted from smallest to highest numbers, will only contain numbers, never be empty) 
// return k(the count of all the unique numbers in nums) and don't return nums, but it should be nums(with its first elements being its unique numbers with the same sorting style)

function removeDuplicates(nums) {
  let unique = [...new Set(nums)];
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
}

// removeDuplicates([1,5,7,7]) => 3, nums = [1,5,7,7]
// removeDuplicates([5]) => 1, nums = [5]
// removeDuplicates([0, 0, 7, 7, 67, 100]) => 4, nums = [0, 7, 67, 100, 7, 0]
