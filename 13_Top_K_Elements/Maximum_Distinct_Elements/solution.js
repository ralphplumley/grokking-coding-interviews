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

const find_maximum_distinct_elements = function(nums, k) {
    let distinctElementsCount = 0
    if (nums.length <= k) return distinctElementsCount

    // get frequency of each number
    let frequencyMap = {}
    nums.forEach((num) => {
       if (!(num in frequencyMap)) {
           frequencyMap[num] = 1
       }  else {
           frequencyMap[num]++
       }
    })

    // insert all numbers with frequency greater than 1, into a minHeap
    let minHeap = new MinHeap()
    Object.keys(frequencyMap).forEach((num) => {
        if (frequencyMap[num] === 1) {
            distinctElementsCount += 1
        } else {
            minHeap.add(frequencyMap[num])
        }
    })

    // try removing the least frequent numbers from the min-heap
    while (k > 0 && minHeap.items.length > 0) {
        let frequency = minHeap.remove()
        // to make an element distinct, we need to remove all its occurrences except one
        k -= (frequency - 1)
        if (k >= 0) {
            distinctElementsCount += 1
        }
    }

    // if k > 0, this means we have to remove some distinct numbers
    if (k > 0) {
        distinctElementsCount -= k
    }

    return distinctElementsCount
};

console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([7, 3, 5, 8, 5, 3, 3], 2)}`)
// console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([3, 5, 12, 11, 12], 3)}`)
// console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)}`)

