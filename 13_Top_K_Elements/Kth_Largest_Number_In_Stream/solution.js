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


class KthLargestNumberInStream {
    minHeap

    constructor(nums, k) {
        this.minHeap = new MinHeap(k)
        nums.forEach((num) => {
            this.minHeap.add(num)
        })
        this.k = k;
    }

    add(num) {
        this.minHeap.add(num)
        return this.minHeap.peek()
    }

};


kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`)
