class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_level_averages = function(root) {
    result = [];
    if (!root) return result
    let queue = [root]

    while(queue.length > 0) {
        let level_size = queue.length
        let level_values = []

        for (let i = 0; i < level_size; i++) {
            let current = queue.shift()
            level_values.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        // get average of level
        let level_sum = 0
        for (let i = 0; i < level_values.length; i++) {
            level_sum += level_values[i]
        }
        result.push(level_sum / level_values.length)
    }

    return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
