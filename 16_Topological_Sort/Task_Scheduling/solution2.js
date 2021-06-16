const is_scheduling_possible = function(tasks, prerequisites) {
    const sortedOrder = []
    if (tasks <= 0) return true

    // a. initialize the graph
    const indegree = new Array(tasks).fill(0) // count of prereqs
    const graph = new Array(tasks).fill(0).map(() => Array()) // adjacency list graph

    // b. build the graph
    prerequisites.forEach((prereq) => {
        const task1 = prereq[0],
            task2 = prereq[1]

        graph[task1].push(task2)
        indegree[task2]++
    })

    // c. find all the sources, i.e. tasks without prereqs
    const sources = []
    for (let i = 0; i < indegree.length; ++i) {
        if (indegree[i] === 0) sources.push(i)
    }

    // d. for each source, add it to the sortedOrder and subtract one from all of its children's indegrees
    //    if a child's in-degree becomes zero, add it to the sources queue
    while (sources.length > 0) {
        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach((task2) => {
            indegree[task2] -= 1
            if (indegree[task2] === 0) sources.push(task2)
        })
    }

    if (sortedOrder.length !== tasks) return false
    return true
};

// console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
// console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)

