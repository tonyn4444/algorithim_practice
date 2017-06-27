function findLargestSmallerKey(head, num) {
	var currentLargest = head.value;
	console.log(currentLargest);
}

function TreeNode(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

TreeNode.prototype.insertLeft = function(val) {
	this.left = new TreeNode(val);
	return this.left;
}
TreeNode.prototype.insertRight = function(val) {
	this.right = new TreeNode(val);
	return this.right;
}

var root = new TreeNode(20);
root.insertRight(25);
var topLeftSubtree = root.insertLeft(9)
topLeftSubtree.insertLeft(5);
var midSubtree = topLeftSubtree.insertRight(12);
midSubtree.insertLeft(12);
midSubtree.insertRight(14);

findLargestSmallerKey(root, 17);
