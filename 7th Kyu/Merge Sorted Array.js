//Solution is incomplete. Challenge was time restricted, with more time I'll use slice(0, m) to get only the valid elements from nums1 and for the non-return, I'll just use a for loop on the resulting merged and sorted array to put it back in num1
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// take in num1 &num2 both arrays(their el can be negative or positive, int, empty), and m and n (ints, positive, can be zero) respect representing the length of both num1 and num2. Merge num1 & num2 and return num1 with num2 inside of it, sort it and return the merged and sorted num1 array (num1.length= m+n).

// P: taking num1 & num2 both arrays and m &n respectively the length of num1 &num2, num1 empty=[0]

// R: return num1.length= m+n where we merged num1 and num2 and sorted the merged array, the sorting should be from the lowest to the highest number

// E:
var merge = function(nums1, m, nums2, n) {
    // concat num1 &num2, sort the merged num1
    
    nums1 = nums1.slice(0,m-n).concat(nums2).sort((a,b)=> a-b) 
};

//merge([1,2,5], 3, [2,4,7], 3) => [1,2,2,4,5,7]
//merge([3,8], 2, [1], 1) => [1,3,8]
//merge([0], 0, [], 0) => [0]

// [1,2,5,2,4,7] => [1,2,2,4,5,7]
