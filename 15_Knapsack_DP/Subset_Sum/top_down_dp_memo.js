const canPartition = function(nums, sum) {
    const dp = []
    return recurse(nums, sum, 0, dp)
};

const recurse = (nums, sum, index, dp) => {
    if (sum === 0) return true
    if (sum < 0 || index === nums.length) return false

    dp[index] = dp[index] || []
    if (typeof dp[index][sum] === 'undefined') {
       if (recurse(nums, sum - nums[index], index + 1, dp)) {
           dp[index][sum] = true
           return true
       }

       dp[index][sum] = recurse(nums, sum, index + 1, dp)
    }

    return dp[index][sum]
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4, 8], 66)}`);
