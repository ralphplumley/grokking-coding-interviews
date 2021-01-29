const find_duplicate = function(nums) {
    // iterate through each number in num
        // if current number does not equal the index
            // attempt to swap
            // if the current number and the number getting swapper are the same
                // we found the duplicate
                // return current number
            // otherwise
                // swap

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (curr !== i+1) {
            if (curr === nums[curr-1]) return curr
            else [nums[i], nums[curr-1]] = [nums[curr-1], nums[i]]
        }
    }

    return -1;
};

console.log(find_duplicate([2,1,3,3,5,4]))  //3
console.log(find_duplicate([1,4,4,3,2]))    //4
console.log(find_duplicate([2,4,1,4,4]))    //4


// Input: array of integers ranging from 1 ~ n, with length n+1
// Output: Integer - the repeated Int from our input
// Constraints:
    // Don't use extra space
    // Can modify input array
    // Only one duplicate Integer (can have multiple duplicates of that Int)
// Edge cases:
    // Empty input?
    // Will there always be a duplicate?
        // If not, what to return?

// Time: O(nums)
// Space: O(1)

// index is 0+n
//  1,2,3,4,5,6
// [2,4,1,4,4]
//  ^