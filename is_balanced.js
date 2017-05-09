// a tree is unbalanced if the depths of any two leaf nodes is greater than 1

// 1. Check if the node is a leaf node
// 2. Check and record depths
// 3. If it's not a leaf node, repeat for children of that current node

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinaryTreeNode.prototype.insertLeft = function(value) {
//   this.left = new BinaryTreeNode(value);
//   return this.left;
// };

// BinaryTreeNode.prototype.insertRight = function(value) {
//   this.right = new BinaryTreeNode(value);
//   return this.right;
// };

// var treeRoot = new BinaryTreeNode(1);
// treeRoot.insertLeft(2);
// treeRoot.insertRight(3);
// treeRoot.right.insertRight(4);
// treeRoot.left.insertLeft(5);
// treeRoot.left.left.insertLeft(6);
// treeRoot.left.left.left.insertLeft(7);

// function isBalanced(treeRoot) {
//   if (!treeRoot.left && !treeRoot.right) {
//     return true;
//   }
  
//   var nodes = [];
//   var depths = [];
  
//   nodes.push([treeRoot, 0]);
  
//   while (nodes.length) {
//     var currentNode = nodes.pop();
    
//     var node = currentNode[0];
//     var depth = currentNode[1];
    
    
//     if (!node.left && !node.right) {
      
//       if (!depths.includes(depth)) {
//         depths.push(depth);

//           if (depths.length > 2 || (depths.length === 2 ) && Math.abs(depths[0] - depths[1]) > 1) {
//             return false;
//           }
//         }
      
//     } else {
//       if (node.left) {
//         nodes.push([node.left, depth + 1]);
//       }
//       if (node.right) {
//         nodes.push([node.right, depth + 1]);
//       }
//     }
//   }
//   return true;
// }

// isBalanced(treeRoot);

// ===========================================================
// 5/8/17 Review
// ===========================================================


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
root.insertLeft(9).insertLeft(8).insertLeft(7);
root.insertRight(11);


function isBalanced(treeRoot) {
  // a tree with no nodes is balanced
  if (!treeRoot) {
    return true;
  }
  
  var depths = [];
  
  // nodes will contain a nodePair of a node and it's depth
  var nodes = [];
  nodes.push([treeRoot, 0]);
  
  // loop through tree until we find two leaf nodes whose difference in depths is greater than 1
  // or until no more nodes left
  
  while(nodes.length) {
    // console.log(nodes, '===================================');
    var nodePair = nodes.pop();
        node = nodePair[0];
        nodeDepth = nodePair[1];
    // console.log('Current node: ' + node.value);
    
    
    // check if node is a leaf
    if (!node.left && !node.right) {
      
      // Check if the depth of leaf has already been stored in array
      if (depths.indexOf(nodeDepth) < 0) {
        depths.push(nodeDepth);
        console.log(depths);
        
        // if there are more than 2 unique leaf depths or the difference between
        // two leaf depths is greater than 1, return false
        if (depths.length >= 2 || Math.abs(depths[0] - depths[1])) {
          return false;
        }
      }

    // step down in tree
    } else {
        if (node.left) {
          // if not a leaf, check for left child and push into nodes to continue cycle
          nodes.push([node.left, nodeDepth + 1]);
          // console.log(nodeDepth);
       }
        if (node.right) {
          nodes.push([node.right, nodeDepth + 1]);
          // console.log(nodeDepth);
        }
    }
  }
  return true;
}

console.log(isBalanced(root));


