// Variable declaration
let input = prompt('What would you like to do?');
const todos = ['Collect chicken eggs', 'Clean litter box'];

// Check if input is not quit or q
while (input !== quit && input !== 'q') {

	// If input is 'list' display items
	if (input === 'list') {
		console.log('*****************');
		for (let i = 0; i < todos.length; i++) {
			console.log(`${i}: ${todos[i]}`);
		}
		console.log('*****************');

	// If input is 'new' add an item
	} else if (input === 'new') {
		const newTodo = prompt('Ok, what is the new todo?');
		todos.push(newTodo);
		console.log(`${newTodo} added to the list!`);

	// If input is 'delete' remove item on the provided index
	} else if (input === 'delete') {
		const index = parseInt(prompt('Ok, enter an index to delete.'));
		if (!Number.isNaN(index)) {
			const deleted = todos.splice(index, 1);
			console.log(`Ok, deleted "${deleted[0]}".`);
		} else {
			console.log('Unknown index');
		}
	}

	// Ask user for an input
	input = prompt('What would you like to do?');
}

// Tell the user to quit the app
console.log('Exit the app.');
