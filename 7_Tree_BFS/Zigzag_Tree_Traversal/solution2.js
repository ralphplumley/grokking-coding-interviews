class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function traverse(root) {
    result = [];
    if (root === null) {
        return result;
    }

    const queue = []
    queue.push(root);
    let leftToRight = true;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = []
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();

            // add the node to the current level based on the traverse direction
            if (leftToRight) {
                currentLevel.push(currentNode.val);
            } else {
                currentLevel.unshift(currentNode.val);
            }

            // insert the children of current node in the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
        // reverse the traversal direction
        leftToRight = !leftToRight;
    }

    return result;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);