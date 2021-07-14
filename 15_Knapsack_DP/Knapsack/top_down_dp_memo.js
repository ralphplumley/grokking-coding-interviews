/*
    Time: O(N*C), N = number of items, C = knapsack
    Space: O(N*C+N) => O(N*C), N*C for memo array, N for recursion call-stack
 */

let solveKnapsack = function(profits, weights, capacity) {

    const dp = []

    const recurse = (profits, weights, capacity, index) => {
        if (capacity <= 0 || index >= profits.length) return 0

        dp[index] = dp[index] || []
        if (typeof dp[index][capacity] !== 'undefined') return dp[index][capacity]

        // recurse after choosing the element at the current index
        // if weight of the element at current index exceeds the capacity, we shouldn't process it
        let profit1 = 0
        if (weights[index] <= capacity) {
            profit1 = profits[index] + recurse(profits, weights, capacity - weights[index], index + 1)
        }

        // recurse with the element at current index excluded
        const profit2 = recurse(profits, weights, capacity, index + 1)

        // keep the larger of the two
        dp[index][capacity] = Math.max(profit1, profit2)
        return dp[index][capacity]
    }

    return recurse(profits, weights, capacity, 0)
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
