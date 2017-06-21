function reverseList(headNode) {
	var current = headNode;
	var previous = null;
	var nextNode = null;

	while (current) {
		// store current's next node so it doesn't break loop
		nextNode = current.next;

		// point current pointer to previous node
		current.next = previos;

		// move forward in loop
		previous = current
		current = nextNode;
	}
	return previous;
}

