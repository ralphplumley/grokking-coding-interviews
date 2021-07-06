class MinHeap {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    add(node) {
        this.items.push(node)
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

        if (parent >= 0 && this.items[parent].value > this.items[max].value) {
            max = parent
        }

        if (max !== index) {
            this.swap(max, index)
            this.bubbleUp(max)
        }
    }

    trickleDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let min = index

        if(leftChild < this.items.length && this.items[leftChild].value < this.items[min].value) min = leftChild;
        if(rightChild < this.items.length && this.items[rightChild].value < this.items[min].value) min = rightChild;

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

class ListNode {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

const merge_lists = function(lists) {
    let minHeap = new MinHeap()
    // put the root of each list in the min heap
    lists.forEach((a) => {
        if (a !== null) {
            minHeap.add(a);
        }
    });

    // take the smallest(top) element form the min-heap and add it to the result
    // if the top element has a next element add it to the heap
    let resultHead = null,
        resultTail = null;

    while (minHeap.items.length > 0) {
        const node = minHeap.remove();
        if (resultHead === null) {
            resultHead = resultTail = node;
        } else {
            resultTail.next = node;
            resultTail = resultTail.next;
        }
        if (node.next !== null) {
            minHeap.add(node.next);
        }
    }

    return resultHead
};

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = merge_lists([l1, l2, l3]);
process.stdout.write('Here are the elements form the merged list: ');
while (result !== null) {
    process.stdout.write(`${result.value} `);
    result = result.next;
}