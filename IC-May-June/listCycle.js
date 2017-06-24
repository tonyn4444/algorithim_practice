function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
var d = new LinkedListNode('D');

a.next = b;
b.next = c;
c.next = d;
d.next = a;

// function containsCycle(node) {
// 	var currentNode = node;
// 	var nodesSeen = new Set();
// 	nodesSeen.add(currentNode);

// 	while(currentNode) {

// 		currentNode = currentNode.next;
// 		if(nodesSeen.has(currentNode)) {
// 			return true;
// 		}
// 		nodesSeen.add(currentNode);
// 	}
// 	return false;
// }

function containsCycle(head) {
	var fastRunner = head;
	var slowRunner = head;

	while(fastRunner && fastRunner.next) {
		fastRunner = fastRunner.next.next;
		slowRunner = slowRunner.next;

		if(fastRunner === slowRunner) {
			return true;
		}
	}
	return false;
}
console.log(containsCycle(a));


