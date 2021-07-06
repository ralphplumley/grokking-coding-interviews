const find_subsets = function(nums) {
    // sort to handle duplicates
    nums.sort()

    let subsets = [];
    subsets.push([])

    for (let i = 0; i < nums.length; i++) {
        let startIndex = 0
        let endIndex = subsets.length

        if (i > 0 && nums[i] === nums[i-1]) {
            startIndex = i
            endIndex = subsets.length
        }

        for(let j = startIndex; j < endIndex; j++) {
            let current_set = subsets[j].slice(0)
            current_set.push(nums[i])
            subsets.push(current_set)
        }
    }

    return subsets;
}

// console.log('Here is the list of subsets: ');
// let result = find_subsets([1, 3, 3]);
// result.forEach((subset) => {
//     console.log(subset);
// });

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
});


/*
[]
[ 1 ]
[ 3 ]
[ 1, 3 ]
[ 3, 3 ]
[ 1, 3, 3 ]
[ 5 ]
[ 1, 5 ]
[ 3, 5 ]
[ 1, 3, 5 ]
[ 3, 3, 5 ]
[ 1, 3, 3, 5 ]
 */