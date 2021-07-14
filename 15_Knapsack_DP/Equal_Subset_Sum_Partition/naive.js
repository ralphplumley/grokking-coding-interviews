/*
    Time: O(2^N), N = count of numbers given
    Space: O(N), N = count of numbers given
 */

const can_partition = function(nums) {

    let sum = nums.reduce((acc, curr) => {
        return acc + curr
    })

    if (sum % 2 !== 0) return false

    return recurse(nums, sum / 2, 0)
};

const recurse = (nums, sum, index) => {
    if (sum === 0) return true
    if (nums.length === 0 || index >= nums.length) return false

    // now, recurse twice:
    // 1: with the value at the current index
    // 2: without the value at the current index

    // first one, with the value
    // make sure to only run it if the value is less than or equal to sum
    if (nums[index] <= sum) {
        if (recurse(nums, sum - nums[index], index + 1)) return true
    }

    // second one, without the value
    return recurse(nums, sum, index + 1)
}

console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`)
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`)
console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`)
