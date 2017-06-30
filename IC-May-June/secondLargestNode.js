function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

var root = new BinaryTreeNode(10)
root.insertRight(12).insertRight(17).insertRight(18);

function findLargest(root) {
	var nodes = [];
	nodes.push(root);

	while(nodes.length) {
		var current = nodes.pop();
		// console.log(current.value);
		if(current.right) {
			nodes.push(current.right);
		}
	}
	return current;
}

console.log(findLargest(root));