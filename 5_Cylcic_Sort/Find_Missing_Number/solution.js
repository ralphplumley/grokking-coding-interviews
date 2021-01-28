const find_missing_number = function(nums) {
    // cyclic sort nums - O(n)
    let i = 0;
    const n = nums.length;
    while (i < n) {
        const j = nums[i];
        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i += 1;
        }
    }

    // loop through, and when nums[i] doesn't match with index, return the index
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) return i
    }

    return n
};

console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));