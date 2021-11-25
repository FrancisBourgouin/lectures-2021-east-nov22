// What is a callback ?

// Functions that are defined on the fly
// A function that goes inside a function
// It can be called, or not

const sayTwice = function (something) {
	console.log(something);
	console.log(something);
};
const logToTheConsole = function (something) {
	console.log(something);
};
const someFunction = function () {
	sayTwice("Potato");
};

const someOtherFunction = function (action) {
	action("Wiggle wiggle");
};

const soniasCoolFunction = function (action1, action2) {
	action1("Action 1 content");
	action2("Action 2 content");
};

// someOtherFunction(sayTwice)
// someOtherFunction(logToTheConsole)

soniasCoolFunction(sayTwice, logToTheConsole);

const weirdConsoleLog = function (current, index, array, isPotato) {
	console.log(current, index, array, isPotato);
};

const list = [1, 2, 3, 4, 5, 6];

const coolForEach = function (arr, callback) {
	for (const index in arr) {
		callback(arr[index], index, arr);
	}
};

// coolForEach(list, logToTheConsole);
coolForEach(list, weirdConsoleLog);

const randomLife = function (action) {
	if (Math.random() > 0.4) {
		action("yes", 1);
	} else {
		action("no", 2);
	}
};
const bob = "yas";
const checkGrade = function (grade, subject, conditionCB) {
	if (conditionCB(grade, subject)) {
		console.log("Good job");
	} else {
		console.log("Bad job.");
	}
};

const checkArrowGrade = (grade, subject, conditionCB) => {
	if (conditionCB(grade, subject)) {
		console.log("Good job");
	} else {
		console.log("Bad job.");
	}
};

const chillParent = function () {
	return true;
};
const chillArrowParent = () => true;

const strictParent = function (grade, subject) {
	return !(grade < 98 && subject !== "english");
};

const strictArrowParent = (grade, subject) =>
	!(grade < 98 && subject !== "english");

checkGrade(90, "english", chillParent);
checkGrade(90, "math", strictParent);

const funArray = ["🍟", "🤖", "🍞"];

const coolLogConsoleThing = (something) => console.log(something);

funArray.forEach(logToTheConsole);

funArray.forEach(function (element) {
	console.log("The value is", element);
});

funArray.forEach((something) => console.log(something));

for (const value of [1, 2, 3]) {
}
