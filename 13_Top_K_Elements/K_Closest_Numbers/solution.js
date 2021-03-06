class MinHeap {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    add(tuple) {
        this.items.push(tuple)
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

        if (parent >= 0 && this.items[parent][0] > this.items[max][0]) max = parent

        if (max !== index) {
            this.swap(max, index)
            this.bubbleUp(max)
        }
    }

    trickleDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let min = index

        if(leftChild < this.items.length && this.items[leftChild][0] < this.items[min][0]) min = leftChild;
        if(rightChild < this.items.length && this.items[rightChild][0] < this.items[min][0]) min = rightChild;

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

const find_closest_elements = function(arr, k, x) {
    const index = binary_search(arr, x)
    let low = index - k,
        high = index + k

    low = Math.max(low, 0) // low shouldn't be below 0
    high = Math.min(high, arr.length - 1) // high shouldn't be greater than the size of the array

    const minHeap = new MinHeap()
    for (let i = low; i < high + 1; i++) {
        let num = arr[i]
        minHeap.add([Math.abs(x - num), num])
    }

    // we need the top 'K' elements having smallest difference from 'X
    result = [];
    for (let i = 0; i < k; i++) {
        result.push(minHeap.remove()[1])
    }

    result.sort((a,b) => a-b)
    return result;
};

function binary_search(arr, target) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (low > 0) {
        return low - 1;
    }
    return low;
}


console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)




























