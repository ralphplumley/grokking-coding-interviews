class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

const find_path = function(root, sequence) {
    if (!root) {
        return sequence.length === 0
    }

    return recurse(root, sequence, 0)
};

function recurse(node, sequence, sequenceIndex) {
    if (!node) return false

    const seqLen = sequence.length;
    if (sequenceIndex >= seqLen || node.value !== sequence[sequenceIndex]) {
        return false;
    }

        // if current node is a leaf, and it is the end of the sequence, we have a match!
    if (!node.left && !node.right && sequenceIndex === seqLen - 1) return true

    return recurse(node.left, sequence, sequenceIndex + 1) || recurse(node.right, sequence, sequenceIndex + 1)
}



let root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 0, 1])}`)