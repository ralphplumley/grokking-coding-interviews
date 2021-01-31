const find_first_smallest_missing_positive = function(nums) {
    // remove negatives - O(nums)
    // sort - O(nums * log nums)
    // iterate through each number - O(nums)
        // if the current number is greater than 0 and
        // the current number is not the same value as the index
            // return index

        // if we're at the last index, and still haven't found one missing
            // return index + 1

    // // remove negatives
    // let positives = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) positives.push(nums[i])
    // }
    //
    // // sort what's left
    // positives.sort((a,b) => a-b)
    //
    // // iterate through each one, and find gap
    // for (let i = 1; i < positives.length; i++) {
    //     let prev = positives[i-1]
    //     let curr = positives[i]
    //     if ( (curr - prev) > 1) return prev + 1
    // }
    //
    // return positives.length + 1

    let i = 0;
    let n = nums.length;
    while (i < n) {
        let j = nums[i] - 1;
        if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i += 1;
        }
    }
    for (i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return nums.length + 1
};

// console.log(find_first_smallest_missing_positive([-3,1,5,4,2]))
console.log(find_first_smallest_missing_positive([3,-2,0,1,2]))
// console.log(find_first_smallest_missing_positive([3,2,5,1]))

// Input: unsorted array of integers. Can be positive or negative ints
    // ? What's the lenght of the input?
    // ? can there be duplicates?
// Output: an int representing the smallest missing positive number
// Constraints:
// Edge cases: negative input array?

//   0, 1, 2, 3, 4, 5
// [-3, 1, 5, 4, 2] => 3
// [-3, 1, 2, 4, 5]

//  0, 1, 2, 3, 4, 5
// [0,-2, 3, 1, 2]
// -2, 0, 1, 2, 3
