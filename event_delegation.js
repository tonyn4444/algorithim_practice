// Event Delegation allows us to add a single event listener to a 
// parent element. This event listener will be activated on every existing child element,
// as well elements that are added in the future.

$(document).ready(function() {
	
	// $('#list').on('click', 'li', function() {
	// 	console.log($(this).text());
	// });

	// With the below method, the onClick handler is directly applied to li's with the id #list
	// but anything added to the list in the future will not have the handler, unlike the above method
	$('#list li').on('click', function() {
		console.log($(this).text());
	});

	$('#list').on('click', function() {
		$(this).append('<li>Five</li>');
	});
});