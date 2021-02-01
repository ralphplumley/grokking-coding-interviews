class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const traverse = function(root) {
    let result = []
    if (root === null) return result

    const queue = []
    queue.push(root)

    while (queue.length > 0) {
        const levelSize = queue.length
        let currentLevel = []

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()
            currentLevel.push(currentNode.value)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }

        result.push(currentLevel)
    }

    return result
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
