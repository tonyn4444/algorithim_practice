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

var root = new BinaryTreeNode(10);
root.insertLeft(7);
var firstRowRightNode = root.insertRight(15);
firstRowRightNode.insertRight(20);
firstRowRightNode.insertLeft(14).insertRight(17)

function superBalanced(root) {
	var depths = [];
	var nodesAndDepths = []
	nodesAndDepths.push([root, 0])

	while(nodesAndDepths.length) {
		console.log(nodesAndDepths);
		var currentNodePair = nodesAndDepths.pop();
		var currentNode = currentNodePair[0];
		var currentDepth = currentNodePair[1];

		// Check if leaf
		if(!currentNode.left && !currentNode.right) {
			if(depths.indexOf(currentDepth) < 0) {
				depths.push(currentDepth);
				console.log('currentNode: ', currentNode)
				console.log(depths);
			}

			if(depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
				return false;
			}
		}

		if(currentNode.left) {
			nodesAndDepths.push([currentNode.left, currentDepth + 1]);
		}

		if(currentNode.right) {
			nodesAndDepths.push([currentNode.right, currentDepth + 1]);
		}
	}
	return true;
}

console.log(superBalanced(root));