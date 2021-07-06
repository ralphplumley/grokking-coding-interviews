class MinHeap {
    constructor(capacity) {
        this.items = []
        this.capacity = capacity
    }

    add(val) {
        this.items.push(val)
        this.bubbleUp(this.items.length - 1)
        if (this.items.length > this.capacity) this.remove()
    }

    remove() {
        this.swap(0, this.items.length - 1)
        const min = this.items.pop()
        this.trickleDown(0)
        return min
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2)
        let max = index

        if (parent >= 0 && this.items[parent] > this.items[max]) max = parent

        if (max !== index) {
            this.swap(max, index)
            this.bubbleUp(max)
        }
    }

    trickleDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let min = index

        if(leftChild < this.items.length && this.items[leftChild] < this.items[min]) min = leftChild;
        if(rightChild < this.items.length && this.items[rightChild] < this.items[min]) min = rightChild;

        if(min !== index) {
            this.swap(min, index);
            this.trickleDown(min);
        }
    }

    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }
}

const find_k_largest_numbers = function(nums, k) {
    const minHeap = new MinHeap(k)

    // put first k elements into heap
    for (let i = 0; i < k; i++){
        minHeap.add(nums[i])
    }

    // go through the remaining numbers of the array, if the number from the array is bigger than the
    // top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
    for (let i = k; i < nums.length; i++) {
        let num = nums[i]
        if (num > minHeap.items[0]) {
            minHeap.remove()
            minHeap.add(num)
        }
    }

    // return minHeap.items[0]
    return minHeap.items
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([2,1], 1)}`) //-> 2
// console.log(`Here are the top K numbers: ${find_k_largest_numbers([3,2,1,5,6,4], 2)}`) //-> 5, 4
// console.log(`Here are the top K numbers: ${find_k_largest_numbers([3,2,3,1,2,4,5,5,6], 4)}`) //-> 6,5,5,4
// console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`) //-> 5,12,11
// console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`) //-> 11,12,12
