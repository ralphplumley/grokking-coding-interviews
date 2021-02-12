const find_subsets = function(nums) {
    nums.sort()

    const subsets = [];
    subsets.push([])

    let startIndex = 0,
        endIndex = 0

    for (let i = 0; i < nums.length; i++) {
        startIndex = 0
        // if current and previous elements are the same, create new subsets only from the subsets added in the previous step
        if (i > 0 && nums[i] === nums[i - 1]) startIndex = endIndex + 1
        endIndex = subsets.length - 1

        for (j = startIndex; j < endIndex + 1; j++) {
            const set1 = subsets[j].slice(0)
            set1.push(nums[i])
            subsets.push(set1)
        }
    }
    return subsets;
};

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
})