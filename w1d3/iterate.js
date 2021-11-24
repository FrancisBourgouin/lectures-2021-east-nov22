const coffeeMug = {
	color: "white",
	content: { coffee: 90, milk: 10 },
	material: "Ceramic",
};

const keysOfCoffeeMug = Object.keys(coffeeMug);
const valuesOfCoffeeMug = Object.values(coffeeMug);
const entriesOfCoffeeMug = Object.entries(coffeeMug);

// for (const value of entriesOfCoffeeMug) {
// 	console.log(value);
// }

// for..of, for the key of the array of keys (only arrays)
for (const currentKey of keysOfCoffeeMug) {
	console.log(coffeeMug[currentKey]);
}

// for..in, for the key in the object (objects & its descendents)
for (const currentKey in coffeeMug) {
	console.log(coffeeMug[currentKey]);
}
