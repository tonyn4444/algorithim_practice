// a tree is unbalanced if the depths of any two leaf nodes is greater than 1

// 1. Check if the node is a leaf node
// 2. Check and record depths
// 3. If it's not a leaf node, repeat for children of that current node

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
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

var treeRoot = new BinaryTreeNode(1);
treeRoot.insertLeft(2);
treeRoot.insertRight(3);
treeRoot.right.insertRight(4);
treeRoot.left.insertLeft(5);
treeRoot.left.left.insertLeft(6);
treeRoot.left.left.left.insertLeft(7);

function isBalanced(treeRoot) {
  if (!treeRoot.left && !treeRoot.right) {
    return true;
  }
  
  var nodes = [];
  var depths = [];
  
  nodes.push([treeRoot, 0]);
  
  while (nodes.length) {
    var currentNode = nodes.pop();
    
    var node = currentNode[0];
    var depth = currentNode[1];
    
    
    if (!node.left && !node.right) {
      
      if (!depths.includes(depth)) {
        depths.push(depth);

          if (depths.length > 2 || (depths.length === 2 ) && Math.abs(depths[0] - depths[1]) > 1) {
            return false;
          }
        }
      
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}

isBalanced(treeRoot);
