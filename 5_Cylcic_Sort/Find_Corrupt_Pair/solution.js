const find_corrupt_numbers = function(nums) {
    // cyclic sort to find the duplicate
    // iterate through each number using a while loop
        // if current number is not the same as the index (well, index + 1)
            // attempt to swap
            // if the current number and the number at the swap spot are the same
                // found the duplicate, push current number into our array
                // increment i
            // else
                // swap
        // else
            // increment i

    // iterate again to find the missing number
    // missing number is when the current number and index don't match
    // iterate with a for loop
        // if the current number and the index+1 don't match
            // push index+1 into array

    // return our output array

    let duplicate = null
    let i = 0

    while (i < nums.length) {
        let curr = nums[i]
        if (curr !== i+1) {
           if (curr === nums[curr-1]) {
               if (duplicate === null) {
                   duplicate = curr
               }
               i += 1
           }  else {
               [nums[i], nums[curr-1]] = [nums[curr-1], nums[i]]
           }
        } else {
            i += 1
        }
    }

    let output = [duplicate]
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (curr !== i+1) output.push(i+1)
    }

    return output
};

console.log(find_corrupt_numbers([3,1,2,3,6,4]))
// I: array of integers ranging from 1 ~ n, where n is the length of the array
// O: array of two integers (first being the duplicate, second being the missing) e.g. [1,2]
// C:
// E: Empty?

//  1,2,3,4,5,6
// [1,2,3,4,3,6] => [3,5]
//          ^
// [1,2,3,3,4,6]