// Why do we use variables ?

// Reference later
// Store values
// Placeholder
// Less repetition
// More dynamic
// Unknowns

// Why do we use functions?

// Less repetion
// Manage complex logic
// Perform specific / redundant tasks
// Reduce the length
// Flexibility
// Unknowns ?

const calculateDistanceBetweenTwo3DPoints = function () {
	return 10;
};

// Why do we use parameters

// Scalability
// Placeholders
// Good for scoping

const addTwoPlusTwo = function () {};

const addTwoNumbers = function (num1, num2) {
	return num1 + num2;
};

const someListOfSomeNames = ["Dusty", "Jeremiah", "Olga", "Jennifer", "Joshua"];

const sayHiToEverybody = function (listOfNames) {
	for (const name of listOfNames) {
		console.log(`Hey ${name}! 🔥🔥🔥`);
	}
};

// sayHiToEverybody(someListOfSomeNames);

const sayByeToEverybody = function (listOfNames) {
	for (const name of listOfNames) {
		console.log(`Bye ${name}! 🦋🦋🦋`);
	}
};

// sayByeToEverybody(someListOfSomeNames);

// const listTheNamesCheckTheMessageAndTHenSayTheMessageToEverybody

const sayHi = function (name) {
	console.log(`Hey ${name}! 🔥🔥🔥`);
};
const sayBye = function (name) {
	console.log(`Bye ${name}! 🦋🦋🦋`);
};

// a = 5
// b = a

const saySomethingToEverybody = function (listOfNames, action) {
	for (const name of listOfNames) {
		action(name);
	}
};

const yellAndSing = function (name) {
	const message = `🎶🎶 ${name} 🎶🎶`;
	console.log(message.toUpperCase());
};

saySomethingToEverybody(someListOfSomeNames, yellAndSing);
// const saySomethingToEverybody = function (listOfNames, hiOrBye) {
// 	let action = sayBye;
// 	if (hiOrBye === "hi") {
// 		action = sayHi;
// 	}

// 	for (const name of listOfNames) {
// 		action(name);
// 	}
// };

// saySomethingToEverybody(someListOfSomeNames, "hi");
// saySomethingToEverybody(someListOfSomeNames, "bye");

// const saySomethingToEverybody = function (listOfNames, hiOrBye) {
// 	let message = "";
// 	if (hiOrBye === "hi") {
// 		message = `Hey ${name}! 🔥🔥🔥`;
// 	} else {
// 		message = `Bye ${name}! 🦋🦋🦋`;
// 	}

// 	for (const name of listOfNames) {
// 		console.log(message);
// 	}
// };
