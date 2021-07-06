const topological_sort = function(vertices, edges) {
    const sortedOrder = [];
    if (vertices <= 0) return sortedOrder

     // a. Initialize the graph
    const inDegree = new Array(vertices).fill(0) // count of incoming edges
    const graph = new Array(vertices).fill(0).map(() => Array()) // adjacency list graph

    // b. build the graph
    edges.forEach((edge) => {
        const parent = edge[0],
            child = edge[1]

        graph[parent].push(child) // put the child into it's parent's list
        inDegree[child]++
    })

    // c. find all sources i.e., all vertices with 0 in-degrees
    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) sources.push(i)
    }

    // d. for each source, add it to the sortedOrder and subtract one from all of its children's indegrees
    //    if a child's in-degree becomes zero, add it to the sources queue
    while (sources.length > 0) {
        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
            inDegree[child] -= 1
            if (inDegree[child] === 0) sources.push(child)
        })
    }

    // topological sort is not possible as the graph has a cycle
    if (sortedOrder.length !== vertices) return []

    return sortedOrder;
};

/*
    Time: O(V+E) - V is the total number of verticies and E is the total number of edges in the graph
    Space: O(V+E) - we are storing all of the edges for each vertex in an adjacency list

 */

console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
// console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
// console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
