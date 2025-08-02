////Solution is incomplete. Challenge was time restricted, with more time I'll compare i with j+1 to avoid comparing the same number by itself and instead of defining an empty array, just make the array return inside the function
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// take an array of nums and a number(target) and return the indices of the 2 numbers that when added up together gives the target number
// P: an array of nums(lenght start 2 and 10^4, -10^9 to 10^9), and a target(sum that result in target num will always be in the array, can be negative, positive or float)
// R: return in an array the indices of the 2 numbers in nums which sum gives the target, returned as simple numbers in the array
// E:

var twoSum = function(nums, target) {
    // define the indices array
    let indices = []
    // for loop comparing nums[i] and nums[i+1]
    for (let i = 0; i<nums.length; i++){
        for(let j =0; j<nums.length; j++){
        // if = target 
        if((nums[i] + nums[j]) === target){
    // push them in the indice array
            indices.push(j)
        }
        indices.push(i)
    }   
         }
    // return the array 
    return indices

};

// twoSum([1,2,3], 4) => [0,3]
// twoSum([-1,-6.5,-4], -5) => [0,3]
// twoSum([100,2,0,54], 2) => [1,2]
