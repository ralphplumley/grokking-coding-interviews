const canPartition = function(nums, sum) {
    return recurse(nums, sum, 0)
};

const recurse = (nums, sum, index) => {
    if (sum === 0) return true
    if (sum < 0 || index === nums.length) return false

    return recurse(nums, sum - nums[index], index + 1) ||
           recurse(nums, sum, index + 1)
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4, 8], 66)}`);
