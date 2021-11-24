const coffeeMug = {
	color: "white",
	content: { coffee: 90, milk: 10 },
	material: "Ceramic",
	drink: function (amount) {
		for (let i = 0; i < amount; i++) {
			console.log("slurp");
		}
	},
};

const someFunction = function () {
	console.log("something");
};

coffeeMug.drink(20);

const someArray = [1, 2, 3];
someArray.push(4);
