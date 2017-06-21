function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

// Let's say we want to delete node b

// [A] --> [B] --> [C]

// In order to delete a node from a linked list, we usually need reference 
// to the previous node, and then assign the previous node's pointer to the 
// node after the node we want to delete 


// in this case, we have no reference to the previous node

// so what we will do is assign node b's value and pointer to that of c's 

function deleteNode(node) {
  var nextNode = node.next;
  
  if (nextNode) {
    node.value = nextNode.value;
    node.next = nextNode.next;
  }
  else {
    node.value = null;
    node.next = null;
  }
}

deleteNode(b);







