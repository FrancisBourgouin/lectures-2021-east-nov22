// Functions, Arrays, Loops, Conditional

// Nested arrays

const someList = [1, 2, 3, 4];

someList[2];

for (const number of someList) {
	if (number === 3) {
		console.log(number);
	}
}

const veggies = ["potato", "pepper"];
const dairies = ["cheese curds", "milk"];

const groceryList = [veggies, dairies];

const groceryList = [
	["potato", "pepper"],
	["cheese curds", "milk"],
];

const veggieList = groceryList[0];
veggieList[0];

for (const veggie of veggieList) {
}

for (let i = 0; i < veggieList.length; i++) {
	const veggie = veggieList[i];
}
