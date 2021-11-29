const calculateCart = require("./shoppingCart");

const list = [
	{
		name: "bagel",
		price: 4.99,
	},
	{
		name: "chips",
		price: 1.99,
	},
	"peanut butter",
	{
		name: "radishes",
		price: 2.99,
	},
];

const QCTAX = 0.14975;

const result = calculateCart(list, QCTAX);

console.log(result);
