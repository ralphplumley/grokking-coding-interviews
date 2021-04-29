/*
    Given a directed graph, find the topological ordering of its vertices.

    Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
    Output: Following are the two valid topological sorts for the given graph:
    1) 3, 2, 0, 1
    2) 3, 2, 1, 0
 */

const topological_sort = function(vertices, edges) {
    let sortedOrder = [];

    if (vertices <= 0) return sortedOrder

    // 1: Initialize the graph
    const inDegree = Array(vertices).fill(0) // count of incoming edges
    const graph = Array(vertices).fill(0).map(() => Array()) // adjaceny list graph

    // 2: Build the graph
    edges.forEach((edge) => {
        let parent = edge[0],
            child = edge[1]

        graph[parent].push(child) // put the child into it's parent's list
        inDegree[child]++
    })

    // 3: Find all sources - i.e. all verticies with 0 in-degrees
    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i)
        }
    }

    // 4: For each source, add it to the sortOrder and subtract one from all of its children's in-degrees
    // if a child's in-degree becomes zero, add it to the source queue
    while (sources.length > 0) {
        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
            inDegree[child] -= 1
            if (inDegree[child] === 0) {
                sources.push(child)
            }
        })
    }

    // if there's a cycle, topo sort not possible
    if (sortedOrder.length !== vertices) return []

    return sortedOrder;
};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
// console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
// console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)