const coffeeMug = {
	color: "white",
	content: { coffee: 90, milk: 10 },
	material: "Ceramic",
	drink: function (amount) {
		console.log(this); // console this function's context
		console.log(`I'm about to drink from my ${this.color} mug`);
		for (let i = 0; i < amount; i++) {
			console.log("slurp");
		}
	},
};

const otherCoffeeMug = {
	color: "black",
	content: { coffee: 90, milk: 10 },
	material: "Ceramic",
	drink: function (amount) {
		console.log(this); // console this function's context
		console.log(`I'm about to drink from my ${this.color} mug`);
		for (let i = 0; i < amount; i++) {
			console.log("slurp");
		}
	},
	transform: function (newColor) {
		this.color = newColor;
	},
	getCoffee: function () {
		return this.content;
	},
};

// this

otherCoffeeMug.drink(0);
otherCoffeeMug.transform("red");
otherCoffeeMug.drink(0);

// coffeeMug.drink(0);
// otherCoffeeMug.drink(0);

// const outsideDrink = function (amount) {
// 	console.log(this); // console this function's context
// 	console.log(`I'm about to drink from my ${this.color} mug`);
// 	for (let i = 0; i < amount; i++) {
// 		console.log("slurp");
// 	}
// };

// outsideDrink(0);
