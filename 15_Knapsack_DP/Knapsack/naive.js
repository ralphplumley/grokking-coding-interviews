/*
    Time: O(2^N), N = total number of items
    Space: O(N), N recursive calls
 */

let solveKnapsack = function(profits, weights, capacity) {

    const recurse = (profits, weights, capacity, index) => {
        if (capacity <= 0 || index >= profits.length) return 0

        // recurse after choosing the element at the current index
        // if weight of the element at current index exceeds the capacity, we shouldn't process it
        let profit1 = 0
        if (weights[index] <= capacity) {
            profit1 = profits[index] + recurse(profits, weights, capacity - weights[index], index + 1)
        }

        // recurse with the element at current index excluded
        const profit2 = recurse(profits, weights, capacity, index + 1)

        // keep the larger of the two
        return Math.max(profit1, profit2)
    }

    return recurse(profits, weights, capacity, 0)
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
