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
root.insertLeft(9)
root.insertRight(12).insertRight(14);

function validTree(root) {
	if(!root) {
		throw new Error("Must have at least one node");
	}

	var nodesAndBounds = [];
	// For each given node and it's bounds, the node's value cannot be:
		// a) Less than it's lowerBound
		// b) Greater than it's upperBound
	nodesAndBounds.push({node: root, lowerBound: -Infinity, upperBound: Infinity})

	while(nodesAndBounds.length) {
		var nodeAndBounds = nodesAndBounds.pop();
		var current = nodeAndBounds.node;
		var upperBound = nodeAndBounds.upperBound;
		var lowerBound = nodeAndBounds.lowerBound;

		// Check to see if the current node's value exceeds and bounds
		if(current.value >= upperBound || current.value <= lowerBound) {
			return false;
		}

		if(current.left) {
			// Parent's left child has an upperBound of its parent's value that it cannot exceed
			nodesAndBounds.push({node: current.left, lowerBound: lowerBound, upperBound: current.value})
		}

		if(current.right) {
			nodesAndBounds.push({node: current.right, lowerBound: current.value, upperBound: upperBound})
		}
	}
	return true;
}

console.log(validTree(root))

