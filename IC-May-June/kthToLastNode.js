function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);
// returns the node with value "Devil's Food" (the 2nd to last node)

// function size(node) {
// 	var current = node;
// 	var counter = 0;

// 	while(current) {
// 		counter += 1;
// 		current = current.next
// 	}
// 	return counter;
// }

// function kthToLastNode(k, node) {
// 	var listSize = size(node);
// 	var kthToLastLocation = listSize - k + 1;
// 	var current = node;
// 	var currentNodeLocation = 1;

// 	while(current || currentNodeLocation === kthToLastLocation) {
// 		if(currentNodeLocation === kthToLastLocation) {
// 			return current;
// 		}
// 		// console.log(current, currentNodeLocation);
// 		current = current.next;
// 		currentNodeLocation += 1;
// 	}
// }

function kthToLastNode(k, head) {
	var leftNode = head;
	var rightNode = head;

	// Extend right side of the 'stick' to appropriate location
	for(var i = 0; i < k - 1; i++) {
		rightNode = rightNode.next;
	}

	// Move the stick until the right side hits the end of the list
	while(rightNode.next) {
		rightNode = rightNode.next;
		leftNode = leftNode.next;
	}
	return leftNode;
}

console.log(kthToLastNode(3, a));


