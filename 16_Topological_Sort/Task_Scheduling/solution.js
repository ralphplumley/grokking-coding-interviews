/*
    There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need
    to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs,
    find out if it is possible to schedule all the tasks.

    Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
    Output: true
    Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs to finish
    before '2' can be scheduled. A possible sceduling of tasks is: [0, 1, 2]


    Time: O(vertex + edge)
    Space: O(vertex + edge)
        The space complexity will be O(V+E)
        since we are storing all of the prerequisites for each task in an adjacency list.
 */

const is_scheduling_possible = function(tasks, prerequisites) {
    // 1: Create adjacency list
    // 2: Find and start with all 'in-degrees' (the ones that are 0)
    // 3: For each source, add to our answer array, add each child's in-degrees to sources array

    let sorted_order = []
    if (tasks <= 0) return sorted_order

    const inDegree = Array(tasks).fill(0),
        graph = Array(tasks).fill(0).map(() => Array())

    // build the graph
    prerequisites.forEach((tuple) => {
        const parent = tuple[0],
            child = tuple[1]

        graph[parent].push(child)
        inDegree[child]++
    })

    // find all the source in-degrees (0s)
    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i)
        }
    }

    // go through each in-degree source node to construct our answer
    while (sources.length > 0) {
        const vertex = sources.shift()
        sorted_order.push(vertex)
        graph[vertex].forEach((child) => {
            inDegree[child]--
            if (inDegree[child] === 0) {
                sources.push(child)
            }
        })
    }

    // check if there's a cycle
    if (sorted_order.length !== tasks) return false
    return true
};


console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)