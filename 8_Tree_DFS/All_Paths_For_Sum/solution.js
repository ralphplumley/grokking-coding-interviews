class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const find_paths = function(root, sum) {
    let allPaths = [];
    let current_path = []
    recursive(root, sum, current_path, allPaths)
    // allPaths.forEach((arr) => {
    //     console.log(arr)
    // })
    return allPaths;
};

const recursive = function(node, sum, current_path, allPaths) {
    if (!node) return false

    // add current node to path
    current_path.push(node.value)

    // if the current node is a leaf and its value is equal to sum, save the current path
    if (!node.left && !node.right && node.value === sum) {
        allPaths.push(Array.from(current_path))
    } else {
        // traverse the left tree
        recursive(node.left, sum - node.value, current_path, allPaths)
        // traverse the right tree
        recursive(node.right, sum - node.value, current_path, allPaths)
    }

    // If we get here, it means we are at a dead end, and this path does not have the sum.
    // So, remove the current node from the path to backtrack,
    // we need to remove the current node while we are going up the recursive call stack
    current_path.pop()
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
