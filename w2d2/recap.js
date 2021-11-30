// Functions

evil();

function evil() {
	// Hoisting
	console.log("MWAHAHAAHA");
}

function evil() {
	// Hoisting
	console.log("HIHIHIHI");
}

const someFunction = function () {
	console.log("Wiggle");
};

// someFunction = function () {
// 	console.log("Wiggle Wiggle");
// };

someFunction();

const someArrowFunction = () => {
	console.log("Yeah");
};
const someArrowFunction = () => console.log("Yeah");
const someArrowFunction = (name) => console.log("Yeah", name);
const someArrowFunction = (name, age) => console.log("Yeah", name, age);

const someArrowFunction = (name, age) => {
	console.log("Yeah");
	console.log(name);
	console.log(age);
};

const someMath = (a, b) => a + b;

const someMath = (a, b) => {
	return a + b;
};

// What is a callback ?

// A function inside another function passed as a paremeter

const someLoop = (list) => {
	for (const element of list) {
		someMath(element.a, element.b);
	}
};

const someLoopHOF = (list, action) => {
	for (const element of list) {
		action(element.a, element.b);
	}
};

const someMath = (a, b) => a + b;
const result = someMath(5, 5);

someLoopHOF([1, 2, 3, 4], someMath);
someLoopHOF([1, 2, 3, 4], 10);
