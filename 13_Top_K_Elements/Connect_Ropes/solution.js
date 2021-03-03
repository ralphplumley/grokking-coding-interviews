let Heap = require("collections/heap");

const minimum_cost_to_connect_ropes = function(ropeLengths) {
    /*
        init minHeap, add all elements

        for loop, n-1
            add first two elements, add to total sum
            store sum
            bubble up next smallest element

        return total sum
     */

    let minHeap = new Heap(ropeLengths, null, function (a, b) {
        return b - a ;
    });

    let result = 0
    while (minHeap.length > 1) {
        let temp = minHeap.pop() + minHeap.pop()
        result += temp
        minHeap.push(temp)
    }

    return result;
};


console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)
