let Heap = require("collections/heap");

const find_k_frequent_numbers = function(nums, k) {
    let frequency = {}
    nums.forEach((num) => {
        if (!(num in frequency)) {
            frequency[num] = 1
        } else {
            frequency[num]++
        }
    })

    const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]))

    Object.keys(frequency).forEach((num) => {
        minHeap.push([frequency[num], num])
        if (minHeap.length > k) {
            minHeap.pop()
        }
    })

    // now create a list of top k numbers
    const topNumbers = []
    while (minHeap.length > 0) {
        topNumbers.push(minHeap.pop()[1])
    }

    return topNumbers;
};


console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)
