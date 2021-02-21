const find_k_largest_numbers = function(nums, k) {
    const minHeap = []
    // put first k elements into heap
    for (let i = 0; i < k; i++){
        minHeap.push(nums[i])
    }

    // go through the remaining numbers of the array, if the number from the array is bigger than the
    // top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
    for (let i = k; i < nums.length; i++) {
        let num = nums[i]
        if (num > minHeap[0]) {
            minHeap.shift()
            minHeap.push(num)
        }
    }
    return minHeap
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`) //-> 12, 11, 5
// console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)
