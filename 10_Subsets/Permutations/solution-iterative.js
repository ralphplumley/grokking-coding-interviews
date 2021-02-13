function find_permutations(nums) {
    let numsLength = nums.length,
        result = [],
        permutations = []

    permutations.push([]);
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        // we will take all existing permutations and add the current number to create new permutations
        const n = permutations.length;
        for (let p = 0; p < n; p++) {
            const oldPermutation = permutations.shift();
            // create a new permutation by adding the current number at every position
            for (let j = 0; j < oldPermutation.length + 1; j++) {
                const newPermutation = oldPermutation.slice(0); // clone the permutation
                newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j'
                if (newPermutation.length === numsLength) {
                    result.push(newPermutation);
                } else {
                    permutations.push(newPermutation);
                }
            }
        }
    }

    return result;
}


// console.log(`Here are all the permutations: ${find_permutations([1, 2, 3])}`)
console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`)
