class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const traverse = function(root) {
    if (!root) return []
    let result = [];
    let queue = [root]
    let direction = "LR"

    while (queue.length > 0) {
        let level_length = queue.length
        let level_values = []

        if (direction === "LR") {
            for (let i = 0; i < level_length; i++) {
                let current_node = queue.shift()
                level_values.push(current_node.value)
                if (current_node.left) queue.push(current_node.left)
                if (current_node.right) queue.push(current_node.right)
            }
            direction = "RL"
        } else if (direction === "RL") {
            // get the current "level" nodes temporarily
            let tmp_level = []
            for (let i = 0; i < level_length; i++) {
                tmp_level.push(queue.shift())
            }

            for (let i = tmp_level.length - 1; i >= 0; i--) {
                let current_node = tmp_level[i]
                level_values.push(current_node.value)
                if (current_node.right) queue.unshift(current_node.right)
                if (current_node.left) queue.unshift(current_node.left)
            }

            direction = "LR"
        }
        result.push(level_values)
    }


    return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)
