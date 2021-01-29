const find_all_duplicates = function(nums) {
    // iterate through nums
        // check if current number is at it's proper slot (proper index)
            // if it is
                // continue
            // else
                // is the current number and the number at the swap spot the same?
                    // push that into duplicates array
                    // continue
                // else
                    // swap

    // return duplicates

    let duplicateNumbers = [];
    let i = 0
    while (i < nums.length) {
        let curr = nums[i]
        if (curr !== i+1) {
            if (curr === nums[curr-1]) {
               duplicateNumbers.push(curr)
                i += 1
            } else {
                [nums[i], nums[curr-1]] = [nums[curr-1], nums[i]]
            }
        } else {
            i += 1
        }
    }
    return duplicateNumbers;
};

console.log(find_all_duplicates([3,4,4,5,5]))

// I: array of ints, ranging from 1 to N, where N is the length of the array
// O: an array of ints that are duplicate ints in the input array
// C: must be done without using extra space
// E: empty list? order of elements in array matters?

// duplicates(set) = (5)
// duplicates = [5,4]
//  1 2 3 4 5 6 7
// [5,4,3,4,5]
//      ^