class MinHeap {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    add(val) {
        this.items.push(val)
        this.bubbleUp(this.items.length - 1)
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

    peek() {
        return this.items[0]
    }
}

const find_sum_of_elements = function(nums, k1, k2) {
    //heapify
    // for nums.length
        // if i is between k1 and k2
            // pop and accumulate
        // else
            // pop (we discard these values)

    let minHeap = new MinHeap()
    for(let i = 0; i < nums.length; i++) {
        minHeap.add(nums[i])
    }

    let sum = 0
    for(let j = 1; j < nums.length + 1; j++) {
        // if (k1 < j < k2) {
        if ((k1 < j) && (j < k2)) {
            sum += minHeap.remove()
        } else {
            minHeap.remove()
        }
    }

    return sum
};


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`)
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`)
