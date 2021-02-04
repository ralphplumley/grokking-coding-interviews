class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const find_minimum_depth = function(root) {
    let result = []
    if (!root) return result

    let queue = [root]
    let min_depth = 1

    while (queue.length > 0) {
        let level_size = queue.length
        for (let i = 0; i < level_size; i++) {
            let current = queue.shift()
            if (!current.left && !current.right) return min_depth
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        min_depth += 1
    }

    return min_depth
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
