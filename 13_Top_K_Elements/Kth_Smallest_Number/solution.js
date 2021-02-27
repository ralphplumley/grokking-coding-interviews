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

    peek() {
        return this.items[0]
    }
}

const find_Kth_smallest_number = function(nums, k) {
    const minHeap = new MinHeap(k)

    for (let i = 0; i < k; i++) {
        minHeap.add(nums[i])
    }

    for (let i = k; i < nums.length; i++) {
        let num = nums[i]
        if (num > minHeap.items[0]) {
            minHeap.remove()
            minHeap.add(num)
        }
    }

    return minHeap.peek()
};


console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`) //-> 5
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`) //-> 5
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`) //-> 11
