class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const traverse = function(root) {
    // while the queue is not empty
        // level size is the queue length currently
        // tmp array

        // for loop (i < queue length
            // current node is queue.shift()
            // store the current node value in tmp array
            // does the current node have L  -> push into queue
            // does the current node have R  -> push into queue

        // push tmp into the beginning of result (unshift)


    let result = [];
    let queue = [root]

    while (queue.length > 0) {
        let level_size = queue.length
        let tmp = []
        for (let i = 0; i < level_size; i++) {
            let current = queue.shift()
            tmp.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        result.unshift(tmp)
    }

    return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)
