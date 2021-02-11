class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const count_paths = function(root, S) {
    let currentPath = []
    return dfs(root, S, currentPath)
};

const dfs = function (currentNode, S, currentPath) {
    if (!currentNode) return 0

    // add the current node to the path
    currentPath.push(currentNode.value)

    let pathCount = 0, pathSum = 0

    // find the sums of all the sub-paths in the current path list
    for (let i = currentPath.length - 1; i >= 0; i--) {
        pathSum += currentPath[i]

        // if the sum of any sub-path is equal to 'S', we increment our path count
        if (pathSum === S) {
            pathCount += 1
        }
    }

    // traverse left sub tree
    pathCount += dfs(currentNode.left, S, currentPath)

    // traverse left sub tree
    pathCount += dfs(currentNode.right, S, currentPath)

    // remove the current node from the path to backtrack
    // we need to remove the current node while we are going up the recursive stack
    currentPath.pop()
    return pathCount
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`)
