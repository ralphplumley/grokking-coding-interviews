class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const find_minimum_depth = function(root) {
    if (!root) return 0

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



let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
