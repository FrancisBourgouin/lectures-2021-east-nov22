// WTH ?

// Async JS
// Async Returns
// Readline
// Multiple for loops
// process.stdout.write
// .filter / .map / .find

const someFunction = (value) => {
	// 2 - Function started
	// 3 - Start the timer
	setTimeout(() => {
		// Timer is complete
		console.log(value);
	}, 1000);
};

fs.readFile("./someFile.txt", "utf8", (err, data) => {
	// Here we know it's finished
});
// 1 - Call the function

// someFunction("Pollo");

const addTwoNumbers = (a, b) => {
	const result = a + b;
	return result;
};

const result = addTwoNumbers(5, 7);

console.log(result);

const addTwoNumbersCB = (a, b, action) => {
	const result = a + b;
	action(result);
};

addTwoNumbersCB(5, 7, (value) => console.log(value));

// We call the function
const slowAddTwoNumbers = (a, b, action) => {
	// We do the sync stuff
	// Start the timer
	setTimeout(() => {
		// The timeout was succesfull
		const result = a + b;
		action(result, a, b);
	}, 1000);
	console.log("Thinking...");
};

let bob = 0;
slowAddTwoNumbers(5, 7, (value, firstValue, secondValue) => {
	addTwoNumbers(firstValue, secondValue);
	bob = firstValue;
});
