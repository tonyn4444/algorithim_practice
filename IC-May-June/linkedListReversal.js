function LinkedListNode(val) {
	this.value = val;
	this.next = null;
}

var a = new LinkedListNode('a');
var b = new LinkedListNode('b');
var c = new LinkedListNode('c');
var d = new LinkedListNode('d');

a.next = b;
b.next = c;
c.next = d;

function reverseList(head) {
	var currentNode = head;
	var previousNode = null;
	var nextNode = null;

	while(currentNode) {
		// console.log(currentNode);
		console.log(previousNode);
		nextNode = currentNode.next;
		currentNode.next = previousNode;

		previousNode = currentNode;
		currentNode = nextNode;
	}
	return head;
}